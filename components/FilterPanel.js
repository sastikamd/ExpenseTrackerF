const FilterPanel = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'all',
      sortBy: 'date-desc',
      dateRange: 'all',
      amountMin: '',
      amountMax: ''
    });
  };

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm p-4 mb-6' },
    React.createElement(
      'div',
      { className: 'flex justify-between items-center mb-4' },
      React.createElement('h3', { className: 'text-lg font-semibold text-gray-900' }, 'Filters & Sorting'),
      React.createElement(
        'button',
        {
          onClick: clearFilters,
          className: 'text-sm text-primary-600 hover:text-primary-700'
        },
        'Clear All'
      )
    ),
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' },
      React.createElement(
        'div',
        null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Category'),
        React.createElement(
          'select',
          {
            value: filters.category,
            onChange: (e) => handleFilterChange('category', e.target.value),
            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm'
          },
          React.createElement('option', { value: 'all' }, 'All Categories'),
          categories.map((cat) =>
            React.createElement('option', { key: cat.name, value: cat.name }, `${cat.icon} ${cat.name}`)
          )
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Sort By'),
        React.createElement(
          'select',
          {
            value: filters.sortBy,
            onChange: (e) => handleFilterChange('sortBy', e.target.value),
            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm'
          },
          React.createElement('option', { value: 'date-desc' }, 'Newest First'),
          React.createElement('option', { value: 'date-asc' }, 'Oldest First'),
          React.createElement('option', { value: 'amount-desc' }, 'Highest Amount'),
          React.createElement('option', { value: 'amount-asc' }, 'Lowest Amount')
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Min Amount (₹)'),
        React.createElement('input', {
          type: 'number',
          step: '0.01',
          value: filters.amountMin,
          onChange: (e) => handleFilterChange('amountMin', e.target.value),
          className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm',
          placeholder: '0.00'
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Max Amount (₹)'),
        React.createElement('input', {
          type: 'number',
          step: '0.01',
          value: filters.amountMax,
          onChange: (e) => handleFilterChange('amountMax', e.target.value),
          className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm',
          placeholder: '9999.99'
        })
      )
    )
  );
};