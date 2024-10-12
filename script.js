const galleryImages = document.querySelectorAll('.gallery .background-images img');
const activeImage = document.querySelector('.active-image');
const thumbnailImages = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function setActiveImage(index) {
    currentIndex = index;
    activeImage.src = galleryImages[index].src; 
    updateThumbnails(index);
}

function updateThumbnails(index) {
    thumbnailImages.forEach(thumb => thumb.classList.remove('active-thumb'));
    thumbnailImages[index].classList.add('active-thumb');
}

document.getElementById('next').addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % galleryImages.length;
    setActiveImage(nextIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveImage(prevIndex);
});
thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        let selectedImageIndex = parseInt(thumbnail.getAttribute('data-index'));
        setActiveImage(selectedImageIndex);
    });
});
