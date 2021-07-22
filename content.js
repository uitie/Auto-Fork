chrome.runtime.onMessage.addListener(function (message) {
    if (message === 'git') {
        const links = document.querySelectorAll("a");
        const array = []
        const base = '/github.com/';
    
        for (const link of links) {
            const urlClean = link.href;
            if (urlClean.includes(base)) array.push(urlClean);
            
        };
            
        function makeTable() {
            let list = '<h1>Links</h1><ul>';
                for (let i=0; i < array.length; i++) {
                    table += '<li>'+ array[i]+' <button>FORK</button></li> ';
                };
                list += '</ul>'
                const w = window.open("");
                w.document.write(list); 
        }
        makeTable();
    }
})



