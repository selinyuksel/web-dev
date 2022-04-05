import React, {useState} from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits);
    console.log(tuits);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;