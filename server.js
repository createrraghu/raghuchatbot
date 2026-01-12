import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- Load Keys from .env ----
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const WEATHER_KEY = process.env.WEATHER_KEY;
const NEWS_KEY = process.env.NEWS_KEY;
const CRICKET_KEY = process.env.CRICKET_KEY;


// --------- SMART LIVE QUERY HANDLER ---------
async function handleLiveQuery(text) {
  text = text.toLowerCase().trim();

  // 🗓 Date / Time
  if (/date|today|time|aaj|tarikh/.test(text)) {
    return `📅 Aaj ki date: **${new Date().toLocaleDateString("hi-IN")}** 😎🔥`;
  }

  // 🌦 WEATHER
  if (/weather|mausam|temperature|rain|climate|barish/.test(text)) {
    let city = text.replace(/weather|mausam|temperature|rain|barish|city|ka|in|me|today/g, "").trim();

    if (!city) return "Bhai city bata 😅 (Example: *Delhi weather*)";

    try {
      const r = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`
      );

      return `🌦 **${r.data.name} Weather Update:**  
🌡 Temp: ${r.data.main.temp}°C  
🌤 Condition: ${r.data.weather[0].description}`;
    } catch {
      return "❌ Bro spelling galat lag rahi hai 😅";
    }
  }

  // 📰 NEWS
  if (/news|samachar|headline|update/.test(text)) {
    try {
      const r = await axios.get(
        `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=5&apikey=${NEWS_KEY}`
      );

      return `📰 Top 3 Latest News:\n${r.data.articles
        .slice(0, 3)
        .map((n, i) => `${i + 1}. ${n.title}`)
        .join("\n")}`;
    } catch {
      return "⚠ News API thoda mood me hai bro 😅";
    }
  }

  // 🏏 CRICKET SCORE
  if (/cricket|score|live|match|ipl|t20|odi|india/.test(text)) {
    try {
      const r = await axios.get(
        `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_KEY}&offset=0`
      );

      if (!r.data.data?.length) return "🏏 Abhi koi live match nahi hai 😅";

      const m = r.data.data[0];
      const s = m.score?.[0];

      return `🏏 **Live Cricket Score:**  
📌 Match: ${m.name}  
📊 Score: ${s?.r}/${s?.w} (${s?.o} overs)`;
    } catch {
      return "⚠ Cricket API aaj strike pe hai 😅";
    }
  }

  return null;
}


// ----------- MAIN CHAT AI -----------
app.post("/chat", async (req, res) => {
  const userMsg = req.body.messages.at(-1).content;

  // Check if query is live
  const liveReply = await handleLiveQuery(userMsg);
  if (liveReply) return res.json({ reply: liveReply });

  // Otherwise use OpenAI
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: req.body.messages
      },
      {
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}` }
      }
    );

    return res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error("CHAT ERROR:", err.response?.data || err.message);
    return res.json({ reply: "⚠ Server error aa gaya bro 😅" });
  }
});


// -------- Server Start --------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🔥 Raghu Bot Live at http://localhost:${PORT} 🚀`)
);
