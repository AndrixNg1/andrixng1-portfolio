export function initPhotosModal() {
  const modal = document.getElementById('photo-lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');

  if (modal && closeBtn && lightboxImg) {
    document.querySelectorAll('.photo-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-photo-src');
        if (src) {
          lightboxImg.src = src;
          // Use standard DOM API without TS assertions
          modal.showModal();
          
          setTimeout(() => {
            lightboxImg.classList.remove('scale-95', 'opacity-0');
            lightboxImg.classList.add('scale-100', 'opacity-100');
          }, 10);
        }
      });
    });

    const closeModal = () => {
      lightboxImg.classList.remove('scale-100', 'opacity-100');
      lightboxImg.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        modal.close();
        lightboxImg.src = '';
      }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}
