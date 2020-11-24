import { of } from 'rxjs';
import { exhaust, delay } from 'rxjs/operators';

console.log('# concat working days and weekends');

const source1 = of('A', 'B', 'C').pipe(delay(100));
const source2 = of('D'); // this is drop entiraly

of(source1, source2)
    .pipe(exhaust())
    .subscribe(x => console.log(x));