
document.addEventListener('DOMContentLoaded', () => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    displayHistory(searchHistory);
});


document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(searchInput);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displayHistory(searchHistory);
        document.getElementById('searchInput').value = ''; 
    }
});


document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    displayHistory([]);
});


function displayHistory(history) {
    const historyList = document.getElementById('searchHistory');
    historyList.innerHTML = '';
    history.forEach((term, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${term}`;
        historyList.appendChild(listItem);
    });
}


const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark/Light Mode';
toggleButton.className = 'dark-mode-toggle';
document.body.appendChild(toggleButton);

const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});

