import { format } from "date-fns";

export const formatDate = (date: Date | null | string) => {
  return date ? format(date, "dd-MM-yyyy") : "";
};
