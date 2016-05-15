<?php

if ($_SERVER["REQUEST_METHOD"] === "GET"){
    //require __DIR__."/index.html";
    require __DIR__."/Vista.php";
    $vista = new proyectoScrum\Vista();
    $vista->mostrarPagina("index.html");
} else {
    $consultaJSON = file_get_contents('php://input');
    // $consulta es una Array
    $consulta = json_decode($consultaJSON,true);
    
    
    require __DIR__."/Modelo.php";
    require __DIR__."/Vista.php";
    $modelo = new proyectoScrum\modelo\Modelo();
    $vista = new proyectoScrum\vista\Vista();
    
    $modelo->conectarBD();
    $resultado = $modelo->insertarHistoria($consulta["etq"],$consulta["nom"],$consulta["des"],$consulta["val"]);
    
    if ($resultado){
        echo $consultaJSON;
    } else {
        echo json_encode(["error" => "No se ha podido insertar la historia"]);
    }
    /*
    if (array_key_exists("c",$consulta)){
        $resultado = $modelo->insertarHistoria($consulta["c"]);
        if ($resultado){
            $vista->mostrarDatos($consulta);
            //echo json_encode($consulta);
        } else {
            $vista->mostrarError($consulta["c"],"insertar el nombre");
            //echo json_encode(["e" => "Error en la inserción"]);
        }       
    } else if (array_key_exists("b",$consulta)){
        $resultado = $modelo->borrarHistoria($consulta["b"]);
        if ($resultado){
            $vista->mostrarDatos($consulta);
            //echo json_encode($consulta);
        } else {
            $vista->mostrarError($consulta["b"],"borrar el nombre");
            //echo json_encode(["e" => "Error en la inserción"]);
        }       
 
    } else if (array_key_exists("a",$consulta)){
        $resultado = $modelo->actualizarHistoria($consulta["a"][0], $consulta["a"][1]);
        if ($resultado){
            $vista->mostrarDatos($consulta);
        } else {
            $vista->mostrarError($consulta["a"][0],"actualizar el nombre");
        }
    } else if (array_key_exists("r",$consulta)){
        $resultado = $modelo->leerHistorias();
        if (is_array($resultado)){
            $vista->mostrarDatos(["r" => $resultado]);
        } else {
            $vista->mostrarError("","consultar los nombres");
        }
    }
    */
    
 
    $modelo->cerrarBD();
}
?>