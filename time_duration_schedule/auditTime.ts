import { interval } from 'rxjs';
import { take, auditTime, tap } from 'rxjs/operators';

// auditTime
// emit the most recent value within a given period

console.log('# emit the last value emmited every second');

interval(500)
    .pipe(
        tap(x => console.log('emitted: ' + x)),
        auditTime(1000),
        take(3)
    )
    .subscribe(d => console.log('received by subscribers: ' + d))