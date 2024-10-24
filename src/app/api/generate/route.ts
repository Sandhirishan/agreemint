import { fileManager, model, FileState } from "@/lib/gemini";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { audioBase64, mimeType, description } = await req.body;
	const prompt = "";
	console.log({audioBase64, mimeType})
	try {
		const result = await model.generateContent([
			{
				inlineData: {
					mimeType: mimeType,
					data: audioBase64,
				},
			},
			{ text: description + prompt },
		]);
		res.status(200).json({ message: result.response.text() });
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: e });
	}
}
