export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
};