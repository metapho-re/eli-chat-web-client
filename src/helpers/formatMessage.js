const formatMessage = (username, message, chatId) => {
    const date = new Date();
    const msg = {
        username,
        time: date.toISOString(),
        message,
        chatId,
    };
    return (msg);
};

export default formatMessage;
