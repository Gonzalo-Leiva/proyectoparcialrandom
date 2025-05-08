const express = require('express');
const funciones = require('./cuentas.js');
const app = express();

app.use(express.json())

app.post("/operaciones",(req,res) => {
    try{
        const resul = req.body.map(e=>{
            const func = funciones.find((o) => o.name == e.fn);
            if(!func)throw new Error("Operacion no soportada!!!");
            return {...e,resultado: func.value(e.op1,e.op2)};
        });
        res.status(201).json(resul)
    }catch(e){
        res.status(500).json({mensaje: e.message});
    }
})
app.listen(5000,() => {
    console.log("app iniciada.");
})