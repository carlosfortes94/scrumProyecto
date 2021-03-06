var conexionServidor = {
	consultaHTTP: false,
	
 operacionBDTerminado: function(tarea){
        conexionServidor.callback(tarea);
 },
	
	solicitarDatosBD: function(tarea, callback){
			this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", tarea, callback);
	},
	
	solicitarAddTareaBD: function(tarea, callback){
    this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", tarea, callback);
 }, 
	
	solicitarEliminacionBD: function(id_tarea, callback){
		this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", {id: id_tarea, b2: "borrar"}, callback);
	},
	
	solicitarCambiarEstadoBD: function(estado, callback){
		this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", estado, callback);
	},
	
	solicitarCargarTareasBD: function(callback){
		this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", {r2: "cargarTareas"}, callback);
	},
	realizarConsultaHTTP: function(url, tarea, callback){
        this.consultaHTTP = false;
        this.callback = callback;
		
        if (window.XMLHttpRequest){
            this.consultaHTTP = new XMLHttpRequest();
            if (this.consultaHTTP.overrideMimeType){
                this.consultaHTTP.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject){
            try {
                this.consultaHTTP = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){}
            }
             if (!this.consultaHTTP){
            alert('No es posible crear una instancia XMLHTTP');
            return false;
        }
		
        this.consultaHTTP.onreadystatechange = conexionServidor.recepcionHTTP;
        this.consultaHTTP.open('POST',url,true);
								this.consultaHTTP.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        this.consultaHTTP.send(JSON.stringify(tarea));
    },
	
    recepcionHTTP: function(){
        if (conexionServidor.consultaHTTP.readyState === 4){
            if (conexionServidor.consultaHTTP.status === 200){
                conexionServidor.operacionBDTerminado(JSON.parse(conexionServidor.consultaHTTP.responseText));
            } else {
                alert('Hubo problemas con la petición.');
            }
        }
    }
};
