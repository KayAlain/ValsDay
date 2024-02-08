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

        function playVideo() {
            var videoPlayer = document.getElementById("videoPlayer");
            var watchVideoButton = document.querySelector(".close-btn");
            
            // Hide the "Watch Video" button
            watchVideoButton.style.display = "none";

            // Show the video player
            videoPlayer.style.display = "block";
            
            // Set the video source and play the video
            videoPlayer.src = "/vid/vid1.mp4";
            videoPlayer.play();
        }

        // function playVideo() {
        //     var videoPlayer = document.getElementById("videoPlayer");
        //     videoPlayer.style.display = "block";
        //     videoPlayer.src = "#"; // Set the video source
        //     videoPlayer.play(); // Play the video
        // }