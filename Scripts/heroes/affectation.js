/**
 * Created by arall on 04/01/2016.
 */
function Affectation(){
    this.Heroes = ko.observableArray();

    this.Drop = function(data, event, sysInfos){
        var id = event.dataTransfer.getData("text/plain");
        var e = event;

        var heros = sysInfos.GetHeroById(id);

        if (heros != null){
            this.Heroes.push(heros);
        }
    }

    this.toString = function(){
        return "blah!";
    }
}