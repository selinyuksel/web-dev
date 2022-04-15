import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo";
import TodoList from "./todo";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <h2>Assignment 6 Lab</h2>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <h3>Links</h3>
            <Link to="/hello">Hello</Link> | <Link to="/tuiter">Tuiter</Link>

            <h2>Assignment 7 Lab</h2>
            <ReduxExamples/>
        </div>
    )

};

export default Labs;

