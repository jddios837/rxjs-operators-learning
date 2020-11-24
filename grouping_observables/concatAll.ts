import { of } from 'rxjs';
import { concatAll } from 'rxjs/operators';


console.log('# concat working days and weekends');

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

of(of(...workingDays), of(...weekends))
    .pipe(concatAll())
    .subscribe(x => console.log(x))