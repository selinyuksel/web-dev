import React, {useEffect, useState} from "react";
import TuitListItem from "./TuitListItem";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../../actions/tuits-actions";

// const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch),[]);

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