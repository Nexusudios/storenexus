document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      version: "v1.0",
      image: "https://via.placeholder.com/300x150",
      name: "The Crew 2",
      description: "The ultimate racing game with high-octane action.",
      downloadLink: "#"
    },
    {
      version: "v2.5",
      image: "https://via.placeholder.com/300x150",
      name: "Crab Game",
      description: "Play the most fun crab-themed battle royale!",
      downloadLink: "#"
    },
    {
      version: "v1.3",
      image: "https://via.placeholder.com/300x150",
      name: "Counter-Strike: Source",
      description: "A tactical first-person shooter featuring intense team-based gameplay.",
      downloadLink: "#"
    }
  ];

  const gameList = document.getElementById('game-list');

  games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h2>${game.name}</h2>
      <p class="version">Version: ${game.version}</p>
      <p>${game.description}</p>
      <button class="add-to-library">Add to Library</button>
    `;

    const addToLibraryBtn = gameCard.querySelector('.add-to-library');
    addToLibraryBtn.addEventListener('click', () => {
      addToLibrary(game);
      addToLibraryBtn.textContent = 'Added';
      addToLibraryBtn.disabled = true;
    });

    gameList.appendChild(gameCard);
  });

  function addToLibrary(game) {
    // Zde přidáme hru do knihovny uživatele
    console.log(`${game.name} přidána do knihovny.`);
    // Můžeme zde použít lokální úložiště, API nebo jinou metodu
  }
});
