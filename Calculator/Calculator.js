/**
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 */


// functie om in display getallen en symbolen toe te voegen.
var addNumber = function(number, form)
{
    if(form.display.value.length<20)
    {
        var firstnumber = form.display.value;
        form.display.value = firstnumber+number;
    }
};

var calculate = function(form)
{
    var display = form.display.value;
    //string moet gespit worden in meerdere delen om er iets mee te kunnen
    if(display.length >= 3)
    {
        var antwoord;
        if(display.search("\\+") !=-1)//check voor optelsom
        {
            var parts = display.split("+");
            antwoord = parseFloat(parts[0])+parseFloat(parts[1]);
        }
        if(display.search("\\-") !=-1)//check voor aftrekken
        {
            var parts = display.split("-");
            antwoord = parseFloat(parts[0])-parseFloat(parts[1]);
        }
        if(display.search("\\*") !=-1)//check voor vermenigvuldigen
        {
            var parts = display.split("*");
            antwoord = parseFloat(parts[0])*parseFloat(parts[1]);
        }
        form.display.value = antwoord;

    }
    else
    {
        alert("je moet het wel goed invullen");
    }
};
