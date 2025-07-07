'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.1}
        scale={1.05}
        transitionSpeed={2000}
        className="w-full max-w-sm"
      >
        <motion.div
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-2xl p-6 text-center border border-gray-200"
        >
          <img
            src="/avatar.jpg"
            alt="Bùi Đình Nam Khánh"
            className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Bùi Đình Nam Khánh</h1>
          <p className="text-gray-500 mb-4">Sinh viên Thiết kế đồ họa</p>

          <div className="text-gray-700 text-sm mb-4 space-y-1">
            <p>📞 0828028966</p>
            <p>📧 nkhanh130820@gmail.com</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/namkhanh13208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/nkaaaaa28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:underline"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </Tilt>
    </div>
  )
}
