
document.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('date');
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  dateElement.textContent = today.toLocaleDateString(undefined, options);
  
  // Fetch initial quote
  fetchQuote();
});

document.getElementById('quoteButton').addEventListener('click', fetchQuote);

function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.querySelector('.quote-text').textContent = data.content;
      document.querySelector('.author').textContent = `— ${data.author}`;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
