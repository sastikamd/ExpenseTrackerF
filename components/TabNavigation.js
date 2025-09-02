const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'expenses', name: 'Expenses', icon: '💰' },
    { id: 'charts', name: 'Charts', icon: '📈' },
  ];

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-sm mb-6' },
    React.createElement(
      'nav',
      { className: 'flex space-x-0', 'aria-label': 'Tabs' },
      tabs.map((tab) =>
        React.createElement(
          'button',
          {
            key: tab.id,
            onClick: () => onTabChange(tab.id),
            className: `flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`
          },
          React.createElement('span', { className: 'mr-2' }, tab.icon),
          tab.name
        )
      )
    )
  );
};