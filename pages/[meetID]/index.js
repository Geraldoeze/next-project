
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupInfo = () => {
    
    return (
     <MeetupDetails 
        image='nig-pic.jpg' 
        title='First meeting'
        address="One place like that"
        description="Our first meeting"
     />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetID: 'm1',
            },},
            { params: {
                meetID: 'm2',
            },},
        ]
    }
}

export async function getStaticProps(context) {
    //  fetch data for a single meetup
    const meetupId = context.params.meetID;
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                image:'nig-pic.jpg', 
                id: meetupId,
                title:'First meeting',
                address:"One place like that",
                description:"Our first meeting",
            }
        }
    }
}
 
export default MeetupInfo;