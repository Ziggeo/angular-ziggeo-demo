import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'Ziggeo Application Demo';
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: ZiggeoModel;

    constructor () {}

    ngOnInit () {
        this.player = this.ziggeoplayer.playerInstance;
    }

    ngAfterViewInit () {
        this.player = this.ziggeoplayer.playerInstance;

        this.player.on('attached', function () {
            console.log('attached');
        });

        this.player.on('playing', function () {
            console.log('playing your action here');
        })
    }

}
