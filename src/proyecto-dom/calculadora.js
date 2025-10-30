suma = (op1,op2) => (Number(op1) + Number(op2)).toString()
resta = (op1,op2) => (Number(op1) - Number(op2)).toString()
operacion= (op1, op2, operacion) => operacion(op1,op2)


class Calculadora {
    element = null
    display = new Display()
    botonera = new Botonera([
            ['0','1','2','3','4','5','6','7','8','9'],
            ['+','-','='],
            ['AC','C']
        ],(action) => this.dispatch(action))
    botoneraCientifica = new Botonera([['sin','cos']],(action) => this.dispatch(action))
    estado = {
        value: '0',
        history: '0',
        operation: ''
    }

    setEstado(estado, valor){
        console.log(estado)
        switch(true) {
            case /^\d$/.test(valor): return {...estado, value: estado.value === '0' ? valor : `${estado.value}${valor}`}
            case valor === '-': return {history: estado.history !=='0' ? resta(estado.history, estado.value) : estado.value, value: '0', operation: resta}
            case valor === '+': return {history: estado.history !=='0' ? suma(estado.history, estado.value) : estado.value, value: '0', operation: suma}
            case valor === '=': return {history: '0', value: operacion(estado.history, estado.value, estado.operation), operation: ''}
    
            // default: return {...estado, display: }
        }

    }

    on = new Boton('on',(action) => this.dispatch(action))

    constructor(selector) {
        this.element = document.getElementById(selector)
        this.element.innerHTML = ''
        this.render()
    }

    render = () => {
        this.element.append(this.display.render())
        this.element.append(this.botonera.render())
        this.element.append(this.botoneraCientifica.render())
        this.element.append(this.on.render())
        return this.element
    }

    dispatch(action) {
        this.estado = this.setEstado(this.estado, action)
        this.display.set(this.estado)
    }

}

class Display {
    elememt = null
    state = {
        history:'0',
        value:'0'  
    }
  
    render = () => {
        this.element = document.createElement('section')
        this.element.classList.add('display')
        this.history = document.createElement('div')
        this.history.setAttribute('id', 'history')
        this.history.classList.add('history')
        this.value = document.createElement('div')
        this.value.setAttribute('id', 'value')
        this.value.classList.add('value')
        this.element.setAttribute('id','display')
        this.element.append(this.history)
        this.element.append(this.value)
        this.set(this.state)
        return this.element
    }
    set = (state) => {
        this.state = state
        this.value.innerHTML = this.state.value
        this.history.innerHTML = this.state.history
    }
}

class Botonera {
    element = null
    buildButtons = (buttons) => buttons.map(bloque => bloque.map(b => new Boton(b, (action) => this.dispatch(action))))

    constructor(buttons, dispatch) {
       this.dispatch = dispatch
       this.botones = this.buildButtons(buttons)
    }
 


    render = () => {
        this.element = document.createElement('div')
        this.element.classList.add('keypad')
        this.botones.map(
            c => {
                const bloque = document.createElement('span')
                c.map(b => bloque.append(b.render()))
                this.element.append(bloque)
            }   
        )
        return this.element
    }

}
class Boton {
    value = ''
    element = null;
    // dipatch
    
    constructor(value, dispatch) {
        this.dispatch = dispatch
        this.value = value
    }
    
    render = () => {
        this.element = document.createElement('button')
        this.element.classList.add('btn')
        this.element.innerHTML = this.value
        this.element.addEventListener('click',(e) => this.pulsar())
        return this.element
    }  

    pulsar() {
        this.dispatch(this.value)
    }

}


new Calculadora('calculadora')

// new Calculadora('calculadora2')

