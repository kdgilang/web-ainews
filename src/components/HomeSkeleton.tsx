import Skeleton from 'react-loading-skeleton'

export default function HomeSkeleton() {
  return (
    <>
      <Skeleton />
      <div className="mx-auto max-w-2xl px-4 pt-6 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <Skeleton />

      <div className="md:flex">
          <div className="md:flex-initial md:w-4/6 md:pr-8">
            <Skeleton height={500}/>
          </div>
          <div className="mt-6 md:mt-0 md:flex-initial md:w-4/12">
            <Skeleton count={5} height={70} />
          </div>
        </div>

        <Skeleton />
        <Skeleton height={200}/>
        <Skeleton count={2}/>

        <Skeleton height={200}/>

        <div className="mt-6 md:mt-10">
          <Skeleton />

          <div className="md:flex">
            <div className="md:flex-initial md:w-4/6 md:pr-8 grid gap-4">
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
              <Skeleton height={200}/>
            </div>
            <div className="mt-6 md:mt-0 md:flex-initial md:w-4/12">
              <div className="md:sticky md:top-20 md:z-50">
                <Skeleton />

                <Skeleton height={200}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skeleton />
    </>
  )
}