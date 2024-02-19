export const dateFormat = (date: string) => {
  const formatDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });
  return formatDate;
};
