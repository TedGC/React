import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function RootLayout() {
    // const navigation = useNavigation()
    //navigation is used to show the state of routing transition 
    // hence having values of 'loading', 'submitting', 'idle'

    //useNavigation will be displayed on the page that initiated route
    // transitioning
    return (
        <>
            <MainNavigation />
            <main >
                {/* {navigation.state === 'loading' && <p>Loading ....</p>} */}

                <Outlet />
            </main>
        </>
    )
}



export default RootLayout