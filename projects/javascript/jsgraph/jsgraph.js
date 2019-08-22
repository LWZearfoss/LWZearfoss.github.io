class Graph {
  constructor() {
    this.Vertices = 0;
    this.AdjList = new Map();
  }

  clear() {
    for (var i in this) delete this[i];
    this.Vertices = 0;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
    ++this.Vertices;
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
  }

  deleteVertex(v) {
    for (var i of this.AdjList.keys()) {
      var index = this.AdjList.get(i).indexOf(v);
      if (index > -1) {
        this.AdjList.get(i).splice(index, 1);
      }
    }
    this.AdjList.delete(v);
    --this.Vertices;
  }

  deleteEdge(v, w) {
    var index = this.AdjList.get(v).indexOf(w);
    if (index > -1) {
      this.AdjList.get(v).splice(index, 1);
    }
  }

  adjacencyMatrix() {
    var matrix = new Array();
    for (var i of this.AdjList.keys()) {
      var row = new Array();
      for (var j of this.AdjList.keys()) {
        if (this.AdjList.get(i).includes(j)) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      matrix.push(row);
    }
    return matrix;
  }

  transitiveMatrix() {
    const matrix = this.adjacencyMatrix();
    for (var k = 0; k < this.Vertices; ++k) {
      for (var i = 0; i < this.Vertices; ++i) {
        for (var j = 0; j < this.Vertices; ++j) {
          matrix[i][j] = matrix[i][j] || (matrix[i][k] && matrix[k][j]);
        }
      }
    }
    return matrix;
  }

  importMatrix(m) {
    this.clear();
    for (var i = 0; i < m.length; ++i) this.addVertex(i);

    for (var i = 0; i < m.length; ++i) {
      for (var j = 0; j < m.length; ++j) {
        if (m[i][j]) {
          this.addEdge(i, j);
        }
      }
    }
  }
}

function GenerateTable(g) {
  var matrix = g.adjacencyMatrix();

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var matrixSize = g.Vertices;

  //Add the data rows.
  for (var i = 0; i < matrixSize; i++) {
    row = table.insertRow(-1);
    for (var j = 0; j < matrixSize; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = matrix[i][j];
    }
  }

  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

function TransitiveClosure(g) {
  var t = g.transitiveMatrix();
  var m = g.adjacencyMatrix();
  var d = [];
  for (var i = 0; i < t.length; i++) {
    var row = [];
    for (var j = 0; j < t.length; j++) {
      row.push(t[i][j] - m[i][j]);
    }
    d.push(row);
  }

  for (var i = 0; i < g.Vertices; ++i) {
    for (var j = 0; j < g.Vertices; ++j) {
      if (d[i][j]) {
        if (i == j) {
          nodes.find(
            nodes => nodes.id == Array.from(g.AdjList.keys())[i]
          ).reflexive = true;
        } else {
          var temp = links.find(
            links =>
              links.source.id == Array.from(g.AdjList.keys())[j] &&
              links.target.id == Array.from(g.AdjList.keys())[i]
          );
          if (temp != undefined) {
            temp.left = temp.right = true;
          } else {
            links.push({
              source: nodes.find(
                nodes => nodes.id == Array.from(g.AdjList.keys())[i]
              ),
              target: nodes.find(
                nodes => nodes.id == Array.from(g.AdjList.keys())[j]
              ),
              left: false,
              right: true
            });
          }
        }
      }
    }
    ++j;
  }
  restart();
}

function ConvertGraph(g, n, l) {
  g.clear();

  n.forEach(function(i) {
    g.addVertex(i.id);
    if (i.reflexive) {
      g.addEdge(i.id, i.id);
    }
  });

  l.forEach(function(i) {
    if (i.left) {
      g.addEdge(i.target.id, i.source.id);
    }
    if (i.right) {
      g.addEdge(i.source.id, i.target.id);
    }
  });
}

const graph = new Graph();

// set up SVG for D3
const width = 720;
const height = 720;
const colors = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3
  .select("#dvGraph")
  .append("svg")
  .on("contextmenu", () => {
    d3.event.preventDefault();
  })
  .attr("width", width)
  .attr("height", height);

// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
const nodes = [
  { id: 1, reflexive: false },
  { id: 2, reflexive: true },
  { id: 3, reflexive: false }
];

const links = [
  { source: nodes[0], target: nodes[1], left: false, right: true },
  { source: nodes[1], target: nodes[2], left: false, right: true },
  { source: nodes[2], target: nodes[0], left: false, right: true }
];

let lastNodeId = 3;

// init D3 force layout
const force = d3
  .forceSimulation()
  .force(
    "link",
    d3
      .forceLink()
      .id(d => d.id)
      .distance(150)
  )
  .force("charge", d3.forceManyBody().strength(-500))
  .force("x", d3.forceX(width / 2))
  .force("y", d3.forceY(height / 2))
  .on("tick", tick);

// init D3 drag support
const drag = d3
  .drag()
  // Mac Firefox doesn't distinguish between left/right click when Ctrl is held...
  .filter(() => d3.event.button === 0 || d3.event.button === 2)
  .on("start", d => {
    if (!d3.event.active) force.alphaTarget(0.3).restart();

    d.fx = d.x;
    d.fy = d.y;
  })
  .on("drag", d => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  })
  .on("end", d => {
    if (!d3.event.active) force.alphaTarget(0);

    d.fx = null;
    d.fy = null;
  });

// define arrow markers for graph links
svg
  .append("svg:defs")
  .append("svg:marker")
  .attr("id", "end-arrow")
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 6)
  .attr("markerWidth", 3)
  .attr("markerHeight", 3)
  .attr("orient", "auto")
  .append("svg:path")
  .attr("d", "M0,-5L10,0L0,5")
  .attr("fill", "#000");

