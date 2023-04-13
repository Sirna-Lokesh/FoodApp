import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const store = configureStore({
    reducer:{
        cart : CartSlice,
    }
})

export  default store;



/**
 * Create a Store using ConfigureStore() - @reduxjs/toolkit 
 *    - configureStore takes an object as parameter , which has reducer as Key 
 *          - That reducer takes name of slice and slice as key Value pairs
 * 
 * Now after creating Store , we have to provide that Store to out application , 
 * <Provide store={store}/> - react-redux
 * 
 * Now we have to createSlices , and for creating slices , we use createSlice() - @reduxjs/toolkit
 * 
 * createSlice() - takes 3 parameters 
 *    1 . Name of the Slice 
 *    2 . IntialState 
 *    3 . reducer Object , which action and reducer functions as key value pairs 
 * 
 * now from here we have to export the createdSlice.reducer function , and action objects of the slice 
 * 
 * 
 * now to make changes in the store we need to dispatch an action ,
 * for that we use a hook which useDispatch - react-redux 
 * const dispatch = useDispatch()
 * dispatch(addItem(data));
 * 
 * now to subscribe to store we use a hook , which is useSelector , this hook directly gives access to store
 * const Data = useSelector((store)=> store.slicename.items)
 *  
 */