// Function to set data in localStorage
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from localStorage
function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Function to remove an item from localStorage
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

// Function to get all stored items from localStorage
function getAllLocalStorage() {
    let items = {};
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        items[key] = value ? JSON.parse(value) : null;
    }
    return items;
}

// Function to check if a key exists in localStorage
function checkLocalStorageExists(key) {
    return localStorage.getItem(key) !== null;
}

// Function to increase a value in localStorage (for numerical values)
function increaseLocalStorageValue(key, increment) {
    let value = getLocalStorage(key);
    value = value ? parseInt(value, 10) : 0; // Initialize with 0 if not present
    value += increment;
    setLocalStorage(key, value);
}

