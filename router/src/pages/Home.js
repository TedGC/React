import { Link, useNavigate } from 'react-router-dom'



function Homepage() {
    // const navigate = useNavigate()

    // function navigateHandler () {
    //     navigate('/products')

    //     // this function will navigate the features/fucntion to the desingated page
    // }

    return (
        <>
            <h1>home page</h1>
            <p>go to <Link to='products'>to the list of products</Link>
            </p>
        </>

    )
}

export default Homepage