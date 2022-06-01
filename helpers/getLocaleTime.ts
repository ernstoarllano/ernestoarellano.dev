export const getLocaleTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();

  return time;
}