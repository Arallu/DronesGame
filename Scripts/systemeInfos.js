function SystemeInfos(){
	
	var ressources = ko.observableArray();
	ressources.push(new Ressource("Minerai", "Du minerai", "./Content/imgs/metal.jpg"));
	ressources.push(new Ressource("Bois", "Du bois", "./Content/imgs/wood.jpg"));
	this.ExistingRessources = new Ressources(ressources);

	var modules = ko.observableArray();
	var moduleOneNecessaryQuantifiedRessources = ko.observableArray();
	moduleOneNecessaryQuantifiedRessources.push(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Minerai"), 10));
	moduleOneNecessaryQuantifiedRessources.push(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Bois"), 20));

	var moduleTwoNecessaryQuantifiedRessources = ko.observableArray();
	moduleTwoNecessaryQuantifiedRessources.push(new QuantityOfRessource(ressources()[0], 40));
	moduleTwoNecessaryQuantifiedRessources.push(new QuantityOfRessource(ressources()[1], 5));

	modules.push(new Module(new Price(moduleOneNecessaryQuantifiedRessources)));
	modules.push(new Module(new Price(moduleTwoNecessaryQuantifiedRessources)));

	this.ExistingModules = new Modules(modules);

	var skeletons = ko.observableArray();
	var firstSkeleton = new DroneSkeleton();
	firstSkeleton.Name = "first";
	firstSkeleton.ModulesEmplacements.push(new ModuleEmplacement(new Position('200px','400px')));
	firstSkeleton.ModulesEmplacements.push(new ModuleEmplacement(new Position('300px','500px')));
	this.CurrentDroneSkeleton = ko.observable();

	skeletons.push(firstSkeleton);

	var secondSkeleton = new DroneSkeleton();
	secondSkeleton.Name = "second";
	secondSkeleton.ModulesEmplacements.push(new ModuleEmplacement(new Position('50px','200px')));
	secondSkeleton.ModulesEmplacements.push(new ModuleEmplacement(new Position('500px','300px')));

	skeletons.push(secondSkeleton);

	this.ExistingSkeletons = new DroneSkeletons(skeletons);

	this.Player = ko.observable(new Player(this.ExistingRessources));
	
	this.Test = ko.observable("Test");
}

var sysInfos = new SystemeInfos();
ko.applyBindings(sysInfos);