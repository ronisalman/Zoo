// Created by Roni Salman

function init(){
	menuClick();
}

function menuClick(){
	let active=false;
	const menu=document.querySelector("#menu");
	const layer=document.querySelectorAll(".layer");
	menu.addEventListener("click",function(){
		if(active===false){
			for(let i=0;i<layer.length;i++){
				layer[i].classList.remove("menuUnclicked");
				layer[i].classList.add("menuClicked");
			}
			active=true;
		}
		else{
			for(let i=0;i<layer.length;i++){
				layer[i].classList.add("menuUnclicked");
			}
			active=false;
		}

	});	
}

init();