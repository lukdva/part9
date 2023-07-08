import {calculateBmi} from './calculateBmi';

const parseArguments = (args: string[]): bodyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
    let height: number = Number(process.argv[2])
    let weight: number = Number(process.argv[3])    
    if(!isNaN(height) && !isNaN(weight)) {
        return {
            height,
            weight
        }
    } else {
        throw new Error('Arguments are not numbers')
    }

}
interface bodyValues {
    height: number;
    weight: number;
}

const dimensions = parseArguments(process.argv)
console.log(calculateBmi(dimensions.height, dimensions.weight))
