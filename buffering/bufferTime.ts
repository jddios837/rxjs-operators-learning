import { interval } from 'rxjs';
import { take, bufferTime } from 'rxjs/operators';

// create a new buffer every 1 seconds
// and emit it after 2 seconds
interval(1000)
    .pipe(
        take(6), // limit the life of the source observable
        bufferTime(2000, 1000)
    )
    .subscribe(console.log);