import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const HF_API_TOKEN = "xxxxx";
const MODEL_ID = "gpt2";
const HF_API_URL = `https://api-inference.huggingface.co/models/${MODEL_ID}`


router.post("/postQ", async (req, res) => {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Invalid or missing 'message'." });
    }

    try {
        const response = await fetch(HF_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HF_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: message }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: errorText });
        }

        const data = await response.json();
        const reply = data?.[0]?.generated_text || "No response";

        res.json({ reply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
