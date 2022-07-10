export const formatToVisumDate = (date: Date): string => {
  const [isoDate] = date.toISOString().split('T');
  return isoDate;
};
