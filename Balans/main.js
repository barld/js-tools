/**
 * Created with JetBrains PhpStorm.
 * User: barld
 * Date: 3-8-13
 * Time: 22:22
 * To change this template use File | Settings | File Templates.
 */

function Balans()
{

    this.rotation = 0;

    this.getVal = function(side, propertie)
    {
        return $('#'+propertie+'-'+side).val();
    };

    this.rotate = function()
    {
        $("#container #balans").rotate({animateTo:this.rotation});
    };

    this.turn = function(side)
    {
        switch (side)
        {
            case "left":
                this.rotation -= 15;
                break;
            case "right":
                this.rotation += 15;
                break;
            case "reset":
                this.rotation = 0;
                break;
            default :
                console.log("error");
        }
        this.rotate();
    };

    this.sideLength = function(side)
    {
        $('#balans-'+side).width(this.getVal(side , 'length'));
        //reset
        $('#balans-left').css('margin-left', 0);
        $('#balans-right').css('margin-right', 0);
        /*if(this.getVal('left') + this.getVal('right') < 100)
        {
            console.log('lager dan 100');
            if(this.getVal('left') < this.getVal('right'))
            {
                $('#balans-left').css('margin-left', this.getVal('right')- this.getVal('left'));
            }

        }*/
        if(this.getVal('left', 'length') < this.getVal('right', 'length'))
        {
            $('#balans-left').css('margin-left', this.getVal('right', 'length')- this.getVal('left', 'length'));
        } else if(this.getVal('left', 'length') > this.getVal('right', 'length'))
        {
            $('#balans-right').css('margin-right', this.getVal('left', 'length') - this.getVal('right', 'length'));
        }

        this.calculateBalans = function()
        {
            if(this.getVal('left', 'kracht')*this.getVal('left', 'length') > this.getVal('right', 'kracht')*this.getVal('right', 'length'))
            {
                this.rotation = -20;
                this.rotate();
            }
            else if(this.getVal('left', 'kracht')*this.getVal('left', 'length') == this.getVal('right', 'kracht')*this.getVal('right', 'length'))
            {
                this.rotation = 0;
                this.rotate();
            }
            else if(this.getVal('left', 'kracht')*this.getVal('left', 'length') < this.getVal('right', 'kracht')*this.getVal('right', 'length'))
            {
                this.rotation = 20;
                this.rotate();
            }
        }
    };
}



