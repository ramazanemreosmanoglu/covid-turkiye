import React from "react";
import '../App.css';

export default function Number(props) {
    return (
        <h1 style={{color: props.color}}>{props.number}</h1>
    );
}
