import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    templateUrl: './app/dashboard/dashboard.html'
})

export class DashboardComponent implements OnInit {

    private _times: [string];
    private _temps: [number];

    ngOnInit() {
        // Initialize data for graph - todo: connect to db
        this._times = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
        this._temps = [60, 80, 75, 50, 65, 60];

        this.create_chart();
    }

    private create_chart() {
        // Get HTML element
        let ctx = document.getElementById('temp-graph') as HTMLCanvasElement;
        let context = ctx.getContext('2d');

        // Graph data source
        let data: LinearChartData = {
            labels: this._times,
            datasets: [{
                data: this._temps,
                fillColor: 'rgba(96,125,139,0.2)',
                label: 'Temperature',
                strokeColor: 'rgba(96,125,139,1)'
            }]
        };

        // Make the graph
        let myChart = new Chart(context, {
            type: 'line',
            data: data,
            options: null
        });
    }
}
