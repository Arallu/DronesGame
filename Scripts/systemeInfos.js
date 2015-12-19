function SystemeInfos(){
	
	var ressources = ko.observableArray();
	ressources.push(new Ressource("Minerai", "Du minerai", "./Content/imgs/metal.jpg"));
	ressources.push(new Ressource("Bois", "Du bois", "./Content/imgs/wood.jpg"));
	
	this.ExistingRessources = new Ressources(ressources);
	
	this.Player = ko.observable(new Player(this.ExistingRessources));
	
	this.Test = ko.observable("Test");
}

var sysInfos = new SystemeInfos();
ko.applyBindings(sysInfos);