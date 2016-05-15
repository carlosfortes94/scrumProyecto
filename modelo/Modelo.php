<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace proyectoScrum\modelo;
/**
 * Description of modelo
 *
 * @author eduardo
 */


class modelo {
    public $baseDatos;
    
    public function conectarBD(){
        $this->baseDatos = new \mysqli("localhost","pepe","123123","proyectofinal");
    }
    
    public function insertarHistoria($ID,$nombre,$Descripcion, $ValorDeNegocio){
        $sql = "INSERT INTO Historia VALUES ('"."sprint1"."','" . $ID ."','" . $nombre ."','" . $Descripcion ."','" . $ValorDeNegocio ."');";
        return $this->baseDatos->query($sql);
    }
    
    public function borrarHistoria($ID){
        $sql = "DELETE * FROM Historia WHERE nombre = '" . $ID . "';";
        return $this->baseDatos->query($sql);
    }
    
    public function actualizarHistoria($ID,$NuevoID,$NuevoNombre,$NuevaDescricion,$NuevoValor){
        $sql = "UPDATE Historia SET ID = '".$nuevoID."', Nombre= '".$NuevoNombre."',Descripcion='".$NuevaDescricion."',Valor de negocio='".$NuevoValor."' WHERE ID = '".$ID."';";
        return $this->baseDatos->query($sql);
    }
    
    public function leerHistorias(){
        $sql = "SELECT * FROM Historia";
        $resultado = $this->baseDatos->query($sql);
        $fila = $resultado->fetch_row();
        $Historias = [];
        while ($fila != \NULL){
            array_push($Historias,$fila[0]);
            $fila = $resultado->fetch_row();
        }
        return $Historias;
    }
    
    public function cerrarBD(){
        $this->baseDatos->close();
    }
}