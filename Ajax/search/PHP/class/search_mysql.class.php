<?php
/**
 * Created by JetBrains PhpStorm.
 * User: barld
 * Date: 7-8-13
 * Time: 13:07
 * To change this template use File | Settings | File Templates.
 */

class searchMysql
{
    private $_database;

    public function __construct()
    {
        //er wordt gezorgd dat er verbinding wordt gemaakt met de database zodat daar zoekacties kunnen worden uitgevoerd
        include_once('mysql.class.php');
        $this->_database = new Mysql();
    }

    public function search($atribuuten, $entiteitent, $var, $val)
    {
        $where = array($var." LIKE :".$var);
        $this->_database->select($atribuuten, $entiteitent, $where);
        $this->_database->bind(array(":".$var=>"%".$val."%"));
        $this->_database->execute();
        return $this->_database->fetchAsoc();
    }
}