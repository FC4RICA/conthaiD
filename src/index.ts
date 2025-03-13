import dayjs from "dayjs";

const thaiFullMonths = [
  "มกราคม", // January
  "กุมภาพันธ์", // February
  "มีนาคม", // March
  "เมษายน", // April
  "พฤษภาคม", // May
  "มิถุนายน", // June
  "กรกฎาคม", // July
  "สิงหาคม", // August
  "กันยายน", // September
  "ตุลาคม", // October
  "พฤศจิกายน", // November
  "ธันวาคม", // December
];

const thaiShortMonths = [
  "ม.ค.", // January
  "ก.พ.", // February
  "มี.ค.", // March
  "เม.ย.", // April
  "พ.ค.", // May
  "มิ.ย.", // June
  "ก.ค.", // July
  "ส.ค.", // August
  "ก.ย.", // September
  "ต.ค.", // October
  "พ.ย.", // November
  "ธ.ค.", // December
];

export const thaiLocale = (foramt: string, date: Date | null) => {
  try {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return false;
    }
    let dayjsDate = dayjs(date);
    let month = dayjsDate.month();
    let year = dayjsDate.year();
    let day = dayjsDate.date();

    if (foramt === "full") {
      return `${day} ${thaiFullMonths[month]} ${year}`;
    } else if (foramt === "short") {
      return `${day} ${thaiShortMonths[month]} ${year}`;
    } else {
      return dayjsDate.format(foramt);
    }
  } catch (error) {
    return false;
  }
};

