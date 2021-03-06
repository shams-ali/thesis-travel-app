const generatePlaces = (object) => {
  const citiesArray = [
    {
      city: 'New Orleans',
      temperature: 40,
      city_expenses: 80,
      landscape: 30,
      city_type: 60,
      proximity: 20,
      group_age: 40,
      group_relationship: 30,
    },
    {
      city: 'Nashville',
      temperature: 80,
      city_expenses: 100,
      landscape: 70,
      city_type: 30,
      proximity: 20,
      group_age: 60,
      group_relationship: 20,
    },
    {
      city: 'San Diego',
      temperature: 100,
      city_expenses: 50,
      landscape: 0,
      city_type: 100,
      proximity: 0,
      group_age: 30,
      group_relationship: 75,
    },
    {
      city: 'Miami',
      temperature: 30,
      city_expenses: 50,
      landscape: 50,
      city_type: 50,
      proximity: 80,
      group_age: 60,
      group_relationship: 100,
    },
    {
      city: 'Dallas',
      temperature: 20,
      city_expenses: 20,
      landscape: 70,
      city_type: 80,
      proximity: 80,
      group_age: 0,
      group_relationship: 0,
    },
    {
      city: 'Los Angeles',
      temperature: 100,
      city_expenses: 0,
      landscape: 20,
      city_type: 30,
      proximity: 20,
      group_age: 60,
      group_relationship: 50,
    },
    {
      city: 'New York',
      temperature: 30,
      city_expenses: 90,
      landscape: 30,
      city_type: 55,
      proximity: 10,
      group_age: 0,
      group_relationship: 0,
    },
    {
      city: 'Seattle',
      temperature: 30,
      city_expenses: 100,
      landscape: 0,
      city_type: 30,
      proximity: 50,
      group_age: 50,
      group_relationship: 40,
    },
    {
      city: 'Charleston',
      temperature: 80,
      city_expenses: 10,
      landscape: 100,
      city_type: 100,
      proximity: 0,
      group_age: 50,
      group_relationship: 20,
    },
    {
      city: 'Chicago',
      temperature: 70,
      city_expenses: 70,
      landscape: 80,
      city_type: 20,
      proximity: 10,
      group_age: 90,
      group_relationship: 10,
    },
  ];

  const userPrefObj1 = {
    id: 1,
    user_id: 1,
    trip_id: 1,
    temperature: 100,
    city_expenses: 50,
    landscape: 75,
    proximity: 100,
    city_type: 25,
    group_age: 20,
    group_relationship: 10,
  };

  const userPrefObj2 = {
    id: 1,
    user_id: 1,
    trip_id: 1,
    temperature: 0,
    city_expenses: 80,
    landscape: 35,
    proximity: 10,
    city_type: 100,
    group_age: 0,
    group_relationship: 100,
  };
  let resultArray = [];

  const userTemp = object.temperature;
  const userCityExpenses = object.city_expenses;
  const userLandscape = object.landscape;
  const userCityType = object.city_type;
  const userProximity = object.proximity;
  const userGroupAge = object.group_age;
  const userGroupRelationship = object.group_relationship;

  citiesArray.forEach((place) => {
    let finalScore;

    let tempScore = Math.abs(place.temperature - userTemp);

    let cityExpensesScore = Math.abs(place.city_expenses - userCityExpenses);

    let landscapeScore = Math.abs(place.landscape - userLandscape);

    let cityTypeScore = Math.abs(place.city_type - userCityType);

    let proximityScore = Math.abs(place.proximity - userProximity);

    let groupAgeScore = Math.abs(place.group_age - userGroupAge);

    let groupRelationshipScore = Math.abs(
      place.group_relationship - userGroupRelationship
    );

    // // add up score
    finalScore =
      tempScore +
      cityExpensesScore +
      landscapeScore +
      cityTypeScore +
      proximityScore +
      groupAgeScore +
      groupRelationshipScore;

    resultArray.push({ city: place.city, score: finalScore });
  });

  let sorted = resultArray.sort((a, b) => {
    return a.score - b.score;
  });

  return [sorted[0].city, sorted[1].city, sorted[2].city];
};

module.exports = {
  generatePlaces,
};
