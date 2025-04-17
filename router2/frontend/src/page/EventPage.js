import { useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList';

function EventsPage() {

    const data = useLoaderData()

    // if(data.isError){
    //     return <p>{data.message}</p>
    // }
    const events = data.events

    return (
        <>
            <EventsList events={events} />
        </>
    );
}
//loader can bu used within the target component or any compnent that goes within
// that target component of using the loader

//loader function is not a React component thus not able to use React hooks
//such as useState, useEffect and whatnot
export default EventsPage;

//this laoder is still happening on the browser side 
export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    //loader function will return async feature automatically as a part of the package

    if (!response.ok) {
        // return { isError: true, message: 'could not fetch events' }
        throw new Response(JSON.stringify({ message: 'could not fetch evetns' },
            { status: 500 }))
        // throw json(
        //     { message: 'could not fetch events' },
        //     { status: 500 }
        // )
    } else {

        return response;


        // const resData = await response.json();
        // const res = new Response('', {status: 201})
    }
}




