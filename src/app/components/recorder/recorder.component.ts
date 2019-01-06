import {
    Component,
    ViewChild,
    AfterViewInit
} from '@angular/core';

@Component({
    selector: 'app-recorder',
    templateUrl: './recorder.component.html'
})
export class RecorderComponent implements AfterViewInit {
    title = 'Home page';
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: any;

    constructor () {}

    ngOnInit() {
        ZiggeoApi.V2.Locale.mediaLocale.register({"ba-videorecorder-controlbar.stop": "Finish Recorder"}, 10);
        ZiggeoApi.V2.Locale.mediaLocale.register({"ba-videorecorder-controlbar.stop-tooltip": "Finish Recorder"}, 10);
    }

    ngAfterViewInit () {
        this.recorder = this.ziggeorecorder.recorderInstance;

        this.recorder.on('recording', () => {
            console.log('Recorder in progress');
        }, this);

        this.recorder.on('access_granted', () => {
            console.log('Recorder has camera access');
        }, this);

        this.recorder.on('verified', () => {
            console.log('playing your action here');
        }, this);
    }
}
