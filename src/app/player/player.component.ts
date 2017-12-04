import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html'
})
export class PlayerComponent implements AfterViewInit {
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: ZiggeoModel;

    constructor () {}

    ngAfterViewInit () {
        this.player = this.ziggeoplayer.playerInstance;

        this.player.on('attached', () => {
            console.log('Attached');
        });

        this.player.on('playing', () => {
            console.log('Playing your action here');
        });

        this.player.on('paused', () => {
            console.log('Paused, your action here');
        });
    }
}
