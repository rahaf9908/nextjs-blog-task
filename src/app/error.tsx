'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-center py-10">
      <p className="text-red-500">Something went wrong: {error.message}</p>
      <button
        onClick={reset}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
