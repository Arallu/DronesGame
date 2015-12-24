/**
 * Created by arall on 19/12/2015.
 */
function Price(){
    this.QuantifiedRessources = ko.observableArray();

    this.AddQuantityRessource = function(quantifiedRessource){
        this.QuantifiedRessources.push(quantifiedRessource);
    }

    this.AddPrice = function(price){
        var newPrice = this.Clone();

        if (price !== null && price !== undefined){
            for (var i = 0; i < price.QuantifiedRessources().length; i ++){
                var qtyRessource = price.QuantifiedRessources()[i].Clone();

                var found = false;
                for (var j = 0; j < newPrice.QuantifiedRessources().length; j++){
                    var thisQtyRessource = newPrice.QuantifiedRessources()[j];

                    if (qtyRessource.Ressource().Name() == thisQtyRessource.Ressource().Name()){
                        thisQtyRessource.Quantity(thisQtyRessource.Quantity() + qtyRessource.Quantity());
                        found = true;
                    }
                }

                if (!found){
                    newPrice.QuantifiedRessources().push(qtyRessource);
                }
            }
        }

        return newPrice;
    }

    this.Clone = function(){
        var clone = new Price();

        clone.QuantifiedRessources = ko.observableArray();

        for (var i = 0; i < this.QuantifiedRessources().length; i++){
            clone.QuantifiedRessources.push(this.QuantifiedRessources()[i].Clone());
        }

        return clone;
    }
}
