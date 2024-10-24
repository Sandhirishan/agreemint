"use client";
import React, { useState } from "react";
import UploadCard from "@/components/UploadCard";
import MarkdownEdit from "@/components/MarkdownEdit";

const create: React.FC = () => {
	const [document, setDocument] = useState(null);
	return (
		<>
			{!document && (
				<div className="flex items-center justify-center w-full h-[calc(100vh-72px)] p-4 font-inter">
					<UploadCard setDocument={setDocument} />
				</div>
			)}
			{document && (
				<div className="flex justify-center"><div className="max-w-screen-md p-4 font-inter"><MarkdownEdit document={document} setDocument={setDocument} /></div></div>
			)}
		</>
	);
};

export default create;
