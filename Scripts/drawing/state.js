/**
 * Created by arall on 29/12/2015.
 */
function State(){
    this.BorderPoints = new Array();

    this.IsSelected = false;

    /* Le joueur "propriétaire" de l'état */
    this.CurrentOwner = null;

    this.MaxX = function(){
        var x = this.BorderPoints[0].X();

        for (var i = 0; i < this.BorderPoints.length; i++){
            if (this.BorderPoints[i].X() > x){
                x = this.BorderPoints[i].X();
            }
        }

        return x;
    }

    this.MinX = function(){
        var x = this.BorderPoints[0].X();

        for (var i = 0; i < this.BorderPoints.length; i++){
            if (this.BorderPoints[i].X() < x){
                x = this.BorderPoints[i].X();
            }
        }

        return x;
    }

    this.MaxY = function(){
        var y = this.BorderPoints[0].Y();

        for (var i = 0; i < this.BorderPoints.length; i++){
            if (this.BorderPoints[i].Y() > y){
                y = this.BorderPoints[i].Y();
            }
        }

        return y;
    }

    this.MinY = function(){
        var y = this.BorderPoints[0].Y();

        for (var i = 0; i < this.BorderPoints.length; i++){
            if (this.BorderPoints[i].Y()< y){
                y = this.BorderPoints[i].Y();
            }
        }

        return y;
    }
}

State.prototype.draw = function(context){
    context.fillStyle = this.IsSelected ? 'yellow' : this.CurrentOwner.AffiliationColor;

    context.beginPath();
    var position = this.BorderPoints[0];
    context.moveTo(position.X, position.Y);

    for (var i = 0; i < this.BorderPoints.length; i++){
        var position = this.BorderPoints[i];
        context.lineTo(position.X(), position.Y());
    }

    context.closePath();
    context.lineWidth = 1;

    context.strokeStyle = this.IsSelected ? 'red' : 'black';

    context.fill();
    context.stroke();
}