function gotohero(){
	fetch('session_stores.php')
		.then(response =>response.text())
		.then(data=>{
			if(data.check){
				window.location.href="hero.html";
				console.log("true is printed");
			}else{
				window.location.href="index.php";
				console.log("false is printed");
			}
		})
}