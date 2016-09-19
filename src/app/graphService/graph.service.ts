import {Injectable} from '@angular/core';

interface IChartData {
  context: CanvasRenderingContext2D;
  properties: LinearChartData;
  chart: any;
  data: number[];
  labels: string[];
};

@Injectable()
export class GraphService {

  private _chartData: IChartData;
  private _datasets: ChartDataSet[];

  constructor() {
    this._chartData = {} as IChartData;
    this._chartData.properties = {} as LinearChartData;

    this._chartData.properties.datasets = [{
      data: [],
      fillColor: 'rgba(96,125,139,0.2)',
      label: 'Temperature',
      strokeColor: 'rgba(96,125,139,1)'
    }];

    // Initialize data for graph - todo: connect to db
    this._chartData.labels = ['6:00', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];
    this._chartData.data = [60, 80, 75, 50, 65, 60];
  }

  // Set the context for the graph
  private setChartContext(elementName: string) {
    let ctx = document.getElementById(elementName) as HTMLCanvasElement;
    this._chartData.context = ctx.getContext('2d');
  }

  // Set the properties for the graph
  private setChartProperties() {
    this._chartData.properties.labels = this._chartData.labels;
    this._chartData.properties.datasets[0].data = this._chartData.data;
  }

  // Create the graph
  public create_chart(elementName: string, graphType: string) {
    this.setChartContext(elementName);
    this.setChartProperties();

    // Make the graph
    this._chartData.chart = new Chart(this._chartData.context, {
        type: graphType,
        data: this._chartData.properties,
        options: null
    });
  }

  // Update chart with new data/labels
  public update_chart(data: number[], labels: string[]) {
    this._chartData.properties.datasets[0].data = data;
    this._chartData.properties.labels = labels;
    this._chartData.chart.update();
  }
}
