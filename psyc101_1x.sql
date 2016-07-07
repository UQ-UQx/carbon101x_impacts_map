# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.38)
# Database: psyc101_1x
# Generation Time: 2016-06-28 06:20:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Activities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Activities`;

CREATE TABLE `Activities` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(256) DEFAULT '',
  `IntroScreenA` text NOT NULL,
  `IntroScreenB` text NOT NULL,
  `FinalScreen` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table StudentInGroup
# ------------------------------------------------------------

DROP TABLE IF EXISTS `StudentInGroup`;

CREATE TABLE `StudentInGroup` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `edx_userid` varchar(256) NOT NULL DEFAULT '',
  `ActivityID` int(11) unsigned NOT NULL,
  `Edx_courseid` varchar(256) NOT NULL DEFAULT '',
  `AssignedGroup` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table StudentInput
# ------------------------------------------------------------

DROP TABLE IF EXISTS `StudentInput`;

CREATE TABLE `StudentInput` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `StudentInGroupID` int(11) unsigned NOT NULL,
  `Response` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
