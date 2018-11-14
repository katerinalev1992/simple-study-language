import {Language} from "../components/enums/Language";

export default class Translation {

    public id: number;
    public source: string;
    public sourceLanguage: Language;
    public targetLanguage: Language;
    public translation: string;

    constructor(source: string, sourceLanguage:Language, targetLanguage: Language, translation: string){
        this.id = Date.now();
        this.source = source;
        this.sourceLanguage = sourceLanguage;
        this.targetLanguage = targetLanguage;
        this.translation = translation;
    }

}