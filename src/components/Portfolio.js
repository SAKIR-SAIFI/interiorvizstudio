import React, { useCallback, useEffect, useState } from 'react';
import { media } from './portfolioAssets';

const categoryDetails = [
  { folder: 'bedroom', title: 'Bedrooms', description: 'Calm, considered spaces for rest and retreat.' },
  { folder: 'classical bedroom', title: 'Classical Bedrooms', description: 'Bedroom interiors with timeless, traditional detailing.' },
  { folder: 'commen area', title: 'Common Areas', description: 'Welcoming shared spaces designed for everyday living.' },
  { folder: 'drawing room', title: 'Drawing Rooms', description: 'Formal living spaces with a distinctive point of view.' },
  { folder: 'foyer', title: 'Foyers', description: 'Thoughtful first impressions, from entryways to passages.' },
  { folder: 'furniture making area', title: 'Furniture & Living Areas', description: 'Living spaces and furniture-focused interior studies.' },
  { folder: 'hosiery mill', title: 'Hosiery Mill', description: 'Interior planning and visualizations for a hosiery mill.' },
  { folder: 'kids bedroom', title: 'Kids’ Bedrooms', description: 'Comfortable, characterful rooms for younger family members.' },
  { folder: 'kitchen', title: 'Kitchens', description: 'Functional kitchens shaped around materials and light.' },
  { folder: 'lobby', title: 'Lobbies & Living Areas', description: 'Generous communal spaces, lounges, and living rooms.' },
  { folder: 'office room', title: 'Office Rooms', description: 'Workspaces and offices designed for focus and flow.' },
  { folder: 'resturant', title: 'Restaurant', description: 'Restaurant design portfolio documents.' },
  { folder: 'school', title: 'School', description: 'Learning, reception, and administration spaces.' },
  { folder: 'stair case', title: 'Staircases', description: 'Architectural staircases and the spaces around them.' },
  { folder: 'toilet', title: 'Bathrooms', description: 'Bathroom interiors with practical, polished finishes.' },
  { folder: 'top veiw', title: 'Top Views', description: 'Overhead views showing how each space comes together.' },
];

const categories = categoryDetails
  .map((details) => {
    const files = media
      .filter((item) => item.folder === details.folder)
      .sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));

    return { ...details, files, cover: files.find((item) => !item.isPdf) };
  })
  .filter((category) => category.files.length > 0);

const formatFileName = (fileName) => fileName
  .replace(/\.[^.]+$/, '')
  .replace(/[ _-]+/g, ' ')
  .trim();

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(null);

  const visibleCategories = activeCategory === 'All'
    ? categories
    : categories.filter((category) => category.title === activeCategory);

  const galleryImages = selectedCategory
    ? selectedCategory.files.filter((file) => !file.isPdf)
    : [];

  const currentImage = carouselIndex !== null ? galleryImages[carouselIndex] : null;

  const openCategory = (category) => {
    setSelectedCategory(category);
    setCarouselIndex(null);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    setCarouselIndex(null);
  };

  const openCarousel = (file) => {
    const index = galleryImages.findIndex((item) => item.path === file.path);
    setCarouselIndex(index >= 0 ? index : 0);
  };

  const showPreviousImage = useCallback(() => {
    setCarouselIndex((index) => (
      index === null || galleryImages.length === 0
        ? index
        : (index - 1 + galleryImages.length) % galleryImages.length
    ));
  }, [galleryImages.length]);

  const showNextImage = useCallback(() => {
    setCarouselIndex((index) => (
      index === null || galleryImages.length === 0
        ? index
        : (index + 1) % galleryImages.length
    ));
  }, [galleryImages.length]);

  useEffect(() => {
    if (!selectedCategory) return undefined;

    const handleKeyDown = (event) => {
      if (carouselIndex === null) {
        if (event.key === 'Escape') closeCategory();
        return;
      }

      if (event.key === 'Escape') setCarouselIndex(null);
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNextImage();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCategory, carouselIndex, galleryImages.length, showNextImage, showPreviousImage]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Selected Works</span>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <p className="portfolio-intro">Browse the portfolio by space and explore the original project images.</p>
        </div>

        <div className="portfolio-filter" aria-label="Filter portfolio by space">
          {['All', ...categories.map((category) => category.title)].map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visibleCategories.map((category) => (
            <article key={category.folder} className="project-card">
              <div className="project-image">
                <button
                  type="button"
                  className="project-cover-button"
                  aria-label={`Open ${category.title} project images`}
                  onClick={() => openCategory(category)}
                >
                  {category.cover ? (
                    <img
                      className="project-cover"
                      src={category.cover.src}
                      alt={`${category.title} interior`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-cover-placeholder" aria-hidden="true">
                      <span>PDF</span>
                      <span className="pdf-placeholder-lines" />
                    </div>
                  )}
                </button>
                <span className="project-count">
                  {category.files.length} {category.files.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className="project-info">
                <div className="project-category">Interior Design</div>
                <h3 className="project-title">{category.title}</h3>
                <p className="project-description">{category.description}</p>
                <button
                  type="button"
                  className="view-project"
                  aria-label={`Explore ${category.title} gallery`}
                  onClick={() => openCategory(category)}
                >
                  Explore gallery <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="gallery-modal">
          <section
            className="gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
          >
            <div className="gallery-header">
              <div>
                <span className="section-tag">Project Gallery</span>
                <h2 id="gallery-title" className="gallery-title">{selectedCategory.title}</h2>
                <p className="gallery-description">
                  {selectedCategory.files.length} {selectedCategory.files.length === 1 ? 'project file' : 'project files'}
                </p>
              </div>
              <button
                type="button"
                className="gallery-close"
                aria-label="Close gallery"
                onClick={() => closeCategory()}
              >
                ×
              </button>
            </div>

            <div className="gallery-grid">
              {selectedCategory.files.map((file) => (
                <article className={`gallery-item ${file.isPdf ? 'gallery-item-pdf' : ''}`} key={file.path}>
                  {file.isPdf ? (
                    <a href={file.src} target="_blank" rel="noreferrer" className="gallery-pdf-link">
                      <span className="gallery-pdf-icon" aria-hidden="true">PDF</span>
                      <span>{formatFileName(file.fileName)}</span>
                      <span className="gallery-pdf-action">Open document ↗</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="gallery-image-link"
                      aria-label={`View ${formatFileName(file.fileName)} in carousel`}
                      onClick={() => openCarousel(file)}
                    >
                      <img src={file.src} alt={formatFileName(file.fileName)} loading="lazy" />
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>
          <button
            type="button"
            className="gallery-backdrop"
            aria-label="Close gallery"
            onClick={() => closeCategory()}
          />
        </div>
      )}

      {currentImage && selectedCategory && (
        <div
          className="carousel"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCategory.title} image carousel`}
        >
          <button
            type="button"
            className="carousel-backdrop"
            aria-label="Close image view"
            onClick={() => setCarouselIndex(null)}
          />
          <figure className="carousel-figure">
            <img
              className="carousel-image"
              src={currentImage.src}
              alt={formatFileName(currentImage.fileName)}
            />
            <figcaption className="carousel-caption">
              <span className="carousel-counter">
                {carouselIndex + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>
          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                className="carousel-nav carousel-prev"
                aria-label="Previous image"
                onClick={() => showPreviousImage()}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="carousel-nav carousel-next"
                aria-label="Next image"
                onClick={() => showNextImage()}
              >
                <span aria-hidden="true">→</span>
              </button>
            </>
          )}
          <button
            type="button"
            className="carousel-close"
            aria-label="Close image view"
            onClick={() => setCarouselIndex(null)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
