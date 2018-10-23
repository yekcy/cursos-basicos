function validar()
 {
	var estaTodoOK = true;
	if (document.getElementById("nombre").value.length<4)
	{
		estaTodoOK = false;	
	}
	
	if (document.getElementById("asunto").value.length<6)
	{
		estaTodoOK = false;	
	}
	
	if (document.getElementById("mensaje").value.length<18)
	{
		estaTodoOK = false;	
	}
	
	if (!estaTodoOK)
	{
		alert("Algunos datos tienen errores, por favor corríjalos y vuelva a enviarlos");	
	}
	if (estaTodoOK == true)
	 {
	   if (confirm("Esta seguro de enviar los datos??"))
	     alert("Los datos se enviaron correctamente");
	   else 
	     estaTodoOK = false;
	 }
  return estaTodoOK;
}