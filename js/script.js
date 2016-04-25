var emptyList = function(){
	$('ul').empty();
};


var btn = $('button');
btn.click(function() {
	var name = $('#input').val();
	console.log(name);
	var url = 'http://pokeapi.co/api/v2/pokemon/' + name;
	$.get(url, function(data) {
		emptyList();
		console.log(data);
		var types = data.types;  //array of all of the types of pokemon
		for(var x = 0; x < types.length; x++) {  //loop for checking index of type array, and counting up
			var silly = types[x];
			var typeName = silly.type.name;
			console.log(typeName);
			$('.types').append('<li>'+typeName +'</li>');
		}
	});
});
