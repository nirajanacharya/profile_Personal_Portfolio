import React from 'react';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: '/images/joining SFD.jpg',
      caption: 'SFD Event',
      category: 'community',
    },
    {
      id: 2,
      image: '/images/training- 1.jpg',
      caption: 'Training Session 1',
      category: 'workshop',
    },
    {
      id: 3,
      image: '/images/training-2.jpg',
      caption: 'Training Session 2',
      category: 'workshop',
    },
    {
      id: 4,
      image: '/images/training-3.jpg',
      caption: 'Training Session 3',
      category: 'workshop',
    },
    {
      id: 5,
      image: '/images/training-4.jpg',
      caption: 'Training Session 4',
      category: 'workshop',
    },
    {
      id: 6,
      image: '/images/training-5.jpg',
      caption: 'Training Session 5',
      category: 'workshop',
    },
    {
      id: 7,
      image: '/images/training-6.jpg',
      caption: 'Training Session 6',
      category: 'workshop',
    },
    {
      id: 8,
      image: '/images/award-lsp of the month2.jpg',
      caption: 'LSP of the Month Award',
      category: 'award',
    },
    {
      id: 9,
      image: '/images/award-pathao.jpg',
      caption: 'Pathao Award',
      category: 'award',
    },
    {
      id: 10,
      image: '/images/award-shivaraj-municipality.jpg',
      caption: 'Shivaraj Municipality Award',
      category: 'award',
    },
  ];

  const [filter, setFilter] = React.useState('all');
  const [selectedImage, setSelectedImage] = React.useState(null);

  const filteredItems =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-darker px-5 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan opacity-3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-12">&lt;Photo Gallery /&gt;</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'community', 'workshop', 'award'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                filter === cat
                  ? 'bg-neon-cyan text-darker border-2 border-neon-cyan shadow-lg shadow-neon-cyan/30'
                  : 'bg-transparent border-2 border-neon-cyan border-opacity-40 text-neon-cyan hover:border-opacity-100 hover:shadow-lg hover:shadow-neon-cyan/20'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-xl border-2 border-neon-cyan border-opacity-30 hover:border-neon-purple hover:border-opacity-100 cursor-pointer group h-48 shadow-lg hover:shadow-neon-purple/20 transition-all"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                <p className="text-neon-cyan font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-8 right-0 text-neon-cyan hover:text-neon-purple text-3xl transition-colors"
              >
                ×
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full rounded-lg border-2 border-neon-cyan shadow-lg shadow-neon-cyan/20"
              />
              <p className="text-center text-neon-cyan font-semibold mt-4">{selectedImage.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
