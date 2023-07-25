import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {

  const{cart} = useSelector((state) => state)
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0 ));
  },[cart])
  
  return (
    <div className="flex flex-col gap-x-2 max-w-6xl mx-auto mt-10 justify-between">
    {
      cart.length > 0 ?
       (<div className="flex ">

          <div className="max-w-6xl">
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div className="flex flex-col mt-20 w-full">
            <div className="flex flex-col gap-1 -mr-10 items-center ">
              <p className="uppercase text-sm">Your Cart</p>
              <div className="uppercase text-4xl text-green-700 font-semibold">Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>
            <div className="mt-[50vh] flex flex-col justify-center items-center">
              <p>Total Amount :<span className="font-bold">$ {totalAmount}</span></p>
              <button
              className="text-slate-100 bg-green-700 rounded-md h-10 p-2 m-2"
              >
                CheckOut Now
              </button>
            </div>

          </div>
         
       </div>) :

        (<div>
          <h1>
            Cart is empty
          </h1>
          <NavLink to="/" >
            <button>
              Shop Now
            </button>
          </NavLink>
        </div>)


    }



    </div>
  )
};

export default Cart;
