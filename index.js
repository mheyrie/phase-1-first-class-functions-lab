// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
   return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return(drivers.slice(-2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(parameter){
    return(function(parameter){
        return parameter**2;
    })

}

function fareDoubler(charge){
    return charge * 2;
}

function fareTripler(charge){
    return charge*3;
}

function selectDifferentDrivers(drivers, task){
    return task(drivers);
}