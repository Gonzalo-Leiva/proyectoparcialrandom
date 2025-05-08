const express = require('express');
const funciones = require('./cuentas.js');
const app = express();

// Middleware para poder leer datos JSON o de formularios
app.use(express.json());

app.post('/datos', (req, res) => {
    const {op1,op2,fn} = req.body;
    const bandera = funciones.find((element) => element.name===fn)
     try {
        if (!bandera) {
            throw new Error('Operación no válida');
        }
        const resultado = bandera.value(op1,op2);
        res.json({ resultado, bandera });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});