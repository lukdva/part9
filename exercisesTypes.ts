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
interface exercisesRequestBody {
    daily_exercises: number[],
    target: number
}

export {arguments, response, exercisesRequestBody};