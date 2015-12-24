/**
 * Created by arall on 21/12/2015.
 */
function ModuleEmplacement(position, sysInfos){
    this.Position = ko.observable(position);
    this.Module = ko.observable(new Module(null));
    this.Skeleton = null;

    this.SysInfos = sysInfos;

    this.Drop = function(data, event){
        var t = event.dataTransfer.getData("text/plain");
        var module = data.SysInfos.ExistingModules.GetModuleById(t);
        data.Module(module);

        this.Skeleton.UpdatePrice();
    }

}