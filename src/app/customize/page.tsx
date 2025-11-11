'use client';
import CustomizeRoleForm from '@/components/CustomizeRoleForm';
import ResponsiveContainer from '@/components/ui/ResponsiveContainer';

export default function CustomizePage() {
  const handleCreate = (data: any) => {
    console.log('New AI role created:', data);
    alert(`Your AI character "${data.roleName}" is ready!`);
  };

  return (
    <ResponsiveContainer>
      <h2>Customize Your AI Character</h2>
      <CustomizeRoleForm onSubmit={handleCreate} />
    </ResponsiveContainer>
  );
}