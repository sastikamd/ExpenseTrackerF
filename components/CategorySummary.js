const CategorySummary = ({ expenses }) => {
  const { useMemo } = React;

  const categoryTotals = useMemo(() => {
    return categories.map(category => {
      const categoryExpenses = expenses.filter(expense => expense.category === category.name);
      const total = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0);
      const count = categoryExpenses.length;
      return { ...category, total, count };
    });
  }, [expenses]);

  const maxTotal = Math.max(...categoryTotals.map(cat => cat.total));

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm p-6 mb-6' },
    React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-4' }, 'Category Summary'),
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
      categoryTotals.map((category) =>
        React.createElement(
          'div',
          { key: category.name, className: 'relative' },
          React.createElement(
            'div',
            { className: `bg-${category.bgColor} rounded-lg p-4` },
            React.createElement(
              'div',
              { className: 'flex items-center justify-between mb-2' },
              React.createElement(
                'div',
                { className: 'flex items-center' },
                React.createElement('span', { className: 'text-lg mr-2' }, category.icon),
                React.createElement('span', { className: 'font-medium text-gray-900' }, category.name)
              ),
              React.createElement('span', { className: 'text-sm text-gray-500' }, `${category.count} expenses`)
            ),
            React.createElement('div', { className: 'text-xl font-bold text-gray-900' }, `₹${category.total.toFixed(2)}`),
            React.createElement(
              'div',
              { className: 'mt-2 bg-gray-200 rounded-full h-2' },
              React.createElement('div', {
                className: `bg-${category.color} h-2 rounded-full transition-all duration-500`,
                style: {
                  width: maxTotal > 0 ? `${(category.total / maxTotal) * 100}%` : '0%'
                }
              })
            )
          )
        )
      )
    )
  );
};