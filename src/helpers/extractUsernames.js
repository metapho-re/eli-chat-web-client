const extractUsernames = (userList) => {
    const usernames = [];
    userList.forEach(
        (user) => {
            if (user[2]) usernames.push(user[0]);
        },
    );
    return usernames;
};

export default extractUsernames;
