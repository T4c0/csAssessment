const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const sizes = ['tiny', 'small', 'medium', 'large', 'extraLarge'];

// Create a table for results
const resultsTable = [];

for (const size of sizes) {
    const currentArray = getSizedArray(getSizeByLabel(size));

    // Measure execution time with doublerAppend
    perf.start();
    doublerAppend(currentArray);
    const resultsAppend = perf.stop();

    // Measure execution time with doublerInsert
    perf.start();
    doublerInsert(currentArray);
    const resultsInsert = perf.stop();

    // Record results in the table
    resultsTable.push({
        size,
        insertTime: resultsInsert.time,
        appendTime: resultsAppend.time,
    });
}

// Display the results table
console.log('Results for different array sizes:');
console.table(resultsTable);

function getSizeByLabel(label) {
    switch (label) {
        case 'tiny':
            return 10;
        case 'small':
            return 100;
        case 'medium':
            return 1000;
        case 'large':
            return 10000;
        case 'extraLarge':
            return 100000;
        default:
            return 0;
    }
}
