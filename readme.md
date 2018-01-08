# Graphs And Charts

## Installation 

Include both 'graphs-and-charts.css' and 'graphs-and-charts.js' to your document. 

## Bar Graph

Create 'div' to contain your graph and give it an id. 

Inside of your JavaScript call the 'bar' property on the 'graphs' object.

```
  graphs.bar(options, data);
```

The available options for creating an bar graph are the following. 

```
{
  // id of elem that chart will be appending to
  elem: 'id',
  // background color of the graph
  backgroundColor: 'red',
  // increment between each step
  increment: 5,
  // overall width of graph
  width: 500
}
```

And the data should be formatted like the following.

```
[
  { title: 'Test 1', value: 25, color: 'blue' }, 
  { title: 'Test 2', value: 30, color: 'green' }, 
  { title: 'Test 3', value: 23, color: 'purple' }, 
  { title: 'Test 4', value: 13, color: 'red' }
]
```