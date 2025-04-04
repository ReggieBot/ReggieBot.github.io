const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5'];
/* Looping through images */
for (let i = 0; i < imageNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageNames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    // set the src of the main image = to the src of the clicked thumbnail
    newImage.addEventListener('click', function(e) {
        // when the thumbnail is clicked, change displayed image to the thumbnail
        // https://www.w3schools.com/jsref/event_target.asp

        displayedImage.setAttribute('src', e.target.getAttribute('src'));

        // update the alt text
        displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
        
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    // get current class
    const currentClass = btn.getAttribute('class');

    // if btn has dark class, switch to light - update text content, and darken overlay
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        // if btn has light class, switch to dark - update text content, and lighten overlay
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});