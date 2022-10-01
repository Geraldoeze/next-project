
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUps = [
    {
        id: 'm1',
        title: 'Our First Meetup.',
        image: 'nig-pic.jpg',
        address: 'some place 45, city unknown',
        description: 'This is a new place'
    },
    {
        id: 'm3',
        title: 'Our Second Meetup.',
        image: 'nig-pic.jpg',
        address: 'some place 45, city unknown',
        description: 'This is a new good place'
    }
];

function Homepage() {
    const  [ loadedMeetups, setLoadedMeetups ] = useState([]);

    useEffect(()=> {
        // send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUps);

    }, []);

    return (
            <MeetupList meetups={loadedMeetups} />
        
    )
}

export default Homepage 