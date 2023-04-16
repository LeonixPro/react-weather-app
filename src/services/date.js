export const date = (data) => {
  const time = new Date(data * 1000);
  const d = time.getDate();
  const m = time.getMonth() + 1;
  const y = time.getFullYear();
  const h = time.getHours();
  const min = time.getMinutes();
  return `${d}.${m <= 9 ? "0" + m : m}.${y} ${h <= 9 ? "0" + h : h}:${
    min <= 9 ? "0" + min : min
  }`;
};
