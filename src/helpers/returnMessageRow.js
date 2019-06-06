import findChatIndex from './findChatIndex';

const returnMessageRow = (chatId, messages) => {
    if (chatId.length === 0) return [];
    if (messages.length === 0) return [];
    if (findChatIndex(chatId, messages) === -1) return [];
    return messages[findChatIndex(chatId, messages)][1];
};

export default returnMessageRow;
