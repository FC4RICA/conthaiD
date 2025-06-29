export const formatThaiDate = (format: string, date: Date | null) : string | false => {
  try {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return false;
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    if (format === "full") {
      const monthName = new Intl.DateTimeFormat("th-TH", { month: "long" }).format(date);
      return `${day} ${monthName} ${year}`;
    } else if (format === "short") {
      const shortMonth = new Intl.DateTimeFormat("th-TH", { month: "short" }).format(date);
      return `${day} ${shortMonth} ${year}`;
    } else {
      return format
        .replace(/dd/, String(day).padStart(2, "0"))
        .replace(/MM/, new Intl.DateTimeFormat("th-TH", { month: "short" }).format(date))
        .replace(/yyyy/, String(year));
    }
  } catch {
    return false;
  }
}
