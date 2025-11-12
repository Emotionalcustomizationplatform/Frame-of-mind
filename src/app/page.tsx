import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Emovibe</h1>
      <p>Professional emotional chat platform.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/customize">
          <button style={{ padding: '0.5rem 1rem' }}>Customize AI Role</button>
        </Link>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/chat">
          <button style={{ padding: '0.5rem 1rem' }}>Go to Chat Room</button>
        </Link>
      </div>
    </main>
  );
}