const express = require('express');
const app = express();
const PORT = 3000;


const EventEmitter = require('events');




const emisor = new EventEmitter()

emisor.on('login', (user)=> console.log(user))
emisor.emit('login',{name:'David'})


class MiError extends Error{

 constructor(message,...params){
   console.log(params);
   super(message)
 }

}



app.get('/', (req, res) => {
  emisor.emit(req)
  res.send('Servidor Express funcionando ✅');

});


app.get('/error', (req, res) => {

    try{
      let divisor = 0;
      if (divisor === 0) {
        throw new MiError("División por cero no permitida", 1,2,32,4,4,4);
      }
      let a = 1 / divisor;
      res.send(a)
    } catch (error) {
        console.log(error)
        res.status(500).send("hubo un error en el servidor")
    } finally {
      console.log("Esto siempre se ejecuta");
    }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



const app2 = express()

app2.get('/', (req, res) => {
  res.send('Servidor secundario Express funcionando ✅');
});

app2.listen(3001,() => console.log('otro servicio escuchando en el 3001'))