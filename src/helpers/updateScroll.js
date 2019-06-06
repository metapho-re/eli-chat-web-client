const updateScroll = () => {
    const element = document.getElementById('messageWall');
    element.scrollTop = element.scrollHeight;
};

export default updateScroll;
