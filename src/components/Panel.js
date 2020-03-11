import React from "react";

export default function Panel(props) {
    return (
        <div className="panel">
            <div className="panel__heading">{props.heading}</div>
            <div className="panel__content">{props.content}</div>
            <img src={props.img}/>
            {props.children}
        </div>
    )
}