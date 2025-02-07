# URL-Shortener

A simple and efficient **URL Shortener** web application that allows users to generate short URLs for long links and track click statistics.

## 🚀 Features
- Generate short URLs instantly
- Track click counts for shortened links
- Responsive UI with modern **Tailwind CSS**
- Dynamic updates without page refresh

## 🛠️ Technologies Used
- **Frontend:** HTML, Tailwind CSS, JavaScript (fetch API for dynamic updates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 📂 Project Structure
```
URL-Shortener/
│-- public/           # Static assets
│-- views/            # HTML templates
│-- routes/           # Express routes
│-- models/           # Mongoose models
│-- server.js         # Main server file
│-- package.json      # Project dependencies
│-- README.md         # Project documentation
```

## 🚀 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/srivardhan0909/URL-Shortener.git
cd URL-Shortener
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure environment variables
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Start the server
```sh
npm start
```
The app will be running at **http://localhost:3000**

## 📌 Usage
1. Enter the long URL and click **Generate ShortURL**.
2. The short URL appears immediately.
3. Click tracking updates in real-time.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## 📜 License
This project is **open-source** and available under the **MIT License**.

---
🚀 **Developed by Srivardhan Jakkani**

