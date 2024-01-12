const repoUrl = 'https://api.github.com/repos/linfindel/maths-leaderboard';
const filePath = 'leaderboard.json';
const accessToken = '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';

fetch("https://raw.githubusercontent.com/linfindel/maths-leaderboard/main/leaderboard.json")
  .then(response => response.json())
  .then(data => {
    // Sort users by highest score
    const sortedUsers = Object.keys(data).sort((a, b) => data[b] - data[a]);

    var i = 0;

    for (const user of sortedUsers) {
      const card = document.createElement("div");

      let leftClass;
      let rightClass;

      if (i == 0) {
        leftClass = "card-flat-top-left-alt";
        rightClass = "card-flat-top-right-alt";
      }

      else if (i == sortedUsers.length - 1) {
        leftClass = "card-flat-bottom-left-alt";
        rightClass = "card-flat-bottom-right-alt";
      }

      else {
        leftClass = "card-flat";
        rightClass = "card-flat";
      }

      card.classList.add("row-flat");

      card.style.width = "100%";

      card.innerHTML = `
      <div class="${leftClass} text-center" style="flex: 1;">
        <h1>${user}</h1>
      </div>

      <div class="${rightClass} text-center" style="flex: 1;">
        <h1>${data[user]}</h1>
      </div>`;
      document.getElementById("container").appendChild(card);

      i++;
    }
  })
  .catch(error => console.error('Error fetching leaderboard:', error));