<!DOCTYPE html>
<html>
    
    <head>
        <title>Sprint</title>
        <meta charset="utf-8"/>
        <style>
            body{
                background-color: powderblue;
            }
            #contenido{
                display: flex;
            }
            body > h1{
                font-family: fantasy;
                font-size: 3em;
            }
            div#backlog h1 {
                font-family: arial;
                text-align: center;
            }
            #backlog{
                box-shadow: 1px 1px 10px black;
                background-color: skyblue;
                width: 18%;
                display:inline-block;
                border:2px solid #ac2925; 
            }
            div > div{
                display: inline-block;
            }
            #kanban{
                border:2px solid #ac2925;
                margin-left: 10px;
                box-shadow: 1px 1px 10px black;
                background-color: skyblue;
                display: inline-block;
                width: 80%;
            }
            #kanban > div{
                margin:5px;
                width: 23%;
                border: 2px solid darkcyan;
            }
            #kanban > div > h1{
                font-family: arial;
                text-align: center;
            }
            button{
                margin-top: 10px;
                float:right;
            }
            #ventanaHistoria{
                display: none;
            }
            div[id^="historia"]{
                border: 1px solid black;
                background-color: thistle; 
                margin-left:0.7em;
                margin-bottom: 0.7em;
                width:90%;
            }
            button#nueva_historia{
                margin: 3px;
            }

            button#nueva_tarea{
                margin: 3px;
            }
            
            .ventana{
                position: absolute;
                width:40%;
                top:150px;
                left:350px;
                font-family: Verdana, Arial, Helvetica, sans-serif;
                font-size: 12px;
                font-weight: normal;
                border: 3px solid #333333;
                background-color: #FAFAFA;
                color:#000000;
                display:none;
                overflow: auto;
                z-index: 1002;
            }
            .ventana h1{
                text-align: center;
                font-size: 2.5em;
            }
            .ventana button{
                margin:3px;
            }
            .ventana ul{
                list-style: none;
            }
            .ventana ul li {
                font-size: 14px;
                margin: 3px;
            }
            textarea{
                width:59%;
                height: 50px;
            }
            #coste_estimado{
                width:20%;
                margin-left: 25px;
            }
            #prioridad{
                width:20%;
                margin-left: 5px;
            }
            .fadebox{
                display: none;
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color: black;
                z-index: 1001;
                -moz-opacity:0.3;
                opacity: .3;
               
            }

        </style>
    </head>
    <body>
        <div class="ventana" id="ventanaHistoria">
            <h1 id="titulo_historia">Añadir nueva historia de usuario a </h1>
            <ul>
            <li>
                <span class="campo_requerido">* Indica campo requerido</span>
            </li>
            <li>
                <label for="name">Nombre:</label>
                <input type="text" name="name" placeholder="Nombre de historia" required="required" pattern="[a-zA-ZáéíóíñÁÉÍÓÚÑ\. ]+"/>
            </li>
            <li>
                <label for="etiqueta">Etiqueta:</label>
                <input name="etiqueta"  placeholder="Opcional"/>
            </li>
            <li>
                <label for="descripcion">Descripcion:</label>
                <textarea name="descripcion" cols="40" rows="6" ></textarea>
            </li>
            <li>
                <label for="valor">Valor de negocio:</label>
                <input type="number" name="valor"></input>
            </li>
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
                <button id='nueva_historia'>Nueva historia</button>
            </div>
        </div>
        </div>


        <div id="contenido">
        <div id="backlog">
            <h1>Sprint</h1>
            <div id="historia2">
                 <button id='nueva_tarea'>Nueva tarea</button>
            </div>
        </div>
        </div>

         <div id="contenido">
        <div id="backlog">
            <h1>Sprint back</h1>
            <div id="sprintbacklog">

            </div>
        </div>
        </div>


        <script type="text/javascript">
            var nueva_historia = document.getElementById("nueva_historia");
            var cancelar = document.getElementById("cancelar");
            var titulo = document.getElementById("titulo_historia");
   
            titulo.innerHTML = "Añadir nueva historia de usuario a " + this.id;
            
            function ventanaHistoria(){
                var ventana = document.getElementById("ventanaHistoria").style.display= 'block'; 
                var fondo = document.getElementById("fadebox").style.display = 'block';
            }
            
             function ocultar(){
                document.getElementById("ventanaHistoria").style.display = 'none';
                document.getElementById("fadebox").style.display = 'none';
             }
            
            nueva_historia.addEventListener("click", ventanaHistoria);
            cancelar.addEventListener("click", ocultar);
        </script>
    </body>
</html>

