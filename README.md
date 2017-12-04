In demo folder run 
- Install all dependencies `npm install`
- Add pack a new pack from main component folder `npm istall /path_to_this_folder/angular-ziggeo-1.0.0.tgz`
- Remove folder from demo app `rm -rf node_modules/angular-ziggeo/build`
- Add link `ln -s ~/path_to_component_folder/angular-ziggeo/build/ node_modules/angular-ziggeo/`
- and start server with `ng serve`

Each time you will made changes in component rebuild app, demo app will restart as it will be in watch mode.

## Setup Main Model:
```$angular
...
import { ZiggeoModule } from 'angular-ziggeo';

@NgModule({
    ...
    imports: [
        ...
        ZiggeoModule
    ],
    ...
})

...

```

## Recorder Component

```$angular
import {
    Component,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-recorder',
    template: `
       <ziggeo-recorder #ziggeorecorder
            [apiKey]="'your_api_key'"
            [options]="{height: 200, width: 300}"
       ></ziggeo-recorder>
    `
})
export class RecorderComponent implements AfterViewInit {
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: ZiggeoModel;

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

        // Below you can find other event listeners to use in your app with ziggeo recorder
    }
}
```
After you can use `app-recorder` in your app

##### Available `event listeners` for recorder:

```react2html

   - attached
   - loaded
   - playing
   - paused
   - ended
   - error
   - manually_submitted
   - uploaded
   - upload_selected
   - recording
   - uploading
   - seek
   - rerecord
   - countdown
   - recording_progress
   - upload_progress
   - processing
   - processed
   - access_forbidden
   - access_granted
   - camera_unresponsive
   - verified
   - no_camera
   - no_microphone
```

## Player:

Ziggeo player:

```$xslt
import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-player',
    template: `
    <h5>{{ title }}</h5>
    <ziggeo-player #ziggeoplayer
       [apiKey]="'your_api_key'"
       [options]="{video: 'video_token', width: 520, height: 380}"
    ></ziggeo-player>

    `
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

After you can use `app-recorder` in your app

```
##### Available `events listeners` for player:
```angular

   - attached
   - loaded
   - playing
   - paused
   - ended
   - error
   - seek
```


#### Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2)


#### Working Demo:
- [react-live-demo](https://sambua.github.io/react-ziggeo-page)
- [react-ziggeo demo for local install](https://github.com/Ziggeo/react-ziggeo/tree/master/demo)
