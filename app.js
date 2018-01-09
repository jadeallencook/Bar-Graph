(function () {
  // create bar graph
  var barGraphOptions = { elem: 'bar-graph', backgroundColor: 'white', increment: 5, width: 500 };
  var barGraphData = [
    { title: 'Test 1', value: 25, color: 'blue' },
    { title: 'Test 2', value: 30, color: 'green' }, 
    { title: 'Test 3', value: 23, color: 'purple' }, 
    { title: 'Test 4', value: 13, color: 'red' }
  ];
  graphs.bar(barGraphOptions, barGraphData);
  // create pie chart
  var pieChartOptions = { elem: 'pie-chart', radius: 500 };
  var pieChartData = [
    { title: 'Test 1', value: 25, color: 'blue' },
    { title: 'Test 2', value: 30, color: 'green' }, 
    { title: 'Test 3', value: 23, color: 'purple' }, 
    { title: 'Test 4', value: 13, color: 'red' }
  ];
  charts.pie(pieChartOptions, pieChartData);
})();