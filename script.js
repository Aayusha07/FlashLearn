// Example data for decks
const decks = [
  {
      title: 'Math Basics',
      studied: 15,
      total: 20
  },
  {
      title: 'Spanish Vocabulary',
      studied: 10,
      total: 50
  },
  {
      title: 'History Dates',
      studied: 25,
      total: 30
  }
];

// Function to generate the deck UI
function loadDecks() {
  const container = document.getElementById('decks-container');
  container.innerHTML = ''; // Clear existing decks

  decks.forEach(deck => {
      const deckElement = document.createElement('div');
      deckElement.classList.add('deck');

      const progressPercentage = Math.round((deck.studied / deck.total) * 100);

      deckElement.innerHTML = `
          <h3 class="deck-title">${deck.title}</h3>
          <div class="progress-container">
              <div class="progress-bar">
                  <div class="progress" style="width: ${progressPercentage}%;"></div>
              </div>
              <span class="progress-percentage">${progressPercentage}%</span>
          </div>
          <div class="deck-info">
              <p>${deck.studied} / ${deck.total} cards studied</p>
              <button class="study-button">Study Now</button>
          </div>
      `;

      container.appendChild(deckElement);
  });
}

// Load decks on page load
document.addEventListener('DOMContentLoaded', loadDecks);
