import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { SimulationNodeDatum } from 'd3';
import { VizData } from '../state/friends.selectors';

@Component({
  selector: 'app-friend-viz',
  templateUrl: './friend-viz.component.html',
  styleUrls: ['./friend-viz.component.scss']
})
export class FriendVizComponent implements OnInit, OnChanges {
  @Input() data: VizData;

  private margin = {top: 10, right: 30, bottom: 30, left: 40};
  private width = 400 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;
  private svg: any;
  private link: any;
  private node: any;
  private simulation: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.svg) {
      // Initialize the links
      this.link = this.initializeLinks(changes['data'].currentValue);
      // Initialize the nodes
      this.node = this.initializeNodes(changes['data'].currentValue);
      // Let's list the force we wanna apply on the network
      this.simulation = this.initializeSimulation(changes['data'].currentValue);
    }
  }

  ngOnInit(): void {
    // Initialize the SVG
    this.svg = this.initializeSvg();
  }

  private initializeSvg(): any {
    return d3
      .select('#test')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initializeLinks(vizData: VizData): any {
    return this.svg
      .selectAll("line")
      .data(vizData.links)
      .enter()
      .append("line")
      .style("stroke", "#aaa");
  }

  private initializeNodes(vizData: VizData): any {
    return this.svg
      .selectAll("circle")
      .data(vizData.nodes)
      .enter()
      .append("circle")
      .attr("r", 20)
      .style("fill", "#69b3a2");
  }

  private initializeSimulation(vizData: VizData): any {
    return d3.forceSimulation(vizData.nodes as Array<SimulationNodeDatum>)
      .force("link", d3.forceLink().id((d: any) => d.id).links(vizData.links))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .on("end", this.ticked.bind(this));
  }

  private ticked() {
    this.link
      .attr("x1", function(d: any) { return d.source.x; })
      .attr("y1", function(d: any) { return d.source.y; })
      .attr("x2", function(d: any) { return d.target.x; })
      .attr("y2", function(d: any) { return d.target.y; });
    this.node
      .attr("cx", function (d: any) { return d.x+6; })
      .attr("cy", function(d: any) { return d.y-6; });
  }

}
