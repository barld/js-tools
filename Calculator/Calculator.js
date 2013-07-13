/**
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 */


function Calculator()
{
    // functie om in display getallen en symbolen toe te voegen.
    this.addNumber = function(number)
    {
        if(document.getElementById('display').value.length<20)
        {
            var firstnumber = document.getElementById('display').value;
            document.getElementById('display').value = firstnumber+number;
        }
    };

    this.calculate = function()
    {
        var display = document.getElementById('display').value;
        //string moet gespit worden in meerdere delen om er iets mee te kunnen
        if(display != parseFloat(display) )
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
            document.getElementById('display').value = antwoord;
        }
        else
        {
            alert("je moet het wel goed invullen");
        }
    };
};