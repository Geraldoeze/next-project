import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    function addMeetupHandler(enteredValue) {
        console.log(enteredValue)
    }
 return (
     <NewMeetupForm  onAddMeetup={addMeetupHandler} />
 )
} 

export default NewMeetupPage;