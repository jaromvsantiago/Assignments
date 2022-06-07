
function maxNumber(...nums){
    const max = nums[0]
    for(var i = 0; i < max; i++){
        if(nums[i]>max){
             const max = nums[i]
             console.log(max)
        }
    }}
maxNumber(4, 5, 6, 1, 3)

/*var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}




console.log(largest);*/