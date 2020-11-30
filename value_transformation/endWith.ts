import { of } from "rxjs";
import { endWith } from "rxjs/operators";


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

of(...workingDays)
    .pipe(endWith(...weekends))
    .subscribe(x => console.log(x));