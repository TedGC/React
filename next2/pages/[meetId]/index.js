import MeetupDetail from "../../components/meetups/MeetupDetail"
// import { MongoClient, ObjectId } from 'mongodb'


function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {
    const meetupId = context.params.meetupId

    const client = await MongoClient.connet('url for your mongoDB')
    const db = client.db()

    const meetupsCollection = db.colleciton('meetups') //this can be anything 
    // and doesn't have to be the same value as what is in the URL that you 
    // extract from the MongoDB URL 

    // const result = await meetupsCollection.insertOne(data)




    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    // within the DB, especially in collection field, we are fetching the data
    // , the value of _id only, and putting them into an array
    // {} for the first argument is to query that we are collecting all the data
    // within the database and within that fetched daba, we are only collecting 
    // the data for _id 

    // the reason why they conver it to Array format is because MongoDB 
    // it non-relational DB which means they are not ordered or organized in an
    // array format. So we are convertinng the unorganized format into an Array format
    // so that JS can read sort the data in the JS format 

    // then within that array, various components will be converted into 'String
    // so that JS can read the data and manipulate them 

    client.close()

    return {
        props: {
            fallback: false,
            paths: meetups.map((meetup) => ({ params: { meetup: meetup._id.toString() } }))
            // _id is the unique identifier MongoDB created from the server side to
            // identify each data within the database

            // this script is literally going through each 'slug' *within App based NextJs)
            // anda display in on the screen using params object and using the unique
            // identifier randomly created by MongoDB by converting it into String 
        }
    }
}

export async function getStaticProps(context) {
    //fetch data from an API

    const meetupId = context.params.meetId

    const client = await MongoClient.connet('url for your mongoDB')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectdMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    })


    client.close()

    return {
        props: {
            meetupData: {
                id: selectdMeetup._id.toString(),
                title: selectdMeetup.title,
                address: selectdMeetup.address,
                image: selectdMeetup.image,
                description: selectdMeetup.description

            }
        }
    }



}
export default MeetupDetails