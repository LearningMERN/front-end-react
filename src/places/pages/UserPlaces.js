import React from "react";

//only useable for functional components
import { useParams } from "react-router-dom"
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'A famous sky scraper',
        imageURL: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng:-73.9882393
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'A famous sky scraper',
        imageURL: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng:-73.9882393
        },
        creator: 'u2'
    },
]

const UserPlaces = props => {
    //gives access to parameters in URL from dynamic segment in App.js
    //returns an object with userId property that holds value in URL
    const userId = useParams().userId;

    //creates new array of places if creatorId matches url Id
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;