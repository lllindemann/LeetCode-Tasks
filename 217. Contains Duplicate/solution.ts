export {};
function containsDuplicate(nums: number[]): boolean {

    const indices = new Set();

    for (let index = 0; index < nums.length; index++) {

        //check if the Hash Set already stores the num
        if (indices.has(nums[index])) {

            // return true if there is a Duplicate
            return true;
        }

        // add num to Hash Set map, when a duplicate not yet found
        indices.add(nums[index])
    }

    // return false if there is no a Duplicate
    return false;

};