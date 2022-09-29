import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';


function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    function submitHandler(event) {
        event.preventDeafult();

    }
    
}

export default NewMeetupForm;