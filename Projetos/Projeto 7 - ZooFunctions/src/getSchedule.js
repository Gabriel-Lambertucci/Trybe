const data = require('../data/zoo_data');

function noParamTuesday() {
  const object = {
    Tuesday: {
      officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
      exhibition: data.species.map((item) => {
        if (item.availability.includes('Tuesday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Tuesday;
}
function noParamWednesday() {
  const object = {
    Wednesday: {
      officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
      exhibition: data.species.map((item) => {
        if (item.availability.includes('Wednesday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Wednesday;
}
function noParamThursday() {
  const object = {
    Thursday: {
      officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
      exhibition: data.species.map((item) => {
        if (item.availability.includes('Thursday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Thursday;
}

function noParamFriday() {
  const object = {
    Friday: {
      officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
      exhibition: data.species.map((item) => {
        if (item.availability.includes('Friday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Friday;
}
function noParamSaturday() {
  const object = {
    Saturday: {
      officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
      exhibition: data.species.map((item) => {
        if (item.availability.includes('Saturday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Saturday;
}
function noParamSunday() {
  const object = {
    Sunday: {
      officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
      exhibition: data.species.map((item, index) => {
        if (item.availability.includes('Sunday')) {
          return item.name;
        }
        return null;
      }).filter((item) => item !== null),
    },
  };
  return object.Sunday;
}

function mondayParam() {
  const Object = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return Object;
}

function noParams() {
  const object = {
    Tuesday: noParamTuesday(),
    Wednesday: noParamWednesday(),
    Thursday: noParamThursday(),
    Friday: noParamFriday(),
    Saturday: noParamSaturday(),
    Sunday: noParamSunday(),
    Monday: mondayParam().Monday,
  };
  return object;
}

function anyDayParam(scheduleTarget) {
  const object = noParams();
  const newObject = {
    [scheduleTarget]: object[scheduleTarget],
  };
  return newObject;
}

function anyAnimal(scheduleTarget) {
  const animal = data.species.find((item) => item.name === scheduleTarget);
  const result = animal.availability;
  return result;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animalsList = data.species.map((item) => item.name);
  const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (animalsList.includes(scheduleTarget)) {
    return anyAnimal(scheduleTarget);
  } if (scheduleTarget === 'Monday') {
    return mondayParam();
  } if (daysList.includes(scheduleTarget)) {
    return anyDayParam(scheduleTarget);
  }
  return noParams();
}

module.exports = getSchedule;
