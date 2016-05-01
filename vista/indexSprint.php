<!DOCTYPE html>
<html>
    
    <head>
        <title>Sprint</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="../estilo/estilo.css"/>
    </head>
 <body>
        <div class="ventana" id="ventanaTarea">
            <h1 id="titulo_tarea">Añadir nueva tarea a </h1>
            <ul>
                <li><label for="nombre_tarea">Nombre</label><input type="text" id="nombre_tarea"/></li>
                <li><textarea id="descripcion_tarea" placeholder="Descripción"></textarea></li>
                <li><label for="coste_estimado">Coste</label><input type="number" id="coste_estimado"/></li>
                <li><label for="prioridad">Prioridad</label><input type="number" id="prioridad"/></li>    
            </ul>
            <button id="cancelar">Cancelar</button>
            <button id="enviar">Enviar</button>
        </div>
        
        <div class="fadebox" id="fadebox"></div>
            
        <h1>Sprint <?php ?></h1>
        
        <div id="contenido">
        <div id="backlog">
            <h1>Backlog</h1>
            <div id="historia1">
                <ul>
                    <li id="id">hola</li>
                    <li>hola caracola</li>
                    <li>100</li>
                </ul>  
                <button id='nueva_tarea'>Nueva tarea</button>
            </div>
        </div>
        <div id="kanban">
            
            <div id="por_hacer"><h1>Por hacer</h1></div>
            <div id="en_proceso"><h1>En proceso</h1></div>
            <div id="terminado"><h1>Terminado</h1></div>
            <div id="por_terminar"><h1>Por terminar</h1></div>
        </div>
        </div>
        <button>Volver</button>
        

        <script type="text/javascript">
            var nueva_tarea = document.getElementById("nueva_tarea");
            var cancelar = document.getElementById("cancelar");
            var titulo = document.getElementById("titulo_tarea");
   
            titulo.innerHTML = "Añadir nueva tarea a " + this.id;
            
            function ventanaTarea(){
                var ventana = document.getElementById("ventanaTarea").style.display= 'block'; 
                var fondo = document.getElementById("fadebox").style.display = 'block';
            }
            
             function ocultar(){
                document.getElementById("ventanaTarea").style.display = 'none';
                document.getElementById("fadebox").style.display = 'none';
             }
            
            nueva_tarea.addEventListener("click", ventanaTarea);
            cancelar.addEventListener("click", ocultar);
        </script>
    </body>
</html>
