// From flash-message.js 
import flashMessage from './modules/flash-message';
flashMessage(message); // We can use flashMessage as a variable now


// Import multiple functions
import { alertMessage, logMessage } from './modules/flash-message';


// We can use the '* as from' to import all the funcs from flash-message as methods
import * as flash from './modules/flash-message';
flash.alertMessage('message');
flash.logMessage('message');


// Import constants
import { MAX_USERS, MAX_REPLIES } from './modules/constants';


// Import the FlashMessage class from './modules/flash-message'
import FlashMessage from './modules/flash-message';

let flash = new FlashMessage('Hello');
flash.renderAlert();
flash.renderLog();



// Import named exports
import { FlashMessage } from './modules/flash-message'; // Names of the export and the import must match