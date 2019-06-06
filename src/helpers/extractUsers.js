const extractUsers = (response) => {
    const users = [];
    response.forEach(
        (obj) => {
            users.push([obj.username, obj.socketId || '', false]);
        },
    );
    return users;
};

export default extractUsers;
