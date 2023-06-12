let nums = [1,3,5,6], target = 2;
function position(nums,target){
    
   let low=0;
   let high=nums.length;
   
   while(low<high){
       let mid=Math.floor((low+high)/2);
       if(nums[mid]<target){ 
           low=mid+1;
       }else{
           high=mid;
       }
       
   }
    return low;
}
console.log(position(nums,target));
