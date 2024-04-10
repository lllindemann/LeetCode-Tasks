export {};
function twoSum(nums: number[], target: number): number[] | undefined {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {

        //get the complement value of current num
        const complement = target - nums[index];

        //check if the hash already stores the complement
        if (indices.has(complement)) {

            // return num & complement 
            return [indices.get(complement), index]
        }

        // add num in hash map, when complement not yet found
        indices.set(nums[index], index)
    }
};