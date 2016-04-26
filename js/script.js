var emptyList = function(){ //assigning function
	$('ul').empty(); // selecting all ul items, deletes all children of swelected element
};


var btn = $('button'); // assigned a variable to jquery selector
btn.click(function() { // .click event listener
	var pokemonName = $('#input').val(); // name has value of #input element. once clicked search 
	
	//console.log(name);
	var url = 'http://pokeapi.co/api/v2/pokemon/' + pokemonName; //concatinating adding name to end of URL
	$.get(url, function(data) { //jquery shorthhand of ajax request (just getting from api) , callback function -- whatever happens
		emptyList(); // calling empy list from begginninh
		//console.log(data); WE HAVE GOTTEN A RESPONSE
		var types = data.types;  //an array of objects of all of the types of pokemon dot notation referrenciing the property of data object
		for(var x = 0; x < types.length; x++) {  //loop for checking index of type array, and counting up
			var silly = types[x]; //silly is an object 
			var typeName = silly.type.name; //silly = object type = object name = property 
			//console.log(typeName);
			$('ul').append('<li>' + typeName + '</li>'); //displaying the typeName
		}
	})
	.fail(function() {
		emptyList(); // calling empy list from begginninh
		$('ul').append('<li>Make sure the pokemon name is spelled correctly, and everything is lowercase.</li>');
	});
});
