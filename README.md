# 🤖 Raghu AI Chatbot

A fun, swag-filled AI chatbot with **Hinglish** personality and real-time features like weather, news, and cricket scores!

## ✨ Features

- ✅ **AI Conversations** - Powered by OpenAI GPT-3.5
- 🌤️ **Live Weather** - Real-time weather updates
- 📰 **Latest News** - Top headlines from India
- 🏏 **Cricket Scores** - Live cricket match updates
- ⏰ **Date/Time** - Current date and time in Hindi
- 💬 **Hinglish Support** - Natural language processing in Hinglish
- 🎨 **Beautiful UI** - Modern dark theme with glassmorphism
- 📱 **Responsive Design** - Works on mobile and desktop
- ⌨️ **Typing Effects** - ChatGPT-like streaming text animation

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- API Keys for:
  - OpenAI (ChatGPT)
  - OpenWeatherMap (Weather)
  - GNews (News)
  - CricketData (Cricket)

### Installation

1. **Clone/Download the project**
   ```bash
   cd "raghu chatbot"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your API keys
   ```

4. **Get Your API Keys**

   - **OpenAI API Key**: https://platform.openai.com/api-keys
   - **Weather Key**: https://openweathermap.org/api
   - **News Key**: https://www.gnews.io/
   - **Cricket Key**: https://cricketdata.org/

5. **Start the server**
   ```bash
   npm start
   ```
   The server runs on `http://localhost:5000`

6. **Open in browser**
   ```
   Open index.html in your browser
   ```

## 🎯 Usage

### Chat with Raghu
Type any message and press **Enter** or click **Send**

### Example Queries
- `"What's the weather in Delhi?"` → Live weather data
- `"Show me today's news"` → Latest Indian headlines
- `"Cricket score live"` → Live match updates
- `"What's today's date?"` → Current date
- `"Hey Raghu, tell me a joke"` → AI-generated response

## 📝 Project Structure

```
raghu-chatbot/
├── index.html          # Frontend HTML
├── script.js           # Frontend JavaScript
├── style.css           # Frontend Styling
├── server.js           # Backend Express server
├── package.json        # Dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## 🛠️ Technologies

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **APIs**: OpenAI, OpenWeatherMap, GNews, CricketData
- **Styling**: CSS3 with Glassmorphism effects

## 🔐 Security

- ✅ API keys stored in `.env` (not in code)
- ✅ CORS enabled for local development
- ✅ Input validation and error handling
- ✅ Request timeouts to prevent hanging

## 📊 Improvements Made

1. **Security**: Moved API keys to environment variables
2. **Error Handling**: Better error messages and timeout handling
3. **UI/UX**: 
   - Character counter for input
   - Status indicator for connection
   - Better responsive design
   - Improved accessibility
4. **Performance**: 
   - Request timeouts
   - Better error recovery
   - Optimized animations
5. **Code Quality**: 
   - Better comments
   - Proper error handling
   - Health check endpoint

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000

# Kill process using port 5000
taskkill /PID <PID> /F
```

### API keys not working
- Verify keys are correctly copied to `.env`
- Check if API has quota remaining
- Ensure APIs are active/enabled

### Frontend not connecting
- Verify server is running on `http://localhost:5000`
- Check browser console for errors
- Ensure CORS is enabled (it is by default)

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Chat history persistence
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Deployment to cloud

## 📄 License

MIT - Feel free to use and modify!

## 🎉 Enjoy Chatting with Raghu!

**"Yo bro, Raghu online hai 😎"**
