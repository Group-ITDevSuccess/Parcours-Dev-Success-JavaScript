var myReverse = [3, -1, 5, 10, 4, 2],
    mySort = [3, 1, 5, 10, 4, 2];

myReverse.reverse();
console.log(`reverse : ${myReverse}`);
/*
mySort.sort();
console.log(`sort : ${mySort}`);
*/
mySort.sort(function (a, b){
    if (a < b){
        return -1;
    }else if (a > b){
        return 1;
    }else{
        return 0;
    }
});

console.log(`Vrais sort : ${mySort}`)