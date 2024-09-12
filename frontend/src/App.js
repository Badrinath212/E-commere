import './App.css';
import Login from './Components/Login';
import {Provider} from "react-redux";
import AppStore from './utils/AppStore';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Products from './DbComponents/Products';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import CategoryForm from './DbComponents/category';
import CategoryList from './Components/CategoryList';
import Body from './Components/Body';
import Offers from './Components/offers'
import ItemPage from './Components/ItemPage';
import Cart from './Components/Cart';

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
          path : "/home/",
          element : <Offers/>
        },
        {
          path : "/home/cart",
          element : <Cart/>
        },
        {
          path : "/home/:category",
          element : <CategoryList/>
        },
        {
          path : "/home/:category/:products",
          element : <Body/>
        },
        {
          path : "/home/:category/:products/item",
          element : <ItemPage/>
        }
      ]
    },
    {
      path : '/category',
      element: <CategoryForm/>
    },
    {
      path : '/offer',
      element : <Offers/>
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
