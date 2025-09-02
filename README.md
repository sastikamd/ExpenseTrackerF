# Smart Expense Tracker - Indian Rupees Version

A comprehensive expense tracking application built with React JS, now featuring **Indian Rupees (₹)** as the currency. The app is organized into modular components for better maintainability and code organization.

## 💰 **Currency Features**

- **Indian Rupees (₹)**: All amounts displayed in INR
- **Realistic Sample Data**: Updated with Indian expense amounts
- **Localized Formatting**: Proper rupee symbol placement
- **Indian Context**: Sample expenses like "Petrol for car" instead of "Gas for car"

## 📁 Project Structure

```
expense-tracker-inr/
├── index.html                  # Main HTML file
├── app.js                     # Main application component
├── package.json              # Package configuration
├── README.md                 # This file
├── components/               # React components
│   ├── Header.js            # Application header with ₹ totals
│   ├── ExpenseForm.js       # Form with ₹ labels
│   ├── ExpenseItem.js       # Individual expense item (₹)
│   ├── ExpenseList.js       # List of expenses
│   ├── FilterPanel.js       # Filtering controls (₹ amounts)
│   ├── CategorySummary.js   # Category summary (₹)
│   ├── Charts.js            # Charts with ₹ tooltips
│   └── TabNavigation.js     # Tab navigation
├── utils/                   # Utility functions
│   └── localStorage.js      # Local storage helpers
└── data/                   # Data and constants
    └── initialData.js      # Indian sample data (₹)
```

## 🚀 Sample Data (Indian Context)

The application now includes realistic Indian expense data:

- **Food**: ₹850.50 - Lunch at restaurant
- **Bills**: ₹5,500.00 - Electricity bill  
- **Travel**: ₹3,200.25 - Petrol for car
- **Others**: ₹450.99 - Coffee subscription

## 🎯 **Updated Features for Indian Users**

### ✅ **Currency Conversion**
- All dollar ($) symbols changed to rupee (₹) symbols
- Updated placeholder values to Indian amounts
- Chart tooltips show ₹ formatting
- Form labels specify "Amount (₹)"

### ✅ **Localized Sample Data**
- Realistic Indian expense amounts (₹450-₹5,500 range)
- Indian context descriptions ("Petrol" instead of "Gas")
- Appropriate expense ranges for filtering

### ✅ **All Original Features**
- Complete expense entry with validation
- Category-wise tracking and summaries
- Advanced filtering and sorting
- Interactive data visualization charts
- Full CRUD operations
- Local storage persistence
- Responsive design
- Professional UI

## 💻 Quick Start

1. **Download & Extract**: Unzip to your desired directory

2. **Open in VS Code**:
   ```bash
   code /path/to/expense-tracker-inr
   ```

3. **Run the Application**:
   - **Live Server**: Right-click `index.html` → "Open with Live Server"
   - **Direct Browser**: Open `index.html` in your browser
   - **HTTP Server**: `python -m http.server 3000`

4. **Access**: Open http://localhost:3000

## 📊 **Currency Display Examples**

### Form Inputs
- Amount field labeled as "Amount (₹)"
- Placeholder shows "0.00" for rupee decimals
- Min/Max filters use "₹" labels

### Display Components
- Header shows total as "₹10,000.74"
- Expense items display "₹1,250.50"
- Category summaries show "₹5,500.00"
- Charts display "₹2,300.25 (23.5%)"

### Chart Tooltips
- Pie chart: "Food: ₹850.50 (25.2%)"
- Bar chart: "Travel: ₹3,200.25"
- Y-axis labels: "₹0", "₹1000", "₹2000"

## 🔧 Customization

### Changing Currency Back to Dollars
If you want to switch back to dollars, update these files:
1. `data/initialData.js` - Change sample amounts
2. All component files - Replace ₹ with $
3. Chart tooltips - Update currency symbol

### Adding More Indian Categories
```javascript
const categories = [
  { name: "Food", color: "green-500", bgColor: "green-100", icon: "🍽️" },
  { name: "Transport", color: "blue-500", bgColor: "blue-100", icon: "🚌" },
  { name: "Utilities", color: "red-500", bgColor: "red-100", icon: "💡" },
  { name: "Healthcare", color: "purple-500", bgColor: "purple-100", icon: "🏥" }
];
```

## 🌍 **Perfect for Indian Users**

- **Familiar Currency**: Uses ₹ symbol that Indian users recognize
- **Realistic Amounts**: Sample data reflects typical Indian expenses
- **Local Context**: Uses Indian terminology (Petrol vs Gas)
- **Proper Formatting**: Currency symbol placement follows Indian standards

## 🚀 Deployment

Deploy the same way as before:
- **Netlify**: Drag and drop entire folder
- **Render**: Connect GitHub repository  
- **GitHub Pages**: Enable Pages on your repository

## 📱 Usage

The application works exactly the same, but now with Indian Rupees:

1. **Add Expenses**: Enter amounts in ₹
2. **View Totals**: See spending totals in ₹
3. **Filter by Amount**: Set min/max ranges in ₹
4. **Charts**: Visual spending patterns in ₹
5. **Categories**: Track spending across categories in ₹

## 🔒 Browser Compatibility

- All modern browsers supported
- Mobile-responsive design
- Works offline with localStorage

## 📄 Technical Changes Made

1. **Symbol Replacement**: $ → ₹ throughout all components
2. **Sample Data**: Updated to realistic Indian amounts
3. **Tooltips**: Chart tooltips now show ₹
4. **Labels**: All form labels specify ₹ currency
5. **Placeholders**: Updated to appropriate rupee amounts

This version is perfectly tailored for Indian users while maintaining all the powerful features of the original expense tracker!

## 🤝 Contributing

The modular structure makes it easy to contribute and customize for different regions or currencies.

## 📜 License

Open source under the MIT License.
