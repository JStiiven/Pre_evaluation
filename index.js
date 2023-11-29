function ejercicio(nombre, estrato, sisben, edadMayor) {
    if (estrato <= 2 && estrato >= 1 && sisben
        <= 2 && sisben >= 1 && edadMayor >= 18) {
        console.log(`${nombre} usted tiene derecho a un subsidio mensual en efectivo`);
    } else {
        console.log(`${nombre} no tiene derecho a un subsidio mensual en efectivo porque no cumple algunos de los requisitos`);
    }
}
let nombreUsuario = prompt("Digite su nombre")
let estratoUsuario = parseInt(prompt("¿Cual es su estrato Socio-economico? \n(De un rango de 1 a 6)"))
let sisbenUsuario = parseInt(prompt("¿Cual es su nivel de Sisben?\n(De un rango de 1 a 4)"))
let edadUsuario = parseInt(prompt("Digite su edad"))
ejercicio(nombreUsuario, estratoUsuario, sisbenUsuario, edadUsuario)