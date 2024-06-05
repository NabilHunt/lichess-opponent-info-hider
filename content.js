chrome.storage.local.get('hideOpponent', (result) => {
  if (result.hideOpponent) {
    hideOpponent();
  } else {
    showOpponent();
  }
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

