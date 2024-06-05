document.addEventListener('DOMContentLoaded', () => {
  const toggleOpponent = document.getElementById('toggleOpponent');
  const toggleText = document.getElementById('toggleText');

  // Set initial state
  chrome.storage.local.get('hideOpponent', (result) => {
    toggleOpponent.checked = result.hideOpponent;
    toggleText.textContent = result.hideOpponent ? 'Show Opponent info' : 'Hide Opponent info';
  });

  // Add event listener
  toggleOpponent.addEventListener('change', () => {
    const isChecked = toggleOpponent.checked;
    chrome.storage.local.set({ hideOpponent: isChecked });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tab = tabs[0];
        if (tab.url && !tab.url.startsWith('chrome://')) {  // Check if the URL is not a chrome:// URL
          const tabId = tab.id;
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: isChecked ? hideOpponent : showOpponent
          });
        }
      }
    });
  });
});

function hideOpponent() {
  const playerinfo = document.querySelectorAll('.ruser-top');
  if (playerinfo.length) {
    const userLink = playerinfo[0].querySelector(".user-link");
    const rating = playerinfo[0].querySelector("rating");
    if (userLink) userLink.style.visibility = "hidden";
    if (rating) rating.style.visibility = "hidden";
  }

  const gameMetaPlayers = document.querySelectorAll('.game__meta__players');
  if (gameMetaPlayers.length) {
    const players = gameMetaPlayers[0].querySelectorAll(".user-link");
    players.forEach(player => {
      player.style.visibility = 'hidden';
    });
  }

  const crosstableUsers = document.querySelectorAll('.crosstable__users');
  if (crosstableUsers.length) {
    const players = crosstableUsers[0].querySelectorAll(".user-link");
    players[1].style.visibility = 'hidden';
  }
}

function showOpponent() {
  const playerinfo = document.querySelectorAll('.ruser-top');
  if (playerinfo.length) {
    const userLink = playerinfo[0].querySelector(".user-link");
    const rating = playerinfo[0].querySelector("rating");
    if (userLink) userLink.style.visibility = "";
    if (rating) rating.style.visibility = "";
  }

  const gameMetaPlayers = document.querySelectorAll('.game__meta__players');
  if (gameMetaPlayers.length) {
    const players = gameMetaPlayers[0].querySelectorAll(".user-link");
    players.forEach(player => {
      player.style.visibility = '';
    });
  }

  const crosstableUsers = document.querySelectorAll('.crosstable__users');
  if (crosstableUsers.length) {
    const players = crosstableUsers[0].querySelectorAll(".user-link");
    players[1].style.visibility = '';
  }
}

