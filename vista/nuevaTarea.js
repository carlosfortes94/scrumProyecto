var nuevaTarea = {
                /*NO LO TOQUES, QUE FUNCIONA, DIGAN LO QUE DIGAN NO LO TOQUES */
                init: function (){
                    var nueva_tarea = document.getElementById("nueva_tarea");
                    nueva_tarea.addEventListener("click",function(){


			nuevaTarea.ventana.limpiarFields();
			nuevaTarea.ventana.titulo();
                        nuevaTarea.ventana.mostrar();                        
                    });
                    var cancelar_tarea = document.getElementById("cancelar");
                    cancelar_tarea.addEventListener("click",function(){
                        nuevaTarea.ventana.ocultar();
                    });
                    var enviar_tarea = document.getElementById("enviar");
                    enviar_tarea.addEventListener("click", function(){

			tareaIn.validacionDatos.recogidaDatos();

                        nuevaTarea.ventana.ocultar();

                    });
                },
               /* ESTO TODAVÍA NO SÉ NI LO QUE ES, HACE FALTA SI LLEVAS BASE DE DATOS????
                    init: function(id, nombre, descripcion, coste, prioridad){
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.coste = coste;
                    this.prioridad = prioridad;
                },*/
                ventana: {
                    
                    mostrar: function(){
                        document.getElementById("ventanaTarea").style.display = 'block';
                        document.getElementById("fadebox").style.display = 'block';
                    },
                    
                    ocultar: function(){
                        document.getElementById("ventanaTarea").style.display = 'none';
                        document.getElementById("fadebox").style.display = 'none';
                    },
                    
                    titulo: function(){
                        var titulo_nuevaTarea = document.getElementById("titulo_tarea");
                        titulo_nuevaTarea.innerHTML = "Añadir tarea a ";//aqui va la llamada al id de la historia
		    },

		    limpiarFields: function(){
			document.getElementById("nombre_tarea").value = "";
			document.getElementById("descripcion_tarea").value = "";
			document.getElementById("coste_estimado").value = "";
			document.getElementById("prioridad").value = "";
		    }
		}
};

