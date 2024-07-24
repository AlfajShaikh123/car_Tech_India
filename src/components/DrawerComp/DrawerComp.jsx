import { NavLink } from "react-router-dom"
import DashBoard from "../dashboard/Dashboard"

function DrawerComp()
{
    return(<>
        <div className=" p-5 w-[400px] border-2 border-gray-100 rounded-xl ">
       
            <ul className="m-5 space-y-5 fixed ">
                <NavLink to={"dashbord"}>
                <li className="flex space-x-3 hover:bg-purple-50   hover: p-5 "><img src="https://static-00.iconduck.com/assets.00/dashboard-icon-2048x2048-smbjyr2w.png" className="h-6" alt="" /><p className="text-sm "> Dashboard</p> </li></NavLink>
                
                <NavLink to={"inventory"}>
                <li className="flex space-x-3 hover:bg-purple-50   hover: p-5 "><img src="https://w7.pngwing.com/pngs/364/888/png-transparent-inventory-management-software-barcode-cost-scanning-cars-text-rectangle-logo-thumbnail.png" className="h-6" alt="" /><p className="text-sm "> Car Inventory</p> </li>
                </NavLink>
                
                <li className="flex space-x-3 hover:bg-purple-50  hover: p-5 cursor-pointer "><img src="https://static.thenounproject.com/png/303640-200.png" className="h-6" alt="" /><p className="text-sm "> Sales Data</p> </li>
                <li className="flex space-x-3 hover:bg-purple-50   hover: p-5 cursor-pointer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G_lXK5cROdWBjbkK6h3rghuHW1pcfFwDfg&s" className="h-6" alt="" /><p className="text-sm "> Customer inquires</p> </li>
                <li className="flex space-x-3 hover:bg-purple-50  hover: p-5 cursor-pointer"><img src="https://cdn-icons-png.flaticon.com/128/1436/1436706.png" className="h-6" alt="" /><p className="text-sm ">Service Requests </p> </li>
                <li className="flex space-x-3 hover:bg-purple-50  hover: p-5 cursor-pointer "><img src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png" className="h-6" alt="" /><p className="text-sm ">Settings </p> </li>
            </ul>
        </div>
    </>)
}

export default DrawerComp