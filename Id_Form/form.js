const form = document.getElementById('idForm');
const idCard = document.getElementById('idCard');
const idDetails = document.getElementById('idDetails');
const idImage = document.getElementById('idImage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const faculty = document.getElementById('faculty').value.trim();
    const bn = document.getElementById('bn').value.trim();
    const imageInput = document.getElementById('image').files[0];

    // BN VALIDATION: bn + 6 digits
    const bnPattern = /^bn\d{6}$/;

    if (!bnPattern.test(bn)) {
        alert("BN must start with 'bn' followed by exactly 6 digits. Example: bn230553");
        return;
    }

    if (!imageInput) {
        alert("Please select your image.");
        return;
    }

    // Display user info
    idDetails.innerHTML = `
        <p>Name: ${name} <br>
        Faculty: ${faculty} <br>
        BN Number: ${bn}</p>
    `;

    // Load local image
    const reader = new FileReader();
    reader.onload = function() {
        idImage.src = reader.result;
    };
    reader.readAsDataURL(imageInput);

    // Hide form and show ID card
    form.parentElement.style.display = 'none';
    idCard.style.display = 'flex';
});
