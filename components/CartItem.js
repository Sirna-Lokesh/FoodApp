import { CLOUD_IMAGE_URL } from "../config"
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../ReduxStore/CartSlice";

//react-icons
import {MdDeleteForever} from "react-icons/md"
import {SiAddthis} from "react-icons/si"
const CartItem = (props) =>{
    const { imageId , avgRating , name , price } = props.item;
    const dispatch = useDispatch();
    const handleIncreaseQuantity = (data) => {
        dispatch(addItem(data));
    }
    const handleDecreaseQuantity = (data) =>{
        dispatch(removeItem(data))
    }
    return (
        <div className="hover:shadow-xl  rounded-xl bg-slate-200  border-b border-gray-950 h-[250px] w-[500px] flex justify-between m-4 p-4 ">
            <div className="">
                <img className="w-[150px] h-[150px] mr-5" src={CLOUD_IMAGE_URL+imageId} alt="Food Image" />

                <div className="w-[150px] flex justify-between bg-gray-100">
                    {/* <button onClick={()=>handleIncreaseQuantity(props.item)} className="bg-gray-400 border border-black text-4xl m-2 p-2 text-center w-11"> + </button> */}
                    <SiAddthis className="mt-[9px] ml-2" size={25} onClick={()=>handleIncreaseQuantity(props.item)}></SiAddthis>
                    <MdDeleteForever size={45}  onClick={()=>handleDecreaseQuantity(props.item)} ></MdDeleteForever>
                </div>
            </div>
            <div className="ml-7">
                <h1 className="text-3xl font-bold">{name} </h1>
                <h1 className="text-2xl text-orange-500">Cost :{parseInt(price)/100} </h1>
                <h1 className="text-2xl text-orange-400">Rating {avgRating} </h1> 
                
            </div>
        </div>
    )
}

export default CartItem;