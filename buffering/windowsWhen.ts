// windowsWhen
// buffer valunes on receiving signals from the notifier
// send the buffer as an observable, when the source complete
// send the last buffer as an observable

import { timer } from 'rxjs';
import { take, tap, windowWhen, mergeAll } from 'rxjs/operators';

const source = timer(0, 100).pipe(take(9));
const notifier = () => timer(200);

console.log('# emit bugger after 200ms');

source
    .pipe(
        windowWhen(notifier),
        tap(() => console.log('new buffer')),
        // mergeAll()
    )
    .subscribe(console.log)
