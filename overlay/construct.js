if(document.getElementById('thundertick-overlay') == null){
	var d = document.createElement("div");
	d.id = "thundertick-overlay"
	d.style.top = "0px"
	d.style.left = "0px;"
	d.style.position = "fixed";
	d.style.background = "black";
	d.style.width = "100%";
	d.style.height = window.innerHeight + "px";
	d.style.minHeight= "100%";
	d.style.zIndex = "100000";
	d.style.display = "flex";
	d.style.alignItems = "center";
	d.style.justifyContent = "center";
	d.style.opacity = "0.8";

	var text = document.createElement('div');
	text.innerText = "ThunderTick"
	text.style.fontSize = "40px";
	text.style.color = "white";
	text.style.fontFamily ="Arial, Helvetica, sans-serif";

	d.appendChild(text);
	document.body.appendChild(d);
}