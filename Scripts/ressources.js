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
	this.QuantifiedRessources = quantifiedRessources;
}