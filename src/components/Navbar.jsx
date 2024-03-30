import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useSelector } from 'react-redux';
export default function App() {
    const log = useSelector((state) => state.logged)
   
    return (
        <Navbar shouldHideOnScroll className="bg-slate-950 text-white">
            <NavbarBrand>
                <Logo />
            </NavbarBrand>
            {!log ? (<NavbarContent justify="end">
                <NavbarItem>
                    <Link to={'/'}>
                        <Button color="primary" variant="flat">
                            Sign In
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>) :
                (<NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem >
                        <Link className="text-white" to={"/list"}>
                            Home
                        </Link>
                    </NavbarItem>
                </NavbarContent>)
            }
        </Navbar>
    );
}
