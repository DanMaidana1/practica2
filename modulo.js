
module.exports = calculadora = {
    suma : function (num1, num2){
        return num1 + num2;
    },
    resta : function (num1, num2){
        return num1 - num2;
    },
    multiplicacion : function (num1, num2){
        return num1 + num2;
    },
    div : function (num1, num2){
        return num1 / num2;
    },
    operacion : function (num1, num2, op){
        return op(num1, num2)
    }
}