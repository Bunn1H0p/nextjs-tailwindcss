import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-w-screen p-10 bg-slate-900 text-gray-400">With static positioning
      <div className="mt-5 h-70 max-w-auto bg-slate-700 rounded-xl p-5 text-white">Relative parent
        <div className=" mt-3 h-50 max-w-auto bg-slate-600 p-5 text-gray-300">Static parent
          <div className="mt-5 flex gap-3">
            <div className="w-32 h-18 rounded-xl bg-blue-600 text-center place-content-center">Static child?</div>
            <div className="md:absolute md:top-0 md:right-0 w-32 h-18 rounded-xl bg-white text-blue-600 text-center place-content-center">Static child?</div>
          </div>
        </div>
      </div>

      {/* <div className="columns-2 sm:columns-3 sm:gap-8">
      <div className="grid gap-x-4 gap-y-4">
        <div className="aspect-square bg-amber-500">01</div>
        <div className="aspect-square bg-amber-600">02</div>
        <Image 
          src="/mountains-1.png"
          alt="Mountains 1"
          width={3456/15}
          height={5184/15} 
          className="aspect-portrait"
        />
        <Image 
          src="/mountains-2.png"
          alt="Mountains 2"
          width={3714/15}
          height={5564/15}
          className="aspect-portrait"
        />
        <Image 
          src="/mountains-3.png"
          alt="Mountains 3"
          width={5184/15}
          height={3456/15}
          className="aspect-retro"
        />
        <Image 
          src="/mountains-4.png"
          alt="Mountains 4"
          width={4096/15}
          height={2733/15}
          className="aspect-retro"
        />
        <Image 
          src="/mountains-5.png"
          alt="Mountains 5"
          width={5472/15}
          height={3648/15}
          className="aspect-retro"
        />
        <Image 
          src="/mountains-6.png"
          alt="Mountains 6"
          width={4240/15}
          height={2832/15}
          className="aspect-square"
        />
        <Image 
          src="/mountains-7.png"
          alt="Mountains 7"
          width={3072/15}
          height={4608/15}
          className="aspect-portrait"
        />
        <Image 
          src="/mountains-8.png"
          alt="Mountains 8"
          width={2640/15}
          height={3960/15}
          className="aspect-portrait"
        />
        <Image 
          src="/mountains-9.png"
          alt="Mountains 9"
          width={4272/15}
          height={2848/15}
          className="aspect-retro"
        />
    </div>
    </div> */}
    </div>
  );
}
