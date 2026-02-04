export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F5F6F7]">
      <div className="h-20 bg-black/95" />
      <div className="min-h-[100svh] flex items-center px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="skeleton h-10 sm:h-12 md:h-14 w-3/4 mb-6" />
          <div className="skeleton h-4 sm:h-5 w-2/3 mb-3" />
          <div className="skeleton h-4 sm:h-5 w-1/2 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="skeleton aspect-[4/3]" />
            <div className="skeleton aspect-[4/3]" />
            <div className="skeleton aspect-[4/3]" />
          </div>
        </div>
      </div>
    </main>
  )
}
