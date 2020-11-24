// windowsCount

import { timer } from 'rxjs';
import { take, switchMap, toArray, windowTime } from 'rxjs/operators';

const source = timer(0, 100).pipe(take(9));
console.log('# emit buffer after 200 ms');
// acumula una cantidad de iconos antes de emitirlos como un observable
// anidado
source
    .pipe(
        windowTime(200), // windowCount(2,3) corta luego de 3 parametro pero solo agregar los 2 valores iniciales 
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);