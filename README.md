# 🌸 Blooms&Looms – Handmade Flowers E-Commerce Website

A full-stack **MERN Stack E-Commerce Website** designed for a handmade artificial pipe-cleaner flower business. The platform allows customers to explore handmade products, place orders, request customized designs, and track their orders through a simple and elegant shopping experience.

---

## ✨ Features

### 🛍️ Customer Features
- Browse handmade flower products by category.
- View detailed product information.
- Place orders through an online checkout system.
- UPI QR code-based payment workflow.
- Upload payment screenshots for verification.
- Submit customized flower order requests.
- Track order status using transaction details.
- Responsive and user-friendly interface.

### 🔐 Admin Features
- Admin authentication.
- Interactive dashboard with order and product statistics.
- Add, update, and delete products.
- Manage customer orders.
- Verify payment screenshots.
- Approve or reject customer orders.
- Manage customized order requests.
- Track revenue and order statistics.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| Express.js | Backend Framework |
| React.js | Frontend Library |
| Node.js | Backend Runtime |
| Mongoose | MongoDB Object Modeling |
| JWT | Authentication |
| Bcrypt | Password Hashing |
| Axios | API Communication |
| CSS3 | Styling |
| Cloudinary | Image Management |
| Multer | File Upload Handling |

**Architecture:** MERN (MongoDB, Express.js, React.js, Node.js)

---

## 📂 Project Structure

```text
Handmade-flowers/
│
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
├── server/                  # Node.js & Express Backend
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or local MongoDB installation
- Cloudinary account (if using Cloudinary image uploads)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/indiraparadkar675/BloomsLooms-Handmade-Flowers-Ecomm-Website.git
```

```bash
cd BloomsLooms-Handmade-Flowers-Ecomm-Website
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder and configure the required environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```

Add Cloudinary credentials if your backend uses Cloudinary:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend:

```bash
npm start
```

Backend URL: `http://localhost:5000`

### 3. Setup Frontend

Open another terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the client folder:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the React application:

```bash
npm start
```

Frontend URL: `http://localhost:3000`

---

## 🔄 How It Works

### Customer Workflow
1. Explore available handmade flower products.
2. Select a product or request a customized design.
3. Enter delivery details during checkout.
4. Complete payment using the displayed UPI QR code.
5. Submit the transaction ID and payment screenshot.
6. Track the order status.

### Admin Workflow
1. Log in to the admin dashboard.
2. Manage products and inventory.
3. View incoming customer orders.
4. Verify payment screenshots and transaction details.
5. Approve or reject orders.
6. Manage customized order requests.

---

## 🎨 UI & Design

- Soft pastel-inspired color palette.
- Clean and minimal interface.
- Responsive layouts for different screen sizes.
- User-friendly navigation.
- Smooth hover effects and transitions.

---

## 🔒 Security & Configuration

- Environment variables for sensitive configuration.
- JWT-based authentication.
- Password hashing using Bcrypt.
- Protected admin routes.
- Payment verification workflow.

**Important:** Never upload `.env` files, database credentials, API secrets, or private keys to GitHub.

---

## 👩‍💻 Developer

**Indira Paradkar**

B.Tech Student | Full-Stack Development Enthusiast

- GitHub: [@indiraparadkar675](https://github.com/indiraparadkar675)
- LinkedIn: [Indira Paradkar](https://www.linkedin.com/in/indira-paradkar-93369532b/)

---

## 📌 Future Enhancements

- Online payment gateway integration.
- Email and order confirmation notifications.
- Advanced product search and filtering.
- Customer reviews and ratings.
- Live deployment.

---

⭐ If you like this project, consider giving the repository a star!

**Made with ❤️ for handmade creativity.** 🌸
