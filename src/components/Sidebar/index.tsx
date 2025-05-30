"use client";
import { useAppDispatch, useAppSelector } from "@/redux/redux";
import { setIsSidebarCollapsed } from "@/redux/state";
import { Archive, Clipboard, IndianRupee, Layout, Menu, SlidersHorizontal, User } from "lucide-react";
import React from "react";
import SidebarLink from "./SidebarLink";




const Sidebar = () =>{

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () =>{
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassName = `fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16":"w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return(
        <div className={sidebarClassName}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
                <div>logo</div>
                <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>WISH</h1>
                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>
            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink
                    href="/dashboard"
                    icon={Layout}
                    label="Dashboard"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventory"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={Clipboard}
                    label="Products"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Users"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/settings"
                    icon={SlidersHorizontal}
                    label="Settings"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/expenses"
                    icon={IndianRupee}
                    label="Expenses"
                    isCollapsed={isSidebarCollapsed}
                />
            </div>
            {/* FOOTER */}
            <div>
                <p className="text-center text-xs text-gray-500">
                    &copy; 2025WISH
                </p>
            </div>
        </div>
    )
}

export default Sidebar;