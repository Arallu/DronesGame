/**
 * Created by arall on 20/12/2015.
 */
function Module(price){
    this.Price = price;
    this.Name = "Module name";
    this.ImgPath = ko.observable("");
    this.Description = "Module description";
}

function Modules(modules){
    this.Modules = modules;
}