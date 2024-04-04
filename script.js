let startAutoPlay = document.querySelector('#startBtn');

startAutoPlay.addEventListener('click', function() {
    function loopAutoPlayEffect() {
        // play the audio file
        document.querySelector('#audioPlayer').play();

        console.log('the DOM is loaded');
      const letters = document.querySelectorAll('.letter-container');
      const interval = 200; // Time in milliseconds between "autoplay" effects smaller numbers are less time, larger numbers are more time

  
      for (let i = 0; i < letters.length; i++) {
        console.log('the loop inciments');
        setTimeout(() => {
          letters.forEach(letter => letter.classList.remove('autoplay'));
          letters[i].classList.add('autoplay');
        }, i * interval);
      }
  
      // set the loopAutoPlay function to call itself again for continuous looping
      setTimeout(loopAutoPlayEffect, letters.length * interval);
    }
  
    // Start the loop as soon as the page loads
    loopAutoPlayEffect();
    

  });
  