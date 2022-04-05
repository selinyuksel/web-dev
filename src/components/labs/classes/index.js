import React from "react";
import './index.css';
const Classes = () => {
    const color = 'blue';
    const dangerous = true;
    return(
        <div>
            <h3>Classes</h3>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background</div>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background</div>
        </div>
    )
};
export default Classes;
