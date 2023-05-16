// This script will be injected into all pages that the extension is enabled for.

// Get the search bar and the list of candidates.

var searchBar = document.getElementById("searchBar");

var candidatesList = document.getElementById("candidatesList");

// When the search bar is changed, update the list of candidates.

searchBar.addEventListener("input", function() {

  // Get the search term.

  var searchTerm = searchBar.value;

  // Make an API call to get a list of candidates that match the search term.

  var apiUrl = "https://api.example.com/candidates?q=" + searchTerm;

  fetch(apiUrl)

    .then(response => response.json())

    .then(candidates => {

      // Update the list of candidates.

      candidatesList.innerHTML = "";

      candidates.forEach(candidate => {

        var candidateListItem = document.createElement("li");

        candidateListItem.innerText = candidate.name;

        candidatesList.appendChild(candidateListItem);

      });

    });

});

