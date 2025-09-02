const Charts = ({ expenses }) => {
  const { useMemo, useEffect } = React;

  const categoryData = useMemo(() => {
    const totals = {};
    expenses.forEach(expense => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    });
    return totals;
  }, [expenses]);

  useEffect(() => {
    const existingPieChart = Chart.getChart('pieChart');
    const existingBarChart = Chart.getChart('barChart');
    if (existingPieChart) existingPieChart.destroy();
    if (existingBarChart) existingBarChart.destroy();

    if (Object.keys(categoryData).length === 0) return;

    const labels = Object.keys(categoryData);
    const data = Object.values(categoryData);
    const colors = labels.map(label => {
      const category = categories.find(cat => cat.name === label);
      switch(category?.color) {
        case 'green-500': return '#10b981';
        case 'blue-500': return '#3b82f6';
        case 'red-500': return '#ef4444';
        case 'purple-500': return '#8b5cf6';
        default: return '#6b7280';
      }
    });

    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
      new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: colors,
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.raw / total) * 100).toFixed(1);
                  return `${context.label}: ₹${context.raw.toFixed(2)} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }

    const barCtx = document.getElementById('barChart');
    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Amount Spent (₹)',
            data: data,
            backgroundColor: colors,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.label}: ₹${context.raw.toFixed(2)}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '₹' + value.toFixed(0);
                }
              }
            }
          }
        }
      });
    }
  }, [categoryData]);

  if (expenses.length === 0) {
    return React.createElement(
      'div',
      { className: 'bg-white rounded-lg shadow-sm p-8 text-center' },
      React.createElement('div', { className: 'text-gray-400 text-4xl mb-4' }, '📊'),
      React.createElement('h3', { className: 'text-lg font-medium text-gray-900 mb-2' }, 'No data to display'),
      React.createElement('p', { className: 'text-gray-500' }, 'Add some expenses to see your spending patterns.')
    );
  }

  return React.createElement(
    'div',
    { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6' },
    React.createElement(
      'div',
      { className: 'bg-white rounded-lg shadow-sm p-6' },
      React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-4' }, 'Spending Distribution'),
      React.createElement(
        'div',
        { className: 'relative h-64' },
        React.createElement('canvas', { id: 'pieChart' })
      )
    ),
    React.createElement(
      'div',
      { className: 'bg-white rounded-lg shadow-sm p-6' },
      React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-4' }, 'Category Comparison'),
      React.createElement(
        'div',
        { className: 'relative h-64' },
        React.createElement('canvas', { id: 'barChart' })
      )
    )
  );
};