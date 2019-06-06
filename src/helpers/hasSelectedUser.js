const hasSelectedUser = (userList) => {
    const index = userList.findIndex(user => user[2] === true);
    if (index === -1) return false;
    return true;
};

export default hasSelectedUser;
