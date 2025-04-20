import { Fragment } from 'react';
import { useState, useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
];

function HomePage(props) {
    return (

        <Fragment>
            <Head>
                <title> React</title>
                <meta name='description' content='browse the website' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}


// this below is the funciton to render the component or the app before the server's 
// pre-rednered during the build phase 
// getServerSideProps is running on the server side, hence not needing revalidate 
// funtion as it would get the data and rendering from the server side 
// this requires async becaues it is associated with sending data or receiving data
// from the server side 


export async function getStaticProps() {


    return {
        props: {
            paths: {
                meetups: meetups.map((meetup) => ({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                }))
            }
        }

    }
}



//serverSideProps is better when there are some incoming request or 
// there are chagnes frequently that the app has to be rendered 
// frequently, more than necessary of 1 second rendering
// for this app, it is better to use getStaticProps as there is not as many
// rednerings needed whenever the data changes and doesn't requrie incoming 
// reqeust 



// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res


//     return {
//         props: {
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }



export default HomePage;