//屏幕适应
(function (win, doc) {
    if (!win.addEventListener) return;
    function setFont() {
        var html = document.documentElement;
        var k = (html.clientWidth > html.clientHeight) ? 1334 : 750;
        html.style.fontSize = html.clientWidth / k * 100 + "px";
    }
    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);
})(window, document); 