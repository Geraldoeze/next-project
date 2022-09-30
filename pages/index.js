
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
    return (
            <MeetupList meetups={DUMMY_MEETUps} />
        
    )
}

export default Homepage 