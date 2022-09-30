import { Fragment } from "react/cjs/react.production.min";
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
 
export default MeetupInfo;