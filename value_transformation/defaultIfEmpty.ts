import { of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

of(2)
    .pipe(defaultIfEmpty(-1))
    .subscribe(x => console.log(x));