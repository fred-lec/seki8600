document.addEventListener('DOMContentLoaded', function() {
    var cookieName = 'cookieconsent_status';
    var cookieConsent = getCookie(cookieName);

    if (cookieConsent !== 'dismissed') {
        var banner = document.createElement('div');
        banner.setAttribute('id', 'cookie-banner');
        banner.innerHTML = `
            <div style="background-color: #333; color: white; padding: 10px 0; text-align: center; position: fixed; bottom: 0; left: 0; width: 100%; z-index: 9999;">
                <p style="margin: 0; font-size: 14px;">
                    This website uses cookies to ensure you get the best experience on our website.
                    <a href="/privacy-policy" style="color: #f1d600;">Learn more</a>
                </p>
                <button style="background-color: #f1d600; color: #333; border: none; padding: 5px 15px; cursor: pointer;" id="cookie-consent-button">Got it!</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('cookie-consent-button').addEventListener('click', function() {
            setCookie(cookieName, 'dismissed', 365);
            document.getElementById('cookie-banner').style.display = 'none';
        });
    }

    function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
