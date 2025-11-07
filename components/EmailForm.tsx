'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('✅ Successfully joined the waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to join waitlist');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50
                   disabled:opacity-50 transition-all w-full sm:w-auto"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500
                   hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 hover:scale-105 whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : 'Join'}
        </button>
      </form>
      
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

