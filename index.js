/* eslint-disable indent */
/* eslint-disable strict */
/* global store cuid $ */

function getDogImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(resJSON => console.log(resJSON));
}




function handleImageNumberSubmit() {
    $('#js-dog-picture-form').submit(function (event){
        event.preventDefault();
        const pictureAmount = $('.js-dog-picture-entry').val(); 
        console.log(pictureAmount);
        getDogImages(pictureAmount);
    });
}

$(handleImageNumberSubmit);