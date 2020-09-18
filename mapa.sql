-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para my_app
CREATE DATABASE IF NOT EXISTS `my_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `my_app`;

-- Volcando estructura para tabla my_app.restaurants
CREATE TABLE IF NOT EXISTS `restaurants` (
  `idrestaurant` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  `king_food` set('Hamburgueseria','Japones','Cocina de Autor','Mediterranea','Arroces','Braseria') DEFAULT NULL,
  PRIMARY KEY (`idrestaurant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla my_app.restaurants: ~15 rows (aproximadamente)
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` (`idrestaurant`, `name`, `adress`, `lat`, `lng`, `king_food`) VALUES
	(1, 'TATU', 'Av. de Tarragona, 58, AD500 Andorra la Vella, Andorra', '42.505718', '1.52543', 'Braseria'),
	(2, 'Kökosnot', 'Carrer Prat de la Creu, 29, AD500 Andorra la Vella, Andorra', '42.507647', '1.525644', 'Cocina de Autor'),
	(3, 'L\'Arrosseria', 'Carrer de la Vall, 1, AD500 Andorra la Vella, Andorra', '42.507314 ', '1.521444', 'Mediterranea,Arroces'),
	(4, 'Restaurant 1940', 'Avinguda Príncep Benlloch, 20 bis, AD500 Andorra la Vella, Andorra', '42.507531', ' 1.519653 ', 'Mediterranea'),
	(5, 'Versailles', 'Cap del Carrer, 1, AD500 Andorra la Vella, Andorra', '42.508022', ' 1.522078 ', 'Mediterranea,Braseria'),
	(6, 'And Burguer Zero', 'Carrer Copríncep François Mitterrand, AD700 Escaldes-Engordany, Andorra', '42.510637', '1.537981 ', 'Hamburgueseria'),
	(7, 'Burguer Brothers', 'Av. de Joan Martí, 77, AD200 Encamp, Andorra', '42.532684', '1.575518 ', 'Hamburgueseria'),
	(8, 'Burguer Roc', 'Carrer Major, AD100 Canillo, Andorra', '42.566674', '1.599398 ', 'Hamburgueseria'),
	(9, 'Kazuya', 'Av. de Tarragona, 36, AD500 Andorra la Vella, Andorra', '42.505753', '1.528442 ', 'Japones'),
	(10, 'Siam Shiki', 'Parc de la Mola, 10, AD700 Escaldes-Engordany, Andorra', '42.511384', '1.537797 ', 'Japones'),
	(11, 'La Dama del Llac', 'AD200 Encamp, Andorra', '42.522656', '1.571972 ', 'Cocina de Autor'),
	(12, 'Nou Vertical', 'Carrer Major, 22, AD300 Ordino, Andorra', '42.557186', ' 1.533863 ', 'Cocina de Autor'),
	(13, 'Arrosseria Chef Amadeo', 'Plaça del Telecabina, AD100 Canillo, Andorra', '42.567017', '1.600978 ', 'Arroces'),
	(14, 'L\'Arrosseria i Marisqueria', 'Carrer Mossèn Cinto Verdaguer, 1, AD300 Ordino, Andorra', '42.555638', '1.533515 ', 'Arroces'),
	(15, 'Ca l\'Argenti', 'Ctra de Prats s/n Apartaments Sant Bernart, AD100 Canillo, Andorra', '42.566121', '1.599776 ', 'Braseria');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
