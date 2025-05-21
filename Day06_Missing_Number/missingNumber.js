const missingNumber=(nums)=>{
    let n=nums.length;
    let expectedNumber=(n*(n+1))/2;
    let actualNumber=nums.reduce((sum,num)=>sum+num,0)
    return expectedNumber-actualNumber;
}

Array=[2,0,3];
console.log(missingNumber(Array));