import * as React from "react";
import RuleList from "./RuleList";

export interface IProps {
    opt?: string

}

interface IState {
    rules: string[];
}

class Learn extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                    <RuleList/>
            </div>
        );
    }
}

export default Learn;


