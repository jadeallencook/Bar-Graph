window.barGraph = function (options, data) {
  // cache build elems
  var elems = {};
  // set container elem
  var container = document.getElementById(options.elem);
  container.classList.add('graphs-bar-graph');
  // setup container style
  if (options.backgroundColor) container.style.backgroundColor = options.backgroundColor;
  if (options.width) container.style.width = options.width + 'px';
  // set increment value
  var increment = 1;
  if (options.increment) increment = options.increment;
  // configure width for sections
  var sectionWidth = Math.floor(90 / data.length) + '%';
  // create container for count
  elems.count = document.createElement('div');
  elems.count.classList.add('graph-count-container');
  elems.count.style.width = '10%';
  // set max for count
  var maxCount = data.reduce(function (max, bar) {
    bar = bar.value;
    if (bar && bar > max) max = bar;
    return max;
  }, 0);
  // add count step to count container
  for (var x = maxCount; x >= 0; x -= increment) {
    var countStep = document.createElement('div');
    countStep.innerText = x;
    countStep.classList.add('graph-count-step');
    elems.count.appendChild(countStep);
  }
  // add count container to main container
  container.appendChild(elems.count);
  // add labels for the bars
  var barLabelContainer = document.createElement('div');
  var barLabelSpacer = document.createElement('div');
  barLabelContainer.classList.add('graph-bar-label-container');
  barLabelSpacer.classList.add('graph-label-spacer');
  barLabelContainer.appendChild(barLabelSpacer);
  // building each bar
  for (var x = 0, max = data.length; x < max; x++) {
    // create container for bar
    var barContainer = document.createElement('div');
    barContainer.style.width = sectionWidth;
    barContainer.classList.add('graph-bar-container');
    // insert steps into bar
    for (var y = 0; y <= maxCount; y += increment) {
      var barStep = document.createElement('div');
      var stepHeight = document.querySelector('div.graph-count-step').clientHeight;
      barStep.style.height = stepHeight + 'px';
      barStep.classList.add('graph-bar-step');
      barContainer.appendChild(barStep);
    }
    var theBar = document.createElement('div');
    var barHeight = (stepHeight * (data[x].value / increment)) + 'px';
    theBar.style.height = barHeight;
    if (data[x].color) theBar.style.backgroundColor = data[x].color;
    else theBar.style.backgroundColor = 'red';
    theBar.classList.add('graph-the-bar');
    theBar.style.marginTop = '-' + barHeight;
    barContainer.appendChild(theBar);
    container.appendChild(barContainer);
    // add label
    var barLabel = document.createElement('div');
    barLabel.innerText = data[x].title;
    barLabel.classList.add('graph-bar-label');
    barLabel.style.width = sectionWidth;
    barLabelContainer.appendChild(barLabel);
  }
  container.appendChild(barLabelContainer);
};