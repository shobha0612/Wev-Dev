window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playVideoButton').addEventListener('click', function() {
        document.getElementById('video').play();
    });
    document.getElementById('pauseVideoButton').addEventListener('click', function() {
        document.getElementById('video').pause();
    }); 

})



