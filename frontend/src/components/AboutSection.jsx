// import { useState, useRef } from 'react';
// import { Play, Pause, CheckCircle } from 'lucide-react';

// export default function AboutSection() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         videoRef.current.play();
//         setIsPlaying(true);
//       }
//     }
//   };

//   const handleVideoEnded = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <section className="w-full mx-auto scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16" id="about">
//       <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

//         {/* Left side - Video */}
//         <div className="relative">
//           <div className="w-full h-90 rounded-2xl overflow-hidden relative">
//             <video
//               ref={videoRef}
//               className="w-full h-full object-cover rounded-2xl"
//               onEnded={handleVideoEnded}
//               onClick={togglePlay}
//               autoPlay
//             >
//               <source src="https://twilio-server.s3.us-east-1.amazonaws.com/Session+scribe+video+(1).mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
            
//             {/* Play/Pause Button Overlay */}
//             {!isPlaying && (
//               <div className="absolute inset-0 bg-gradient-to-r from-[#B674E1] to-[#533490] bg-opacity-30 rounded-2xl flex items-center justify-center">
//                 <button 
//                   onClick={togglePlay}
//                   className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
//                 >
//                   <Play className="w-8 h-8 ml-1" fill="white" />
//                 </button>
//               </div>
//             )}

//             {/* Pause button when playing */}
//             {isPlaying && (
//               <button 
//                 onClick={togglePlay}
//                 className="absolute top-4 right-4 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
//               >
//                 <Pause className="w-6 h-6" fill="white" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Right side - Content */}
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-pink-400 mb-4">
//               Who Are We
//             </h2>
//             <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-6">
//               Your Meeting Intelligence Partner
//             </h3>
//             <p className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed mb-8">
//               At Session Scribe, we're building the smartest AI agent to
//               help teams capture, understand, and act on every
//               conversation—effortlessly and accurately.
//             </p>
//           </div>

//           {/* Feature list */}
//           <div className="space-y-6">
//             <div className="flex items-start space-x-3">
//               <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                   Human-Centric AI
//                 </h4>
//                 <p className="text-gray-600">
//                   Designed to enhance collaboration, not replace it.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                   Built for Teams
//                 </h4>
//                 <p className="text-gray-600">
//                   Trusted by professionals who value clarity and speed.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                   Privacy-First
//                 </h4>
//                 <p className="text-gray-600">
//                   Your meetings, your data—secure and under your control.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useRef } from 'react';
import { Play, Pause, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="w-full mx-auto scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16" id="about">
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

        {/* Left side - Video */}
        <motion.div custom={1}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  variants={{
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // delay based on index
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}}  className="relative">
          <div className="w-full h-90 rounded-2xl overflow-hidden relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full object-cover rounded-2xl"
              controls={true}
            >
              <source src="https://twilio-server.s3.us-east-1.amazonaws.com/Session+scribe+video+(1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div custom={1}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  variants={{
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // delay based on index
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}}  className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-pink-400 mb-4">
              Who Are We
            </h2>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-6">
              Your Meeting Intelligence Partner
            </h3>
            <p className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed mb-8">
              At Session Scribe, we're building the smartest AI agent to
              help teams capture, understand, and act on every
              conversation—effortlessly and accurately.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
                  Human-Centric AI
                </h4>
                <p className="text-gray-600">
                  Designed to enhance collaboration, not replace it.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
                  Built for Teams
                </h4>
                <p className="text-gray-600">
                  Trusted by professionals who value clarity and speed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
                  Privacy-First
                </h4>
                <p className="text-gray-600">
                  Your meetings, your data—secure and under your control.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}