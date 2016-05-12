var logicaBacklog = {
	historias: [],
	enviarHistoria: function(historia, callback){
		this.callback = callback;
		for (var i=0; i<this.historias.length; i++){
			if(historia.nombre == this.historias[i].nombre){
				//var error = {error: "La historia ya existe"};
				//nuevaHistoria.ventana.mensajeError();
				return;
			}
			
		}
		servidorBacklog.solicitarAccionEnBD(historia);
		// Comprobar que no existe en el array
		// Si existe -> error 
		// Devolver {error: "...."};
		// Si no existe,
		// Intentar insertar en BD.
	},
	enviarHistoriaTerminado: function(historia){
		// historia : {error: "..."} // {id: .., nombre: ..., }
		// si es un error se lo paso a la vista llamando a la vista mediante un callback
		// Si es correcta la historia: LogicaBacklog.historias.push(historia)
		// LogicaBacklog.callback(historia)
	}


};


