import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'



function ErrorPage() {

    const error = useRouteError()



    let title = 'An error occurred'
    let message = 'soemthing went south'

    if (error.status === 500) {
        message = JSON.parse(error.data).message

        //json.parse removed due to the introduction of json in EventsPage
    }

    if (error.status === 404) {
        title = 'not found'
        message = 'not found either'
    }

    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}


export default ErrorPage