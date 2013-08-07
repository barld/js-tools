<?php

class Mysql
{
    protected $_verbinding;
    protected $_quiry;

    public function __construct()
    {
        $this->maakverbinding();
        return true;
    }

    //eigenlijk een construct maar kan ook tussendoor worden als de verbinding wordt gesloten
    public function maakverbinding()
    {
        $db = new PDO('mysql:host=localhost;dbname=searchnames;charset=utf-8', 'root', '');
        //emulatie staat uit voor de veiligheid
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $this->_verbinding = $db;
        return true;
    }

    public function sluitverbinding()
    {
        $this->_verbinding = NULL;
        return true;
    }

    public function select($atribuuten, $entiteiten, $where= array("'a'='a'"))
    {
        $sql = "SELECT";

        foreach($atribuuten as $atribuut)
        {
            $sql .= " ".$atribuut.",";
        }

        $sql = substr_replace($sql, "", -1);

        $sql .= " FROM";

        foreach($entiteiten as $entiteit)
        {
            $sql .= " ".$entiteit.",";
        }

        $sql = substr_replace($sql, "", -1);

        $sql .= " WHERE";

        foreach($where as $waarom)
        {
            $sql .= " ".$waarom;
        }

        $this->_quiry = $this->_verbinding->prepare($sql);
    }

    public function insert($entiteit, $set)
    {
        $sql= "INSERT INTO ";
        $sql .= $entiteit." VALUES (";

        foreach($set as $value)
        {
            $sql .= " ".$value.",";
        }
        $sql = substr_replace($sql, "", -1);
        $sql .= " )";

        $this->_quiry = $this->_verbinding->prepare($sql);
    }

    public function update($entiteit, $set, $where)
    {
        $sql= "UPDATE ";
        $sql .= $entiteit." SET ";

        foreach($set as $variable=>$value)
        {
            $sql .= " ".$variable."=".$value.",";
        }
        $sql = substr_replace($sql, "", -1);

        $sql .= " WHERE";

        foreach($where as $waarom)
        {
            $sql .= " ".$waarom;
        }

        $this->_quiry = $this->_verbinding->prepare($sql);
    }

    public function delete($entiteit, $where)
    {
        $sql = "DELETE FROM ".$entiteit." WHERE ";
        $sql .= $where;

        $this->_quiry = $this->_verbinding->prepare($sql);
    }

    public function bind($binden = array())
    {
        foreach($binden as $pdovar=>$pdoinh)
        {
            $this->_quiry->bindParam($pdovar, $pdoinh);
        }
    }

    public function execute()
    {
        $this->_quiry->execute();
    }

    public function fetchAsoc()
    {
        return $this->_quiry->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>