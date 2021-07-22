document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key_button').addEventListener('click', onClick, false)
    function onClick () {
        const token = prompt('Enter Access Token')
    }
}, false)