const GetDay = (date) => {
  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wendsday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";
  return weekDay[new Date(date).getDay()];
};
export default GetDay;
