// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2,drivers.lenght);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function (x) {
    return function (value) {
      return x * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  // const DifferentDrivers = function(drivers, selection) {
    function selectDifferentDrivers(drivers, selection){
        return selection(drivers);
      }
