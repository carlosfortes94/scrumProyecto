var conexionServidor = {
    consultaHTTP: false,
    callbackTareaBD: function(addTareaTerminada){
        this.addTareaTerminada = addTareaTerminada;
    },
    solicitarAddTareaBD: function(objetoDatos){
        
        this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php", objetoDatos);
    }, 
    realizarConsultaHTTP: function(url, datos){
        this.consultaHTTP = false;
        
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
       
    }
};

