const removeSelf = (userList, username) => {
    const list = [...userList];
    list.splice(userList.findIndex(user => user[0] === username), 1);
    return list;
};

export default removeSelf;
