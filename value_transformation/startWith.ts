import { of } from "rxjs";
import { startWith } from "rxjs/operators";


const workingDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
]

const weekends = [
    'Saturday',
    'Sunday'
];

of(...weekends)
    .pipe(startWith(...workingDays))
    .subscribe(x => console.log(x));