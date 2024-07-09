import {configureStore} from "@reduxjs/toolkit";
import ConfigSlice from "./ConfigSlice";

const AppStore=configureStore({
    reducer:{
        config:ConfigSlice
    }
});
export default AppStore;