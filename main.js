setTimeout(function(){
window.location = "404.html";

 }, 100000);
function pr(){

					document.getElementById('status').innerHTML="Status.Validating";
					document.getElementById('sc').style.visibility = "visible";

	setTimeout(function(){
	var a = document.getElementById('name').value;

	if (a=="987654321") {
				document.getElementById('ll').style.color="#00dd22";
				document.getElementById('name').style.borderColor="#00dd22";
				document.getElementById('hj').style.color="#00dd22";
				document.getElementById('status').innerHTML="Status.Success";
				document.getElementById('hhhh').innerHTML='<i class="fa fa-unlock-alt" id = "ll" style = "color:#00dd22;"></i>';
					document.getElementById('sc').style.visibility = "hidden";
					document.getElementById('ll').style.boxShadow  = "none";

		document.getElementById('ll').style.backgroundColor="#f0fff0";
		document.getElementById('hh').style.visibility = "visible";

		setTimeout(function(){
document.getElementById('ta').style.visibility = "visible";

  }, 500);

				setTimeout(function(){
  window.location="http://pro-co.000webhostapp.com/";
  }, 6500);
return true;
	}
	else {

				document.getElementById('status').innerHTML="Status.Invalid";

				document.getElementById('ll').style.color="red";
			 document.getElementById("ll").style.animationPlayState = "running";
document.getElementById('name').style.borderColor="red";
				document.getElementById('hj').style.color="red";
					document.getElementById('sc').style.visibility = "hidden";
					document.getElementById('ll').style.boxShadow  = "none";


				setTimeout(function(){

		location.reload()

			  


			  }, 2500);  
return false;

}
 }, 3000);
}
