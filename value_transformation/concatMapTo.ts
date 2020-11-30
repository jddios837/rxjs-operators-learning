import { of, interval } from "rxjs";
import { concatMapTo, take } from "rxjs/operators";

console.log("# concatMapTo items");

interval(1000)
    .pipe(
        take(3),
        concatMapTo(of('a', 'b'))
    )
    .subscribe(x => console.log(x))
