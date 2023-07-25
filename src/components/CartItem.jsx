import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item , itemIndex}) => {

  const dispactch = useDispatch();

  function removeFromCart(){
    dispactch(remove(item.id))
    toast.error("Item removed")
  }
  return (
    <div className="flex mx-auto max-w-6xl border-b-2 border-black gap-8">

        <div className="flex gap-3 mt-8 mb-6">
          <div className="h-[180px]">
            <img src={item.image} className="h-full w-full"/>
          </div>

          <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-lg max-w-sm">{item.title}</h1>
              <h1 className="text-md max-w-sm">{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
              <div className="flex justify-between items-center">
                <p className=" text-green-600 font-bold">${item.price}</p>
                <FcDeleteDatabase onClick={removeFromCart}
                  className="text-2xl"
                />
              </div>
          </div>



        </div>
    </div>
  )
};

export default CartItem;
