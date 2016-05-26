-- MySQL dump 10.13  Distrib 5.6.30, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: proyectofinal
-- ------------------------------------------------------
-- Server version	5.6.30-0ubuntu0.15.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `historia`
--

DROP TABLE IF EXISTS `historia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historia` (
  `IDHistoria` varchar(10) NOT NULL,
  `ID` varchar(10) NOT NULL,
  `Nombre` varchar(10) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Valor de negocio` int(200) NOT NULL,
  PRIMARY KEY (`IDHistoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia`
--

LOCK TABLES `historia` WRITE;
/*!40000 ALTER TABLE `historia` DISABLE KEYS */;
/*!40000 ALTER TABLE `historia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sprint`
--

DROP TABLE IF EXISTS `sprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sprint` (
  `ID` varchar(10) NOT NULL,
  `Nombre` varchar(10) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprint`
--

LOCK TABLES `sprint` WRITE;
/*!40000 ALTER TABLE `sprint` DISABLE KEYS */;
INSERT INTO `sprint` VALUES ('prueba1','sprint1','hola esto es una prueba');
/*!40000 ALTER TABLE `sprint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tareas`
--

DROP TABLE IF EXISTS `tareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tareas` (
  `IDTarea` varchar(10) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Lista de pruebas` varchar(100) NOT NULL,
  `Coste estimado` int(10) NOT NULL,
  `Prioridad` int(10) NOT NULL,
  `IDHistoria` varchar(10) NOT NULL,
  `Estado` int(4) NOT NULL,
  PRIMARY KEY (`IDTarea`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tareas`
--

LOCK TABLES `tareas` WRITE;
/*!40000 ALTER TABLE `tareas` DISABLE KEYS */;
INSERT INTO `tareas` VALUES ('4455','45h4','6h56h5',2,3,'hola',1),('4h44g','3g45rg4','45g45g',2,3,'hola',1),('5y5y','h5h56h','56h56h',3,4,'hola',1),('aaa','cwecw','ewef',2,2,'hola',1),('aksjvcslvj','skdlvsdklvj','skdlvsdlkv',3,2,'hola',1),('cable','okdfkpdp','pkfpokdpkfdpko',2,2,'hola',1),('edu','wr3ger','ggr4gt',1,3,'hola',1),('eduardoooo','fwoekfok','owkokv',2,3,'hola',1),('erg','4tg45g','45g45g',2,3,'hola',1),('esto es un','dkdkdkssk','kssdowkdi',3,2,'hola',1),('g555555555','g5g56','g65g56',2,3,'hola',1),('gallina','wnrjng','okfmwoigmweoim',2,3,'hola',1),('hhh','tyymtm','yumym',3,4,'hola',1),('hiu','ldldl','ldldsl',1,2,'hola',1),('kdfpdkndsp','sdlkvnspikn','spdofmsp',2,1,'hola',1),('manoloooo','eromgoremg','gmreogro',3,5,'hola',1),('mesa','veorkveoÂº','voewmvroem',2,3,'hola',1),('mmm','mtyty','tyhtyh',2,3,'hola',1),('no se borr','wmimwr','woimogimwog',2,4,'hola',1),('ordenador','mkckkdl','lmpal',4,2,'hola',1),('pepeeee','f24g3','rg3r5g',2,3,'hola',1),('petete','DJDJDJ','djckck',2,1,'hola',1),('ppeeee','wkmrvokermv','eokrvmerokmv',3,1,'hola',1),('sandra','wokvokmv','vomwrvkm',2,3,'hola',1),('sggsd','adfafd','dfsg',2,1,'hola',1),('sillaaaaa','wkmowmrv','okvermovekm',2,3,'hola',1),('sofa','dkmaskfap','lksmfmp',2,3,'hola',1),('tarea',',ddld','ldldld',1,2,'hola',1),('ubuntu','pslsspll','ldlpp',3,4,'hola',1),('ubuntua','slslkp','kspkdp',5,3,'hola',1),('ver','wrverv','erverbe',2,4,'hola',1),('verde','woenfne','wemvirwv',3,4,'hola',1);
/*!40000 ALTER TABLE `tareas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-26 20:33:01
