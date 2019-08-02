import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import AngularCounter from './angular-counter.ts';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [AngularCounter],
    //entryComponents: [AngularCounter],
    providers: [],
    bootstrap: [AngularCounter]
})
export default class AngularCounterModule{}


