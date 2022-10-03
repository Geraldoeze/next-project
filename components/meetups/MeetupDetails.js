import Image from 'next/image';
import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
    return ( 
        <section className={classes.details}>
            {/* <img src={props.image} alt='balls' /> */}
            <Image src={props.image} alt="Image" />
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
     );
}
 
export default MeetupDetails;