import * as d3 from "d3";
import { select, selectAll } from "d3-selection";

// circles

const circles = d3.select("svg");
const circle = circles.selectAll("circle").data([32, 57]);

const circleEnter = circle.enter().append("circle");

circleEnter.style("fill", "steelblue");
circleEnter
  .attr("cy", 60)
  .attr("cx", (_, i) => i * 100 + 10)
  .attr("r", (d) => Math.sqrt(d as number));

// bars

const data = [4, 8, 15, 16, 23, 43];
const width = 430;

const x = d3
  .scaleLinear()
  .domain([0, d3.max(data) as number])
  .range([0, width]);

const y = d3
  .scaleBand()
  .domain(d3.range(data.length))
  .range([0, 20 * data.length]);

const bars = d3.create("svg")
  .attr("width", width)
  .attr("height", y.range()[1])
  .attr("font-family", "sans-serif")
  .attr("font-size", "10")
  .attr("text-anchor", "end");

const bar = bars.selectAll("g")
  .data(data)
  .join("g")
  .attr("transform", (_, i) => `translate(0, ${y(i)})`);

bar.append("rect")
  .attr("fill", "steelblue")
  .attr("width", x)
  .attr("height", y.bandwidth() - 1)

bar.append("text")
  .attr("fill", "white")
  .attr("x", d => x(d) - 3)
  .attr("y", y.bandwidth() / 2)
  .attr("dy", "0.35em")
  .text(d => d);

d3.select("#bar").append(() => bars.node());
console.log(selectAll("div").nodes());
