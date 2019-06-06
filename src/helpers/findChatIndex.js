const findChatIndex = (chatId, messages) => {
    for (let i = 0; i < messages.length; i += 1) {
        if (messages[i][0] === chatId) return i;
    }
    return -1;
};

export default findChatIndex;
