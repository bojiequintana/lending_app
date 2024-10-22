import { parseISO, format } from "date-fns";

export const formatDate = (
  date: string | Date,
  dateFormat: string = "MMMM dd, yyyy"
): string => {
  // Parse the ISO date string (keeps it in UTC)
  if (!date) return "";
  if (typeof date === "string") {
    const dateParse = parseISO(date);
    return format(dateParse, "MMMM dd, yyyy");
  }
  return format(date, dateFormat);
};
