// Created by Roni Salman

let active=false;

function init(){
	menuClick();
}

function menuClick(){
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
		dropdown();
	});	
}

function dropdown(){
	const dropdown=document.querySelector(".dropdown");
	if(active===true){
		dropdown.classList.add("dropdownShown");
	}
	else{
		dropdown.classList.remove("dropdownShown");
	}
}

init();