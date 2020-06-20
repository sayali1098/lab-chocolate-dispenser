var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    } else {
        return 'Number cannot be zero/negative';
    }
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    var removed = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {
        for (let i = 0; i < number; i++) {
            removed[i] = chocolates.shift();
        }
        return removed;
    } else return 'Number cannot be zero/negative';
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    var choco = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {
        for (let i = 0; i < number; i++) {
            choco[i] = chocolates.pop();
        }
        return choco;
    } else return 'Number cannot be zero/negative';
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    var chocol = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {
        for (let i = 0; i < number; i++) {
            chocol[i] = chocolates.pop(color);
        }
        return chocol;
    } else return 'Number cannot be zero/negative';
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var nums = [];
    var chocs = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for(let i=0; i<chocs.length; i++)
    {
        var count = 0;
        for(let j=0; j<chocolates.length;j++){
            if(chocs[i]== chocolates[j])
            count++;
        }
        nums[i]=count;
    }
  return nums.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let cho = chocolates.reduce(function(b,a) {
        if(a in b) {
            b[a]++;
        } else {
            b[a] =1;
        }
        return b;
}, {});
let new1 = chocolates.sort((a,b) => {
if(cho[b] > cho[a])
    return 1;
    if (cho[b] < cho[a])
        return -1;
    if(a>b)
    return 1;
    if(a<b)
return -1;
});
chocolates = new1;
}
let 

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor) {
    len = chocolates.length;
    if (number <= 0)
        return "Number cannot be zero/negative";
    else if(number > 0) {
    for(let i=0; i<len; i++)
    {   
        for(let j=0; j<number; j++)
        {
        if(chocolates[i]== color)
        chocolates[i] = finalColor;
    }
    }
        return chocolates;
    }
    else {
            return "Can't replace the same chocolates";
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    len = chocolates.length;
    count=0;
    var newArray = [];
    var finalArray = [];
        for (let i = 0; i < len; i++) {
        if(chocolates[i] == color){
          chocolates[i] == finalColor;
          count++;
          newArray[i] == chocolates[i];
        }
        else{
            if(chocolates[i]== finalColor)
            return "Can't replace the same chocolates";
        }
    }
    finalArray = new Array(count, newArray);
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed