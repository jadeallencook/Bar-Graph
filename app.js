(function () {
  // create bar graph
  var barGraphOptions = { elem: 'bar-graph', backgroundColor: 'white', increment: 5 };
  var barGraphData = [
    { title: 'Test 1', value: 25, color: 'blue' },
    { title: 'Test 2', value: 30, color: 'green' }, 
    { title: 'Test 3', value: 23, color: 'purple' }, 
    { title: 'Test 4', value: 13, color: 'red' }
  ];
  barGraph(barGraphOptions, barGraphData);
})();