import React, { Component }  from 'react';
import "./widget.scss";

import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import PostAddIcon from '@mui/icons-material/PostAdd';
const Widget = ({type}) => {

    let data;

    switch(type){
        case "task":
            data={
                title:"Task",
                isMoney: false,
                link:"Pending task",
                icon:<AssignmentIcon className="icon"/>,
                value: 55
            }
            break;
        case "gTask":
            data={
                title:"Group task",
                link:"Pending group task",
                icon:<FormatListNumberedRtlIcon className="icon"/>,
                value: 2
            }
            break;   
        case "request":
            data={
                title:"Request",
                link:"My request",
                icon:<PostAddIcon className="icon"/>,
                value: 10
            }
            break;
        default:
            break;
    }
    console.log(data);
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.value}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    {data.icon}
                </div>
            </div>
        </div>
    )
}
export default Widget