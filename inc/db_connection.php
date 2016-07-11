<?php
	$root = dirname(__DIR__);
	require_once($root . '/config.php');
	require_once($root . '/lib/db.php');

	Db::config( 'driver',   'mysql' );
	Db::config( 'host',     $config['db']['hostname'] );
	Db::config( 'database', $config['db']['dbname'] );
	Db::config( 'user',     $config['db']['username'] );
	Db::config( 'password', $config['db']['password'] );
	