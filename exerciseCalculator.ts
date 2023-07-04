const calculateExercises = (arr: Array<number>, goal: number): response => {
    const x = []
    const sum = arr.reduce( (prev: number, curr: number) => prev + curr, 0)
    const avg = sum/arr.length
    let rating
    let ratingDescription
    const ratio = avg/goal
    switch (true) {
        case ratio < 0.5:
            rating = 1
            ratingDescription = "Improvement needed"
            break;
        case ratio < 1:
            rating = 2
            ratingDescription = "Not bad"
            break;
        case ratio >= 1:
            rating = 3
            ratingDescription = "Good job"
            break; 
        default:
            rating = 0
            ratingDescription = "Failed to calculate"
            break; 
    }

    const resp: response = {
        periodLength: arr.length,
        trainingDays: arr.filter((x) => x > 0).length,
        success: goal >= avg,
        rating: rating,
        ratingDescription: ratingDescription,
        target: goal,
        average: avg
    }
    return resp
}
const parseExerciseArguments = (args: string[]): arguments => {
    if (args.length < 4 ) throw new Error('Not enough arguments')
    const goal: number = Number(args[2])
    const arr: number[] = args.slice(3).map((x) => Number(x))
    if(isNaN(goal)) {
        throw new Error(`One of the arguments is not a number`)
    }
    arr.forEach((x) => { 
        if(isNaN(x)) {
            throw new Error(`One of the arguments is not a number`)
        }  
    })
    return {
        goal,
        arr
    }
}
interface arguments {
    goal: number;
    arr: number[];
}
interface response {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const args = parseExerciseArguments(process.argv)

console.log(calculateExercises(args.arr, args.goal))