<script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-37303062-1']);
    _gaq.push(['_setDomainName', 'barld.nl']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

</script>
<a href="../">back</a>
<form method="POST">
    <label for="naam">naam</label>
    <input type="text" id="naam" name="naam"/>
    <input type="submit">
</form>

<?php
/**
 * Created by JetBrains PhpStorm.
 * User: barld
 * Date: 7-8-13
 * Time: 14:51
 * To change this template use File | Settings | File Templates.
 */
if(isset($_POST['naam']))
{
    include_once("class/mysql.class.php");
    $insert = new Mysql();
    $insert->insert("name", array("NULL", ":name"));
    $insert->bind(array(":name"=>$_POST['naam']));
    $insert->execute();
}
?>

