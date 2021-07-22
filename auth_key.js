document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key_button').addEventListener('click', onClick, false)
    function onClick () {
        console.log('test')
        const token = prompt('Enter Access Token')
        console.log(token)
    }
}, false)