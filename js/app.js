/* Code by Utsav Patel
Subject: Javascript 
Student ID: 200584363
Assignment-1
*/ 

// Array
const nouns = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'bug'];
const places = ['on the moon', 'on the chair', 'on the grass', 'in my shoes', 'in my soup'];
let textToSpeak = ''; // `let` is used here because this value will be updated
const storyOutput = document.getElementById('story-output');
const speakStatusOutput = document.getElementById('speak-status');
const resetStatusOutput = document.getElementById('reset-status');
const outline = document.getElementById('outline');
const nounValue = document.getElementById('noun-value');
const verbValue = document.getElementById('verb-value');
const adjectiveValue = document.getElementById('adjective-value');
const noun2Value = document.getElementById('noun2-value');
const placeValue = document.getElementById('place-value');

// Functions
function speakNow(string) {
    const utterThis = new SpeechSynthesisUtterance(string); // Create a new speech utterance
    speechSynthesis.speak(utterThis); // Speak the string
}

// Function to get a random word from the provided array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Concatenates the selected words into a sentence
function concatenateText() {
    textToSpeak = `${nounValue.textContent} ${verbValue.textContent} ${adjectiveValue.textContent} ${noun2Value.textContent} ${placeValue.textContent}`;
}

// Generates a random story by combining random words from the arrays
function generateRandomStory() {
    let story = ''; // Use `let` since the story string will be built over iterations
    for (let i = 0; i < 5; i++) {
        story += `${getRandomWord(nouns)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(places)}. `;
    }
    return story;
}

// Event Listeners

// Event listener for noun button
document.getElementById('noun-btn').addEventListener('click', function() {
    const selectedWord = getRandomWord(nouns);
    nounValue.textContent = selectedWord;
    outline.style.display = 'block';
});

// Event listener for verb button
document.getElementById('verb-btn').addEventListener('click', function() {
    const selectedWord = getRandomWord(verbs);
    verbValue.textContent = selectedWord;
    outline.style.display = 'block';
});

// Event listener for adjective button
document.getElementById('adjective-btn').addEventListener('click', function() {
    const selectedWord = getRandomWord(adjectives);
    adjectiveValue.textContent = selectedWord;
    outline.style.display = 'block';
});

// Event listener for noun2 button
document.getElementById('noun2-btn').addEventListener('click', function() {
    const selectedWord = getRandomWord(nouns2);
    noun2Value.textContent = selectedWord;
    outline.style.display = 'block';
});

// Event listener for place button
document.getElementById('place-btn').addEventListener('click', function() {
    const selectedWord = getRandomWord(places);
    placeValue.textContent = selectedWord;
    outline.style.display = 'block';
    concatenateText(); // Update the full sentence when all words are selected
});

// Event listener for speak button
document.getElementById('speak-btn').addEventListener('click', function() {
    speakNow(textToSpeak);
    speakStatusOutput.innerHTML = 'Now Speaking...';
});

// Event listener for reset button
document.getElementById('reset-btn').addEventListener('click', function() {
    textToSpeak = ''; // Reset the text to be spoken
    storyOutput.innerHTML = ''; // Clear the story output
    nounValue.textContent = ''; // Reset the displayed words
    verbValue.textContent = '';
    adjectiveValue.textContent = '';
    noun2Value.textContent = '';
    placeValue.textContent = '';
    outline.style.display = 'none'; // Hide the outline after resetting
    resetStatusOutput.innerHTML = 'Reset Successfully!';
});

// Event listener for random story generation button
document.getElementById('random-story-btn').addEventListener('click', function() {
    const story = generateRandomStory(); // Generate a random story
    storyOutput.innerHTML = story; // Display the story in the output area
    speakNow(story); // Speak the generated story
});
