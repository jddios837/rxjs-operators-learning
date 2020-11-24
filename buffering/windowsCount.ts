// windowsCount

import { timer } from 'rxjs';
import { take, switchMap, toArray, windowCount } from 'rxjs/operators';

const source = timer(0, 100).pipe(take(9));
console.log('# buffer 2 items');
// acumula una cantidad de iconos antes de emitirlos como un observable
// anidado
source
    .pipe(
        windowCount(2), // windowCount(2,3) corta luego de 3 parametro pero solo agregar los 2 valores iniciales 
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(console.log);