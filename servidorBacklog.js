var servidorBacklog = {

	solicitarAccionEnBD: function(objetoNombre){
          this.realizarConsultaHTTP("http://localhost/scrumProyecto/index.php",objetoNombre);
    },
    /* dudas D:
    operacionEnBDTerminado: function(objetoNombre){
           servidorBacklog.callback(objetoNombre);
    },       
	*/
    realizarConsultaHTTP: function(url, datos, callback){
		this.consultaHTTP = false;
        this.callback = callback;
        if (window.XMLHttpRequest) { // Mozilla, Safari,...
             this.consultaHTTP = new XMLHttpRequest();
             if (this.consultaHTTP.overrideMimeType) {
                 this.consultaHTTP.overrideMimeType('text/xml');
             }
         } else if (window.ActiveXObject) { // IE
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
         // CAMBIADO               
         this.consultaHTTP.open('POST',url, true);
         // CAMBIADO(todo)
         this.consultaHTTP.setRequestHeader("Content-Type","application/json; charset=UTF-8");
         // CAMBIADO                             
         this.consultaHTTP.send(JSON.stringify(datos));
    },    


    recogerRespuestaHTTP: function(){
                    if (servidorBacklog.consultaHTTP.readyState == 4) {
                        if (servidorBacklog.consultaHTTP.status == 200) {
                            console.log("[recogerRespuestaHTTP]");
                            servidorBacklog.operacionEnBDTerminado(JSON.parse(servidorBacklog.consultaHTTP.responseText));
                            //funcionProcesarRespuesta(JSON.parse(ConexionServidor.consultaHTTP.responseText));
                            //servidorBacklog.AnadirEnBDTerminado(JSON.parse(ConexionServidor.consultaHTTP.responseText));
                        } else {
                            alert('Hubo problemas con la petición.');
                        }
                    }
                }      
};


