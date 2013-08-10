/**
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 */


function Calculator()
{

   this.Answeregiven = false

    this.getDisplay = function(field)
    {
        if(field === "sum")
        {
            return document.getElementById('display_sum').value;
        }else if(field === "answer")
        {
            return document.getElementById('display_answer').value;
        }
        return false
    };

    this.setDisplay = function(value, field)
    {
        if(field === "sum")
        {
            document.getElementById('display_sum').value = value;
            return true;
        }else if(field === "answer")
        {
            document.getElementById('display_answer').value = value;
            return true;
        }

    };

    // functie om in display getallen en symbolen toe te voegen.
    this.addCharter = function(number)
    {
        var list = ['*', '/', '+', '-'];
        if(this.Answeregiven && list.indexOf(number) != -1)
        {
            this.setDisplay('Ans', "sum");
        }
        if(this.getDisplay("sum").length<20)
        {
            var firstnumber = this.getDisplay("sum");
            this.setDisplay(firstnumber+number, "sum");
            this.Answeregiven = false;
        }
    };

    this.calculate = function()
    {
        var display = this.getDisplay("sum");
        // vervang stukken string voor een cijfer
        display = this.valueReplace(display);

        if(true)// moet controlle functie komen of er wel een valide string is "display != parseFloat(display)" werkt niet altijd niet bij langere cijfers als pi
        {
            var antwoord = eval(display);
            this.setDisplay(antwoord, "answer");
            this.Answeregiven = true;
            return true;
        }
        alert("je moet het wel goed invullen");
        return false;
    };

    this.backspace = function(part)
    {
        if(part == "ALL")
        {
            this.setDisplay("", "sum");
        }
        else
        {
            var value = this.getDisplay();
            this.setDisplay(value.substr(0, value.length-1), "sum");
        }
    };

    this.valueReplace = function(string)//moet netter gemaakt worden voor geval dat er nog veel functies voor vervangen bijkomen
    {
        var back = string.replace(/PI/gi, Math.PI);//vervangt nu ok meerdere PI's

        //worteltrekken
        if(back.match("sqrt\\((.*)\\)"))
        {
            back = back.replace(back.match("sqrt\\((.*)\\)")[0] , Math.sqrt(back.match("sqrt\\((.*)\\)")[1]));
        }

        back = back.replace(/Ans/gi, this.getDisplay("answer"));

        return back;
    };


};