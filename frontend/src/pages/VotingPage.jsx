/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hcvsIXGb3lR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function VotingPage() {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 md:px-6 py-12'>
      <div className='grid gap-8'>
        <div>
          <h1 className='text-3xl font-bold'>Vote for the Next Chapter</h1>
          <p className='text-muted-foreground mt-2'>
            Help shape the story by voting for your favorite submission.
          </p>
        </div>
        <div className='bg-muted p-6 rounded-lg'>
          <h2 className='text-xl font-semibold'>Current Story Summary</h2>
          <p className='mt-2 text-muted-foreground'>
            In a world where magic and technology coexist, a young apprentice
            named Ava stumbles upon a mysterious artifact that unlocks a gateway
            to a parallel dimension. As she navigates this new realm, she
            encounters a diverse cast of characters, each with their own unique
            abilities and agendas. The story now stands at a crossroads, and
            your vote will determine the path it takes next.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='card relative'>
            <div className='card-header flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='text-sm'>
                  <div className='font-medium'>Amelia Caldwell</div>
                  <div className='text-muted-foreground'>2 hours ago</div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-sm font-medium'>24</div>
              </div>
            </div>
            <div className='card-content'>
              <p>
                Ava cautiously approached the glowing artifact, her heart
                pounding with a mixture of curiosity and trepidation. As she
                reached out to touch it, a blinding light enveloped her, and the
                world around her began to shift and distort. When the light
                faded, she found herself in a strange, unfamiliar realm,
                surrounded by towering crystal structures and otherworldly
                creatures.
              </p>
            </div>
            <div className='card-footer flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <MessageCircleIcon className='w-4 h-4' />
                <span className='text-sm text-muted-foreground'>12</span>
              </div>
            </div>
          </div>
          <div className='card relative'>
            <div className='card-header flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='text-sm'>
                  <div className='font-medium'>John Doe</div>
                  <div className='text-muted-foreground'>1 day ago</div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-sm font-medium'>18</div>
              </div>
            </div>
            <div className='card-content'>
              <p>
                As Ava explored the strange new world, she encountered a
                towering, crystalline being who seemed to radiate an
                otherworldly energy. The being approached her cautiously, its
                movements fluid and graceful. "Welcome, child of the material
                realm," it spoke, its voice echoing through the vast, alien
                landscape. "I am Xylara, guardian of this dimension. What brings
                you to our realm?"
              </p>
            </div>
            <div className='card-footer flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <MessageCircleIcon className='w-4 h-4' />
                <span className='text-sm text-muted-foreground'>8</span>
              </div>
            </div>
          </div>
          <div className='card relative'>
            <div className='card-header flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='text-sm'>
                  <div className='font-medium'>Emily Summers</div>
                  <div className='text-muted-foreground'>3 days ago</div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-sm font-medium'>32</div>
              </div>
            </div>
            <div className='card-content'>
              <p>
                Ava's eyes widened in awe as she took in the breathtaking
                landscape before her. Towering crystal structures pierced the
                sky, their facets refracting the light in mesmerizing patterns.
                Strange, ethereal creatures floated through the air, their
                movements graceful and otherworldly. Ava felt a sense of wonder
                and trepidation, unsure of what this new world had in store for
                her.
              </p>
            </div>
            <div className='card-footer flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <MessageCircleIcon className='w-4 h-4' />
                <span className='text-sm text-muted-foreground'>16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}
