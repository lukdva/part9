const calculateBmi = (height: number, weight: number): string => {
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters*heightInMeters)
    switch (true) {
        case (bmi < 18.5):
            return "Underweight (Unhealthy weight)"
            break
        case (bmi < 22.9):
            return "Normal (Healthy weight)"
            break
        case (bmi < 24.9):
            return "Overweight I (Weight at risk)"
            break
        case (bmi < 29.9):
            return "Overweight II (Moderately obese weight)"
            break
        case (bmi >= 30):
            return "Overweight I (Severely obese weight)"
            break
        default:
            return "Unable to calculate bmi"
    }
}
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
console.log(calculateBmi(180, 74))

//TODO fix errors