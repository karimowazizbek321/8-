function updateContent() {
    const contentElement = document.getElementById('content');
    const currentDate = new Date();
    contentElement.innerText = `Текущее время: ${currentDate.toLocaleTimeString()}`;
}

window.onload = function() {
    updateContent(); 
    setInterval(updateContent, 1000); 
};