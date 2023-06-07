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

interface response {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))