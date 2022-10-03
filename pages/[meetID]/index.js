import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Card from '../../components/ui/Card';


const MeetupInfo = (props) => {
    
    return (
    <Card>
     <MeetupDetails 
        title={props.meetupData.title}
        image={props.meetupData.image} 
        address={props.meetupData.address}
        description={props.meetupData.description}
     />
    </Card>
    );
}

export async function getStaticPaths() {
    const MONGODB_URI = 'mongodb://127.0.0.1:27017/meetups';
    const client = await MongoClient.connect(MONGODB_URI)
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetID: meetup._id.toString()}
        }))
        
    }
}

export async function getStaticProps(context) {
//  fetch data for a single meetup

    const meetupId = context.params.meetID;

    const MONGODB_URI = 'mongodb://127.0.0.1:27017/meetups';
    const client = await MongoClient.connect(MONGODB_URI)
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }, 
        }
    }
}
 
export default MeetupInfo;