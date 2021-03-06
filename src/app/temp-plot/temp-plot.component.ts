import {GraphProvider} from '../Providers/graph-provider/graph.provider';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'app/temp-plot/temp-plot.html',
  providers: [GraphProvider]
})

export class TempPlotComponent implements OnInit {

  constructor(private _graphService: GraphProvider) {
  }

  ngOnInit() {
    this._graphService.create_chart('temp-graph', 'line');
    let index = 0;

    window.setInterval(() => {
      this._graphService.update_chart(this.getRandomData(), this.getNextSixTimes(index));
      index += 6;
      if (index === 24) {
        index = 0;
      }
    }, 6000);
  }

  private getNextSixTimes(startIndex: number) {
    let times = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
                 '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
                 '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
                 '9:00 PM', '10:00 PM', '11:00 PM', '12:00 PM'];

    return [
      times[startIndex],
      times[startIndex + 1],
      times[startIndex + 2],
      times[startIndex + 3],
      times[startIndex + 4],
      times[startIndex + 5]
    ];
  }

  private getRandomData() {
    return [
      Math.floor((Math.random() * 80) + 30),
      Math.floor((Math.random() * 80) + 30),
      Math.floor((Math.random() * 80) + 30),
      Math.floor((Math.random() * 80) + 30),
      Math.floor((Math.random() * 80) + 30),
      Math.floor((Math.random() * 80) + 30)
    ];
  }
}
