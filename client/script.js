// script.js

document.getElementById('qr-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('qr-id').value;
    const price = document.getElementById('qr-price').value;
    const data = { id, price }

    fetch('http://localhost:3000/generate-qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
    })
        .then(response => response.blob())
        .then(blob => {
            const qrImage = document.createElement('img');
            const qrImageUrl = URL.createObjectURL(blob);
            qrImage.src = qrImageUrl;
            const qrResultDiv = document.getElementById('qr-result');
            qrResultDiv.innerHTML = '';
            qrResultDiv.appendChild(qrImage);
        })
        .catch(error => console.error('Error generating QR code:', error));

});
