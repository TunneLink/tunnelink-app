function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkCookieExists(cookieName) {
    // Get all cookies as a single string
    const cookies = document.cookie;

    // Use regular expression to search for the cookie by name
    const cookiePattern = new RegExp('(^|; )' + encodeURIComponent(cookieName) + '='); 
    return cookiePattern.test(cookies); // Returns true if cookie exists, false otherwise
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split('; ').find(row => row.startsWith(cookieName + '='));
    return cookies ? decodeURIComponent(cookies.split('=')[1]) : null;
}

function increaseCookieValue(cookieName, increment) {
    let value = getCookieValue(cookieName);
    if (value === null) {
        // Cookie does not exist; initialize with 0 if needed
        value = 0;
    } else {
        // Parse value to integer
        value = parseInt(value, 10);
    }

    // Increase value
    value += increment;

    // Set the updated value back to the cookie
    document.cookie = `${cookieName}=${encodeURIComponent(value)}; path=/`;
}

// Display the server list in an ordered list (HTML)
function displayServerList() {
    const serverListContainer = document.getElementById('serverList');
    const existingServers = getCookie('connectedServers');
    let serversArray = existingServers ? JSON.parse(existingServers) : [];

    // Clear previous list content
    serverListContainer.innerHTML = '';

    // Generate list items
    serversArray.forEach((server, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Server Name: ${server.name}, Public Key: ${server.key}`;
        serverListContainer.appendChild(listItem);
    });
}

// Example Usage: Call this function to save server info after connecting
saveServerInfo('My Server', 'PublicKey1234');

// Call this function to display the server list in the page
displayServerList();
