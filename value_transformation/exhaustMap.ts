import { of } from "rxjs";
import { exhaustMap, delay } from "rxjs/operators";

of('A', 'B', 'blocker', 'C')
    .pipe(
        exhaustMap(x => {
            switch(x) {
                case 'A':
                    return of(x, x.toLowerCase());
                case 'B':
                    return of(1, 2, 3, 4);
                case 'blocker':
                    return of(x).pipe(delay(10))
                default:
                    return of(x);
            }
        })
    )
    .subscribe(x => console.log(x));