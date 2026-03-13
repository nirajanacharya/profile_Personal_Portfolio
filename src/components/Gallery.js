import React, { useMemo, useState } from 'react';

function Gallery() {
  const galleryItems = useMemo(
    () => [
      { id: 1, image: '/images/profile.jpg', caption: 'Professional Portrait', category: 'profile' },
      { id: 2, image: '/images/joining SFD.jpg', caption: 'Open Source Community Event', category: 'community' },
      { id: 3, image: '/images/training- 1.jpg', caption: 'Hands-on Student Training Session', category: 'teaching' },
      { id: 4, image: '/images/training-2.jpg', caption: 'Applied AI Classroom Workshop', category: 'teaching' },
      { id: 5, image: '/images/training-3.jpg', caption: 'Data-Driven Lecture Delivery', category: 'teaching' },
      { id: 6, image: '/images/training-4.jpg', caption: 'Practical Lab Mentoring', category: 'teaching' },
      { id: 7, image: '/images/training-5.jpg', caption: 'AI Concepts in Action', category: 'teaching' },
      { id: 8, image: '/images/training-6.jpg', caption: 'Audience Session on AI Personas', category: 'community' },
      { id: 9, image: '/images/award-shivaraj-municipality.jpg', caption: 'Municipality Recognition', category: 'awards' },
      { id: 10, image: '/images/award-pathao.jpg', caption: 'Industry Appreciation', category: 'awards' },
      { id: 11, image: '/images/award-lsp of the month2.jpg', caption: 'Leadership Program Recognition', category: 'awards' },
    ],
    []
  );

  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['all', 'profile', 'teaching', 'community', 'awards'];
  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="bg-gradient-to-b from-darker via-[#061325] to-darker px-5 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-light-text md:text-4xl">Field and Community Gallery</h2>
          <p className="mt-3 text-light-text/70">Snapshots from lectures, workshops, recognition events, and open-source communities.</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all ${
                filter === cat
                  ? 'border-neon-cyan bg-neon-cyan text-darker'
                  : 'border-neon-cyan/35 text-neon-cyan hover:bg-neon-cyan/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group overflow-hidden rounded-xl border border-neon-cyan/25 bg-[#071326] text-left"
            >
              <div className="h-52 overflow-hidden">
                <img src={item.image} alt={item.caption} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-light-text">{item.caption}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-neon-cyan/75">{item.category}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4" onClick={() => setSelectedImage(null)}>
            <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="mb-2 text-sm font-semibold text-neon-cyan">
                Close
              </button>
              <img src={selectedImage.image} alt={selectedImage.caption} className="max-h-[80vh] w-full rounded-xl border border-neon-cyan/35 object-contain" />
              <p className="mt-3 text-center text-sm text-light-text/80">{selectedImage.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
