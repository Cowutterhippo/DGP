$(document).ready(function(){
	$('#say_grandpa').submit(function(event){ //form submit event handler
		event.preventDefault(); //prevents default which would reload page
		//post form to server, get data back
		$.post( "/", $( "#say_grandpa" ).serialize(), function(data){
			if (data === data.toUpperCase()){
				console.log(data)
			} else {
				console.log("I cant hear you motha fucka")
			}

			$.ajax({
					method: "POST",
					url: "{% url index %}",
					dataType: "jsonp",
					success:function(said){
						console.log(said)
						$('.grandpa').append(said.Title)
					}
				})
		});

	});
});
