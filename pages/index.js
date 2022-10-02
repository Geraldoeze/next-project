

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
        id: 'm2',
        title: 'Our Second Meetup.',
        image: 'nig-pic.jpg',
        address: 'some place 45, city unknown',
        description: 'This is a new good place'
    }
];

function Homepage(props) {
    

    return (
            <MeetupList meetups={props.meetups} />
        
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // the code written within this function only runs on the server(back-end)
//     return {
//         props: {
//             meetups: DUMMY_MEETUps
//         }
//     }
// }

export async function getStaticProps() {
    //  fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUps
        }, 
        revalidate: 10 
    };
}

export default Homepage 