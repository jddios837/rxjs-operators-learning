import { interval } from 'rxjs';
import { take, bufferTime, tap, bufferToggle } from 'rxjs/operators';

// define out open/close signals
const opening = interval(400).pipe(tap(() => console.log('open')));
const closing = () => interval(300).pipe(tap(() => console.log('close')));

// each buffer closes 300 ms after opening
interval(100)
    .pipe(
        tap(console.log),
        bufferToggle(opening, closing),
        take(3) // <-- limit life of the source Observable
    )
    .subscribe(console.log)