function getDogImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(resJson => displayResults(resJson))
      .catch(error => alert('Dog breed not found. Try another breed.'));
}




function handleDogBreedSubmit() {
    $('#js-dog-picture-form').submit(function (event){
        event.preventDefault();
        const dogBreed = $('.js-dog-picture-entry').val(); 
        getDogImages(dogBreed); 
        $('.js-dog-picture-entry').val(''); 
        
    });
}

function displayResults(resJson) {
    // console.log(resJson.message);
    if (resJson.code === "404") {
        alert('Breed not found. Try another breed')
    }
    else {
    //replace the existing image with the new one    
    $('.result-img').replaceWith(
      `<img src="${resJson.message}" class="result-img">`
    );    
    //display the results section
    $('.result').removeClass('hidden');
    }
}



$(handleDogBreedSubmit);