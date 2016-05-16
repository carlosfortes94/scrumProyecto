<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace scrumProyecto1\modelo;
/**
 * Description of modelo
 *
 * @author eduardo
 */


class modelo {
    public $baseDatos;
    
    public function conectarBD(){
        $this->baseDatos = new \mysqli("localhost","pepe","perro20","proyectofinal");
    }
    
    // -------------------------------- HISTORIAS -----------------------------------
    
    
    public function insertarHistoria($IDsprint,$ID,$nombre,$Descripcion, $ValorDeNegocio){
        $sql = "INSERT INTO historia VALUES ('".$IDsprint."','" . $ID ."','" . $nombre ."','" . $Descripcion ."','" . $ValorDeNegocio ."');";
        return $this->baseDatos->query($sql);
    }
    
    public function borrarHistoria($ID){
        $sql = "DELETE * FROM historia WHERE IDHistoria = '" . $ID . "';";
        return $this->baseDatos->query($sql);
    }
    
    public function actualizarHistoria($nuevoIDsprint,$ID,$nuevoID,$NuevoNombre,$NuevaDescricion,$NuevoValor){
        $sql = "UPDATE historia SET ID = '".$nuevoID."',IDsprint= '".$nuevoIDsprint."' , Nombre= '".$NuevoNombre."',Descripcion='".$NuevaDescricion."',Valor de negocio='".$NuevoValor."' WHERE ID = '".$ID."';";
        return $this->baseDatos->query($sql);
    }
    
    public function leerHistorias(){
        $sql = "SELECT * FROM historia";
        $resultado = $this->baseDatos->query($sql);
        $fila = $resultado->fetch_row();
        $Historias = [];
        while ($fila != \NULL){
            array_push($Historias,$fila[0]);
            $fila = $resultado->fetch_row();
        }
        return $Historias;
    }
    
    // --------------------------------------------------------------
    
    public function cerrarBD(){
        $this->baseDatos->close();
    }
    
    // ------------------------------------- TAREAS -------------------------
    
    public function insertarTarea($nombre,$descripcion,$lista, $coste, $prioridad, $IDhistoria, $Estado){
        $sql = "INSERT INTO tareas VALUES ('".$nombre."','" . $descripcion ."','" . $lista ."','" . $coste ."','" . $prioridad ."','" . $IDhistoria ."','" . $Estado ."');";
        return $this->baseDatos->query($sql);
    }
    
    public function borrarTarea($nombre){
         $sql = "DELETE * FROM tarea WHERE nombre = '" . $nombre . "';";
        return $this->baseDatos->query($sql);
    }
    
   
    public function actualizarTarea($nombre,$nuevoNombre,$nuevaDescripcion,$nuevaLista, $nuevoCoste, $nuevaPrioridad, $nuevoIDhistoria, $nuevoEstado){
        $sql = "UPDATE tareas SET Nombre = '".$nuevoNombre."',Descripcion= '".$nuevaDescripcion."' , Lista de pruebas= '".$nuevaLista."',Coste estimado='".$nuevoCoste."',Prioridad='".$nuevaPrioridad."',IDHistoria='".$nuevoIDhistoria."',Estado='".$nuevoEstado."' WHERE Nombre = '".$nombre."';";
        return $this->baseDatos->query($sql);
    }
    
    public function leerTareas(){
        $sql = "SELECT * FROM tareas";
        $resultado = $this->baseDatos->query($sql);
        $fila = $resultado->fetch_row();
        $Tareas = [];
        while ($fila != \NULL){
            array_push($Tareas,$fila[0]);
            $fila = $resultado->fetch_row();
        }
        return $Tareas;
    }
    
    //-------------------------------------------------------------------------
    
    
    //--------------------------- SPRINTS ------------------------------------
    
    public function insertarSprint($IDsprint,$nombre,$Descripcion){
        $sql = "INSERT INTO Sprint VALUES ('".$IDsprint."','" . $nombre ."','" . $Descripcion ."');";
        return $this->baseDatos->query($sql);
    }
    
    public function borrarSprint($IDsprint){
        $sql = "DELETE * FROM Sprint WHERE ID = '" . $IDsprint . "';";
        return $this->baseDatos->query($sql);
    }
    
    public function actualizarSprint($nuevoIDsprint,$ID,$NuevoNombre,$NuevaDescricion){
        $sql = "UPDATE Sprint SET ID = '".$nuevoIDsprint."', Nombre= '".$NuevoNombre."',Descripcion='".$NuevaDescricion."' WHERE ID = '".$ID."';";
        return $this->baseDatos->query($sql);
    }
    
    public function leerSprints(){
        $sql = "SELECT * FROM Sprint";
        $resultado = $this->baseDatos->query($sql);
        $fila = $resultado->fetch_row();
        $Sprint = [];
        while ($fila != \NULL){
            array_push($Sprint,$fila[0]);
            $fila = $resultado->fetch_row();
        }
        return $Sprint;
    }
    
    
    //------------------------------------------------------------------------
    
    
    
}