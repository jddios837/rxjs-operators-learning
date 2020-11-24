// window, emit observers 
import { interval } from 'rxjs';
import { take, window, switchMap, toArray } from 'rxjs/operators';

console.log('# emit the buffer after 1000ms');
// en un intervalo de capturamos los items, los agrupa y luego los emite como
// observables anidados
interval(100)
    .pipe(
        window(interval(1000)),
        take(3),
        // switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);
