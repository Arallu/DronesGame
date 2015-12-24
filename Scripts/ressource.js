function Ressource(name, description, imagePath){
	this.Name = ko.observable(name);
	this.Description = ko.observable(description);
	this.ImagePath = ko.observable(imagePath);
}

function QuantityOfRessource(ressource, quantity){
	this.Ressource = ko.observable(ressource);
	this.Quantity = ko.observable(quantity);

	this.Clone = function(){
		var clone = new QuantityOfRessource(this.Ressource(), this.Quantity());
		return clone;
	}
}