import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom'

function NewsletterSignup() {
    const fetcher = useFetcher()
    // const { data, state } = fetcher

    //if I want to interact with action or loader without transitioning that the 
    // rotue belongs to (which is a target route in this case) 
    // then use fetcher 
    return (
        <fetcher.Form method="post"
            action='/newsletter'
            className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;