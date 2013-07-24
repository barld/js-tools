/**
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 */


function Calculator()
{
    this.getDisplay = function()
    {
        return document.getElementById('display').value;
    }

    this.setDisplay = function(value)
    {
        document.getElementById('display').value = value;
        return true;
    };

    // functie om in display getallen en symbolen toe te voegen.
    this.addCharter = function(number)
    {
        if(this.getDisplay().length<20)
        {
            var firstnumber = this.getDisplay();
            this.setDisplay(firstnumber+number);
        }
    };

    this.calculate = function()
    {
        var display = this.getDisplay();
        //string moet gespit worden in meerdere delen om er iets mee te kunnen
        if(display != parseFloat(display) )
        {
            var antwoord = eval(display);
            this.setDisplay(antwoord);
        }
        else
        {
            alert("je moet het wel goed invullen");
        }
    };

    this.backspace = function(part)
    {
        if(part == "ALL")
        {
            this.setDisplay("");
        }
        else
        {
            var value = this.getDisplay();
            this.setDisplay(value.substr(0, value.length-1));
        }
    };
};