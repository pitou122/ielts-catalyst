import { members } from "../data/members";
import MemberCard from "../components/MemberCard";
import {
    BookOpen,
    CalendarDays,
    Clock3,
    GraduationCap,
    MicVocal,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

const highlights = [
    {
        icon: <Users size={18} />,
        label: "3 học sinh / lớp",
    },
    {
        icon: <CalendarDays size={18} />,
        label: "12 buổi / khóa",
    },
    {
        icon: <Clock3 size={18} />,
        label: "19:00 - 21:00 thứ 3 & 6",
    },
    {
        icon: <MicVocal size={18} />,
        label: "Speaking 1:1 linh hoạt",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen px-4 py-8 md:px-8 md:py-10">
            <section className="mx-auto flex max-w-6xl flex-col gap-6">
                <div className="rounded-[36px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        <Sparkles size={16} />
                        Online IELTS course
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                        IELTS Catalyst
                    </h1>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                        Khóa học IELTS online được thiết kế theo hướng science-based: học theo logic,
                        đi từ nền tảng đến ứng dụng, phù hợp với những bạn muốn xây năng lực thật
                        thay vì học mẹo rời rạc.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <section className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
                        <h2 className="mb-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                            Chi tiết khóa học
                        </h2>

                        <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                            <p>
                                Khóa học gồm 12 buổi trên lớp, học 2 buổi mỗi tuần, mỗi buổi 2 giờ.
                                Lịch học cố định vào <span className="font-semibold text-slate-900">19:00 - 21:00 thứ 3 và thứ 6</span>,
                                khai giảng từ <span className="font-semibold text-slate-900">14/4</span>.
                            </p>

                            <p>
                                Ngoài phần học trên lớp, học viên còn có các buổi{" "}
                                <span className="font-semibold text-slate-900">Practice Speaking 1:1</span>{" "}
                                được thiết kế linh hoạt theo lịch cá nhân. Học viên được tự xếp lịch để phù hợp
                                với thời gian của mình.
                            </p>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <InfoCard
                                icon={<BookOpen size={18} />}
                                title="Nội dung giảng dạy"
                                text="Kiến thức nền tảng quan trọng nhất trong bài thi IELTS, trình bày có hệ thống và dễ tiếp cận."
                            />
                            <InfoCard
                                icon={<GraduationCap size={18} />}
                                title="Đội ngũ giảng dạy"
                                text="Practice Speaking 1:1 với hai giảng viên IELTS 8.0, chấm chữa kỹ và có feedback riêng."
                            />
                            <InfoCard
                                icon={<ShieldCheck size={18} />}
                                title="Luyện tập & tài liệu"
                                text="Hệ thống bài tập chuẩn, tài liệu đi kèm, Listening và Reading được chấm chữa đầy đủ."
                            />
                            <InfoCard
                                icon={<Sparkles size={18} />}
                                title="Hậu khóa học"
                                text="Nếu chưa đạt trên 5.5, học viên vẫn tiếp tục được hỗ trợ tài liệu, mock Speaking và Writing 1:1 miễn phí."
                            />
                        </div>
                    </section>

                    <aside className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] md:p-8">
                        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                            Lịch học & format
                        </h2>

                        <div className="mt-6 space-y-4">
                            <ScheduleRow label="Sĩ số" value="3 học sinh / lớp" />
                            <ScheduleRow label="Thời lượng" value="12 buổi / khóa" />
                            <ScheduleRow label="Lịch học" value="19:00 - 21:00, thứ 3 & 6" />
                            <ScheduleRow label="Khai giảng" value="14/4" />
                            <ScheduleRow label="Speaking 1:1" value="Tự xếp lịch linh hoạt" />
                        </div>

                        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
                            <p className="text-sm leading-7 text-slate-300">
                                Khóa học được thiết kế đặc biệt cho các bạn đi theo hướng
                                <span className="font-semibold text-white"> science-based</span>,
                                tức là tiếp cận IELTS theo cách thật khoa học, logic và có thể áp dụng
                                ổn định cho nhiều trình độ khác nhau.
                            </p>
                        </div>
                    </aside>
                </div>

                <section className="rounded-[32px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
                    <h2 className="mb-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                        Đội ngũ giáo viên
                    </h2>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {members.map((member) => (
                            <MemberCard key={member.slug} member={member} />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
}

function InfoCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                {icon}
            </div>
            <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </div>
    );
}

function ScheduleRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
            <span className="text-sm text-slate-400">{label}</span>
            <span className="text-sm font-semibold text-white text-right">{value}</span>
        </div>
    );
}