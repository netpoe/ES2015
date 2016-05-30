// Example of exporting a default function from library, see app.js
export default function flashMessage(message){
 alert(message);
}

// We can decalre provate functions:
function privateFunction(){
	// That will be used only on this file
}


// We can remove the 'default' keyword to export various functions:
export function alertMessage(message){
	alert(message);
}

export function logMessage(message){
	console.log(message);
}


// We can simplify the export by doing:
function alertMessage(message){
	alert(message);
}

function logMessage(message){
	console.log(message);
}

export { alertMessage, logMessage }



// We can also export entire classes
export default class FlashMessage { // The 'default' keyword allows naming the variable whatever we want when imported
	
	constructor(message){
		this.message = message;
	}

	renderAlert(){
		alert(`${this.message} from alert.`);
	}

	renderLog(){
		console.log(`${this.message} from log.`);
	}

}


// We can also use named exports
class FlashMessage { // The 'default' keyword allows naming the variable whatever we want when imported
	
	constructor(message){
		this.message = message;
	}

	renderAlert(){
		alert(`${this.message} from alert.`);
	}

	renderLog(){
		console.log(`${this.message} from log.`);
	}

}

export { FlashMessage }



















