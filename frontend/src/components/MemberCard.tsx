import { Link } from "react-router-dom";
import type { Member } from "../data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      to={`/member/${member.slug}`}
      className="group soft-card p-4 hover:-translate-y-1 transition"
    >
      <img
        src={member.avatar}
        className="rounded-2xl aspect-[4/3] object-cover"
      />

      <h2 className="text-2xl font-bold mt-3">{member.name}</h2>
      <p className="text-sm text-gray-500">{member.role}</p>

      <p className="text-sm mt-2 text-gray-600">{member.summary}</p>
    </Link>
  );
}