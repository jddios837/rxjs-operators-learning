import { of } from "rxjs";
import { concatMap } from "rxjs/operators";

console.log("# concatMap items");

of(1, 2, 3)
    .pipe(concatMap(x => [x, x * 3]))
    .subscribe(x => console.log(x));
