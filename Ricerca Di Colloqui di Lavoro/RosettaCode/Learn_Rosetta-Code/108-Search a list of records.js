function searchCity(name) {
  return list.findIndex((item) => item.name === name);
}

const list = [
  { name: "Lagos", population: 21.0 },
  { name: "Cairo", population: 15.2 },
  { name: "Kinshasa-Brazzaville", population: 11.3 },
  { name: "Greater Johannesburg", population: 7.55 },
  { name: "Mogadishu", population: 5.85 },
  { name: "Khartoum-Omdurman", population: 4.98 },
  { name: "Dar Es Salaam", population: 4.7 },
  { name: "Alexandria", population: 4.58 },
  { name: "Abidjan", population: 4.4 },
  { name: "Casablanca", population: 3.98 },
];
