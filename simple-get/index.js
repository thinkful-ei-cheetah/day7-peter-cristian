/* eslint-disable indent */
/* eslint-disable strict */
/* global store cuid $ */

function getDogImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(resJson => displayResults(resJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}




function handleImageNumberSubmit() {
    $('#js-dog-picture-form').submit(function (event){
        event.preventDefault();
        const pictureAmount = $('.js-dog-picture-entry').val(); 
        pictureAmount >= 1 && pictureAmount <= 50 ? getDogImages(pictureAmount) : console.log('please input 1-50');
        $('.js-dog-picture-entry').val(''); 
        
    });
}

function displayResults(resJson) {
    console.log(resJson.message);
    //replace the existing image with the new one
    for (let i=0; i < resJson.message.length; i++){
    
    $('.results').append(
      `<img src="${resJson.message[i]}" class="results-img">`
    );
    console.log(resJson.message[i]);
    //display the results section
    $('.results').removeClass('hidden');
    }
  }



$(handleImageNumberSubmit);