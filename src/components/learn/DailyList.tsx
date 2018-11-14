import * as React from "react";
import "./DailyList.css";

export interface IProps {
    opt?: string,
    pDailyRules: string[]
}

interface IState {
    dayRules: string[];
    inputValue: string;
}

class DailyList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {dayRules: this.props.pDailyRules, inputValue: ""};
    }

    public render() {
        return (
            <div className={"dailyMainBlock"}>
                <div className={"dailyHeader"}>{"Daily LIST"}</div>
                <div>{
                    <ul>{this.state.dayRules.map((rule) =>
                        <li key={rule}>{rule}
                            <button>I know it. Archive</button>
                            <button>Learn Later</button>
                        </li>
                    )}
                    </ul>
                }</div>

            </div>
        );
    }
}

export default DailyList;


