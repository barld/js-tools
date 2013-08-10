function Search()
{
    this.zoek = function()
    {
        var xmlhttp;

        var search = $('#search').val();

        xmlhttp=new XMLHttpRequest();

        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                $("ol").html(xmlhttp.responseText);
            }
        }
        xmlhttp.open("POST","PHP/search.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("search="+search);
    };
}