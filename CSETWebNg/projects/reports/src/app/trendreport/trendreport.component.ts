////////////////////////////////
//
//   Copyright 2020 Battelle Energy Alliance, LLC
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//
////////////////////////////////
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AnalysisService } from '../services/analysis.service';
import { ReportService } from '../services/report.service';
import { Title } from '@angular/platform-browser';
import { AggregationService } from  '../../../../../src/app/services/aggregation.service';
import { AggregationChartService } from '../../../../../src/app/services/aggregation-chart.service';



@Component({
  selector: 'rapp-executive',
  templateUrl: './trendreport.component.html'
})
export class TrendReportComponent implements OnInit, AfterViewChecked {
  response: any;

  chartOverallCompl: Chart;
  chartTop5: Chart;
  chartBottom5: Chart;
  chartCategoryPercent: Chart;


  // Charts for Components
  componentCount = 0;
  chartComponentSummary: Chart;
  chartComponentsTypes: Chart;
  warningCount = 0;
  chart1: Chart;

  numberOfStandards = -1;

  pageInitialized = false;



  constructor(
    public reportSvc: ReportService,
    private analysisSvc: AnalysisService,
    private titleService: Title,
    public aggregationSvc: AggregationService,
    public aggregChartSvc: AggregationChartService
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Trend Report - CSET");

    this.reportSvc.getReport('trendreport').subscribe(
      (r: any) => {
        this.response = r;
      },
      error => console.log('Trend report load Error: ' + (<Error>error).message)
    );


    // Populate charts

    // Overall Compliance
    this.aggregationSvc.getOverallComplianceScores().subscribe((x: any) => {
      this.chartOverallCompl = this.aggregChartSvc.buildLineChart('canvasOverallCompliance', x);
    });

    // Top 5
    this.aggregationSvc.getTrendTop5().subscribe((x: any) => {
      this.chartTop5 = this.aggregChartSvc.buildLineChart('canvasTop5', x);
    });

    // Bottom 5
    this.aggregationSvc.getTrendBottom5().subscribe((x: any) => {
      this.chartBottom5 = this.aggregChartSvc.buildLineChart('canvasBottom5', x);
    });

    // Category Percentage Comparison
    this.aggregationSvc.getCategoryPercentageComparisons().subscribe((x: any) => {
      this.chartCategoryPercent = this.aggregChartSvc.buildCategoryPercentChart('canvasCategoryPercent', x);
    });

  }

  ngAfterViewChecked() {

  }
}