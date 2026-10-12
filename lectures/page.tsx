import Image from 'next/image'

export default function Lectures() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-8">
      <h2 className="text-4xl font-bold border-b border-[#D4AF37] pb-4">Lectures and Teaching</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Undergraduate and postgraduate courses, especially recent IIT Mandi programmes in History of Science and Technology, Philosophy of Science, and Quantum Cognition. Include keynote addresses, public lectures, presentation slides, and recordings.
          </p>
        </div>
        <div className="relative w-full h-[350px]">
          <Image 
            src="/images/ChatGPT Image Oct 12, 2026, 02_45_25 PM_2.jpg"
            alt="Professor Partha Ghose speaking at a lectern"
            fill
            className="object-cover rounded-sm shadow-lg border border-[#D4AF37]/30"
          />
        </div>
      </div>
    </div>
  )
}