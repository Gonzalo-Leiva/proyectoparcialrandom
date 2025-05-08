const funciones = [
    {
        name: "suma",
        value: (a, b) => a + b
    },
    {
        name: "resta",
        value: (a, b) => a - b
    },
    {
        name: "multiplicacion",
        value: (a, b) => a * b
    },
    {
        name: "division",
        value: (a, b) => {
            if (b === 0) throw new Error("No se puede dividir por cero");
            return a / b;
        }
    },
    {
        name: "resto",
        value: (a, b) => {
            if (b === 0) throw new Error("No se puede calcular el resto con divisor cero");
            return a % b;
        }
    }
];




module.exports = funciones

