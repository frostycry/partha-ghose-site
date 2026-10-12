import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-5xl font-bold leading-tight">
          Exploring Science, Mind and Reality
        </h2>
        
        <h3 className="text-xl italic text-[#D4AF37]">
          Partha Ghose <br />
          Physicist • Philosopher of Science • Educator • Science Communicator
        </h3>
        
        <p className="text-lg leading-relaxed">
          An intellectual journey through fundamental physics, consciousness, philosophy, and culture.
        </p>
        
        <div className="flex space-x-4 pt-4 font-sans">
          <Link href="/research" className="px-6 py-2 bg-[#000080] text-[#FFFFF0] rounded hover:bg-[#D4AF37] transition-colors">
            Research
          </Link>
          <Link href="/publications" className="px-6 py-2 border border-[#000080] rounded hover:bg-[#000080] hover:text-[#FFFFF0] transition-colors">
            Publications
          </Link>
          <Link href="/arts" className="px-6 py-2 border border-[#000080] rounded hover:bg-[#000080] hover:text-[#FFFFF0] transition-colors">
            Music & Theatre
          </Link>
        </div>
      </div>
      
      <div className="relative h-[650px] w-full rounded-sm overflow-hidden shadow-xl border border-[#D4AF37]/30">
        <Image 
          src="/images/pGLANdo92h2e0q4fxzJrP2p_z3B1hJbNAD6I_wEg38kGPskficJw1O5Itzn4KLX8oGcEpNGIrNGRCYqP-ubwP9HamlH-saeFtZ5wUD_0x0fszwyhyEG01_D1Wd6RxLGyu5K4SDRjUvdDX4oTtzcQSw-VsfGvuLuccFd4osRtBkWsB1igiKtDEIqn9ioN5OZY.jpg"
          alt="Abstract elegant physics interference wave pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
