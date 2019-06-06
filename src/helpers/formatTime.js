import formatMinutes from './formatMinutes';

const formatTime = (date) => {
    const d = new Date(date);
    return `${d.getHours()}:${formatMinutes(d.getMinutes())}`;
};

export default formatTime;
