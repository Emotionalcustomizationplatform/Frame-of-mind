'use client';
import { useState, useEffect } from 'react';
import { getMembership, setMembership } from '@/lib/membership';
import MembershipButton from './MembershipButton';
import ChatRoom from './ChatRoom';

export default function ProtectedChatRoom() {
  const [hasMembership, setHasMembership] = useState(false);

  useEffect(() => {
    setHasMembership(getMembership());
  }, []);

  // 这里假设支付成功后回到页面，会手动调用 setMembership()
  const handleMembershipActive = () => {
    setMembership();
    setHasMembership(true);
  };

  if (!hasMembership) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h2>You need a membership to enter the chat</h2>
        <MembershipButton />
      </div>
    );
  }

  return <ChatRoom />;
}