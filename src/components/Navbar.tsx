import buyme from "../assets/buyme.jpeg"
import lens from "../assets/lens.jpeg"
import arrow from "../assets/arrow.jpeg"
import search from"../assets/search.jpeg"
import Login from "./Login"
import { useState } from "react"

type searchProp = {
    setSearch:any
}
const Navbar = (props:searchProp) => {

    const [loginPop,setLoginPop]=useState(false);

  return (
    <>
       <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={buyme} className="w-12 h-11 mr-6"/>
        <div className="flex border-2 border-spacing-1 w-64 p-2 mr-4 border-black ml-5 bg-white">
            <img src={lens} className="w-6 h-5 mt-1"/>
            <input placeholder="Location" className="ml-3 outline-none"/>
            <img src={arrow} className="w-6 h-7"/>
        </div>
        <div className="flex h-12 ml-5 mr-10 border-2 border-black bg-white">
            <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Find goods" className="ml-3 w-96 outline-none"/>
            <img src={search}/>
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
            <h1 className="font-semibold">ENGLISH</h1>
            <img src={arrow} className="w-8 h-7"/>
        </div>
        <div onClick={()=>setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
            <h1 className="font-bold text-lg">Login</h1>
        </div>
        <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
            <h1 className="font-bold text-lg ml-8">SELL</h1>
        </div>
    </div>
    {loginPop && <Login setLoginPop={setLoginPop}/>}
    </>
    
  )
}

export default Navbar