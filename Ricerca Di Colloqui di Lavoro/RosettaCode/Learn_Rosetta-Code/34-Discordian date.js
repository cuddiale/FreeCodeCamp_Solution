/**
 * All Hail Discordia! - this script prints Discordian date using system date.
 *
 * lang: JavaScript
 * author: jklu
 * contributors: JamesMcGuigan
 *
 * source: https://rosettacode.org/wiki/Discordian_date#JavaScript
 */
const seasons = [
  "Chaos",
  "Discord",
  "Confusion",
  "Bureaucracy",
  "The Aftermath",
];
const weekday = [
  "Sweetmorn",
  "Boomtime",
  "Pungenday",
  "Prickle-Prickle",
  "Setting Orange",
];

const apostle = ["Mungday", "Mojoday", "Syaday", "Zaraday", "Maladay"];

const holiday = ["Chaoflux", "Discoflux", "Confuflux", "Bureflux", "Afflux"];

Date.prototype.isLeapYear = function () {
  const year = this.getFullYear();
  if ((year & 3) !== 0) {
    return false;
  }
  return year % 100 !== 0 || year % 400 === 0;
};

// Get Day of Year
Date.prototype.getDOY = function () {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const mn = this.getMonth();
  const dn = this.getDate();
  let dayOfYear = dayCount[mn] + dn;
  if (mn > 1 && this.isLeapYear()) {
    dayOfYear += 1;
  }
  return dayOfYear;
};

Date.prototype.isToday = function () {
  const today = new Date();
  return (
    this.getDate() === today.getDate() &&
    this.getMonth() === today.getMonth() &&
    this.getFullYear() === today.getFullYear()
  );
};

function discordianDate(date) {
  if (!date) {
    date = new Date();
  }

  const y = date.getFullYear();
  const yold = y + 1166;
  let dayOfYear = date.getDOY();
  let celebrateHoliday = null;

  if (date.isLeapYear()) {
    if (dayOfYear === 60) {
      celebrateHoliday = "St. Tib's Day";
    } else if (dayOfYear > 60) {
      dayOfYear--;
    }
  }
  dayOfYear--;

  const divDay = Math.floor(dayOfYear / 73);

  const seasonDay = (dayOfYear % 73) + 1;
  if (seasonDay === 5) {
    celebrateHoliday = apostle[divDay];
  }
  if (seasonDay === 50) {
    celebrateHoliday = holiday[divDay];
  }

  const season = seasons[divDay];
  const dayOfWeek = weekday[dayOfYear % 5];

  const nth =
    seasonDay % 10 === 1
      ? "st"
      : seasonDay % 10 === 2
      ? "nd"
      : seasonDay % 10 === 3
      ? "rd"
      : "th";

  return (
    "" +
    dayOfWeek +
    ", the " +
    seasonDay +
    nth +
    " day of " +
    season +
    " in the YOLD " +
    yold +
    (celebrateHoliday ? ". Celebrate " + celebrateHoliday + "!" : "")
  );
}
