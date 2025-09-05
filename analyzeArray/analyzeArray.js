function analyzeArray(array) {
    let sum = array.reduce((prev,curr) => prev + curr)
    let average = Math.floor(sum / array.length)

    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i]
        }

        if (array[i] >= max) {
            max = array[i]
        }
    }

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    }
}

module.exports = analyzeArray