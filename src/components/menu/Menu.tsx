import * as React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

export interface IProps {
    opt?: string
}

interface IState {
    opt?: string
}

class Menu extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <nav>
                <ul className={"Menu"}>
                    <li className={"MenuLi"}><NavLink to='/home'>Home</NavLink></li>
                    <li className={"MenuLi"}><NavLink to='/learn'>Learn</NavLink></li>
                    <li className={"MenuLi"}><NavLink to='/about'>About</NavLink></li>
                </ul>
            </nav>
        );
    }

}

export default Menu;
