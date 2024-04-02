function aceitar() {
    localStorage.setItem('message-aceita', 'true');
    document.getElementById('message-initial').style.display = 'none';
}

window.onload = function() {
    if (!localStorage.getItem('message-aceita')) {
        document.getElementById('message-initial').style.display = 'block';
    }
};