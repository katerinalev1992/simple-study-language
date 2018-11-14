import * as React from "react";
import {Language} from "../enums/Language";

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}

interface IState {
    userName: string;
    image: string;
    email: string;
    age: number;
    dateOdBirth: string;
    nativeLanguage: Language;
    goalLanguages: Language[];
}

class User extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div className="User">
                <img src={this.state.image}>{this.state.userName}</img>
                <div>{this.state.userName}</div>
                <div>{this.state.email}</div>
                <div>{this.state.age}</div>
                <div>{this.state.dateOdBirth}</div>
                <div>{this.state.nativeLanguage}</div>
                <div>{this.state.goalLanguages}</div>
            </div>
        );
    }

}

export default User;
