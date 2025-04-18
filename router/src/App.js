import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },  /// or path: ''
      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
