
<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace proyectoScrum\vista;
/**
 * Description of Vista
 *
 * @author eduardo
 */
class Vista {
    public function mostrarPagina($pagina){
        require __DIR__."/".$pagina;
    }
    
    public function mostrarDatos($datos){
        echo json_encode($datos);
    }
    
    public function mostrarError($datos,$accion){
        $mensajeError = ["e" => "No se pudo " . $accion . " " . $datos];
        echo json_encode($mensajeError);
    }
}