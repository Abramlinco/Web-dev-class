// Get form and result elements
const form = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const word = document.getElementById('wordInput').value.trim();
  if (word) {
    fetchWordData(word);
  }
});

// Function to fetch word data from the dictionary API
async function fetchWordData(word) {
  try {
    resultDiv.innerHTML = '';

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
      throw new Error('Word not found');
    }

    const data = await response.json();
    displayWordData(data[0]);
  } catch (error) {
    resultDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

// Function to display word info
function displayWordData(data) {
  // Display the word and transcription
  const wordElement = document.createElement('h2');
  wordElement.textContent = `Word: ${data.word}`;
  resultDiv.appendChild(wordElement);

  if (data.phonetic) {
    const transcription = document.createElement('p');
    transcription.textContent = `Transcription: ${data.phonetic}`;
    resultDiv.appendChild(transcription);
  }

  // Display meanings grouped by part of speech
  data.meanings.forEach(meaning => {
    const partOfSpeechElement = document.createElement('h3');
    partOfSpeechElement.textContent = meaning.partOfSpeech;
    resultDiv.appendChild(partOfSpeechElement);

    meaning.definitions.forEach(definition => {
      const meaningElement = document.createElement('p');
      meaningElement.classList.add('meaning');
      meaningElement.textContent = `- ${definition.definition}`;
      resultDiv.appendChild(meaningElement);
    });
  });
}
