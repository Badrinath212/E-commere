import './App.css';
import Login from './Components/Login';
import {Provider} from "react-redux";
import AppStore from './utils/AppStore';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Products from './DbComponents/Products';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductsPage from './Components/ProductsPage';
import CategoryForm from './DbComponents/category';
import CategoryList from './Components/CategoryList';

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <Products />
    },
    {
      path: "/home",
      element: <ProtectedRoute element={<Home />} />,
      children: [
        {
          path : "/home/:category",
          element : <CategoryList/>
        },
        {
          path : "/home/electronics/products",
          element : <ProductsPage/>
        }
      ]
    },
    {
      path : '/category',
      element: <CategoryForm/>
    }
  ]);

  return (
    <div>
      <Provider store={AppStore}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
}

export default App;
