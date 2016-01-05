/**
 * Created by arall on 02/01/2016.
 */
var EGenericActionCondition = { "None":1, "Neighbor":2, "Owner":3, "OwnerOrNeighbor":4};
Object.freeze(EGenericActionCondition);

var EActionAffectationMode = { "PlayerVsScore":1, "PlayerVsPlayer":2, "FreeAffectation":3};
Object.freeze(EActionAffectationMode);

function StateGenericAction(affectationMode){
    this.Name = null;
    this.GenericActionCondition = EGenericActionCondition.None;
    this.AffectationMode = affectationMode;
    this.Affectation = null;
    switch (this.AffectationMode){
        case EActionAffectationMode.PlayerVsScore:{
            this.Affectation = new PvScoreAffectation();
        }
            break;
        case EActionAffectationMode.PlayerVsPlayer:{
            this.Affectation = new PvPAffectation();
        }
            break;
        case EActionAffectationMode.FreeAffectation:{
            this.Affectation = new ActionAffectation();
        }
            break;
        default: {
            this.Affectation = new ActionAffectation();
        }
    }
    // TODO fill the blanks
}




function ActionAffectation(affectation){
    this.Affectation = affectation;
}

function ActionAffectation(){
    this.Affectation = new Affectation();
}

ActionAffectation.prototype.getAffectation = function(){
    return this.Affectation;
}

function PvScoreAffectation(affectation, score){
    ActionAffectation.call(this, affectation);
    this.Score = score;
}

PvScoreAffectation.prototype = new ActionAffectation();
PvScoreAffectation.prototype.getScore = function(){
    return this.Score;
}

function PvPAffectation(affectation, adverseAffectation){
    ActionAffectation.call(this, affectation);
    this.AdverseAffectation = adverseAffectation;
}

PvPAffectation.prototype = new ActionAffectation();
PvPAffectation.prototype.getAdverseAffectation = function(){
    return this.AdverseAffectation;
}