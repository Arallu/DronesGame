/**
 * Created by arall on 20/12/2015.
 */
function DroneSkeleton(){
    this.Name = "";
    this.ModulesEmplacements = ko.observableArray();
}

function DroneSkeletons(skeletons){
    this.Skeletons = skeletons;
}