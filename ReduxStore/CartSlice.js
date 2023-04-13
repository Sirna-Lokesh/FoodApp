import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers:{
        addItem : (state,action) =>{
            state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
            //state.items=state.items.filter((item)=> item.name!=action.payload.name)
            for(let i=0 ;i<state.items.length;i++){
                if(state.items[i].name==action.payload.name){
                    state.items.splice(i,1);
                    break;
                }
            }
        },
        clearCart : (state,action)=>{
            state.items = [] 
        }

    }

});

export  const { addItem , removeItem , clearCart } = cartSlice.actions;

export default cartSlice.reducer;
