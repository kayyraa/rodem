let i = 0;

function count(wait, limit, clean, num) {
    setTimeout(() => {
        i++;
        console.log(i); // Print the {i} variable at this line

        if (limit && i === num) {
            i = 0; // Reset the counter when it reaches 'num'
        }

        if (i !== num) {
            count(wait, limit, clean, num); // Continue counting if not reached 'num'
        } else if (clean === true) {
            console.clear(); // Clear the console when the limit is reached
        }
    }, wait);
}

count(125, true, true, 10); // Start the loop