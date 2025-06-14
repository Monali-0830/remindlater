# 🕰️ RemindLater - Reminder App

## ✅ Assignment Successfully Completed

This project is a simple yet effective **Reminder App** built with **Node.js**, **Express**, and **MongoDB**. It allows users to create, manage, and complete reminders efficiently.

> 🎯 Assignment goal was to build an API that can store reminders — and I’ve successfully implemented it along with an additional **"Mark as Complete"** feature for better usability.

---

## 🔧 Features

- 📅 **Create Reminders**: Set a date, time, message, and message type (SMS or Email).
- ✅ **Mark as Complete**: Update reminders to show their status as completed.
- 🧾 **Get All Reminders** *(optional if you include it)*: Retrieve all saved reminders.

---

## 📂 Technologies Used

- **Node.js**
- **Express**
- **MongoDB** (with **Mongoose**)
- **Postman** (for API testing)
- **Nodemon** (for auto-refresh during development)

---

## 📥 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Monali-0830/remindlater.git
cd remindlater

# Install dependencies
npm install

# Create a .env file and add your MongoDB URI
# Example:
echo "MONGODB_URL=mongodb+srv://<your-connection-string>" > .env

# Start the server
# For development (with auto-restart)
npm run dev

# Or to start normally
node src/server.js

