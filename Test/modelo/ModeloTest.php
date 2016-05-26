<?php

namespace scrumProyecto1\modelo;

/**
 * Generated by PHPUnit_SkeletonGenerator on 2016-05-25 at 11:38:14.
 */
require '../vendor/autoload.php';

use scrumProyecto1\modelo\Modelo;

class modeloTest extends \PHPUnit_Framework_TestCase {

    /**
     * @var modelo
     */
    protected $modelo;

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp() {
        $this->modelo = new modelo;
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown() {
        
    }

   // --------------------------------------------- HISTORIAS -------------------------------------

    /**
     * @covers scrumProyecto1\modelo\modelo::insertarHistoria
     * @todo   Implement testInsertarHistoria().
     * @dataProvider providerInsertarHistoria
     */
    public function testInsertarHistoria($IDsprint,$ID,$nombre,$Descripcion, $ValorDeNegocio) {
        $ResultadoObtenido = $this->modelo->insertarHistoria($IDsprint, $ID, $nombre, $Descripcion, $ValorDeNegocio);
        $this->assertEquals(true, $ResultadoObtenido);
       
    }
    
     /**
     * @covers scrumProyecto1\modelo\modelo::actualizarHistoria
     * @todo   Implement testActualizarHistoria().
      * @dataProvider providerActualizarHistoria
     */
    public function testActualizarHistoria($nuevoIDsprint, $ID, $nuevoID, $NuevoNombre, $NuevaDescricion, $NuevoValor) {
        $ResultadoObtenido = $this->modelo->actualizarHistoria($nuevoIDsprint, $ID, $nuevoID, $NuevoNombre, $NuevaDescricion, $NuevoValor);
        $this->assertEquals(true, $ResultadoObtenido);
        
    }

    /**
     * @covers scrumProyecto1\modelo\modelo::borrarHistoria
     * @todo   Implement testBorrarHistoria().
     * @dataProvider providerBorrarHistoria
     */
    public function testBorrarHistoria($ID) {
        $ResultadoObtenido = $this->modelo->borrarHistoria($ID);
        $this->assertEquals(true, $ResultadoObtenido);
    }

   

    /**
     * @covers scrumProyecto1\modelo\modelo::leerHistorias
     * @todo   Implement testLeerHistorias().
     */
    public function testLeerHistorias() {
       $ResultadoObtenido = $this->modelo->leerHistorias();
       $this->assertEquals(true, $ResultadoObtenido);
        
    }
    
    
    // --------------------------------------------- TAREAS -------------------------------------

    /**
     * @covers scrumProyecto1\modelo\modelo::insertarTarea
     * @todo   Implement testInsertarTarea().
     * @dataProvider providerInsertarHistoria
     */
    public function testInsertarTarea($nombre, $descripcion, $lista, $coste, $prioridad, $IDhistoria, $Estado) {
        $ResultadoObtenido = $this->modelo->insertarTarea($nombre, $descripcion, $lista, $coste, $prioridad, $IDhistoria, $Estado);
        $this->assertEquals(true, $ResultadoObtenido);
       
    }
    
      /**
     * @covers scrumProyecto1\modelo\modelo::actualizarTarea
     * @todo   Implement testActualizarTarea().
       * @dataProvider providerActualizarTarea
     */
    public function testActualizarTarea($nombre, $nuevoNombre, $nuevaDescripcion, $nuevaLista, $nuevoCoste, $nuevaPrioridad, $nuevoIDhistoria, $nuevoEstado) {
      $ResultadoObtenido = $this->modelo->actualizarTarea($nombre, $nuevoNombre, $nuevaDescripcion, $nuevaLista, $nuevoCoste, $nuevaPrioridad, $nuevoIDhistoria, $nuevoEstado);
        $this->assertEquals(true, $ResultadoObtenido);
    }

    /**
     * @covers scrumProyecto1\modelo\modelo::borrarTarea
     * @todo   Implement testBorrarTarea().
     * @dataProvider providerBorrarTarea
     */
    public function testBorrarTarea($nombre) {
       $ResultadoObtenido = $this->modelo->borrarTarea($nombre);
       $this->assertEquals(true, $ResultadoObtenido);
        
        
    }

  

    /**
     * @covers scrumProyecto1\modelo\modelo::leerTareas
     * @todo   Implement testLeerTareas().
     */
    public function testLeerTareas() {
       $ResultadoObtenido = $this->modelo->leerTareas();
       $this->assertEquals(true, $ResultadoObtenido);
        
        
    }
    
     // ----------------------------------------------------------------------------------
    
    
     // --------------------------------------------- SPRINTS -------------------------------------

    /**
     * @covers scrumProyecto1\modelo\modelo::insertarSprint
     * @todo   Implement testInsertarSprint().
     * @dataProvider providerInsertarSprint
     */
    public function testInsertarSprint($IDsprint, $nombre, $Descripcion) {
     $ResultadoObtenido = $this->modelo->insertarSprint($IDsprint, $nombre, $Descripcion);
     $this->assertEquals(true, $ResultadoObtenido);
        
    }
    
    
     /**
     * @covers scrumProyecto1\modelo\modelo::actualizarSprint
     * @todo   Implement testActualizarSprint().
      * @dataProvider providerActualizarSprint
     */
    public function testActualizarSprint($nuevoIDsprint, $ID, $NuevoNombre, $NuevaDescricion) {
       $ResultadoObtenido = $this->modelo->actualizarSprint($nuevoIDsprint, $ID, $NuevoNombre, $NuevaDescricion);
       $this->assertEquals(true, $ResultadoObtenido);
        
    }

    /**
     * @covers scrumProyecto1\modelo\modelo::borrarSprint
     * @todo   Implement testBorrarSprint().
     * @dataProvider providerBorrarSprint
     */
    public function testBorrarSprint($IDsprint) {
       $ResultadoObtenido = $this->modelo->borrarSprint($IDsprint);
       $this->assertEquals(true, $ResultadoObtenido);
        
    }

   

    /**
     * @covers scrumProyecto1\modelo\modelo::leerSprints
     * @todo   Implement testLeerSprints().
     */
    public function testLeerSprints() {
       $ResultadoObtenido = $this->modelo->leerSprints();
       $this->assertEquals(true, $ResultadoObtenido);
        
        
    }
    
     // ----------------------------------------------------------------------------------

    
    public function providerInsertarHistoria(){
        return array(
            'historia1' => array('IDSprint1','ID1','nombre1','Descripcion1',11),
            'historia2' => array('IDSprint2','ID2','nombre2','Descripcion2',22),
            'historia3' => array('IDSprint3','ID3','nombre3','Descripcion3',33)
        );
    }
    
    public function providerActualizarHistoria(){
        return array(
            'historia1' => array('IDSprint1','ID1','nombre1cambiado','Descripcion1',11),
            'historia2' => array('IDSprint2','ID2','nombre2cambiado','Descripcion2',22),
            'historia3' => array('IDSprint3','ID3','nombre3cambiado','Descripcion3',33)
        );
    }
    
    public function providerBorrarHistoria(){
        return array(
            'historia1' => array('ID1'),
            'historia2' => array('ID2'),
            'historia3' => array('ID3')
        );
    }
    
    public function providerInsertarTarea(){
        return array(
            'tarea1' => array('idTarea1', 'descripcion1', 'pruebas1', 5, 4, 'IDHistoria1', 1),
            'tarea2' => array('idTarea2', 'descripcion2', 'pruebas2', 5, 4, 'IDHistoria2', 1),
            'tarea3' => array('idTarea3', 'descripcion3', 'pruebas3', 5, 4, 'IDHistoria3', 1)
        );
    }
    
    public function providerActualizarTarea(){
        return array(
            'tarea1' => array('idTarea1', 'descripcion1', 'pruebas1cambiado', 5, 4, 'IDHistoria1', 1),
            'tarea2' => array('idTarea2', 'descripcion2', 'pruebas2cambiado', 5, 4, 'IDHistoria2', 1),
            'tarea3' => array('idTarea3', 'descripcion3', 'pruebas3cambiado', 5, 4, 'IDHistoria3', 1)
        );
        
    }
    
    public function providerBorrarTarea(){
        return array(
            'tarea1' => array('ID1'),
            'tarea2' => array('ID2'),
            'tarea3' => array('ID3')
        );
    }
    
     public function providerInsertarSprint(){
        return array(
            'sprint1' => array('idSprint1','nombreSprint1' , 'descripcion1'),
            'sprint2' => array('idSprint2','nombreSprint2', 'descripcion2'),
            'sprint3' => array('idSprint3','nombreSprint3', 'descripcion3')
        );
    }
    
     public function providerActualizarSprint(){
        return array(
            'sprint1' => array('idSprint1','nombreSprint1cambiado' , 'descripcion1'),
            'sprint2' => array('idSprint2','nombreSprint2cambiado', 'descripcion2'),
            'sprint3' => array('idSprint3','nombreSprint3cambiado', 'descripcion3')
        );
    }
    
    public function providerBorrarSprint(){
        return array(
            'sprint1' => array('ID1'),
            'sprint2' => array('ID2'),
            'sprint3' => array('ID3')
        );
    }
    
}
