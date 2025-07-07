'use client'

import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.03}
        transitionSpeed={2500}
        className="w-full max-w-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-2xl p-6 text-center border border-gray-200"
        >
          <img
            src="/avatar.jpg" // đúng tên ảnh trong public
            alt="Avatar"
            className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />

          <h1 className="text-2xl font-bold mt-4 text-gray-800">Bùi Đình Nam Khánh</h1>
          <p className="text-gray-500 mb-4">Sinh viên Thiết kế đồ họa</p>

          <div className="text-gray-700 text-sm mb-4 space-y-1">
            <p>📞 0828028966</p>
            <p>📧 nkhanh130820@gmail.com</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:underline hover:text-pink-700"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </Tilt>
    </div>
  )
}
