import { motion } from 'framer-motion';
import { useState } from 'react';

const Journal = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample journal content - replace with your actual content
  const journalItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://res.cloudinary.com/dclr2ihxn/image/upload/v1780492932/ChatGPT_Image_Jun_3_2026_12_13_06_AM_ysprkf.png',
      caption: 'Building the future one line of code at a time 💻',
      date: '2026-06-28',
      likes: 245,
      playlist: null
    },
    // Content Creation Tips Series (First playlist with 13 videos)
    {
      id: 2,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/3ynbgeg7yjw',
      thumbnail: 'https://img.youtube.com/vi/3ynbgeg7yjw/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 1 🎨',
      date: '2026-06-28',
      likes: 532,
      playlist: 'content-tips'
    },
    {
      id: 3,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/sf-y8AdhAH4',
      thumbnail: 'https://img.youtube.com/vi/sf-y8AdhAH4/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 2 🎨',
      date: '2026-06-27',
      likes: 489,
      playlist: 'content-tips'
    },
    {
      id: 4,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/mXLGimkUgbg',
      thumbnail: 'https://img.youtube.com/vi/mXLGimkUgbg/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 3 🎨',
      date: '2026-06-26',
      likes: 467,
      playlist: 'content-tips'
    },
    {
      id: 5,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/hzTJiKvJIYk',
      thumbnail: 'https://img.youtube.com/vi/hzTJiKvJIYk/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 4 🎨',
      date: '2026-06-25',
      likes: 502,
      playlist: 'content-tips'
    },
    {
      id: 6,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/jqs6EYr5Zz4',
      thumbnail: 'https://img.youtube.com/vi/jqs6EYr5Zz4/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 5 🎨',
      date: '2026-06-24',
      likes: 521,
      playlist: 'content-tips'
    },
    {
      id: 7,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/btkY5vxYPow',
      thumbnail: 'https://img.youtube.com/vi/btkY5vxYPow/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 6 🎨',
      date: '2026-06-23',
      likes: 478,
      playlist: 'content-tips'
    },
    {
      id: 8,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/bGidggnIXs8',
      thumbnail: 'https://img.youtube.com/vi/bGidggnIXs8/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 7 🎨',
      date: '2026-06-22',
      likes: 495,
      playlist: 'content-tips'
    },
    {
      id: 9,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/3lEvrJU7_lQ',
      thumbnail: 'https://img.youtube.com/vi/3lEvrJU7_lQ/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 8 🎨',
      date: '2026-06-21',
      likes: 543,
      playlist: 'content-tips'
    },
    {
      id: 10,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/gEixAP2ogOQ',
      thumbnail: 'https://img.youtube.com/vi/gEixAP2ogOQ/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 9 🎨',
      date: '2026-06-20',
      likes: 512,
      playlist: 'content-tips'
    },
    {
      id: 11,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/pQRkf2ruffk',
      thumbnail: 'https://img.youtube.com/vi/pQRkf2ruffk/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 10 🎨',
      date: '2026-06-19',
      likes: 487,
      playlist: 'content-tips'
    },
    {
      id: 12,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/v0vA3bTr7fQ',
      thumbnail: 'https://img.youtube.com/vi/v0vA3bTr7fQ/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 11 🎨',
      date: '2026-06-18',
      likes: 556,
      playlist: 'content-tips'
    },
    {
      id: 13,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/mQGx3PD035A',
      thumbnail: 'https://img.youtube.com/vi/mQGx3PD035A/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 12 🎨',
      date: '2026-06-17',
      likes: 498,
      playlist: 'content-tips'
    },
    {
      id: 14,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/c5qZbkCryyU',
      thumbnail: 'https://img.youtube.com/vi/c5qZbkCryyU/maxresdefault.jpg',
      caption: 'Content Creation Tips - Part 13 🎨',
      date: '2026-06-16',
      likes: 524,
      playlist: 'content-tips'
    },
    // 11 Skills Monetization Series (Second playlist with 11 videos)
    {
      id: 15,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/lVN6AmYCVyE',
      thumbnail: 'https://img.youtube.com/vi/lVN6AmYCVyE/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 1 �',
      date: '2026-06-15',
      likes: 445,
      playlist: '11-skills'
    },
    {
      id: 16,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/8E4eeeXbJpY',
      thumbnail: 'https://img.youtube.com/vi/8E4eeeXbJpY/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 2 �',
      date: '2026-06-14',
      likes: 431,
      playlist: '11-skills'
    },
    {
      id: 17,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/1lLtqSlaRgk',
      thumbnail: 'https://img.youtube.com/vi/1lLtqSlaRgk/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 3 �',
      date: '2026-06-13',
      likes: 467,
      playlist: '11-skills'
    },
    {
      id: 18,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/djS5YbE3DIk',
      thumbnail: 'https://img.youtube.com/vi/djS5YbE3DIk/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 4 �',
      date: '2026-06-12',
      likes: 489,
      playlist: '11-skills'
    },
    {
      id: 19,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/boVS5KH8LIY',
      thumbnail: 'https://img.youtube.com/vi/boVS5KH8LIY/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 5 �',
      date: '2026-06-11',
      likes: 502,
      playlist: '11-skills'
    },
    {
      id: 20,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/5IXzGXmt4YA',
      thumbnail: 'https://img.youtube.com/vi/5IXzGXmt4YA/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 6 �',
      date: '2026-06-10',
      likes: 478,
      playlist: '11-skills'
    },
    {
      id: 21,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/3I0DRXm-Uss',
      thumbnail: 'https://img.youtube.com/vi/3I0DRXm-Uss/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 7 �',
      date: '2026-06-09',
      likes: 512,
      playlist: '11-skills'
    },
    {
      id: 22,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/RRMqt3u2x9c',
      thumbnail: 'https://img.youtube.com/vi/RRMqt3u2x9c/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 8 �',
      date: '2026-06-08',
      likes: 534,
      playlist: '11-skills'
    },
    {
      id: 23,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/Vw5ptZr-wsQ',
      thumbnail: 'https://img.youtube.com/vi/Vw5ptZr-wsQ/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 9 �',
      date: '2026-06-07',
      likes: 498,
      playlist: '11-skills'
    },
    {
      id: 24,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/3gtuAQwLjP4',
      thumbnail: 'https://img.youtube.com/vi/3gtuAQwLjP4/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 10 �',
      date: '2026-06-06',
      likes: 521,
      playlist: '11-skills'
    },
    {
      id: 25,
      type: 'youtube-short',
      url: 'https://www.youtube.com/embed/u0eYE7yVBSc',
      thumbnail: 'https://img.youtube.com/vi/u0eYE7yVBSc/maxresdefault.jpg',
      caption: '11 Skills Monetization - Episode 11 �',
      date: '2026-06-05',
      likes: 567,
      playlist: '11-skills'
    },
    {
      id: 26,
      type: 'video',
      url: 'https://drive.google.com/file/d/1O_ghcmxAgr9Tk4mZXMEXwAWx3cGoVNRU/preview',
      thumbnail: 'https://via.placeholder.com/400',
      caption: 'Success Plan Masterclass - Digital Skills Journey',
      date: '2026-06-04',
      likes: 421,
      playlist: null
    },
    {
      id: 27,
      type: 'image',
      url: 'https://via.placeholder.com/400',
      caption: 'Late night coding sessions ✨',
      date: '2026-06-03',
      likes: 189,
      playlist: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs - Optimized positioning */}
          <div className="absolute top-10 left-5 w-64 h-64 bg-[#7075D0]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-[#383AB4]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#34A7E0]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

          {/* Floating Icons - Hidden on mobile, visible on desktop */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-24 right-16 text-white/8 text-5xl"
          >
            💼
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute bottom-24 left-16 text-white/8 text-5xl"
          >
            🚀
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/2 right-32 text-white/8 text-4xl"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/3 left-32 text-white/8 text-4xl"
          >
            📈
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white/90 bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Fresh Content Weekly
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-cyan-200">Journal</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              A glimpse into my digital journey, thoughts, and creative moments
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-white text-indigo-600 shadow-lg'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                All Content
              </button>
              <button
                onClick={() => setSelectedFilter('content-tips')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === 'content-tips'
                    ? 'bg-white text-indigo-600 shadow-lg'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                🎨 Content Creation Tips
              </button>
              <button
                onClick={() => setSelectedFilter('11-skills')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === '11-skills'
                    ? 'bg-white text-indigo-600 shadow-lg'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                💰 11 Skills Monetization
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249,250,251)" />
          </svg>
        </div>
      </section>

      {/* Journal Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalItems
              .filter(item => 
                selectedFilter === 'all' || item.playlist === selectedFilter
              )
              .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMedia(item)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Media Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-indigo-100 to-cyan-100">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400?text=Video+Thumbnail';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Caption & Info */}
                <div className="p-4">
                  {item.playlist && (
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-2 ${
                      item.playlist === 'content-tips' 
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.playlist === 'content-tips' ? '🎨 Creation' : '💰 Monetization'}
                    </span>
                  )}
                  <p className="text-gray-800 font-medium mb-2 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.date}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-700">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for expanded view */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative ${
              selectedMedia.type === 'youtube-short' 
                ? 'w-full max-w-md h-[90vh]' 
                : selectedMedia.type === 'video'
                ? 'w-full max-w-5xl'
                : 'w-full max-w-4xl'
            }`}
          >
            {selectedMedia.type === 'image' ? (
              <div className="bg-white rounded-2xl p-6">
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption}
                  className="w-full rounded-xl max-h-[70vh] object-contain mx-auto"
                />
                <div className="mt-6">
                  <p className="text-lg text-gray-800 mb-4">{selectedMedia.caption}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{selectedMedia.date}</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-700">{selectedMedia.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedMedia.type === 'youtube-short' ? (
              <div className="flex flex-col h-full">
                <div className="flex-1 bg-black rounded-2xl overflow-hidden">
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={selectedMedia.caption}
                  />
                </div>
                <div className="bg-white rounded-2xl p-4 mt-4">
                  <p className="text-base text-gray-800 mb-2">{selectedMedia.caption}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{selectedMedia.date}</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-700">{selectedMedia.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={selectedMedia.url}
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allow="autoplay"
                    allowFullScreen
                    title={selectedMedia.caption}
                  />
                </div>
                <div className="mt-6">
                  <p className="text-lg text-gray-800 mb-4">{selectedMedia.caption}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{selectedMedia.date}</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-gray-700">{selectedMedia.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Journal;
