import React from "react";
// import HogTile from './HogTile'

function HogDetail({ medal, weight, greased, specialty }) {
    return (
        <div>
            <p> {medal}</p>
            <p> {weight}</p>
            <p> {greased ? "Is Greased?" : "Not Greased"}</p>
            <p> {specialty}</p>
        </div>
    );
}

export default HogDetail;
