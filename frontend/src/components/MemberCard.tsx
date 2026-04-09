import { Link } from "react-router-dom";
import type { Member } from "../data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      to={`/member/${member.slug}`}
      className="group soft-card p-4 hover:-translate-y-1 transition relative block"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={member.avatar}
          alt={member.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* NAME */}
      <h2 className="text-2xl font-bold mt-3 text-slate-900">
        {member.name}
      </h2>

      {/* ROLE */}
      <p className="text-sm text-slate-500">{member.role}</p>

      {/* SUMMARY */}
      <p className="text-sm mt-2 text-slate-600 line-clamp-3">
        {member.summary}
      </p>

      {/* CTA INDICATOR */}
      <div className="mt-4 flex items-center justify-end gap-2 text-slate-400 opacity-70 transition-all group-hover:opacity-100 group-hover:text-slate-900 group-hover:translate-x-1">
        <span className="text-xs font-medium hidden sm:inline">
          Xem profile
        </span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Link>
  );
}