// Example function that returns promise with non-blocking code
function getPollResultsFromServer(pollName){
	return new Promise(function(resolve, reject){
		let url = `results/${pollName}`;
		let request = new XMLHttpRequest();

		request.open('GET', url, true);
		request.onload = function(){
			if (request.status >= 200 && request.status < 400) {
				resolve(JSON.parse(request.response));
			} else {
				reject(new Error(request.status));
			}
		}
		request.send();
		request.onerror = function(){
			reject(new Error('Error fetching results'));
		};
	});
}

// Then we can chain results:
getPollResultsFromServer('Sass vs. LESS')
	.then(function(results){
		ui.renderSidebar(results);
	});


// We can pass different args to the .then method
getPollResultsFromServer('Sass vs. LESS')
	.then(function(results){
		return results.filter((result) => result.city === 'Orlando'); // The value returned
	})
	.then(function(resultsFromOrlando){ // Becomes the argument for the next one
		ui.renderSidebar(resultsFromOrlando);
	})
	.catch(function(error){
		console.log(`Error: ${error}`);
	});



// It is possible to pass functions as arguments:
function filterResults(results){
	return results.filter((result) => result.city === 'Orlando'); // The value returned
}
let ui = {
	renderSidebar(filteredResults);
};

getPollResultsFromServer('Sass vs. LESS')
	.then(filterResults)
	.then(ui.renderSidebar) // The result from the promise are being passed to the func
	.catch(function(error){
		console.log(`Error: ${error}`);
	});



