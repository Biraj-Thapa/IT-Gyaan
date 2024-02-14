"use client"
import React from "react";
import { Navbar, NavbarBrand, Button, NavbarContent, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from '@/redux/reducerSlice/userSlice';
import { useRouter } from "next/navigation";

export default function App() {
  const dispatch=useDispatch();
  const router= useRouter()
  const { isLoggedIn } = useSelector(state => state.user);
  const handleLogout=()=>{
    dispatch (logout())
    router.push("/")
  }

  const LoggedInDrop = () => {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button>
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="Profile">Profile</DropdownItem>
          <DropdownItem key="Library">Library</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem onClick={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  const AuthButtons = () => {
    return (
      <div> 
        <Button as={Link} href='/register' className="mx-2 bg-blue-500 hover:bg-blue-600">Register</Button>
        <Button as={Link} href='/login' className="mx-2 bg-blue-500 hover:bg-blue-600">Login</Button>
      </div>
    );
  }

  return (
    <Navbar isBordered className="bg-gray-900 text-white">
      <NavbarContent justify="between" className="container mx-auto py-4">
        <NavbarBrand>
          <p className="font-bold text-2xl">IT-Gyaan</p>
        </NavbarBrand>

        <div className="flex items-center">
          <div className="relative">
            <Input
              classNames={{
                base: "w-64 h-10 pl-10 pr-3",
                inputWrapper: "h-full font-normal text-black bg-gray-200 dark:bg-gray-800 dark:text-white",
              }}
              placeholder="Search..."
              size="sm"
              type="search"
            />
            <button className="absolute inset-y-0 right-0 px-3 flex items-center">
              <FaSearch className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          {isLoggedIn ? <LoggedInDrop /> : <AuthButtons />}
        </div>
      </NavbarContent>
    </Navbar>
  );
}
