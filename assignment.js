//no.1
function kilometerToMeter(num){
    var result = num * 1000;
    return result;
}

//no.2
function budgetCalculator(clock,phone,laptop){
    total=clock*50 + phone*100 + laptop*500;
    return total;
}

//no.3
function hotelCost(day){
    var cost=0;
    if(day>=0 && day<=10){
        cost=day*100;
    }
    else if(day>10 && day<=20){
        first=10*100;
        second=(day-10)*80;
        cost=first+second;
        return cost;
    }
    else if(day>20){
        cost=10*100 + 10*80 + (day-20)*50;
        return cost;
    }
    else {console.log("invalid");}
}

//no.4
function megaFriend(arr){
    var longest = '';
    if(arr.length==0){console.log("Empty array.");}
    else
    {
        for(var i=0; i<arr.length; i++){
        if(arr[i].length > longest.length)
          longest=arr[i];
        }
    return longest;
    }
}