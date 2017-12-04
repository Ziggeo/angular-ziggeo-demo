import {
    Component,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-recorder',
    templateUrl: './recorder.component.html',
    styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements AfterViewInit {
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: ZiggeoModel;

    constructor () {}

    ngAfterViewInit () {
        this.recorder = this.ziggeorecorder.recorderInstance;

        this.recorder.on('recordingprogress', () => {
            console.log('Recorder in progress');
        }, this);

        this.recorder.on('accessgranted', function () {
            console.log('Recorder has camera access');
        }, this);

        this.recorder.on('verified', function () {
            console.log('playing your action here');
        }, this);
    }
}
