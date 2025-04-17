import { useRouteLoaderData, redirect } from 'react-router-dom'
import EventItem from '../components/EventItem'


function EventDetailPage() {



    const data = useRouteLoaderData('event-detail')
    return (
        <>
            <EventItem event={data.event} />

        </>
    )
}

export default EventDetailPage

export async function loader({ request, params }) {
    // the request object here in a loader could be used to access the URL to, for exmaple,
    // extract query parameters or anything like that
    // with Params prop, we can get access to all the route parameter values as we could
    // do it with help of use params. 
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/' + id)
    // return response; 
    // the reason why await is used here is because we want to await the response 
    // then check if the response is ok or not first
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'could not fetch evetns' },
            { status: 500 }))
    } else {
        return response
    }
}



export async function action({ params, request }) {
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    })

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'could not delete event' },
            { status: 500 })
        )
    }
    return redirect('/events')
}