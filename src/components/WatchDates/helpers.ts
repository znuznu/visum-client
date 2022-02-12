// TODO The API should handle all kind of date and return UTC
export const formatToVisumDate = (date: Date): string => {
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
    .getDate()
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
};
