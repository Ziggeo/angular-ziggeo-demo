import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html'
})
export class PlayerComponent implements AfterViewInit {
    title = 'Player component';
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: any;

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
