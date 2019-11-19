export const tagRandomizer = () => {
  const tagArr = [];
  for (let i = 1; i <= (Math.random() * 10).toFixed(0); i++) {
    tagArr.push(`Tag${i}`);
  }
  return tagArr;
};

export const imgRandomizer = () => `https://picsum.photos/300/${+(Math.random() * 250).toFixed(0) + 50}`;
