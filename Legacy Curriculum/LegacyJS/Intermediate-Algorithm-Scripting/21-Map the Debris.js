function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({ name: arr[elem].name, orbitalPeriod: orbitalPer });
  }

  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
