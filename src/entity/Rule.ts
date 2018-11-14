import {IRuleType} from "../components/enums/IRuleType";
import Translation from "./Translation";

export default class Rule {

    public id: number;
    public title: string;
    public translation: Translation;
    public ruleType: IRuleType;

    constructor(title: string, translation: Translation, ruleType: IRuleType){
        this.id = Date.now();
        this.title = title;
        this.translation = translation;
        this.ruleType = ruleType;
    }

}