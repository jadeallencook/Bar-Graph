# Bar Graph

## Installation 

Include both 'bar-graph.css' and 'bar-graph.js' to your document. 

## Usage

[Demo](https://jadeallencook.github.io/Bar-Graph/)

Create 'div' to contain your graph and give it an id. 

```html
<div id="my-bar-graph"></div>
```

```javascript
var options = {
    // id of elem that chart will be appending to
    elem: 'my-bar-graph',
    // background color of the graph
    backgroundColor: 'red',
    // increment between each step
    increment: 5,
    // overall width of graph (default: 100%)
    width: 500
  };

var data = [
    { title: 'Test 1', value: 25, color: 'blue' }, 
    { title: 'Test 2', value: 30, color: 'green' }, 
    { title: 'Test 3', value: 23, color: 'purple' }, 
    { title: 'Test 4', value: 13, color: 'red' }
  ];

barGraph(options, data);
```