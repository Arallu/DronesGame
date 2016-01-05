/**
 * Created by arall on 28/12/2015.
 */
function Shape(fillColor){
    this.Points = new Array();
    this.FillColor = fillColor;

    this.MaxX = function(){
        var x = this.Points[0].X();

        for (var i = 0; i < this.Points.length; i++){
            if (this.Points[i].X() > x){
                x = this.Points[i].X();
            }
        }

        return x;
    }

    this.MinX = function(){
        var x = this.Points[0].X();

        for (var i = 0; i < this.Points.length; i++){
            if (this.Points[i].X() < x){
                x = this.Points[i].X();
            }
        }

        return x;
    }

    this.MaxY = function(){
        var y = this.Points[0].Y();

        for (var i = 0; i < this.Points.length; i++){
            if (this.Points[i].Y() > y){
                y = this.Points[i].Y();
            }
        }

        return y;
    }

    this.MinY = function(){
        var y = this.Points[0].Y();

        for (var i = 0; i < this.Points.length; i++){
            if (this.Points[i].Y()< y){
                y = this.Points[i].Y();
            }
        }

        return y;
    }
}

Shape.prototype.draw = function(context){
    context.fillStyle = this.FillColor;

    context.beginPath();
    var position = this.Points[0];
    context.moveTo(position.X, position.Y);

    for (var i = 0; i < this.Points.length; i++){
        var position = this.Points[i];
        context.lineTo(position.X(), position.Y());
    }

    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();
}