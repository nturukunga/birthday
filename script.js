function expandPolaroid(polaroid) {
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expandedImage');
    const expandedCaption = document.getElementById('expandedCaption');
    const expandedParagraph = document.getElementById('expandedParagraph');
    
    const imgSrc = polaroid.querySelector('img').src;
    const captionText = polaroid.querySelector('.caption').textContent;
    const hiddenParagraph = polaroid.querySelector('.hidden-paragraph').textContent;
    
    expandedImage.src = imgSrc;
    expandedCaption.textContent = captionText;
    expandedParagraph.textContent = hiddenParagraph;

    overlay.style.display = 'flex';
    setTimeout(() => {
        polaroid.style.transform = "scale(1.05)";
    }, 0);
}

function closePolaroid() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        polaroid.style.transform = "scale(1)";
    });
}
