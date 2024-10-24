"use client";
import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react"; // Import a spinner icon (optional)
import { MoonLoader } from "react-spinners";

const UploadCard = () => {
	const [audioBase64, setAudioBase64] = useState<string | null>(null);
	const [description, setDescription] = useState("");
	const [mimeType, setMimeType] = useState("");
	const [loading, setLoading] = useState(false); // Loading state for the button

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setMimeType(file.type);
			const reader = new FileReader();
			reader.onloadend = () => {
				setAudioBase64(reader.result as string); // Base64-encoded string
			};
			reader.readAsDataURL(file); // This will trigger the reader.onloadend event
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true); // Set loading state to true

		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					audioBase64: audioBase64, // Send the base64 encoded audio
					mimeType: mimeType,       // Send the MIME type
					description: description, // Include description
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to generate document");
			}

			const data = await response.json();
			console.log("Response from server:", data);

			// You can handle successful response here
		} catch (error) {
			console.error("Error uploading file:", error);
		} finally {
			setLoading(false); // Set loading state back to false
		}
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Create Document</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<Label htmlFor="audio">Upload a Call Recording</Label>
						<Input type="file" name="audio" onChange={handleFileChange} />
						<br />
						<Label htmlFor="description">Description</Label>
						<Input
							type="text"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<br />
						<Button className="bg-voilet" type="submit" disabled={loading}>
							{loading ? (
								<>
									<MoonLoader size={15} />
									Processing...
								</>
							) : (
								"Generate"
							)}
						</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
};

export default UploadCard;
