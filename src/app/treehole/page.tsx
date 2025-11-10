import TreeHole from "@/components/TreeHole";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";

export default function TreeHolePage() {
  return (
    <ResponsiveContainer>
      <TreeHole />
      <p style={{ marginTop: 24, fontSize: '0.9rem', color: '#718096', textAlign: 'center' }}>
        🌳 Your secrets are safe. Please avoid sharing illegal or harmful content.
      </p>
    </ResponsiveContainer>
  );
}