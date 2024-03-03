import { format } from "date-fns";

export const formatDate = (date: Date | null | string) => {
  return date ? format(date, "dd-MM-yyyy") : "";
};

export const formatDuration = (date: Date): string => {
  const currentDate = new Date();
  const endDate = new Date(date)
  const difference = endDate.getTime() - currentDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const formattedDuration = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

  return formattedDuration;
};


