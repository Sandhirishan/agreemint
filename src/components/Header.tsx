import React from "react";
import "material-symbols/outlined.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<div className="flex items-center justify-between px-6 py-4">
			<Link href="/">
			    <div className="flex items-center text-3xl font-bold" id="left">
    				<span className="!text-4xl material-symbols-outlined">eco</span>
    				Agreemint
    			</div>
			</Link>
			<div className="" id="right">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="mr-2">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Header;
