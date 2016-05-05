 var historia12= {
        getHistoria: {
 
            init: function(nombre,etiqueta,descipcion,valor){
     
                var historia = "";
              
                    historia = " <ul>" +
                               "    <li class='etiqueta_historia'>" + etiqueta + "</li>" +
                               "    <li class='nombre_historia'>" + nombre + "</li>" +
                               " </ul>" +
                               " <span class='valor_historia' title='Valor de negocio'>" + valor + "</span>" +
                               " <button class='btn_detalles_historia' >Mostrar detalles</button><button class='btn_borrar_historia'>Borrar historia</button>";
                    var historiaCreada = document.createElement("div");
                    historiaCreada.setAttribute("draggable","true");
                    historiaCreada.setAttribute("id",this.nombre);
                    historiaCreada.innerHTML = historia;
                    return historiaCreada;
 }
     
 }
 };
              
