import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo";
import TodoList from "./todo";

const Labs = () => {
    return(
        <div>
            <h1>Assignment 6 Lab</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <h2>Links</h2>
            <Link to="/hello">Hello</Link> | <Link to="/tuiter">Tuiter</Link>

        </div>
    )

};

export default Labs;

