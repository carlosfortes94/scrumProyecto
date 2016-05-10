var sprint12= {
        getSprint: {
 
            init: function(descripcion){
     
                var tarea = "";
              
                    tarea = " <p>"+descripcion+"</p>";
                    var tareaCreada = document.createElement("div");
                    tareaCreada.setAttribute("draggable","true");
                    tareaCreada.innerHTML = tarea;
                    return tareaCreada;
 }
     
 }
 };

