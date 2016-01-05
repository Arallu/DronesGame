function Ressources(ressources){
	this.Ressources = ressources;

	this.GetRessourceByName = function(ressourceName){
		for (var i = 0; i < this.Ressources().length; i++){
			if (this.Ressources()[i].Name() == ressourceName){
				return this.Ressources()[i];
			}
		}
	}
}

function QuantifiedRessources(quantifiedRessources){
	this.QuantifiedRessources = ko.observableArray();

	this.AddQuantifiedRessource = function(quantifiedRessource){
		this.QuantifiedRessources.push(quantifiedRessource);
	}

	this.CanSubstractQuantifiedRessources = function(quantifiedRessources){
		for (var i = 0; i < quantifiedRessources().length; i++){
			var ressourceType = quantifiedRessources()[i].Ressource().Name();

			var ressourceFound = false;

			for (var j = 0; j < this.QuantifiedRessources().length; j++){
				if (this.QuantifiedRessources()[j].Ressource().Name() == ressourceType){
					ressourceFound = true;

					if (!(this.QuantifiedRessources()[j].Quantity() > quantifiedRessources()[i].Quantity())){
						return false;
					}
				}
			}

			if (!ressourceFound){
				return false;
			}
		}

		return true;
	}

	this.SubstractQuantifiedRessources = function(quantifiedRessources){
		for (var i = 0; i < quantifiedRessources().length; i++) {
			var ressourceType = quantifiedRessources()[i].Ressource().Name();

			for (var j = 0; j < this.QuantifiedRessources().length; j++) {
				if (this.QuantifiedRessources()[j].Ressource().Name() == ressourceType) {
					this.QuantifiedRessources()[j].Quantity(this.QuantifiedRessources()[j].Quantity() - quantifiedRessources()[i].Quantity());
				}
			}
		}
	}
}