import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZiggeoModule } from 'angular-ziggeo';

import { PlayerComponent } from './player/player.component';
import { RecorderComponent } from './recorder/recorder.component';

const appRoutes: Routes = [
    { path: 'ziggeo-recorder', component: RecorderComponent, data: { title: 'Ziggeo Recorder Show Template'} },
    { path: 'ziggeo-player', component: PlayerComponent, data: { title: 'Ziggeo Player Show Template'} }
];

@NgModule({
    declarations: [
        AppComponent,
        PlayerComponent,
        RecorderComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // true for development only
        ),
        BrowserModule, ZiggeoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
