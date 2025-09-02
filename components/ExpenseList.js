const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  if (expenses.length === 0) {
    return React.createElement(
      'div',
      { className: 'bg-white rounded-lg shadow-sm p-8 text-center' },
      React.createElement('div', { className: 'text-gray-400 text-4xl mb-4' }, '💸'),
      React.createElement('h3', { className: 'text-lg font-medium text-gray-900 mb-2' }, 'No expenses found'),
      React.createElement('p', { className: 'text-gray-500' }, 'Add your first expense or adjust your filters.')
    );
  }

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm p-6' },
    React.createElement(
      'h3',
      { className: 'text-lg font-semibold text-gray-900 mb-4' },
      `Recent Expenses (${expenses.length})`
    ),
    React.createElement(
      'div',
      { className: 'space-y-3' },
      expenses.map((expense) =>
        React.createElement(ExpenseItem, {
          key: expense.id,
          expense: expense,
          onEdit: onEdit,
          onDelete: onDelete
        })
      )
    )
  );
};