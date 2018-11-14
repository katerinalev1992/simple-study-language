import * as React from "react";
import {Route, Switch} from "react-router-dom";
import About from "../about/About";
import Learn from "../learn/Learn";
import Main from "../main/Main";

export interface IProps {
    opt?: string
}

interface IState {
    opt?: string
}

class ContentPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route exact={true} path="/home" component={Main}/>
                <Route exact={true} path="/learn" component={Learn}/>
                <Route exact={true} path="/about" component={About}/>
            </Switch>
        );
    }

}

export default ContentPage;
