const Header = ({ totalExpenses, totalAmount }) => {
  return React.createElement(
    'header',
    { className: 'bg-white shadow-sm border-b border-gray-200' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' },
      React.createElement(
        'div',
        { className: 'flex justify-between items-center' },
        React.createElement(
          'div',
          null,
          React.createElement('h1', { className: 'text-2xl font-bold text-gray-900' }, 'Smart Expense Tracker'),
          React.createElement('p', { className: 'text-sm text-gray-600' }, 'Track and manage your daily expenses')
        ),
        React.createElement(
          'div',
          { className: 'flex space-x-6' },
          React.createElement(
            'div',
            { className: 'text-center' },
            React.createElement('div', { className: 'text-2xl font-bold text-primary-600' }, totalExpenses),
            React.createElement('div', { className: 'text-xs text-gray-500' }, 'Total Expenses')
          ),
          React.createElement(
            'div',
            { className: 'text-center' },
            React.createElement('div', { className: 'text-2xl font-bold text-green-600' }, `₹${totalAmount.toFixed(2)}`),
            React.createElement('div', { className: 'text-xs text-gray-500' }, 'Total Amount')
          )
        )
      )
    )
  );
};