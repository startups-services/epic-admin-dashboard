import { statuses } from '../Statuses/ProjectStatus';

export const tagRandomizer = () => {
  const tagArr = [];
  for (let i = 1; i <= (Math.random() * 10).toFixed(0); i += 1) {
    tagArr.push(`Tag${i}`);
  }
  return tagArr;
};

export const imgRandomizer = () => `https://picsum.photos/300/${+(Math.random() * 250).toFixed(0) + 50}`;

export const statusRandomizer = () => Object.keys(statuses)[(Math.random() * 4).toFixed(0)];
