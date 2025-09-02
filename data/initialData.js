const initialExpenses = [
  {
    id: 1,
    amount: 850.50,
    category: "Food",
    date: "2025-09-02",
    note: "Lunch at restaurant",
    timestamp: Date.now() - 86400000
  },
  {
    id: 2,
    amount: 5500.00,
    category: "Bills",
    date: "2025-09-01",
    note: "Electricity bill",
    timestamp: Date.now() - 172800000
  },
  {
    id: 3,
    amount: 3200.25,
    category: "Travel",
    date: "2025-08-31",
    note: "Petrol for car",
    timestamp: Date.now() - 259200000
  },
  {
    id: 4,
    amount: 450.99,
    category: "Others",
    date: "2025-08-30",
    note: "Coffee subscription",
    timestamp: Date.now() - 345600000
  }
];

const categories = [
  { name: "Food", color: "green-500", bgColor: "green-100", icon: "🍽️" },
  { name: "Travel", color: "blue-500", bgColor: "blue-100", icon: "✈️" },
  { name: "Bills", color: "red-500", bgColor: "red-100", icon: "📄" },
  { name: "Others", color: "purple-500", bgColor: "purple-100", icon: "📦" }
];