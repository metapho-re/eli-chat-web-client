import extractUsernames from './extractUsernames';

const createChatId = (userList) => {
    const usernames = extractUsernames(userList).sort();
    return `${usernames.join('.')}_${new Date().toISOString()}_${Math.random().toString()}`;
};

export default createChatId;
