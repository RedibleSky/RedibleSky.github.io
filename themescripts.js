function deleteCookie(name) { 
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    
    function getCookie(name) { 
        let cookieArr = document.cookie.split(";"); 
        for (let i = 0; i < cookieArr.length; i++) { 
            let cookiePair = cookieArr[i].split("="); 
            if (name === cookiePair[0].trim()) { 
                return decodeURIComponent(cookiePair[1]); 
            } } 
        return null; }
    
    function switchLanguage() {
        
    
    var selectElement = document.getElementByID("language");
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;

    if (selectedValue === "jp") {
        window.location.href = "/jp/";
    }

    if (selectedValue === "en") {
        window.location.href = "/";
    }

    if (selectedValue === "fr") {
        window.location.href = "/fr/";
    }
    }

    function  applytheme() {
        const themeValue = getCookie('theme');
        var themeImage = document.getElementById("theme");
        if (themeValue === 'light') {
            document.body.className = 'light';
            themeImage.src = 'https://rediblesky.is-a.dev/home/images/darkThemeIcon.png'
        }

        if (themeValue === 'dark') {
            document.body.className = 'dark';
            themeImage.src = 'https://rediblesky.is-a.dev/home/images/lightThemeIcon.png'
        }
    }

    function setTheme() {
    
    const themeValue = getCookie('theme');
    deleteCookie('theme');
    let finalvalue = "";

    if (!themeValue) {
        finalvalue = "light";
    }

    if (themeValue === 'light') {
        finalvalue = "dark";
    }

    if (themeValue === 'dark') {
        finalvalue = "light";
    }

    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = 'theme' + "=" + encodeURIComponent(finalvalue) + ";" + expires + ";path=/";

    document.body.classList.add('fade-out'); setTimeout(() => { location.reload(); }, 500);
}

    
    window.onload = applytheme;
