const describeAge = age => {
    let category;

    if (age < 18) {
        category = "minor";
    } else {
        category = "adult";
    }

    return `You are a ${category}.`;
};

console.log(describeAge(16));
console.log(describeAge(20));

// found it kinda hard at first but somehow managed to make it work xD