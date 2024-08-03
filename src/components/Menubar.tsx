type menuProp = {
  setMenu:any
}

const Menubar = (props:menuProp) => {
  return (
    <div className="flex shadow-sm h-10 p-2">
       <h1 onClick={()=>props?.setMenu("Shirt")} className="ml-48 cursor-pointer" >Shirt</h1>
       <h1 onClick={()=>props?.setMenu("Jacket")} className="ml-5 cursor-pointer">Jacket</h1>
       <h1 onClick={()=>props?.setMenu("Disk")} className="ml-5 cursor-pointer">Phone</h1>
       <h1 onClick={()=>props?.setMenu("electronic")} className="ml-5 cursor-pointer">electronics</h1>
       <h1 onClick={()=>props?.setMenu("clothing")} className="ml-5 cursor-pointer">Clothing</h1>
       <h1 onClick={()=>props?.setMenu("jewelery")} className="ml-5 cursor-pointer">Accessories</h1>
      <h1 onClick={() => props?.setMenu("Stationery")} className="ml-5 cursor-pointer">Stationery</h1>
    </div>
  )
}

export default Menubar