// windowsToggle

import { interval } from 'rxjs';
import { take, bufferTime, tap, windowToggle, switchMap, toArray } from 'rxjs/operators';
import { timer } from '../node_modules/rxjs/index';

// open a new buffer every 500ms
// close the buffer 200ms after opening
// hace, ignore those come between 200ms and 500ms

// define out open/close signals
const opening = interval(400).pipe(tap(() => console.log('open')));
const closing = () => interval(300).pipe(tap(() => console.log('close')));

timer(0, 100)
    .pipe(
        take(36),
        windowToggle(opening, closing),
        switchMap(s => s.pipe(toArray()))
    )
    .subscribe(console.log)