#  Expense Tracker API

A robust RESTful API for managing expenses, built with Node.js, Express.js, and MongoDB.

## Features

- ✅ Create, read, and delete expenses
- ✅ Automatic date assignment for new expenses
- ✅ MongoDB Atlas cloud database integration
- ✅ Input validation and error handling
- ✅ CORS enabled for cross-origin requests
- ✅ Environment-based configuration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Environment**: dotenv
- **Development**: Nodemon

## API Endpoints

| `GET` - `/api/expenses` - Get all expenses
| `POST` - `/api/expenses`- Create new expense 
| `DELETE` - `/api/expenses/:id` - Delete expense by ID 

## Data Model

```javascript
{
  title: String (required),     // Expense title/description
  amount: Number (required),    // Expense amount
  category: String (required),  // Expense category
  date: Date (required),        // Expense date (auto-generated if not provided)
  _id: ObjectId                 // MongoDB generated ID
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UdithaNeth/Expense-Tracker-API.git
   cd Expense-Tracker-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker?retryWrites=true&w=majority
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Verify the server is running**
   
   Open your browser and navigate to `http://localhost:5000/api/expenses`

## API Usage Examples

### Get All Expenses
```http
GET http://localhost:5000/api/expenses
```

**Response:**
```json
[
  {
    "_id": "671a1234567890abcdef1234",
    "title": "Coffee",
    "amount": 5.50,
    "category": "Food & Beverages",
    "date": "2024-10-24T10:30:00.000Z",
    "__v": 0
  }
]
```

### Create New Expense
```http
POST http://localhost:5000/api/expenses
Content-Type: application/json

{
  "title": "Weekly Groceries",
  "amount": 85.30,
  "category": "Groceries"
}
```

**Response:**
```json
{
  "_id": "671a1234567890abcdef1235",
  "title": "Weekly Groceries",
  "amount": 85.30,
  "category": "Groceries",
  "date": "2024-10-24T15:45:00.000Z",
  "__v": 0
}
```

### Delete Expense
```http
DELETE http://localhost:5000/api/expenses/671a1234567890abcdef1234
```

**Response:**
```json
{
  "message": "Expense deleted successfully"
}
```

## Testing with Postman

A comprehensive Postman collection is included in the repository:

1. **Import the collection**: `Expense-Tracker-API.postman_collection.json`
2. **Set environment variable**: `base_url = http://localhost:5000`
3. **Run the collection** to test all endpoints

The collection includes:
- ✅ Valid expense creation tests
- ✅ Error handling validation
- ✅ Automated ID storage for deletion tests
- ✅ Response validation scripts

## Project Structure

```
Expense-Tracker-API/
├── controllers/
│   └── expenseController.js    # Request handlers
├── models/
│   └── Expense.js             # Mongoose schema
├── routes/
│   └── expenseRoutes.js       # API routes
├── .env                       # Environment variables
├── index.js                   # Server entry point
├── package.json              # Dependencies & scripts
└── README.md                 # Project documentation
```

## Available Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev
```

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid request data or missing required fields
- **500 Internal Server Error**: Database connection issues or server errors

Example error response:
```json
{
  "message": "Expense validation failed: title: Path `title` is required."
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

**Uditha Neth**
- GitHub: [@UdithaNeth](https://github.com/UdithaNeth)

## Acknowledgments

- Express.js for the robust web framework
- MongoDB for the flexible database solution
- Mongoose for elegant MongoDB object modeling

---

**Star this repository if you found it helpful!**
