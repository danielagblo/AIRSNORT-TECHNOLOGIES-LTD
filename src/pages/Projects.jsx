import { useState } from 'react'
import { motion } from 'framer-motion'
import PhotoAlbum from 'react-photo-album'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { projects } from '../data/projectsData'

export default function Projects() {
  const [index, setIndex] = useState(-1)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Our Work</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
              Project Experience
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We have delivered security and technology solutions for private residences,
              corporate offices, hotels, traditional authorities, apartment complexes and
              commercial properties across Ghana.
            </p>
          </motion.div>

          <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Selected projects include:</span> Best Western Plus
              Hotel (Accra), Q.I.C offices across Tamale, Techiman, Kumasi and Koforidua, Chain Homes
              (Accra), executive and private residences, official and traditional residences, and
              additional confidential residential projects for prominent business and entertainment
              personalities.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PhotoAlbum
              layout="rows"
              photos={projects}
              targetRowHeight={250}
              onClick={({ index: i }) => setIndex(i)}
              render={{
                wrapper: ({ children, ...rest }, { photo }) => (
                  <div
                    {...rest}
                    className={`${rest.className || ''} relative group cursor-pointer overflow-hidden rounded-xl`}
                  >
                    {children}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <p className="text-white text-sm font-semibold">{photo.title}</p>
                        <p className="text-white/80 text-xs">{photo.description}</p>
                      </div>
                    </div>
                  </div>
                ),
              }}
            />
          </motion.div>
        </div>
      </section>

      <Lightbox
        index={index}
        slides={projects.map((p) => ({
          src: p.src,
          title: p.title,
          description: p.description,
        }))}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </motion.div>
  )
}
