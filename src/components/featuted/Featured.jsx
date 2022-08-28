import "./featured.scss";
import React, { Component }  from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
            <h1 className="title">Pending Task</h1>
            <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Total Task</p>
                <p className="count">1</p>
            </div>
        </div>
    )
}
export default Featured