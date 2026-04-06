type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <div className="soft-card p-5">
      <h2 className="section-title mb-4">{title}</h2>
      {children}
    </div>
  );
}