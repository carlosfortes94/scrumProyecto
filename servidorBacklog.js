var servidorBacklog = {

	solicitarAccionEnBD: function(objetoHistoria, callback){
          this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php",objetoHistoria, callback);
    },
    
    operacionEnBDTerminado: function(objetoHistoria){
           servidorBacklog.callback(objetoHistoria);
    },       
	
    realizarConsultaHTTP: function(url, datos, callback){
        
	this.consultaHTTP = false;
        this.callback = callback;
        if (window.XMLHttpRequest) { 
             this.consultaHTTP = new XMLHttpRequest();
             if (this.consultaHTTP.overrideMimeType) {
                 this.consultaHTTP.overrideMimeType('text/xml');
             }
         } else if (window.ActiveXObject) { 
             try {
                 this.consultaHTTP = new ActiveXObject("Msxml2.XMLHTTP");
             } catch (e) {
                 try {
                     servidorBacklog.consultaHTTP = new ActiveXObject("Microsoft.XMLHTTP");
                 } catch (e) {}
             }
         }
         if (!this.consultaHTTP) {
             alert('Falla :( No es posible crear una instancia XMLHTTP');
             return false;
         }
         this.consultaHTTP.onreadystatechange = servidorBacklog.recogerRespuestaHTTP;              
         this.consultaHTTP.open('POST',url, true);
         this.consultaHTTP.setRequestHeader("Content-Type","application/json; charset=UTF-8");                          
         this.consultaHTTP.send(JSON.stringify(datos));
    },    


    recogerRespuestaHTTP: function(){
                    if (servidorBacklog.consultaHTTP.readyState == 4) {
                        if (servidorBacklog.consultaHTTP.status == 200) {
                            servidorBacklog.operacionEnBDTerminado(JSON.parse(servidorBacklog.consultaHTTP.responseText));
                        } else {
                            alert('Hubo problemas con la petición.');
                        }
                    }
                }      
};