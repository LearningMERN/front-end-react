import React from "react";
import './PlaceList.css'
import Card from "../../shared/components/UIElements/Card";
import {Link} from "react-router-dom";
import PlaceItem from "./PlaceItem";


//static component used to render a list of items stylized in PlaceItem
//receives props from UserPlaces
const PlaceList = props => {
    if (props.items.length === 0){
        return (<div className="place-list center">
            <Card>
                <h2>No Places found</h2>
                <button>Share Place</button>
            </Card>
        </div>)
    }

    //creates a stylized render for each element in passed props array
    return ( <ul className="place-list">
        {props.items.map(place => (<PlaceItem key={place.id}
                                             id={place.id}
                                             image={place.imageURL}
                                             title={place.title}
                                             description={place.description}
                                             address={place.address}
                                             creatorID={place.creator}
                                             coordinates={place.location}
        />
        ))}
    </ul>
    )
}

export default PlaceList;