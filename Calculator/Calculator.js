/**
 * User: barld
 * Date: 10-7-13
 * Time: 14:15
 */
String.prototype.placeAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index);
}

function Calculator()
{

    /*
        *   instaleer en zet de html objecten die gebruikt worden
        *
        *   @valeu : this.display_sum
        *   @description : invoer veld waar de user de formule invoerd
        *
        *   @valeu : this.display_answer
        *   @description : in dit gedisabled invoer veld word het antwoord getoond
    */

    this.display_sum = $('#display_sum');
    this.disolay_answer = $('#display_answer');

   this.Answeregiven = false

    this.getDisplay = function(field)
    {
        if(field === "sum")
        {
            return this.display_sum.val();
        }else if(field === "answer")
        {
            return this.disolay_answer.val();
        }
        return false
    };

    this.setDisplay = function(value, field)
    {
        if(field === "sum")
        {
            this.display_sum.val(value);
        }else if(field === "answer")
        {
            this.disolay_answer.val(value);
        }
        return true;
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
            //kijk waar de cursor is om het teken op de juiste plaats te plaatsen
            var placeCursor = this.display_sum.prop("selectionStart");
            this.setDisplay(firstnumber.placeAt(placeCursor, number), "sum");
            //hier een een dubele regel waar de selectie moet beginnen en eindigen deze is gelijk zodat er niks wordt geselecteerd
            // +1 zodat de cursor er wel achter staat
            this.display_sum.prop("selectionStart", placeCursor+1);
            this.display_sum.prop("selectionEnd", placeCursor+1);
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
            var value = this.getDisplay('sum');
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