svg
  .append("svg:defs")
  .append("svg:marker")
  .attr("id", "start-arrow")
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 4)
  .attr("markerWidth", 3)
  .attr("markerHeight", 3)
  .attr("orient", "auto")
  .append("svg:path")
  .attr("d", "M10,-5L0,0L10,5")
  .attr("fill", "#000");

// line displayed when dragging new nodes
const dragLine = svg
  .append("svg:path")
  .attr("class", "link dragline hidden")
  .attr("d", "M0,0L0,0");

// handles to link and node element groups
let path = svg.append("svg:g").selectAll("path");
let circle = svg.append("svg:g").selectAll("g");

// mouse event vars
let selectedNode = null;
let selectedLink = null;
let mousedownLink = null;
let mousedownNode = null;
let mouseupNode = null;

function resetMouseVars() {
  mousedownNode = null;
  mouseupNode = null;
  mousedownLink = null;
}

// update force layout (called automatically each iteration)
function tick() {
  // draw directed edges with proper padding from node centers
  path.attr("d", d => {
    const deltaX = d.target.x - d.source.x;
    const deltaY = d.target.y - d.source.y;
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const normX = deltaX / dist;
    const normY = deltaY / dist;
    const sourcePadding = d.left ? 17 : 12;
    const targetPadding = d.right ? 17 : 12;
    const sourceX = d.source.x + sourcePadding * normX;
    const sourceY = d.source.y + sourcePadding * normY;
    const targetX = d.target.x - targetPadding * normX;
    const targetY = d.target.y - targetPadding * normY;

    return `M${sourceX},${sourceY}L${targetX},${targetY}`;
  });

  circle.attr("transform", d => `translate(${d.x},${d.y})`);
}

// update graph (called when needed)
function restart() {
  ConvertGraph(graph, nodes, links);
  GenerateTable(graph);

  // path (link) group
  path = path.data(links);

  // update existing links
  path
    .classed("selected", d => d === selectedLink)
    .style("marker-start", d => (d.left ? "url(#start-arrow)" : ""))
    .style("marker-end", d => (d.right ? "url(#end-arrow)" : ""));

  // remove old links
  path.exit().remove();

  // add new links
  path = path
    .enter()
    .append("svg:path")
    .attr("class", "link")
    .classed("selected", d => d === selectedLink)
    .style("marker-start", d => (d.left ? "url(#start-arrow)" : ""))
    .style("marker-end", d => (d.right ? "url(#end-arrow)" : ""))
    .on("mousedown", d => {
      if (d3.event.ctrlKey) return;

      // select link
      mousedownLink = d;
      selectedLink = mousedownLink === selectedLink ? null : mousedownLink;
      selectedNode = null;
      restart();
    })
    .merge(path);

  // circle (node) group
  // NB: the function arg is crucial here! nodes are known by id, not by index!
  circle = circle.data(nodes, d => d.id);

  // update existing nodes (reflexive & selected visual states)
  circle
    .selectAll("circle")
    .style("fill", d =>
      d === selectedNode
        ? d3
            .rgb(colors(d.id))
            .brighter()
            .toString()
        : colors(d.id)
    )
    .classed("reflexive", d => d.reflexive);

  // remove old nodes
  circle.exit().remove();

  // add new nodes
  const g = circle.enter().append("svg:g");

  g.append("svg:circle")
    .attr("class", "node")
    .attr("r", 12)
    .style("fill", d =>
      d === selectedNode
        ? d3
            .rgb(colors(d.id))
            .brighter()
            .toString()
        : colors(d.id)
    )
    .style("stroke", d =>
      d3
        .rgb(colors(d.id))
        .darker()
        .toString()
    )
    .classed("reflexive", d => d.reflexive)
    .on("mouseover", function(d) {
      if (!mousedownNode || d === mousedownNode) return;
      // enlarge target node
      d3.select(this).attr("transform", "scale(1.1)");
    })
    .on("mouseout", function(d) {
      if (!mousedownNode || d === mousedownNode) return;
      // unenlarge target node
      d3.select(this).attr("transform", "");
    })
    .on("mousedown", d => {
      if (d3.event.ctrlKey) return;

      // select node
      mousedownNode = d;
      selectedNode = mousedownNode === selectedNode ? null : mousedownNode;
      selectedLink = null;

      // reposition drag line
      dragLine
        .style("marker-end", "url(#end-arrow)")
        .classed("hidden", false)
        .attr(
          "d",
          `M${mousedownNode.x},${mousedownNode.y}L${mousedownNode.x},${mousedownNode.y}`
        );

      restart();
    })
    .on("mouseup", function(d) {
      if (!mousedownNode) return;

      // needed by FF
      dragLine.classed("hidden", true).style("marker-end", "");

      // check for drag-to-self
      mouseupNode = d;
      if (mouseupNode === mousedownNode) {
        resetMouseVars();
        return;
      }

      // unenlarge target node
      d3.select(this).attr("transform", "");

      // add link to graph (update if exists)
      // NB: links are strictly source < target; arrows separately specified by booleans
      const isRight = mousedownNode.id < mouseupNode.id;
      const source = isRight ? mousedownNode : mouseupNode;
      const target = isRight ? mouseupNode : mousedownNode;

      const link = links.filter(
        l => l.source === source && l.target === target
      )[0];
      if (link) {
        link[isRight ? "right" : "left"] = true;
      } else {
        links.push({ source, target, left: !isRight, right: isRight });
      }

      // select new link
      selectedLink = link;
      selectedNode = null;
      restart();
    });

  // show node IDs
  g.append("svg:text")
    .attr("x", 0)
    .attr("y", 4)
    .attr("class", "id")
    .text(d => d.id);

  circle = g.merge(circle);

  // set the graph in motion
  force
    .nodes(nodes)
    .force("link")
    .links(links);

  force.alphaTarget(0.3).restart();
}

