import { of } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

// bufferCount
// add value into buffer until full
// then emit the buffer

of(1, 2, 3)
    .pipe(bufferCount(2))
    .subscribe(console.log);

// start a new buffer when a new value emmitted
// multiple buffers can coexist
of(1, 2, 3)
    .pipe(bufferCount(2, 1)) // create a buffer with 2 element
    .subscribe(console.log);    