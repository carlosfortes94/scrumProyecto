var logicaTarea = {
    nombres_tarea: [],
    callbackTarea: function(tareaCreate){
        this.tareaCreate = tareaCreate;
    },
    intentarInsertarTarea: function(datos){
        var nombre = datos[0];
        for (var i=0;this.nombres_tarea.length;i++){
            if (nombre === this.nombres_tarea[i]){
                alert("La tarea ya existe.");
                return;
            }
        }
        //preparando paso 4
        conexionServidor.callbackTareaBD(logicaTarea.addTareaTerminada);
        //ejecutar paso 3
        conexionServidor.solicitarAddTareaBD({c:datos});
    },
    
    addTareaTerminada: function(datos){
        if (datos.hasOwnProperty("c")){
            logicaTarea.nombres_tarea.push(datos[0].c);
            logicaTarea.tareaCreate(datos.c);
        } else {
            alert(datos.e);
        }
    }
};

