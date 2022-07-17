import React, { useState } from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

function HogContainer() {
    const [hogsArray, setHogsArray] = useState(hogs);

    const hogTileArray = hogsArray.map((hog) => {
        return (
            <HogTile
                key={hog.name}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        );
    });
    return <div className="ui grid container">{hogTileArray}</div>;
}

export default HogContainer;
