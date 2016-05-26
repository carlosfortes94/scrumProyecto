<?php

require __DIR__.'/vendor/autoload.php';

error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] === "GET"){
    
    //require __DIR__."/index.html";
    //
    //require __DIR__."/Vista.php";
    $vista = new ScrumProyecto1\Vista();
    //$vista->mostrarPagina("index.html");
} else {
    $consultaJSON = file_get_contents('php://input');
    // $consulta es una Array
    $consulta = json_decode($consultaJSON,true);
    
    
    //require __DIR__."modelo/Modelo.php";
    //require __DIR__."/Vista.php";
    $modelo = new scrumProyecto1\modelo\Modelo();
    //$vista = new scrumProyecto1\vista\Vista();
    
    $modelo->conectarBD();
    
     if (array_key_exists("a1",$consulta)){
         $resultado = $modelo->insertarHistoria($consulta["etq"],$consulta["id"],$consulta["nom"],$consulta["des"],$consulta["val"]);
         
     } else if (array_key_exists("b1",$consulta)){
         $resultado = $modelo->borrarHistoria($consulta["etq"]);
         
         
     } else if(array_key_exists("r1",$consulta)){
         $resultado = $modelo->leerHistorias();
         
     } else if(array_key_exists("a2",$consulta)){
          $resultado = $modelo->insertarTarea($consulta['nombre'], $consulta['descripcion'], $consulta['pruebas'], $consulta['coste'], $consulta['prioridad'], $consulta['id_historia']);
         
     } else if(array_key_exists("b2",$consulta)){
          $resultado = $modelo->borrarTarea($consulta['nombre']);
         
     } else if (array_key_exists("r2",$consulta)){
          $resultado = $modelo->leerTareas();
     } else if(array_key_exists("me", $consulta)){
         $resultado = $modelo->modificarEstado($consulta['nombre'], $consulta['estado']);
     }
     
     
     
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