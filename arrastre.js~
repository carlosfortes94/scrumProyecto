var arrastre = {
		init: function(){
				var tareas = document.querySelectorAll("[draggable]");
				var estados = document.querySelectorAll(".dropzone");
			
				for (var i=0;i<tareas.length;i++){
						tareas[i].addEventListener("dragstart", ondragstartHandler);
						
				}
				
				for (var i=0;i<estados.length;i++){
						estados[i].addEventListener("dragenter", ondragenterHandler);
						estados[i].addEventListener("dragover", ondragoverHandler);
						estados[i].addEventListener("dragleave", ondragleaveHandler);
						estados[i].addEventListener("drop", ondropHandler);
				}
		}
};

function ondragstartHandler(e){
			var id = e.target.getAttribute("id");
			console.log("dragstart->"  + id);
			e.dataTransfer.setData("boxId",id);
	
}

function ondragenterHandler(e){
		var id = e.target.getAttribute("id");
		console.log("dragenter->"  + id); 
}

function ondragoverHandler(e){
		var id = e.target.getAttribute("id");
		console.log("dragover->"  + id); 
		e.preventDefault();	
}

function ondragleaveHandler(e){
		this.setAttribute("class","dropzone");
}

function ondropHandler(e){
		var id = e.target.getAttribute("id");
		console.log("ondrop->"  + id); 
		e.preventDefault();
		var boxId = e.dataTransfer.getData("boxId");
		var box = document.getElementById(boxId);
		this.appendChild(box);
		this.setAttribute("class","dropzone");
		
		var estado;
	
		if (id == "por_hacer"){
				console.log(1);
				estado = 1;
				logicaTarea.solicitarCambiarEstado(estado);
		} else if (id == "en_proceso"){
				console.log(2);
				estado = 2;
				logicaTarea.solicitarCambiarEstado(estado, id);
		} else if (id == "terminado"){
				console.log(3);
				estado = 3;
				logicaTarea.solicitarCambiarEstado(estado, id);
		} else if (id == "por_terminar"){
				console.log(4);
				estado = 4;
				logicaTarea.solicitarCambiarEstado(estado, id);
		}
}
