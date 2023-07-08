export const calculateBmi = (height: number, weight: number): string => {
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