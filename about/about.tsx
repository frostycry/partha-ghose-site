import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
      <div className="md:col-span-1">
        <Image 
          src="/images/ChatGPT Image Oct 12, 2026, 02_45_21 PM_2.jpg"
          alt="Portrait of Professor Partha Ghose"
          width={400}
          height={500}
          className="rounded-sm shadow-lg border border-[#D4AF37]/30"
        />
      </div>
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-4xl font-bold border-b border-[#D4AF37] pb-4">About</h2>
        <p className="text-lg leading-relaxed">
          An introductory biography tracing education at Presidency College, Imperial College London, and research under S. N. Bose; academic appointments at Visva-Bharati, the British Council, S. N. Bose National Centre, and subsequent affiliations.
        </p>
      </div>
    </div>
  )
}