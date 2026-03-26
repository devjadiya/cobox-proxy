import express from "express";
import fetch from "node-fetch";
const app = express();

app.use(express.json());

app.post("/ai/instant", async (req, res) => {
  try {
    const response = await fetch("https://ai.cobox.co/ai/instant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    res.status(response.status).send(text);
  } catch (err) {
    res.status(500).send("error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
