/**
 * Created by arall on 02/01/2016.
 */
function Hero(){
    this.Name = null;
    this.Id = 0;
    // TODO caractéristiques : notion de max, altérations, etc... voir limites, etc
    this.Caracteristique1 = 0;
    this.Caracteristique2 = 0;

    this.DragStart = function(data, event){
        // var img = new Image();
        // img.src = this.ImgPath();
        // event.dataTransfer.setDragImage(img, 5, 5);
        event.dataTransfer.setData("text/plain", this.Id.toString());
    }
}