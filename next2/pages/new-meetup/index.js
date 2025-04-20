
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'

function NewMeetupPage() {




    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-mmetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        router.push('/')
    }

    return (

        <NewMeetupForm onAddMeetup={addMeetupHandler} />

    )

}

export default NewMeetupPage