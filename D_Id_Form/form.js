const form = document.getElementById('idForm');
const idCard = document.getElementById('idCard');
const idDetails = document.getElementById('idDetails');
const idImage = document.getElementById('idImage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const name = document.getElementById('name').value;
    const faculty = document.getElementById('faculty').value;
    const bn = document.getElementById('bn').value;
    const imageUrl = document.getElementById('image').value || 'image.JPG'; // fallback image

    // Populate ID card
    idDetails.innerHTML = `
        <p>Name: ${name} <br>
        Faculty: ${faculty} <br>
        BN Number: ${bn}</p>
    `;
    idImage.src = imageUrl;

    // Hide form, show ID card
    form.parentElement.style.display = 'none';
    idCard.style.display = 'flex';
});
