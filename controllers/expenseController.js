import Expense from "../models/Expense.js";

// Get all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new expense
export const addExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  const expense = new Expense({ 
    title, 
    amount, 
    category, 
    date: date || new Date() // Use provided date or current date as default
  });
  try {
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete expense
export const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
