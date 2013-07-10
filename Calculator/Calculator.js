/**
 * Created with JetBrains PhpStorm.
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 * To change this template use File | Settings | File Templates.
 */
var addNumber = function(number, form)
{
    if(form.display.value.length<20)
    {
        var firstnumber = form.display.value;
        form.display.value = firstnumber+number;
    }
};