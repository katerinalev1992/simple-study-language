import * as React from 'react';
import ContentPage from "../content/ContentPage";
import Menu from "../menu/Menu";
import './App.css';

interface IAppState {
    data: string[];
}

class App extends React.Component <{}, IAppState> {

    public render() {
        return (
            <div>
                <Menu/>
                <ContentPage/>
            </div>
        );
    }
}

export default App;
