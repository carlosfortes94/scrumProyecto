var logicaBacklog = {
	historias: [],
    
    intentarCargarHistoria: function(){
        
        servidorBacklog.solicitarAccionEnBD({r:"historias"} ,logicaBacklog.cargarArray);
    },
    
    cargarArray: function(historias){
        
        if (historias.hasOwnProperty("r")){
            for(var historia in historias.r){
                logicaBacklog.historias.push(historias.r[historia]);
            }
        }
        
        nuevaHistoria.ventana.iniciarHistorias(historias);
             
    },
	enviarHistoria: function(historia, callback){
		this.callback = callback;
		for (var i=0; i<this.historias.length; i++){
			if(historia.nombre == this.historias[i].nombre){
				var error = "La historia ya existe";
				historia.error = error;
				this.callback(historia);
				return;
			}
			
		}
		servidorBacklog.solicitarAccionEnBD(historia, logicaBacklog.enviarHistoriaTerminado);
		
	},
    
    borrarHistoria: function(historia, callback){
        this.callback = callback;
        servidorBacklog.solicitarAccionEnBD(historia, logicaBacklog.enviarHistoriaTerminado);
    },
    
	enviarHistoriaTerminado: function(historia){
		
		logicaBacklog.callback(historia);
		
	}
    
};

