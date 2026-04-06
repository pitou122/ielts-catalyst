type Props = {
  icon: React.ReactNode;
  text: string;
};

export default function InfoItem({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-2 shadow-sm">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}