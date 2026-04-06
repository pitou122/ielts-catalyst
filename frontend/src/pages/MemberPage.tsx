import { useParams, useNavigate } from "react-router-dom";
import { members } from "../data/members";
import Card from "../components/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MemberPage() {
    const { slug } = useParams();
    const member = members.find((m) => m.slug === slug);
    const [selected, setSelected] = useState<string | null>(null);
    const navigate = useNavigate();

    if (!member) return <div>Not found</div>;

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 md:px-8">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* BACK BUTTON */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100 hover:shadow transition"
                >
                    <span className="text-lg">←</span>
                    Back
                </button>

                {/* ================= SECTION 1: HEADER & PROFILE ================= */}
                <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 md:p-8">
                    <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-center">

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-[24px] bg-slate-100 shadow-inner">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* INFO */}
                        <div className="flex h-full flex-col justify-center">
                            {/* ROLE */}
                            <div className="mb-4 w-fit rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold tracking-wide text-white shadow-md">
                                {member.role}
                            </div>

                            {/* NAME */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                                {member.name}
                            </h1>

                            {/* SUMMARY */}
                            <p className="mt-5 text-slate-600 leading-relaxed text-lg max-w-3xl">
                                {member.summary}
                            </p>

                            {/* CONTACT GRID */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                <Info text={member.phone} />
                                <Info text={member.email} />
                                <Info text={member.handle} />
                                <Info text={member.address} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= SECTION 2: EDUCATION & AWARDS ================= */}
                <section className="grid gap-6 lg:grid-cols-3 items-start">

                    {/* EDUCATION */}
                    <div className="lg:col-span-1">
                        <Card title="Education">
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-extrabold text-slate-900">
                                    {member.education.school}
                                </h3>

                                <div className="mt-3 w-fit rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-sm font-bold text-emerald-700">
                                    GPA {member.education.gpa}
                                </div>

                                <ul className="mt-5 flex-1 space-y-3 text-slate-600">
                                    {member.education.items.map((i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                            <span className="leading-relaxed">{i}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>

                    {/* AWARDS */}
                    <div className="lg:col-span-2">
                        <Card title="Honors & Awards">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {member.awards.map((a) => (
                                    <div
                                        key={a.title}
                                        className="group rounded-2xl border border-slate-100 p-5 bg-white shadow-md"
                                    >
                                        <div className="flex flex-col gap-1 mb-3">
                                            <span className="w-fit rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-600">
                                                {a.timeframe}
                                            </span>
                                            <h4 className="font-bold text-lg text-slate-900 leading-tight">
                                                {a.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {a.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </section>

                {/* ================= SECTION 3: CERTIFICATIONS ================= */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            Certifications & Scores
                        </h2>
                        <span className="text-sm font-medium text-slate-500 hidden sm:block">
                            Cuộn ngang để xem thêm →
                        </span>
                    </div>

                    {/* Slider Container */}
                    <div className="flex w-full gap-5 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {member.certificates.map((c, index) => (
                            <motion.div
                                key={c.image}
                                layoutId={c.image}
                                onClick={() => setSelected(c.image)}
                                className="relative shrink-0 snap-center sm:snap-start cursor-pointer w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <img
                                    src={c.image}
                                    alt={c.name || `Certificate ${index + 1}`}
                                    className="h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Gradient Label - Hiển thị tên chứng chỉ */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 pt-12 transition-opacity duration-300">
                                    <p className="text-white font-semibold text-sm sm:text-base truncate drop-shadow-md">
                                        {c.name || `Chứng chỉ ${index + 1}`}
                                    </p>
                                </div>

                                {/* Hover Overlay - Trượt lên khi hover */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-white/95 text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
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
                                className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm"
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
                                    className="max-h-[85vh] max-w-full sm:max-w-[90vw] rounded-2xl shadow-2xl pointer-events-auto object-contain bg-white"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
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
        </div>
    );
}

function Info({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50">
            <span className="truncate">{text}</span>
        </div>
    );
}