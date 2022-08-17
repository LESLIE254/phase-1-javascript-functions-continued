// code your solution here

function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");
const mondayWork = function (activity2 = "go to the office") {
    return `This Monday, I will ${activity2}.`
}
mondayWork();
mondayWork("go swimming");

function wrapAdjective (flair){
    const innerFunction = function (msg = "special"){
        return `You are ${flair}${msg}${flair}!`;
    }
    return innerFunction;

}
wrapAdjective("*");
wrapAdjective("%")("dedicated programmer");