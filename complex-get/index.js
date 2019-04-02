'use strict';
/* eslint-disable indent */
/* eslint-disable strict */
/* global store cuid $ */


const apiKey = 'DV3HFODcaoBNRBLk4LBeRW3tZb3FjyVCKElrfUKe';


const searchURL = 'developer.nps.gov/api/v1/parks';


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  return queryItems.join('&');
}

function displayResults(responseJson) {
  // if there are previous results, remove them
  console.log(responseJson);
  $('#results-list').empty();
  // iterate through the items array
  for (let i = 0; i < responseJson.data.length; i++){
    // for each park object in the items 
    //array, add a list item to the results 
    //list with the park name, description,
    //and url
    $('#results-list').append(
      `<li><h3>${responseJson.data[i].fullName}</h3>
      <p>${responseJson.data[i].description}</p>
      <p>${responseJson.data[i].url}</p>
      <p> 'text' </p>
      </li>`
    );}
  //display the results section  
  $('#results').removeClass('hidden');
}

function getNationalParks(query, maxResults=10) {
  const params = {
    
    // q: query,
    stateCode: query,
    limit: maxResults,
    start: 1,
    api_key: apiKey,
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + '?' + queryString;

  console.log(url);
// console.log(url); is showing correct api url.


  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getNationalParks(searchTerm, maxResults);
  });
}

$(watchForm);