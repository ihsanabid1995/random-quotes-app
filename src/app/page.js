'use client';

import { useState } from 'react';
import { quotes as initialQuotes } from '@/quotes';
import QuoteCard from '@/components/QuoteCard';

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];

  function handleLike() {
    setQuotes((prevQuotes) =>
      prevQuotes.map((item, index) =>
        index === quoteIndex
          ? { ...item, likeCount: item.likeCount + 1 }
          : item
      )
    );
  }

  function handleNextQuote() {
    if (quotes.length <= 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === quoteIndex); 

    setQuoteIndex(newIndex);
  }

  if (!currentQuote) return null;

  return (
    <main className='min-h-screen flex items-center justify-center bg-slate-200 p-4'>
      <QuoteCard 
        quote={currentQuote.quote}
        author={currentQuote.author}
        likeCount={currentQuote.likeCount}
        onLike={handleLike}
        onNext={handleNextQuote}
      />
    </main>
  );
}