import './App.css';
import Login from './Components/Login';
import {Provider} from  "react-redux";
import AppStore from './utils/AppStore';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Products from './Components/Products';

function App() {
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Products/>
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
