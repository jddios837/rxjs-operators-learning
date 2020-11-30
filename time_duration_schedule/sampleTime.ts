import { interval } from 'rxjs';
import { take, auditTime, tap, sampleTime } from 'rxjs/operators';

// sampleTime
// emit the most recent value within a given period
console.log('# emit the first value and the last value');

interval(500)
    .pipe(
        tap(x => console.log('emitted: ' + x)),
        sampleTime(1000),
        take(3)
    )
    .subscribe(
        d => console.log('received by subscribers: ' + d)
    );
