document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('get_button').addEventListener('click', onClick, false)
    function onClick () {
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'git')
        })
    }
}, false)