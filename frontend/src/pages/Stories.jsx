/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Shgp1mgR31S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Stories() {
  return (
    <main class='w-full  mx-auto py-12 px-4 md:px-6 '>
      <div class=' w-full  mx-auto py-12 px-4 md:px-6 flex items-center justify-between mb-8 flex-row'>
        <h1 class='text-3xl font-bold'>Ongoing Stories</h1>
        <div class='flex items-center gap-4'>
          <div class='relative w-full max-w-md'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                class='w-5 h-5 text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <input
              type='text'
              id='search'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
              placeholder='Search...'
            />
          </div>
          <div class='relative'>
            <button class='bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center gap-2'>
              <svg
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                  clip-rule='evenodd'
                />
              </svg>
              Filter
            </button>
            <div class='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 hidden'>
              <div class='py-2'>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Community
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Education
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  History
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Business
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Environment
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-gray-800 hover:bg-gray-100'
                >
                  Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div class='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
          <div class='p-6 space-y-4'>
            <img
              src='https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1'
              alt='Improving Local Education'
              class='rounded-lg object-cover aspect-video'
            />
            <h2 class='text-xl font-semibold'>Improving Local Education</h2>
            <p class='text-muted-foreground'>
              We're working to upgrade the facilities and curriculum at our
              local schools. Your support can make a big difference in the lives
              of our students.
            </p>
            <div class='flex gap-2'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                Read More
              </a>
              <button class='px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md'>
                Contribute
              </button>
            </div>
          </div>
        </div>
        <div class='bg-background rounded-lg shadow-lg overflow-hidden'>
          <div class='bg-primary text-primary-foreground px-6 py-4 font-semibold'>
            History
          </div>
          <div class='p-6 space-y-4'>
            <img
              src='https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1'
              alt='Preserving Local History'
              class='rounded-lg object-cover aspect-video'
            />
            <h2 class='text-xl font-semibold'>Preserving Local History</h2>
            <p class='text-muted-foreground'>
              Join us in our effort to restore and maintain the historical
              landmarks that make our community unique. Your participation can
              help us protect our heritage.
            </p>
            <div class='flex gap-2'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                Read More
              </a>
              <button class='px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md'>
                Contribute
              </button>
            </div>
          </div>
        </div>
        <div class='bg-background rounded-lg shadow-lg overflow-hidden'>
          <div class='bg-primary text-primary-foreground px-6 py-4 font-semibold'>
            Business
          </div>
          <div class='p-6 space-y-4'>
            <img
              src='https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1'
              alt='Supporting Local Businesses'
              class='rounded-lg object-cover aspect-video'
            />
            <h2 class='text-xl font-semibold'>Supporting Local Businesses</h2>
            <p class='text-muted-foreground'>
              Our local businesses are the backbone of our community. Help us
              create initiatives to support and promote them during these
              challenging times.
            </p>
            <div class='flex gap-2'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                Read More
              </a>
              <button class='px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md'>
                Contribute
              </button>
            </div>
          </div>
        </div>
        <div class='bg-background rounded-lg shadow-lg overflow-hidden'>
          <div class='bg-primary text-primary-foreground px-6 py-4 font-semibold'>
            Environment
          </div>
          <div class='p-6 space-y-4'>
            <img
              src='https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1'
              alt='Improving Sustainability'
              class='rounded-lg object-cover aspect-video'
            />
            <h2 class='text-xl font-semibold'>Improving Sustainability</h2>
            <p class='text-muted-foreground'>
              We're working to make our community more sustainable through
              initiatives like renewable energy, recycling programs, and green
              spaces. Join us in this important effort.
            </p>
            <div class='flex gap-2'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                Read More
              </a>
              <button class='px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md'>
                Contribute
              </button>
            </div>
          </div>
        </div>
        <div class='bg-background rounded-lg shadow-lg overflow-hidden'>
          <div class='bg-primary text-primary-foreground px-6 py-4 font-semibold'>
            Community
          </div>
          <div class='p-6 space-y-4'>
            <img
              src='https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1'
              alt='Enhancing Community Spaces'
              class='rounded-lg object-cover aspect-video'
            />
            <h2 class='text-xl font-semibold'>Enhancing Community Spaces</h2>
            <p class='text-muted-foreground'>
              We're working to create more vibrant and inclusive community
              spaces, such as parks, libraries, and cultural centers. Your input
              and support can help shape these projects.
            </p>
            <div class='flex gap-2'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                Read More
              </a>
              <button class='px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md'>
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
