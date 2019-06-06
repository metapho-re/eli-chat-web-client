const extractChat = (array) => {
    const chat = [array[0].chatId, []];
    array.forEach(msg => chat[1].push([msg.username, msg.createdAt, msg.body]));
    return chat;
};

export default extractChat;
