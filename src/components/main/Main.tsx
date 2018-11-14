import * as React from "react";

export interface IProps {
    opt?: string
}

interface IState {
    opt?: string
}

class Main extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>TEST</div>
        );
    }

}

export default Main;
