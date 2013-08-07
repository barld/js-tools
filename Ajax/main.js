/**
 * Created with JetBrains PhpStorm.
 * User: barld
 * Date: 7-8-13
 * Time: 9:56
 * To change this template use File | Settings | File Templates.
 */
function Tel()
{
    this.i=0;
    this.teller = function()
    {
        this.i ++;
        return this.i;
    }
}
var Tel = new Tel();
function loadXMLDoc()
{
    var i = Tel.teller();
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML += xmlhttp.responseText + '<br />';
        }
    }
    xmlhttp.open("POST","test.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("num="+i);
}