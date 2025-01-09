import React from "react";
//allows linking to new propPages without page reloading
import {Link} from "react-router-dom";
import './UserItem.css';
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";


//presentational component for styling 1 element on the page
//takes props from UsersList and styles them
const UserItem = (props) => {
return (
    <li className="user-item">
        <Card className="user-item__content">
            <Link to={`/${props.id}/places`}>
                <div className="user-item__image">
                   <Avatar image={props.image} alt={props.alt}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
            </Link>
        </Card>
    </li>
);
};

export default UserItem;