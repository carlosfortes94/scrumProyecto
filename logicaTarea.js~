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

	recogerDatosBD: function(callback){
		this.callback = callback;

		conexionServidor.solicitarDatosBD(modificarTarea.mostrarVentanaModificacion);
	},

	buscarIdEnBD: function(id_tarea, callback){
		this.callback = callback;

		conexionServidor.solicitarEliminacionBD(id_tarea, eliminarTarea.borrarTarea);
	},


	intentarLlamarHistorias: function(){
		conexionServidor.callbackLlamarHistorias(logicaTarea.RecogerDatosHistoriasBD);
		conexionServidor.solicitarHistorias({r:"historias"});
	},

	cargarDatosHistoriaBD: function(nombres_historias){
		if (nombres_historias.hasOwnProperty("r")){
			for (var nombre in nombres.h){
				logicaTarea.nombres_historias.push(nombres_historias.h[nombre]);
			}
		}
	},
	
	solicitarCambiarEstado: function(modo){
	
}
};
