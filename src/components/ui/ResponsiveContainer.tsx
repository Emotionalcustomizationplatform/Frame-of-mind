import { ReactNode } from 'react';

export default function ResponsiveContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      {children}
    </div>
  );
}