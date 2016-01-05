/**
	
*/

function Player(existingRessources){
	
	var quantifiedRessources = new QuantifiedRessources();
	
	for (var i = 0; i < existingRessources.Ressources().length; i++){
		quantifiedRessources.AddQuantifiedRessource(new QuantityOfRessource(existingRessources.Ressources()[i], 100));
	}
	
	this.QuantifiedRessources = ko.observable(quantifiedRessources);

	this.AffiliationColor = 'blue';

	this.Heroes = ko.observableArray();
}