const collectDept = function (arrOfObj, groupName) {
  const collect = arrOfObj.reduce(
    (rtnObj, obj) => {
      if (rtnObj[obj[groupName]] === undefined) {
        rtnObj[obj[groupName]] = [];
      }
      rtnObj[obj[groupName]].push(obj);
      return rtnObj;
    },
    {} // initial value to reduce
  );

  return Object.keys(collect)
    .sort()
    .map((key) => collect[key]);
};

const sortRank = function (arrOfRankArrs, rankName) {
  return arrOfRankArrs.map((item) =>
    item.sort((a, b) => {
      if (a[rankName] > b[rankName]) {
        return -1;
      }
      if (a[rankName] < b[rankName]) {
        return 1;
      }
      return 0;
    })
  );
};

function topRankPerGroup(n, data, groupName, rankName) {
  if (n < 0) {
    return;
  }
  return sortRank(collectDept(data, groupName), rankName).map((list) =>
    list.slice(0, n)
  );
}
