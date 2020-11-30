import { interval, of, timer } from 'rxjs';
import { take, auditTime, tap, mergeAll, concatAll } from 'rxjs/operators';

of(
    timer(0, 1000).pipe(
        tap(v => console.log('A-'+ v)),
        take(5)
    ),
    timer(0, 500).pipe(
        tap(v => console.log('B-'+ v)),
        take(3)
    )
)
.pipe(
    // tap(v => console.log('values ' + v)),
    concatAll()
)
.subscribe(
    v => console.log(v)
)