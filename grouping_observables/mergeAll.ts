import { of } from 'rxjs';
import { mergeAll, delay } from 'rxjs/operators';

console.log('# mergeAll working');

const source1 = of('A', 'B', 'C').pipe(delay(100));
const source2 = of('D'); 
const source3 = of('E', 'F', 'G'); 

of(source1, source2, source3)
    .pipe(mergeAll())
    .subscribe(x => console.log(x));