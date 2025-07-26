document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-btn');
    const sendBtn = document.getElementById('send-btn');
    const reviewText = document.getElementById('review-text');

    // Copy to clipboard
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(reviewText.textContent)
            .then(() => {
                alert('Review copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

    // Open WhatsApp support email
    sendBtn.addEventListener('click', function() {
        const subject = 'WhatsApp Account Ban Review';
        const body = reviewText.textContent;
        window.open(`mailto:support@whatsapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    });
});
