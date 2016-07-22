$(document).ready(function(){
	$('#say_grandpa').submit(function(event){ //form submit event handler
		event.preventDefault(); //prevents default which would reload page
		//post form to server, get data back
		$.post( "/", $( "#say_grandpa" ).serialize(), function(data){

			$.ajax({
					method: "POST",
					url: 'http://127.0.0.1:8000',
					dataType: "jsonp",
					// add in data: XXX
					success:function(result){
						console.log('hi')
						$('.grandpa').append(result.x)
					}
				})
		});

	});
});
