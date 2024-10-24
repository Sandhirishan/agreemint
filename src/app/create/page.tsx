import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadCard from "@/components/UploadCard";

const create: React.FC = () => {


	return (
		<div className="flex items-center justify-center w-full h-[calc(100vh-72px)] p-4 font-inter">
			<UploadCard />
		</div>
	);
};

export default create;
