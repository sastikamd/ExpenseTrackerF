const App = () => {
  const { useState, useEffect, useMemo } = React;

  const [expenses, setExpenses] = useState(() => 
    LocalStorageUtils.load('expenses', initialExpenses)
  );

  const [editingExpense, setEditingExpense] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'date-desc',
    dateRange: 'all',
    amountMin: '',
    amountMax: ''
  });

  useEffect(() => {
    LocalStorageUtils.save('expenses', expenses);
  }, [expenses]);

  const filteredExpenses = useMemo(() => {
    let filtered = [...expenses];

    if (filters.category !== 'all') {
      filtered = filtered.filter(expense => expense.category === filters.category);
    }

    if (filters.amountMin !== '') {
      filtered = filtered.filter(expense => expense.amount >= parseFloat(filters.amountMin));
    }
    if (filters.amountMax !== '') {
      filtered = filtered.filter(expense => expense.amount <= parseFloat(filters.amountMax));
    }

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'amount-desc':
          return b.amount - a.amount;
        case 'amount-asc':
          return a.amount - b.amount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [expenses, filters]);

  // Calculate totals
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalExpenses = expenses.length;

  // Handle adding/updating expense
  const handleExpenseSubmit = (expenseData) => {
    if (editingExpense) {
      // Update existing expense
      setExpenses(expenses.map(expense => 
        expense.id === editingExpense.id ? expenseData : expense
      ));
      setEditingExpense(null);
    } else {
      // Add new expense
      const newExpense = {
        ...expenseData,
        id: Date.now(),
        timestamp: Date.now()
      };
      setExpenses([newExpense, ...expenses]);
    }
  };

  const handleDeleteExpense = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter(expense => expense.id !== id));
      if (editingExpense && editingExpense.id === id) {
        setEditingExpense(null);
      }
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setActiveTab('overview');
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-50' },
    React.createElement(Header, { totalExpenses, totalAmount }),
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6' },
      React.createElement(TabNavigation, { activeTab, onTabChange: setActiveTab }),

      activeTab === 'overview' && React.createElement(
        React.Fragment,
        null,
        React.createElement(ExpenseForm, {
          onSubmit: handleExpenseSubmit,
          editingExpense,
          onCancelEdit: handleCancelEdit
        }),
        React.createElement(CategorySummary, { expenses })
      ),

      activeTab === 'expenses' && React.createElement(
        React.Fragment,
        null,
        React.createElement(FilterPanel, { filters, onFiltersChange: setFilters }),
        React.createElement(ExpenseList, {
          expenses: filteredExpenses,
          onEdit: handleEditExpense,
          onDelete: handleDeleteExpense
        })
      ),

      activeTab === 'charts' && React.createElement(Charts, { expenses: filteredExpenses })
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));