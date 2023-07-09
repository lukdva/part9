import {arguments} from './exercisesTypes';
import calculateExercises from './calculateExercises';

const parseExerciseArguments = (args: string[]): arguments => {
    if (args.length < 4 ) throw new Error('Not enough arguments');
    const goal = Number(args[2]);
    const arr: number[] = args.slice(3).map((x) => Number(x));
    if(isNaN(goal)) {
        throw new Error(`One of the arguments is not a number`);
    }
    arr.forEach((x) => { 
        if(isNaN(x)) {
            throw new Error(`One of the arguments is not a number`);
        }  
    });
    return {
        goal,
        arr
    };
};

const args = parseExerciseArguments(process.argv);

console.log(calculateExercises(args.arr, args.goal));