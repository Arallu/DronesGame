function SystemeInfos(){
	
	var ressources = ko.observableArray();
	ressources.push(new Ressource("Minerai", "Du minerai", ""));
	ressources.push(new Ressource("Bois", "Du bois", ""));
	
	this.ExistingRessources = ko.observable(new Ressources(ressources));
	
	this.Test = ko.observable("Test");
}

var sysInfos = new SystemeInfos();
ko.applyBindings(sysInfos);