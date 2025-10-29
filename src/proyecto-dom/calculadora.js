class Calculadora {
    element = null
    display = new Display()
    botonera = new Botonera()
    estado = {}


    constructor(selector) {
        this.element = document.getElementById(selector)
        this.element.innerHTML = ''
        this.render()
        this.display.set(0)
    }

    render = () => {
        this.element.append(this.display.render())
        this.element.append(this.botonera.render())
        return this.element
    }

}

class Display {
    elememt = null
    history = null
    value   = null
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
        return this.element
    }
    set = (value) => this.value.innerHTML = value
}

class Botonera {
    element = null


    constructor() {
        this.buildButtons()
    }
 
    buildButtons() {
       this.botones = [
            ['0','1','2','3','4','5','6','7','8','9'].map(b => new Boton(b, this.dispatch)),
            ['+','-','='].map(b => new Boton(b, this.dispatch))
        ]
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

    dispatch = (action) => {
        console.log(action)
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


