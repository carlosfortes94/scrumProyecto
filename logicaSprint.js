var logicaSprint = {
	sprints: [],
	enviarHistoria: function(sprint, callback){
		this.callback = callback;
		for (var i=0; i<this.sprints.length; i++){
			if(sprint.id == this.sprints[i].id){
				var error = "El sprint ya existe";
				sprint.error = error;
				this.callback(sprint);
				return;
			}
			
		}
		//servidorSprint.solicitarAccionEnBD(sprint, logicaSprint.enviarSprintTerminado);
		
	},
	enviarSprintTerminado: function(sprint){
		
		logicaSprint.callback(sprint);
		
	}


};


