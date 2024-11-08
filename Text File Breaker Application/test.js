
    "use strict";

        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
        const guesses = document.querySelector(".guesses");
        const lastResult = document.querySelector(".lastResult");
        const lowOrHi = document.querySelector(".lowOrHi");

        const guessSubmit = document.querySelector(".guessSubmit");
        const guessField = document.querySelector(".guessField");

        let guessCount = 1;
        let resetButton;
        guessField.focus();

        checkGuess();
        function checkGuess() {
            const userGuess = Number(guessField.value)
            if(guessCount===1) {
                guesses.textContent = "Previous guesses: ";
                
            }

            guesses.textContent += `${userGuess} `;

            guessSubmit.addEventListener("click", checkGuess);

            if (userGuess===randomNumber) {
                lastResult.textContent = "Congratulations! You guessed correct!";
                lastResult.style.bacgroundColor = "green";
                lowOrHi.textContent = "";
                setGameOver();
            } else if (guessCount === 10) {
                lastResult.textContent = "!!!Game Over!!!";
                lowOrHi.textContent = "";
                setGameOver();
            } else {
                lastResult.textContent = "Wrong Guess";
                lastResult.style.bacgroundColor = "red";
                if(userGuess < randomNumber) {
                    lowOrHi.textContent = "Last guess was too low";

                } else if (userGuess > randomNumber) {
                    lowOrHi.textContent = "Last guess was too high";
                }
            }

            guessCount++;
            guessField.value = "";
            guessField.focus();
        }
        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement("button");
            resetButton.textContent = "Start new game";
            document.body.append(resetButton);
            resetButton.addEventListener("click", resetGame);
            }

        function resetGame() {
            guessCount = 1;

            const resetParas = document.querySelectorAll(".resultParas p");
            for (const resetPara of resetParas) {
                resetPara.textContent = "";
            }

            resetButton.parentNode.removeChild(resetButton);

            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = "";
            guessField.focus();

            lastResult.style.backgroundColor = "white";

            randomNumber = Math.floor(Math.random() * 100) + 1;
            }
