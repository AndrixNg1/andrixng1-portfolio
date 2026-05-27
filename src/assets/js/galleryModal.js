export function initGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImages = document.getElementById('modal-images');
  const modalClose = document.getElementById('modal-close');

  if (!modal || !modalTitle || !modalDescription || !modalImages || !modalClose) return;

  // Open modal on trigger click
  document.querySelectorAll('.gallery-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const title = trigger.getAttribute('data-gallery-title') || '';
      const description = trigger.getAttribute('data-gallery-description') || '';
      const imagesRaw = trigger.getAttribute('data-gallery-images') || '[]';

      let images = [];
      try {
        images = JSON.parse(imagesRaw);
      } catch (e) {
        images = [];
      }

      modalTitle.textContent = title;
      modalDescription.textContent = description;

      // Clear previous images and insert new ones
      modalImages.innerHTML = '';
      images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = title;
        img.className = 'w-full rounded-2xl border border-border';
        img.loading = 'lazy';
        modalImages.appendChild(img);
      });

      modal.showModal();
    });
  });

  // Close modal
  modalClose.addEventListener('click', () => {
    modal.close();
  });

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  // Close on Escape key (native behavior, but ensure cleanup)
  modal.addEventListener('close', () => {
    modalImages.innerHTML = '';
  });
}
