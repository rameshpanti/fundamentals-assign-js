function calcCircleArea(r) {
	
	return r*r*Math.PI;
}

document.getElementById("r1").innerHTML = "r = 7; area ="+""+ calcCircleArea(7);
document.getElementById("r2").innerHTML = "r = 7; area ="+""+ calcCircleArea(1.5);
document.getElementById("r3").innerHTML = "r = 7; area ="+""+ calcCircleArea(22);