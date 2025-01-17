// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Hyvor Talk ->
var HYVOR_TALK_WEBSITE = 6135;
var HYVOR_TALK_CONFIG = {
    url: false,
    id: false
};

const article = document.querySelector("article");
var hyvorTalkView = document.createElement("div");
hyvorTalkView.id = "hyvor-talk-view";
article.appendChild(hyvorTalkView);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://talk.hyvor.com/web-api/embed.js";
document.body.appendChild(script);
// <- Hyvor Talk

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute("data-md-color-scheme", "slate");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.setAttribute("data-md-color-scheme", "slate");
    }
});

if (navigator.userAgent.indexOf('WebSSH') == 0) {
    var body = document.querySelector('[data-md-color-scheme=slate]');

    if (body) {
        if (navigator.userAgent.indexOf('WebSSH iOS') == 0) {
            body.style.setProperty('--md-default-bg-color', 'black');
        } else {
            body.style.setProperty('--md-default-bg-color', '#1F1E1E');
        }

        body.style.setProperty('--md-admonition-bg-color', 'var(--md-footer-bg-color)');
    }
}

const primaryColor = getCookie('PrimaryColor');

if (primaryColor) {
    document.documentElement.style.setProperty('--md-primary-fg-color', primaryColor, 'important');
}