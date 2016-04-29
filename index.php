<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>SCRUM</title>
    
    <style type="text/css">
    
        #contenedor{
            display: flex;
            padding: 2px ;
            border: 1px solid black;
        }

        #contenedor > div{
            border: 1px solid black;
            display: inline;
            margin: auto;
        }
    </style>
    
</head>
<body>
    

    <div id="contenedor">
        <div id="backlog">
            <h1>Backlog</h1>
                <form action="vista/formularioHistoria.php">
                    <button id="nuevaHistoria">Añadir Historia</button>
                </form> 
        </div>
        
        <div id="sprint">
            <h1>Sprint</h1>
                <form action="vista/formularioSprint">
                    <button id="nuevoSprint">Añadir Sprint</button>
                </form>          
        </div>
        
        <div id="sprint_backlog">
            <h1>Sprint Backlog</h1>
        </div>
        
    </div>

    <script type="text/javascript">
        var botonHistoria = document.getElementById("nuevaHistoria");
        var nuevoSprint = document.getElementById("nuevoSprint");
        
        function anadirHistoria (e){
            
        }
        
    </script>

</body>
</html>

