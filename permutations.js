//Using template to solve problem so we can expend to other problems


nums = [1,2,3,4]

//OPTION 1 

const permute = (nums) => {
    //global result
    const result = [];

    //DFS recursilve helper 
    const dfs = (i, nums) => {
        //base case
        if(i === nums.length) {
            result.push(nums.slice());
            return;
        }
        // DFS rescursive case
        for(let j = i; j < nums.length; j += 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    dfs(0, nums);
    return result;
};

// console.log(permute(nums))



//Heap's Algorithm PURE (but has non-pure functions within)
// OPTION 2 
const getPermutation = arr => {

    const output = [];

    //NOT PURE SWAP 
    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    }
    //RECURSIVE so must deal with (edge) end case
    const generate = (n, heapArr) => {
        if(n === 1) {
            output.push(heapArr.slice())
            return;
        }
        //CALLING RECURSIVELY
        generate(n -1, heapArr);
        for (let i =0; i < n - 1; i += 1) {
            if (n % 2 === 0 ){
                swapInPlace(heapArr, i, n - 1);
            } else {
                swapInPlace(heapArr, 0, n - 1);
            }
            generate(n - 1, heapArr);
        }
    };
    generate(arr.length, arr.slice()); 
    return output;
};

// console.log(getPermutation(nums))

