'use strict';

// Classes
// Before classes, we used constructor functions
function SponsorWidget(name, description, url){
	this.name 				= name;
	this.description 	= description;
	this.url 					= url;
}

SponsorWidget.prototype.render = function(){
	//..
};

let sponsorWidget = new SponsorWidget('Brand', 'description', 'http://..');
sponsorWidget.render();

// The new approach: 
class SponsorWidget {

	constructor(name, description, url){
		this.name 				= name;
		this.description 	= description;
		this.url 					= url;
	}

	render(){
		let link = this._buildLink(this.url);
		//...
	}

	_buildLink(url){ // Underscores indicate private methods that must be used only inside the class not in the public API
		//...
	}

}
let sponsorWidget = new SponsorWidget('Brand', 'description', 'http://..');
sponsorWidget.render();



// Classes use the new extend keyword
class Widget {

	constructor(){
		this.baseCSS = 'site-widget';
	}

	parse(value){
		//...
	}

}

class SponsorWidget extends Widget {

	constructor(name, description, url){
		super(name, description, url);					// super(); MUST be included to inherit methods and properties
																						// we can pass the sub class params to the super class 

		this.name = name;
	}

	render(){
		let parsedName = this.parse(this.name); // inherit methods and properties from Widgets class
		let css = this._buildCSS(this.baseCSS); // inherit methods and properties from Widgets class
	}

	parse(){
		let parsedName = super.parse(this.name); // Using the super keyword to call the parent class methods
	}

	_buildCSS(css){
		//...
	}

}












