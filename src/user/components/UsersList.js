import React from "react";
import './UsersList.css';
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

//preentational component just outputs a list of users
const UsersList = (props) => {

    //if passed prop (array) empty, display no users found
    if(props.items.length === 0){
        return <div className='center'>
            <Card>
                <h2>No users found.</h2>
            </Card>
        </div>
    }

    //if passed array not empty, create a UserItem component for each element
    return <ul className="users-list">
        {props.items.map(user => (
             <UserItem key={user.id}
                   id={user.id}
                   image={user.image}
                   name={user.name}
                   placeCount={user.places}
             />
            ))}
    </ul>
}

export default UsersList;