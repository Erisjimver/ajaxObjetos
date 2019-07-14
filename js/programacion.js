
$(document).ready(function() {

	$("#login").submit(function(){
		
		/*var datosFormulario={usuario:$("#usuario").val(),
		                     contra:$("#contra").val()}	*/
							 
		var datosFormulario=$(this).serialize();
							 
		$.getJSON("login2.php", datosFormulario, procesarDatos);
		
		return false;
		//preventDefault();
		
		
	});
	
	function procesarDatos(datos_devueltos){		
		
		
		//$("#contenidos_externos").html("<p>"+datos_devueltos.Edad+"</p>");	
		var informacion="<p>Nombre: "+datos_devueltos.Nombre+"</p>";

		informacion+="<p>Apellido: "+datos_devueltos.Apellido+"</p>";	

		informacion+="<p>Edad: "+datos_devueltos.Edad+"</p>";

		$("#contenidos_externos").html(informacion);	

	}
	
				
});