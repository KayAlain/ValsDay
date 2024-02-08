var currentQuestion = 1;

        function showNextQuestion() {
            var currentQuestionElement = document.getElementById("question" + currentQuestion);
            currentQuestionElement.style.display = "none"; // Hide current question

            currentQuestion++; // Move to the next question

            var nextQuestionElement = document.getElementById("question" + currentQuestion);
            if (nextQuestionElement) {
                nextQuestionElement.style.display = "block"; // Show next question
            } else {
                // If there are no more questions, show the main container
                document.getElementById("mainContainer").style.display = "block";
                document.querySelector(".question-container").style.display = "none"; // Hide the question container
            }
        }

        function showCautionAlert() {
            alert("Caution! This action may lead to a heartbreak");
        }

        function showModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "flex"; // Display the modal
        }

        function openICloudLink() {
            // Open the iCloud link in a new tab or window
            window.open("https://share.icloud.com/photos/0f5C4d-hCFjztyn4Fz8Ffzl-A", "_blank");
        }