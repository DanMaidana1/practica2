function saludar(nombre){
    return "Hola " + nombre
}
//console.log(saludar('Matias'))
let saludo = (nombre = "Eric") => "Hola " + nombre;
//console.log(saludo('Jeanette'))