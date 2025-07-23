import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const HF_API_TOKEN = process.env.HF_TOKEN;
const HF_MODEL = process.env.HF_MODEL;

const HF_API_URL = "https://router.huggingface.co/v1/chat/completions";

router.post("/postQ", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch(HF_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HF_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: HF_MODEL,
                messages: [
                    {
                        role: "user",
                        content: message,
                    },
                ],
            }),
        });

        const data = await response.json();
        const reply =
            data?.choices?.[0]?.message?.content || "⚠️ No reply from model.";

        res.json({ reply });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;

