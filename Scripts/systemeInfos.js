var ESystemeInfosMode = { "None":1, "ActionAffectation":2};
Object.freeze(ESystemeInfosMode);

function SystemeInfos(){
	this.ExistingRessources = null;
	this.ExistingHeroes = new Array();
	this.Canvas = null;
	this.Map = null;
	this.Mode = ko.observable(ESystemeInfosMode.None);
	this.ActionAffectationMode = ko.observable(this.Mode() == ESystemeInfosMode.ActionAffectation);

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

	this.Player = null;
	
	this.Test = ko.observable("Test");

	/* TODO : permettre achat robot pour l'ajouter aux possessions du Player */
	this.PlayerCanBuy = function(){
		var can = this.Player().QuantifiedRessources().CanSubstractQuantifiedRessources(this.CurrentDroneSkeleton().TotalPrice().QuantifiedRessources);
		return can;
	}

	this.Buy = function(){
		/* this.Player && this.CurrentSkeleton */
		this.Player().QuantifiedRessources().SubstractQuantifiedRessources(this.CurrentDroneSkeleton().TotalPrice().QuantifiedRessources);
	}

	this.Debug = function(data, event){
		var d = data;
		var e = event;

	}

	this.CurrentAffectation = ko.observable(new Affectation());

	this.ValidateCurrentAffectation = function(){
		var affectation = this.CurrentAffectation();
		var e = 0;
	}

	this.CurrentAction = ko.observable(new StateGenericAction(EActionAffectationMode.FreeAffectation));

	this.ExecuteAction = function(action){
		this.Mode(ESystemeInfosMode.ActionAffectation);
		this.ActionAffectationMode(this.Mode() == ESystemeInfosMode.ActionAffectation);
		// TODO to remove
		this.CurrentAffectation(action.Affectation);
		this.CurrentAction(action);
	}

	this.MapClic = function(data, event){
		var rect = this.Canvas.getBoundingClientRect();

		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		console.log('mapClic: ' + x + ' ' + y);

		this.CurrentlySelectedState = this.Map.ClicOn(x, y);
// this.CurrentActions <= dépend du player et de l'état cliqué
		this.CurrentlySelectedStateGenericActions.removeAll();

		if (this.CurrentlySelectedState != null){
			for (var i = 0; i < this.GenericStateActions.length; i++){
				switch(this.GenericStateActions[i].GenericActionCondition){
					// TODO : complete & refactor
					case EGenericActionCondition.Owner:{
						if (this.Player() === this.CurrentlySelectedState.CurrentOwner){
							this.CurrentlySelectedStateGenericActions.push(this.GenericStateActions[i]);
						}
					}
						break;
					case EGenericActionCondition.None:{
						this.CurrentlySelectedStateGenericActions.push(this.GenericStateActions[i]);
					}
						break;
					default:;
				}
			}
		}
	}

	this.GetHeroById = function(id){
		for (var i = 0; i < this.ExistingHeroes.length; i++){
			if (this.ExistingHeroes[i].Id.toString() == id){
				return this.ExistingHeroes[i];
			}
		}

		return null;
	}

	// TODO : voir si on garde cette structure par la suite
	this.CurrentlySelectedState = null;
	this.GenericStateActions = new Array();
	var firstAction = new StateGenericAction(EActionAffectationMode.FreeAffectation);
	firstAction.Name = 'Explore';
	firstAction.GenericActionCondition = EGenericActionCondition.Owner;

	var secondAction = new StateGenericAction(EActionAffectationMode.PlayerVsPlayer);
	secondAction.Name = 'Invade';
	secondAction.GenericActionCondition = EGenericActionCondition.None;

	var thirdAction = new StateGenericAction(EActionAffectationMode.PlayerVsScore);
	thirdAction.Name = 'Test';
	thirdAction.GenericActionCondition = EGenericActionCondition.Neighbor;

	this.GenericStateActions.push(firstAction);
	this.GenericStateActions.push(secondAction);
	this.GenericStateActions.push(thirdAction);

	this.CurrentlySelectedStateGenericActions = ko.observableArray();
}