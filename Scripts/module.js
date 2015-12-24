/**
 * Created by arall on 20/12/2015.
 */
function Module(price, id, imgPath){
    this.Id = id;
    this.Price = price;
    this.Name = "Module name";
    this.ImgPath = ko.observable(imgPath);
    this.Description = "Module description";

    this.DragStart = function(data, event){
        var img = new Image();
        img.src = this.ImgPath();
        event.dataTransfer.setDragImage(img, 5, 5);
        event.dataTransfer.setData("text/plain", this.Id.toString());
    }
}

function Modules(modules){
    this.Modules = ko.observableArray(modules);

    this.GetModuleById = function(id){
        if (this.Modules === undefined){ return null; }

        for (var i = 0; i < this.Modules().length; i++){
            if (this.Modules()[i].Id.toString() == id){
                return this.Modules()[i];
            }
        }
    }
}