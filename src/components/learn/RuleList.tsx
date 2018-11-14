import * as React from "react";
import CentralStorage from "../../entity/CentralStorage";
import DailyList from "./DailyList";
import "./RulesList.css";

export interface IProps {
    opt?: string
}

interface IState {
    rules: string[];
    dailyRules: string[];
    inputValue: string;
}

class RuleList extends React.Component<IProps, IState> {
    private textInput: any;

    constructor(props: IProps) {
        super(props);
        this.state = {rules: CentralStorage.rules, inputValue: "", dailyRules: CentralStorage.dailyList};
        this.setInputValue = this.setInputValue.bind(this);
        this.addWord = this.addWord.bind(this);
        this.learnToday = this.learnToday.bind(this);

        this.textInput = React.createRef();
    }

    public render() {
        return (
            <div>
                <div className={"addWordBlock"}>
                    <div className={'LearnTitle'}>
                        Learn
                    </div>
                    <form onSubmit={this.addWord}>
                        <input placeholder={"input the word"} onChange={this.setInputValue} autoFocus={true}
                               ref={this.textInput} className={'LearnInput'}/>
                        <button>Add</button>
                    </form>
                </div>
                <div className={"RulesBlock"}>
                    <div className={"unDoneRules"}>

                        <div>{
                            <ul>{this.state.rules.map((rule, index) =>
                                <li key={index}>{rule}
                                    <button onClick={this.removeWord.bind(this, rule)}>Done</button>
                                    <button onClick={this.learnToday.bind(this, rule)}>Learn today</button>
                                </li>
                            )}
                            </ul>
                        }</div>
                    </div>

                    <div className={"dailyList"}>
                        <DailyList pDailyRules={this.state.dailyRules}/>
                    </div>


                </div>
            </div>

        );
    }

    private removeWord(rule: string) {
        const filteredItems = this.state.rules.filter((item) => {
            return item !== rule
        });
        this.updateRules(filteredItems);
    }

    private learnToday(rule: string) {
        const rules = this.state.dailyRules;
        rules.push(rule);
        this.setState({rules});
        CentralStorage.dailyList = rules;
        this.removeWord(rule);
    }

    private addWord(e: any) {
        e.preventDefault();
        const rules = this.state.rules;
        rules.push(this.state.inputValue);
        this.updateRules(rules);
        this.textInput.current.focus();
        this.textInput.current.value = "";

        if((window as any).Notification && Notification.permission !== "denied") {
            Notification.requestPermission((status)=> {  // status is "granted", if accepted by user
                const p = new Notification('Start learning', {
                    body: 'I am the body text!',
                    icon: '/path/to/icon.png' // optional,
                });
            });
        }
    }

    private setInputValue(e: any) {
        this.setState({inputValue: e.target.value});
    }

    private updateRules(rules: string[]) {
        CentralStorage.rules = rules;
        this.setState({rules});
    }
}

export default RuleList;


