// here we use the arrow function 

const removeDuplicates=(nums)=>{
    if(nums.length===0)
        return 0;

    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[j]!==nums[i]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
}
let arr=[1,1,2,3,4,5]
let k=removeDuplicates(arr);

console.log("K=", k );
console.log("Unique Element = " ,arr.slice(0,k));


