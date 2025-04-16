import { useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList';

function EventsPage() {

    const data = useLoaderData()
    const events = data.events

    return (
        <>
            <EventsList events={events} />
        </>
    );
}


//loader function is not a React component thus not able to use React hooks
//such as useState, useEffect and whatnot
export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return { isError: true, message: 'could not fetch events' }

    } else {

        return response;


        // const resData = await response.json();
        // const res = new Response('', {status: 201})
    }
}





