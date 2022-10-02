import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


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
    const MONGODB_URI = 'mongodb://127.0.0.1:27017/meetups';
    //  fetch data from an API
    const client = await MongoClient.connect(MONGODB_URI)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        }, 
        revalidate: 10 
    };
}

export default Homepage 