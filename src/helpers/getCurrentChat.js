const getCurrentChat = (chats) => {
    for (let i = 0; i < chats.length; i += 1) {
        if (chats[i][1]) return chats[i][0];
    }
    return '';
};

export default getCurrentChat;
