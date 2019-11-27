import { statuses } from '../Statuses/ProjectStatus';

export const imgRandomizer = () => `https://picsum.photos/300/${+(Math.random() * 250).toFixed(0) + 50}`;

export const statusRandomizer = () => Object.keys(statuses)[(Math.random() * 4).toFixed(0)];