function mousedown() {
  // because :active only works in WebKit?
  svg.classed("active", true);

  if (d3.event.ctrlKey || mousedownNode || mousedownLink) return;

  // insert new node at point
  const point = d3.mouse(this);
  const node = { id: ++lastNodeId, reflexive: false, x: point[0], y: point[1] };
  nodes.push(node);

  restart();
}

function mousemove() {
  if (!mousedownNode) return;

  // update drag line
  dragLine.attr(
    "d",
    `M${mousedownNode.x},${mousedownNode.y}L${d3.mouse(this)[0]},${
      d3.mouse(this)[1]
    }`
  );
}

function mouseup() {
  if (mousedownNode) {
    // hide drag line
    dragLine.classed("hidden", true).style("marker-end", "");
  }

  // because :active only works in WebKit?
  svg.classed("active", false);

  // clear mouse event vars
  resetMouseVars();
}

function spliceLinksForNode(node) {
  const toSplice = links.filter(l => l.source === node || l.target === node);
  for (const l of toSplice) {
    links.splice(links.indexOf(l), 1);
  }
}

// only respond once per keydown
let lastKeyDown = -1;

function keydown() {
  d3.event.preventDefault();

  if (lastKeyDown !== -1) return;
  lastKeyDown = d3.event.keyCode;

  // ctrl
  if (d3.event.keyCode === 17) {
    circle.call(drag);
    svg.classed("ctrl", true);
    return;
  }

  if (!selectedNode && !selectedLink) return;

  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: // delete
      if (selectedNode) {
        nodes.splice(nodes.indexOf(selectedNode), 1);
        spliceLinksForNode(selectedNode);
      } else if (selectedLink) {
        links.splice(links.indexOf(selectedLink), 1);
      }
      selectedLink = null;
      selectedNode = null;
      restart();
      break;
    case 66: // B
      if (selectedLink) {
        // set link direction to both left and right
        selectedLink.left = true;
        selectedLink.right = true;
      }
      restart();
      break;
    case 76: // L
      if (selectedLink) {
        // set link direction to left only
        selectedLink.left = true;
        selectedLink.right = false;
      }
      restart();
      break;
    case 82: // R
      if (selectedNode) {
        // toggle node reflexivity
        selectedNode.reflexive = !selectedNode.reflexive;
      } else if (selectedLink) {
        // set link direction to right only
        selectedLink.left = false;
        selectedLink.right = true;
      }
      restart();
      break;
  }
}

function keyup() {
  lastKeyDown = -1;

  // ctrl
  if (d3.event.keyCode === 17) {
    circle.on(".drag", null);
    svg.classed("ctrl", false);
  }
}

// app starts here
svg
  .on("mousedown", mousedown)
  .on("mousemove", mousemove)
  .on("mouseup", mouseup);
d3.select(window)
  .on("keydown", keydown)
  .on("keyup", keyup);
restart();
