import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements AfterViewInit {
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: ZiggeoModel;

    constructor() {}

    ngAfterViewInit() {
        this.player = this.ziggeoplayer.playerInstance;

        this.player.on('attached', function () {
            console.log('attached');
        });

        this.player.on('playing', function () {
            console.log('playing your action here');
        });
    }
}
