import { useParams, useNavigate } from "react-router-dom";
import { members } from "../data/members";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ArrowLeft,
    Phone,
    Mail,
    AtSign,
    MapPin,
    GraduationCap,
    Briefcase,
    Award,
    Sparkles
} from "lucide-react";

export default function MemberPage() {
    const { slug } = useParams();
    const member = members.find((m) => m.slug === slug);
    const [selected, setSelected] = useState<string | null>(null);
    const navigate = useNavigate();

    if (!member) return <div className="p-8 text-center text-slate-500">Member not found</div>;

    return (
        <main className="min-h-screen bg-slate-50/50 px-4 py-8 md:px-8 md:py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6">

                {/* BACK BUTTON */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-2 w-fit inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:shadow"
                >
                    <ArrowLeft size={16} />
                    Quay lại
                </button>

                {/* ================= SECTION 1: HEADER & PROFILE ================= */}
                <section className="rounded-[36px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
                    <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-center">

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-[24px] bg-slate-100 shadow-inner">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* INFO */}
                        <div className="flex h-full flex-col justify-center">
                            {/* ROLE BADGE */}
                            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                                <Sparkles size={16} />
                                {member.role}
                            </div>

                            {/* NAME */}
                            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                                {member.name}
                            </h1>

                            {/* SUMMARY */}
                            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                                {member.summary}
                            </p>

                            {/* CONTACT GRID */}
                            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                                <Info icon={<Mail size={16} />} text={member.email} />
                                <Info icon={<MapPin size={16} />} text={member.address} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= SECTION 2: EDUCATION & EXPERIENCE ================= */}
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* EDUCATION */}
                    <section className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                                <GraduationCap size={20} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                                Học vấn
                            </h2>
                        </div>

                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-extrabold text-slate-900">
                                {member.education.school}
                            </h3>

                            <div className="mt-3 w-fit rounded-lg bg-slate-100 border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-800">
                                GPA {member.education.gpa}
                            </div>

                            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                                {member.education.items.map((i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                        <span>{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                Kinh nghiệm
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {member.experience.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                    <p className="text-[15px] leading-7 text-slate-200">
                                        {exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                {/* ================= SECTION 3: FEEDBACKS ================= */}
                {member.feedbacks.length > 0 && (
                    <section className="rounded-[32px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
                        {/* HEADER */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                                💬
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                                Feedback học viên
                            </h2>
                        </div>

                        {/* GRID */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {member.feedbacks.map((fb, index) => (
                                <div
                                    key={index}
                                    className={`
                                        group bg-white rounded-[24px] p-3 shadow-md 
                                        transition-all duration-300
                                        hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                                        hover:-translate-y-1
                                        ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
                                        hover:rotate-0
                                    `}
                                >
                                    {/* IMAGE */}
                                    <div className="overflow-hidden rounded-[18px]">
                                        <img
                                            src={fb.image}
                                            alt={fb.name}
                                            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="mt-3 px-1 pb-1">
                                        <p className="text-sm text-slate-600 leading-6 line-clamp-3">
                                            “{fb.content}”
                                        </p>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-900">
                                                {fb.name}
                                            </span>

                                            {/* RATING */}
                                            <span className="text-xs text-amber-500 font-semibold">
                                                {"⭐".repeat(fb.rating || 5)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ================= SECTION 4: CERTIFICATIONS ================= */}
                <section className="rounded-[32px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                                <Award size={20} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                                Chứng chỉ & Điểm số
                            </h2>
                        </div>
                        <span className="text-sm font-medium text-slate-500 hidden sm:block bg-slate-100 px-4 py-2 rounded-full">
                            Cuộn ngang để xem thêm →
                        </span>
                    </div>

                    {/* Slider Container */}
                    <div className="flex w-full gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {member.certificates.map((c, index) => (
                            <motion.div
                                key={c.image}
                                layoutId={c.image}
                                onClick={() => setSelected(c.image)}
                                className="relative shrink-0 snap-center sm:snap-start cursor-pointer w-[280px] sm:w-[320px] rounded-[24px] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 group"
                            >
                                <img
                                    src={c.image}
                                    alt={c.name || `Certificate ${index + 1}`}
                                    className="h-[220px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent p-5 pt-12 transition-opacity duration-300">
                                    <p className="text-white font-bold text-sm sm:text-base truncate drop-shadow-md">
                                        {c.name || `Chứng chỉ ${index + 1}`}
                                    </p>
                                </div>

                                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-white/95 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                                        Phóng to
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= MODAL ================= */}
                <AnimatePresence>
                    {selected && (
                        <>
                            <motion.div
                                className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelected(null)}
                            />

                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                            >
                                <motion.img
                                    layoutId={selected}
                                    src={selected}
                                    className="max-h-[85vh] max-w-full sm:max-w-[90vw] rounded-[24px] shadow-2xl pointer-events-auto object-contain bg-white"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />

                                <motion.button
                                    onClick={() => setSelected(null)}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                    className="absolute top-4 right-4 sm:top-8 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg hover:bg-slate-100 hover:scale-110 transition-all pointer-events-auto"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-slate-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                {icon}
            </div>
            <span className="truncate text-sm font-semibold text-slate-700">{text}</span>
        </div>
    );
}