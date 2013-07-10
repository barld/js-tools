/**
 * Created with JetBrains PhpStorm.
 * User: barld
 * Date: 10-7-13
 * Time: 17:09
 * To change this template use File | Settings | File Templates.
 */

var makeList = function(list)
{
    var string = "<ol>";
    for(test in list)
    {
        string += "<li><a href='"+list[test]+"'>"+test+"</a></li>";
    }
    string +="</ol>";
    return string;
}
