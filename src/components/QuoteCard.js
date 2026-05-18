import { H3 } from '@/components/typography/H3';
import { Button } from '@/components/Button';

export default function QuoteCard({ quote, author, likeCount, onLike, onNext }) {
  return (
    <section className='bg-slate-50/50 rounded-md p-10 flex flex-col w-full max-w-2xl shadow-sm'>
      <H3 element='p'>{quote}</H3>
      <span className='text-md font-semibold text-slate-900 self-end mt-4'>
        - {author}
      </span>
      
      <div className='mt-8 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Button variant={'secondary'} onClick={onLike}>
            ❤️ Like
          </Button>
          <span className='font-medium text-slate-700'>
            {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
          </span>
        </div>
        <Button variant={'primary'} onClick={onNext}>
          Next Quote
        </Button>
      </div>
    </section>
  );
}