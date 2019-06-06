const extractSocketIds = (userList) => {
    const socketIds = [];
    userList.forEach(
        (user) => {
            if (user[2] && (user[1].length !== 0)) socketIds.push(user[1]);
        },
    );
    return socketIds;
};

export default extractSocketIds;
