In demo folder run 
- Install all dependencies `npm install`
- Add pack a new pack from main component folder `npm istall /path_to_this_folder/angular-ziggeo-1.0.0.tgz`
- Remove folder from demo app `rm -rf node_modules/angular-ziggeo/build`
- Add link `ln -s ~/path_to_component_folder/angular-ziggeo/build/ node_modules/angular-ziggeo/`
- and start server with `ng serve`

Each time you will made changes in component rebuild app, demo app will restart as it will be in watch mode.

## Setup Main Model:

## Recorder:
Ziggeo recorder

```$xslt
import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'
...

    recorderRecording = () => {
        console.log('Recorder onRecording');
    };

    recorderUploaded = () => {
        console.log('Recorder onUploaded');
    };

...

    <ZiggeoRecorder
        apiKey={API_KEY}
        video={VIDEO_TOKEN}
        height={180}
        width={320}
        onRecording={this.recorderRecording}
        onUploading={this.recorderUploading}
    />

...
```
[All Build-in Recorder Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-recorder)

##### Available `event listeners` for recorder:

```react2html

   - onPlaying
   - onPaused
   - onAttached
   - onLoaded
   - onEnded
   - onSeek
   - onError
   - onManuallySubmitted
   - onUploaded
   - onUploadSelected
   - onRecording
   - onUploading
   - onRerecord,
   - onCountdown,
   - onRecordingProgress,
   - onUploadProgress,
   - onAccessForbidden,
   - onAccessGranted,
   - onCameraUnresponsive,
   - onVerified,
   - onNoCamera,
   - onNoMicrophone
```


## Player:

Ziggeo player:

```$xslt
import React from 'react'
import {ZiggeoPlayer} from 'react-ziggeo'

...

playing = () => {
    console.log('it\'s playing, your action here');
};

paused = () => {
    console.log('it\'s paused, your action when pause');
};

...
    <ZiggeoPlayer
      apiKey={'your api key provided by ziggeo'}
      video={'Video Token'}
      theme={'modern'}
      themecolor={'red'}
      skipinitial={false}
      onPlaying={this.playing}
      onPaused={this.paused}
      ...
    />
...
```
[All Build-in Player Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-player)

##### Available `events listeners` for player:
```react2html

   - onPlaying
   - onPaused
   - onAttached
   - onLoaded
   - onEnded
   - onError
   - onSeek
```
