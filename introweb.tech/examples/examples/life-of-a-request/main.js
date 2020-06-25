var currtime, browser, lang;

function getStats(){
    currtime = new Date();
    browser = navigator.userAgent;
    lang = navigator.language;
}

window.onload = function(){
    getStats();
    var output = document.getElementById('stats');
    output.innerHTML = `Date: ${currtime} <br/>
                        Browser: ${browser} <br/>
                        Language: ${lang}`;
    console.log("Success!");
};