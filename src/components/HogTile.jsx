import React, { useState } from "react";
// import hogs from '../porkers_data'
import HogDetail from "./HogDetail";

function HogTile({ name, image, medal, weight, specialty, greased }) {
    const [toggleDetail, setToggleDetail] = useState(false);

    function handleChangeToggle() {
        setToggleDetail((currentState) => !currentState);
    }

    return (
        <div className="ui four wide column" onClick={handleChangeToggle}>
            <h3> {name} </h3>
            <img className="tile-image" src={image} alt={name} />

            {toggleDetail ? (
                <HogDetail
                    medal={medal}
                    weight={weight}
                    specialty={specialty}
                    greased={greased}
                />
            ) : null}
        </div>
    );
}

export default HogTile;
