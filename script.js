const popupWindow = document.getElementById('popup-window');
const playlist = document.getElementById('playlist');


const open = () => {
    popupWindow.style.display = 'block';
    playlist.style.display = 'none';
};

const close = () => {
    popupWindow.style.display = 'none';
    playlist.style.display = 'block';
};

agree.onclick = close;