const answers = [
    "Hello, World!",
    "15",
    "9",
    "8",
    "2",
    "25",
    "10",
    "1",
    "7",
    "11"
];

let currentPuzzleIndex = 0;

window.onload = function() {
    loadPuzzle();
};

function loadPuzzle() {
    // Hide all puzzles
    const puzzles = document.querySelectorAll('.puzzle');
    puzzles.forEach(puzzle => puzzle.style.display = 'none');
    
    // Show the current puzzle
    if (currentPuzzleIndex < puzzles.length) {
        document.getElementById(`puzzle${currentPuzzleIndex + 1}`).style.display = 'block';
        document.getElementById("answer").value = '';
        document.getElementById("feedback").textContent = '';
    } else {
        document.getElementById("feedback").textContent = "Congratulations! You've completed all puzzles.";
        document.getElementById("answer").style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = answers[currentPuzzleIndex];

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        currentPuzzleIndex++;
        setTimeout(loadPuzzle, 1000);
    } else {
        document.getElementById("feedback").textContent = "Incorrect. Try again!";
    }
}
