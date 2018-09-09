## Angular 5 example use of integration [Ziggeo](https://ziggeo.com) ready application

#### Installation demo project
- Go to repository folder
- Install all dependencies by using `npm install`
- Build by using `ng build`
- [optional] For UMD use you can include `ZiggeoModule` from `ziggeo-angular` package directly.<br/>
Example: `import {ZiggeoModule} from 'angular-ziggeo'`
- [optional] For `AOT` ready need to include directly from path <br/>
import { ZiggeoModule } from 'root_path/node_modules/angular-ziggeo/build/ziggeo/index'; <br/>
- After the build complete start server with `ng serve` also ready for production `--prod` and AOT `--aot`
- Check the showed url on the console on the browser, the default is `http://localhost:4200/`


#### Just for note
It has been already included in this project, but if you need to implement similar in your own project you have to include below packages<br/>

`.angular-cli.json`
```
      "styles": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.css"
      ],
      "scripts": [
        "../node_modules/ziggeo-client-sdk/build/ziggeo.js"
      ],
```

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

##### Additional application level options:
    - Screen recorder options:
    ```
    [options]="{ ...,
        allowscreen: true,
        chrome_extension_id: 'Your chrome extension ID',
        chrome_extension_install_link: 'Your link to chrome extension installation',
        opera_extension_id: 'Your opera extension ID',
        opera_extension_install_link: 'Your link to opera extension installation'
    ...}"
    ```

    Screen Capture is currently supported by Firefox, Chrome and Opera. <br/>
    - Firefox: Direct support -- no extensions or plugins required <br/>
    - Chrome + Opera: use extension builder located in your application manager <br/>

    Note: By default Ziggeo Chrome/Opera extension will be set to `Ziggeo screen recorder` extension which will be available only in `localhost`. <br/>
    [For more info](https://ziggeo.com/features/screen-recording), in this url you also can find how to set your own extensions <br/>

    - Locale setting : `[options]="{ ..., l10n: 'de', ...}"` <br/>
    - Set WebRTC streaming option `webrtc_streaming` to `true` : `[options]="{ ..., webrtc_streaming: true, ...}"`


#### Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2)