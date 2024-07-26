import './App.css';
import Login from './Components/Login';
import {Provider} from  "react-redux";
import AppStore from './utils/AppStore';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Products from './Components/Products';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Products/>
    },
    {
      path:"/home",
      element:<ProtectedRoute element={<Home/>}/>
    }
  ]);
  return (
    <div>
      <Provider store={AppStore}>
          <RouterProvider router={AppRouter}/>
      </Provider>
    </div>
  );
}

export default App;
