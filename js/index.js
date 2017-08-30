/*

var diaSemana = prompt("Dime un día").toLowerCase()

switch (diaSemana){
	case "lunes":
		console.log("hoy es día hábil")
		break
	case "martes":
		console.log("hoy es día hábil")
		break
	case "miercoles":
		console.log("hoy es día hábil")
		break
	case "jueves":
		console.log("hoy es día hábil")
		break
	case "viernes":
		console.log("hoy es día hábil")
		break
	case "sabado" :
	
	case "domingo" :
		console.log("hoy es fin de semana")
		break
	default:
		console.log(" ")
		break
}
*/


var diaSemana = prompt("Dime un día").toLowerCase()
var array = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

for (var i=0; i < array.length; i++){
	if (diaSemana === array[0]) {
	console.log ("hoy es día hábil")
	}else if (diaSemana === array[1]) {
	console.log ("hoy es día hábil")
	}else if (diaSemana === array[2]) {
	console.log ("hoy es día hábil")
	}else if (diaSemana === array[3]) {
	console.log ("hoy es día hábil")
	}else if (diaSemana === array[4]) {
	console.log ("hoy es día hábil")
	}else if (diaSemana === array[5]) {
	console.log ("hoy es fin de semana")
	}else if (diaSemana === array[6]) {
	console.log ("hoy es fin de semana")
	}else 
	console.log (" ")
}

var element= array[i]