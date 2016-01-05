/**
 * Created by arall on 28/12/2015.
 */
function Map(){
    this.Shapes = new Array();

    this.Continents = new Array();

    this.Context = null;

    this.Draw = function(){
        for (var i = 0; i < this.Continents.length; i++){
            this.Continents[i].draw(this.Context);
        }
    }

    this.ClicOn = function(x, y){
        var state = this.NearestState(x, y);

        this.UnselectAllStates();

        if (state != null && state != undefined){
            state.IsSelected = true;
        }

        this.Draw();

        return state;
    }

    this.UnselectAllStates = function(){
        for (var j = 0; j < this.Continents.length; j++) {
            for (var i = 0; i < this.Continents[j].States.length; i++) {
                var state = this.Continents[j].States[i];
                state.IsSelected = false;
            }
        }
    }

    /* fonction pour trouver la forme la plus proche en fonction d'une position */
    this.NearestState = function(x, y){
        // pour chaque point, si position dans le rectangle large, alors on cherchera le point le plus proche parmi
        // les points de ces forme
        // si deux formes superposées => non géré pour l'instant

        var states = new Array();

        for (var j = 0; j < this.Continents.length; j++){
            for (var i = 0; i < this.Continents[j].States.length; i++){
                var state = this.Continents[j].States[i];
                var maxX = state.MaxX();
                var maxY = state.MaxY();
                var minX = state.MinX();
                var minY = state.MinY();

                if (maxX > x && minX < x && maxY > y && minY < y){
                    states.push(state);
                }
            }
        }


        if (states.length > 1){
            // TODO : remplacer par nearest point ?
            return states[0];
        }
        else if (states.length == 1){
            return states[0];
        }
        else {
            return null;
        }
    }
}