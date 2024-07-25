import { NavLink } from "react-router-dom"
import DashBoard from "../dashboard/Dashboard"
import React from "react";

import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

function DrawerComp() {

    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (<>
        {/* <div className=" p-5 w-[400px] border-2 border-gray-100 rounded-xl ">
       
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
        </div> */}
        <React.Fragment className="">
            {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
            <img src="src\icons\bars (1).png" className="h-8 w-7 m-4 fixed" alt="" onClick={openDrawer} />
            <Drawer open={open} onClose={closeDrawer} className="w-[150px]  ">
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Dashboard
                    </Typography>
                    {/* <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-8 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton> */}
                </div>
                <List className="">
                    <NavLink to={"dashbord"}>
                        <ListItem className="ms-7 w-[200px] group">
                            <div></div>
                            <ListItemPrefix className="">
                                <img src="src\icons\dashboard.png" className="h-8" alt="" />

                            </ListItemPrefix>

                            <span className=" hidden font-bold group-hover:block ">Dashboard</span>
                        </ListItem>

                    </NavLink>
                    <NavLink to={"inventory"}>
                        <ListItem className="ms-7 w-[200px] group">
                            <ListItemPrefix>
                            <img src="src\icons\increase.png" className="h-8" alt="" />
                            </ListItemPrefix>
                            
                            <span className=" hidden font-bold group-hover:block ">Sales Data</span>

                        </ListItem>
                    </NavLink>

                    <ListItem className="ms-7 w-[250px] group">
                    <ListItemPrefix>
                    <img src="src\icons\call-center.png" className="h-8" alt="" />
                    </ListItemPrefix>
                       
                    <span className=" hidden font-bold group-hover:block ">Customer inquiries</span>
                    </ListItem>

                    <ListItem className="ms-7 w-[200px] group">
                    <ListItemPrefix>
                    <img src="src\icons\info.png" className="h-8" alt="" />
                    </ListItemPrefix>
                       
                    <span className=" hidden font-bold group-hover:block ">Car Inventory</span>
                    </ListItem>

                    <ListItem className="ms-7 w-[200px] group">
                    <ListItemPrefix>
                    <img src="src\icons\inventory.png" className="h-8" alt="" />
                    </ListItemPrefix>
                       
                    <span className=" hidden font-bold group-hover:block ">Service Request</span>
                    </ListItem>
                    <ListItem className="ms-7 w-[200px] group">
                    <ListItemPrefix>
                    <img src="src\icons\settings.png" className="h-8" alt="" />
                    </ListItemPrefix>
                      
                    <span className=" hidden font-bold group-hover:block ">Settings</span>
                    </ListItem>
                </List>

            </Drawer>
        </React.Fragment>
    </>)
}

export default DrawerComp