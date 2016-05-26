var logicaTarea = {
	nombres_tarea : [],
	nombres_historias: [],
	
	callbackNuevaTarea: function(tarea, creacionDivTarea){
		this.creacionDivTarea = creacionDivTarea;

		for (var i=0;this.nombres_tarea.length;i++){
			if (tarea.nombre === this.nombres_tarea[i]){
				var error = "La tarea ya existe";
				this.creacionDivTarea(tarea);
				return;
			}
		}
		//ejecutar paso 3
		conexionServidor.solicitarAddTareaBD(tarea, logicaTarea.addTareaTerminada);
	}, 

	addTareaTerminada: function(tarea){
		if (typeof(tarea.error) == "undefined"){
			logicaTarea.nombres_tarea.push(tarea);
			logicaTarea.creacionDivTarea(tarea);
		} else {}
	},

	recogerDatosBD: function(tarea, callback){
		this.callback = callback;

		conexionServidor.solicitarDatosBD(tarea, logicaTarea.recogerDatosBDTerminado);
	},
recogerDatosBDTerminado: function(tarea){
	logicaTarea.callback(tarea);
},
	
	buscarIdEnBD: function(id_tarea, callback){
		this.callback = callback;

		conexionServidor.solicitarEliminacionBD(id_tarea, eliminarTarea.borrarTarea);
	},


	/*intentarLlamarHistorias: function(){
		conexionServidor.callbackLlamarHistorias(logicaTarea.RecogerDatosHistoriasBD);
		conexionServidor.solicitarHistorias({r:"historias"});
	},*/

	cargarDatosHistoriaBD: function(nombres_historias){
		if (nombres_historias.hasOwnProperty("r")){
			for (var nombre in nombres.h){
				logicaTarea.nombres_historias.push(nombres_historias.h[nombre]);
			}
		}
	},
	
	solicitarCambiarEstado: function(estado, callback){
		this.callback = callback;
		
		conexionServidor.solicitarCambiarEstadoBD(estado, logicaTarea.solicitarCambiarEstadoTerminado);
},

	solicitarCambiarEstadoTerminado: function(estado){
		logicaTarea.callback(estado);
},
	
	solicitarCargarTareas: function(callback){
		this.callback = callback;
		
		conexionServidor.solicitarCargarTareasBD(logicaTarea.solicitarCargarTareasTerminado);
	},
	
	solicitarCargarTareasTerminado(tareas){
		logicaTarea.callback(tareas);
	},
	
subidaDatosArray: function(modo, id){
	if (modo == 1){
		logicaTarea.nombres_tarea.push(id);
	} else if (modo == 2){
		logicaTarea.nombres_historias(id);
	}
}
};
