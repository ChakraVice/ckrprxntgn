function checkId() {
    if (!localStorage.getItem('id')) {
        window.location.href = 'user/nologin.html';
    }
}

checkId();

setInterval(checkId, 10000);
