/**
 * Created by arall on 21/12/2015.
 */
function ModuleEmplacement(position){
    this.Position = ko.observable(position);
    this.Module = ko.observable(new Module(null));
    this.ImgPath = ko.observable("./Content/imgs/metal.jpg;");
}