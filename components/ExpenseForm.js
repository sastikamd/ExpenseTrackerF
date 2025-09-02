const ExpenseForm = ({ onSubmit, editingExpense, onCancelEdit }) => {
  const { useState, useEffect } = React;

  const [formData, setFormData] = useState({
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
    note: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        amount: editingExpense.amount.toString(),
        category: editingExpense.category,
        date: editingExpense.date,
        note: editingExpense.note
      });
    }
  }, [editingExpense]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount greater than 0';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const expenseData = {
      ...formData,
      amount: parseFloat(formData.amount),
      timestamp: Date.now()
    };

    if (editingExpense) {
      expenseData.id = editingExpense.id;
    }

    onSubmit(expenseData);

    if (!editingExpense) {
      setFormData({
        amount: '',
        category: 'Food',
        date: new Date().toISOString().split('T')[0],
        note: ''
      });
    }

    setErrors({});
  };

  const handleCancel = () => {
    setFormData({
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
      note: ''
    });
    setErrors({});
    onCancelEdit();
  };

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm p-6 mb-6' },
    React.createElement(
      'h2',
      { className: 'text-lg font-semibold text-gray-900 mb-4' },
      editingExpense ? 'Edit Expense' : 'Add New Expense'
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit, className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Amount (₹)'),
          React.createElement('input', {
            type: 'number',
            step: '0.01',
            value: formData.amount,
            onChange: (e) => setFormData({ ...formData, amount: e.target.value }),
            className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.amount ? 'border-red-500' : 'border-gray-300'
            }`,
            placeholder: '0.00'
          }),
          errors.amount && React.createElement('p', { className: 'text-red-500 text-xs mt-1' }, errors.amount)
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Category'),
          React.createElement(
            'select',
            {
              value: formData.category,
              onChange: (e) => setFormData({ ...formData, category: e.target.value }),
              className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              }`
            },
            categories.map((cat) =>
              React.createElement('option', { key: cat.name, value: cat.name }, `${cat.icon} ${cat.name}`)
            )
          ),
          errors.category && React.createElement('p', { className: 'text-red-500 text-xs mt-1' }, errors.category)
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Date'),
          React.createElement('input', {
            type: 'date',
            value: formData.date,
            onChange: (e) => setFormData({ ...formData, date: e.target.value }),
            className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`
          }),
          errors.date && React.createElement('p', { className: 'text-red-500 text-xs mt-1' }, errors.date)
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Note (Optional)'),
          React.createElement('input', {
            type: 'text',
            value: formData.note,
            onChange: (e) => setFormData({ ...formData, note: e.target.value }),
            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            placeholder: 'Add a note...'
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'flex space-x-3' },
        React.createElement(
          'button',
          {
            type: 'submit',
            className: 'flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium'
          },
          editingExpense ? 'Update Expense' : 'Add Expense'
        ),
        editingExpense && React.createElement(
          'button',
          {
            type: 'button',
            onClick: handleCancel,
            className: 'px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200'
          },
          'Cancel'
        )
      )
    )
  );
};