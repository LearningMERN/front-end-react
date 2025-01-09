import React from "react";
import UsersList from "../components/UsersList";

//stateful component, an overall page that transforms based on input
const Users = () => {
    const USERS = [
        {id:'u1', name:'Joe bob', image: 'https://images.pexels.com/photos/30102888/pexels-photo-30102888/free-photo-of-shiba-inu-dog-playing-in-autumn-backyard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', places: 3}
    ];

    return <UsersList items={USERS}/>
};

export default Users;