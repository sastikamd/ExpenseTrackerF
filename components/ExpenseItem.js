const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  const category = categories.find(cat => cat.name === expense.category);

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200' },
    React.createElement(
      'div',
      { className: 'flex items-center justify-between' },
      React.createElement(
        'div',
        { className: 'flex items-center space-x-3' },
        React.createElement(
          'div',
          { className: `bg-${category?.bgColor} p-2 rounded-full` },
          React.createElement('span', { className: 'text-lg' }, category?.icon)
        ),
        React.createElement(
          'div',
          null,
          React.createElement('div', { className: 'font-medium text-gray-900' }, `₹${expense.amount.toFixed(2)}`),
          React.createElement('div', { className: 'text-sm text-gray-500' }, expense.category)
        )
      ),
      React.createElement(
        'div',
        { className: 'flex items-center space-x-4' },
        React.createElement(
          'div',
          { className: 'text-right' },
          React.createElement('div', { className: 'text-sm font-medium text-gray-900' }, expense.date),
          expense.note && React.createElement('div', { className: 'text-xs text-gray-500 max-w-32 truncate' }, expense.note)
        ),
        React.createElement(
          'div',
          { className: 'flex space-x-2' },
          React.createElement(
            'button',
            {
              onClick: () => onEdit(expense),
              className: 'text-primary-600 hover:text-primary-700 p-1 rounded',
              title: 'Edit expense'
            },
            React.createElement(
              'svg',
              { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              })
            )
          ),
          React.createElement(
            'button',
            {
              onClick: () => onDelete(expense.id),
              className: 'text-red-600 hover:text-red-700 p-1 rounded',
              title: 'Delete expense'
            },
            React.createElement(
              'svg',
              { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              })
            )
          )
        )
      )
    )
  );
};