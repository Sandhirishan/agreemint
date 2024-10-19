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

const CreateCard: React.FC = () => {
	return (
			<Card className="h-full">
				<CardHeader>
					<CardTitle>Create Document</CardTitle>
					<CardDescription>
						Generate a new agreement using our AI-powered wizard.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button className="w-full bg-voilet">
						<span className="material-symbols-outlined">
							new_window
						</span>{" "}
						Create an agreement
					</Button>
				</CardContent>
			</Card>
	);
};

export default CreateCard;
