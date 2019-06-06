import formatMinutes from './formatMinutes';

const getPropertiesFromChatId = (chatId) => {
    const usernames = chatId.split('_')[0].split('.').join(', ');
    const d = new Date(Date.parse(chatId.split('_')[1]));
    const date = `
        Created:
        ${d.toLocaleString('en-us', { month: 'short' })} ${d.getDate()}, ${d.getFullYear()}
        (${d.getHours()}:${formatMinutes(d.getMinutes())})
    `;
    return { usernames, date };
};

export default getPropertiesFromChatId;
