function SystemeInfos(){
	
	var ressources = ko.observableArray();
	ressources.push(new Ressource("Minerai", "Du minerai", "./Content/imgs/metal.jpg"));
	ressources.push(new Ressource("Bois", "Du bois", "./Content/imgs/wood.jpg"));
	this.ExistingRessources = new Ressources(ressources);

	var price1 = new Price();
	price1.AddQuantityRessource(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Minerai"), 10));
	price1.AddQuantityRessource(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Bois"), 20));

	var price2 = new Price();
	price2.AddQuantityRessource(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Minerai"), 40));
	price2.AddQuantityRessource(new QuantityOfRessource(this.ExistingRessources.GetRessourceByName("Bois"), 5));

	this.ExistingModules = new Modules([
		new Module(price1, 0, "./Content/imgs/modules/module1.jpg"),
		new Module(price2, 1, "./Content/imgs/modules/module2.jpg")
	]);

	/* skeletons */
	var skeletons = ko.observableArray();
	var firstSkeleton = new DroneSkeleton();
	firstSkeleton.Name = "first";
	firstSkeleton.AddModuleEmplacement(new ModuleEmplacement(new Position('200px','400px'), this));
	firstSkeleton.AddModuleEmplacement(new ModuleEmplacement(new Position('300px','500px'), this));
	this.CurrentDroneSkeleton = ko.observable();

	skeletons.push(firstSkeleton);

	var secondSkeleton = new DroneSkeleton();
	secondSkeleton.Name = "second";
	secondSkeleton.AddModuleEmplacement(new ModuleEmplacement(new Position('50px','200px'), this));
	secondSkeleton.AddModuleEmplacement(new ModuleEmplacement(new Position('500px','300px'), this));

	skeletons.push(secondSkeleton);

	this.ExistingSkeletons = new DroneSkeletons(skeletons);

	this.Player = ko.observable(new Player(this.ExistingRessources));
	
	this.Test = ko.observable("Test");


}

var sysInfos = new SystemeInfos();
ko.applyBindings(sysInfos);