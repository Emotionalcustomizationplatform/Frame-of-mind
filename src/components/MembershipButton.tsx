'use client';
import axios from 'axios';

export default function MembershipButton() {
  const handlePayment = async () => {
    try {
      const res = await axios.post('/api/membership');
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      alert('Payment failed');
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: '1rem',
        background: '#0070f3',
        color: '#fff',
        borderRadius: '8px'
      }}
    >
      Buy 1-Week Membership ($99)
    </button>
  );
}
