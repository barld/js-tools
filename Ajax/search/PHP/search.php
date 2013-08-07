<?php
/**
 * Created by JetBrains PhpStorm.
 * User: barld
 * Date: 7-8-13
 * Time: 11:35
 * To change this template use File | Settings | File Templates.
 */

if(!isset($_POST['search'])){
//niks verstuurd
    echo "geen resultaat";
}
elseif($_POST['search']!=""){
    include_once("class/search_mysql.class.php");

    $zoek = new searchMysql();

    $resultaaten = $zoek->search(array("id", "name"), array('name'), "name", $_POST['search']);

    //pak array uit en maak er een lijstje van
    foreach($resultaaten as $resultaat)
    {
        echo "<li>".$resultaat['name']."</li>", PHP_EOL;
    }
    if(empty($resultaaten))
    {
        echo "geen resultaat";
    }
}
else{echo "geen resultaat";}


