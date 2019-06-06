const extractChatIds = (chats) => {
    const chatIds = [];
    chats.forEach(chat => chatIds.push(chat[0]));
    return chatIds;
};

export default extractChatIds;
