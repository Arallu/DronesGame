/**
 * Created by arall on 29/12/2015.
 */
function Continent(){
    this.States = new Array();
    this.BorderPoints = new Array();
}

Continent.prototype.draw = function(context){
    context.beginPath();
    var position = this.BorderPoints[0];
    context.moveTo(position.X, position.Y);

    for (var i = 0; i < this.BorderPoints.length; i++){
        var position = this.BorderPoints[i];
        context.lineTo(position.X(), position.Y());
    }

    context.closePath();
    context.lineWidth = 10;
    context.strokeStyle = 'black';
   // context.fill();
    context.stroke();

    for (var i = 0; i < this.States.length; i++){
        this.States[i].draw(context);
    }
}