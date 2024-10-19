import DocumentsCard from "@/components/DocumentsCard/DocumentsCard";
import React from "react";

const Docs: React.FC = () => {
	return (
		<div className="px-6 py-4 font-inter">
			<DocumentsCard mini={false} />
		</div>
	);
};

export default Docs;
