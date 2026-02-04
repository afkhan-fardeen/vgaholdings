export default function Loading() {
  return (
    <main className="bg-[#F5F6F7]">
      <div className="h-20 bg-black/95" />
      <article className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="skeleton h-4 w-32 mb-6" />
          <div className="skeleton h-9 sm:h-11 md:h-12 w-4/5 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="skeleton aspect-[4/3]" />
            <div className="skeleton aspect-[4/3]" />
            <div className="skeleton aspect-[4/3]" />
          </div>
          <div className="skeleton h-4 w-full mb-3" />
          <div className="skeleton h-4 w-11/12 mb-3" />
          <div className="skeleton h-4 w-10/12 mb-3" />
          <div className="skeleton h-4 w-9/12 mb-3" />
        </div>
      </article>
    </main>
  )
}
