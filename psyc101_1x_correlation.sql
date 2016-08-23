# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.6.19)
# Database: psyc101_1x
# Generation Time: 2016-08-23 04:54:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table CorrelationActivities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CorrelationActivities`;

CREATE TABLE `CorrelationActivities` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `edx_courseid` varchar(256) DEFAULT NULL,
  `Title` varchar(256) DEFAULT NULL,
  `IntroText` text,
  `Question1` text NOT NULL,
  `Question1ScaleLabels` varchar(256) NOT NULL DEFAULT '',
  `Question2` text NOT NULL,
  `Question2ScaleLabels` varchar(256) NOT NULL DEFAULT '',
  `SPText` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table CorrelationStudentInput
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CorrelationStudentInput`;

CREATE TABLE `CorrelationStudentInput` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `edx_userid` varchar(256) NOT NULL,
  `ActivityID` int(11) unsigned NOT NULL,
  `Question1Response` int(11) NOT NULL,
  `Question2Response` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
