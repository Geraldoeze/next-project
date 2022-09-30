import { Fragment } from "react/cjs/react.production.min";
import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
    return ( 
        <section className={classes.details}>
            <img src={props.image} alt='balls' />
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
     );
}
 
export default MeetupDetails;