/**
 * Created by arall on 20/12/2015.
 */
function DroneSkeleton(){
    this.Name = "";
    this.ModulesEmplacements = ko.observableArray();
    this.TotalPrice = ko.observable(new Price(null));

    this.AddModuleEmplacement = function(moduleEmplacement){
        moduleEmplacement.Skeleton = this;
        this.ModulesEmplacements.push(moduleEmplacement);
    }

    this.UpdatePrice = function(){
        var price = new Price();

        for (var i = 0; i < this.ModulesEmplacements().length; i ++){
            var module = this.ModulesEmplacements()[i];
            if (module !== null && module !== undefined){
                price = price.AddPrice(module.Module().Price);
            }
        }

        this.TotalPrice(price);
    }
}

function DroneSkeletons(skeletons){
    this.Skeletons = skeletons;
}