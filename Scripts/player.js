/**
	
*/

function Player(existingRessources){
	
	var quantifiedRessources = ko.observableArray();
	
	for (var i = 0; i < existingRessources.Ressources().length; i++){
		quantifiedRessources.push(new QuantityOfRessource(existingRessources.Ressources()[i], 0));
	}
	
	this.QuantifiedRessources = ko.observable(new QuantifiedRessources(quantifiedRessources));
}