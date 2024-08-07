import {configureStore} from "@reduxjs/toolkit";
import ConfigSlice from "./ConfigSlice";
import dataSlice from "./dataSlice";

const AppStore=configureStore({
    reducer:{
        config:ConfigSlice,
        data:dataSlice
    }
});
export default AppStore;