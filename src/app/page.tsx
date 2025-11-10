import HeroSection from "@/components/HeroSection";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";

export default function Home() {
  return (
    <ResponsiveContainer>
      <HeroSection />
      {/* 下面可以放特色功能预览 */}
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#2C7A7B', marginBottom: 24 }}>Why EmoVibe?</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', background: '#E6FFFA', padding: 24, borderRadius: 12 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 12 }}>AI Custom Companions</h3>
            <p>Design your AI helper with preferred personality, tone, and preferences.</p>
          </div>
          <div style={{ flex: '1 1 300px', background: '#B2F5EA', padding: 24, borderRadius: 12 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Human Supporters</h3>
            <p>Certified emotional supporters ready for one-on-one weekly sessions.</p>
          </div>
          <div style={{ flex: '1 1 300px', background: '#81E6D9', padding: 24, borderRadius: 12 }}>
            <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Treehole</h3>
            <p>Leave your secrets or thoughts anonymously in a comforting environment.</p>
          </div>
        </div>
      </section>
    </ResponsiveContainer>
  );
}