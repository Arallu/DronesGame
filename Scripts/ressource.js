function Ressource(name, description, imagePath){
	this.Name = ko.observable(name);
	this.Description = ko.observable(description);
	this.ImagePath = ko.observable(imagePath);
}