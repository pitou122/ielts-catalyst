export type Member = {
    slug: string;
    name: string;
    role: string;
    avatar: string;
    summary: string;
    phone: string;
    email: string;
    handle: string;
    address: string;
    education: {
        school: string;
        gpa: string;
        items: string[];
    };
    certificates: {
        name: string;
        image: string;
    }[];
    awards: {
        title: string;
        timeframe: string;
        detail: string;
    }[];
    skills: string[];
    languages: { name: string; level: number }[];
};

export const members: Member[] = [
    {
        slug: "phuc-lam",
        name: "Nguyễn Triệu Phúc Lâm",
        role: "Academic Team Lead",
        avatar: "/members/phuc-lam.png",
        summary:
            "Theo đuổi phương pháp giảng dạy IELTS theo hướng logic và science-based, giúp học viên hiểu bản chất thay vì học mẹo rời rạc.",

        phone: "—",
        email: "—",
        handle: "@phuclam",
        address: "Hà Nội",

        education: {
            school: "École Polytechnique (Paris)",
            gpa: "9.5",
            items: [
                "IELTS: 8.0",
                "SAT: 1570",
                "TESOL Certified",
                "GPA Tiếng Anh: 9.9",
                "Học bổng Học sinh Chuyên",
            ],
        },

        certificates: [
            { name: "IELTS", image: "/certs/phuc-lam-ielts.png" },
            { name: "SAT", image: "/certs/phuc-lam-sat.png" },
            { name: "TESOL", image: "/certs/phuc-lam-tesol.png" },
        ],


        awards: [
            {
                title: "Academic Achievements",
                timeframe: "",
                detail: "1570 SAT, 8.0 IELTS, Học bổng Học sinh Chuyên",
            },
        ],


        skills: [
            "IELTS Teaching",
            "Curriculum Design",
            "Academic Mentoring",
            "Public Speaking",
        ],

        languages: [
            { name: "English", level: 95 },
            { name: "Vietnamese", level: 100 },
        ],
    },

    {
        slug: "minh-quang",
        name: "Phạm Minh Quang",
        role: "Curriculum Designer",
        avatar: "/members/minh-quang.png",
        summary:
            "Chuyên về xây dựng hệ thống bài giảng rõ ràng, logic, giúp học viên tiếp cận IELTS một cách bài bản và hiệu quả.",

        phone: "—",
        email: "—",
        handle: "@minhquang",
        address: "Hà Nội",

        education: {
            school: "ESSEC Business School (Paris)",
            gpa: "9.4",
            items: [
                "IELTS: 8.0",
                "TESOL Certified",
                "C1 French",
                "GPA Tiếng Anh: 9.8",
                "Học bổng Học sinh Chuyên",
            ],
        },

        certificates: [
            { name: "IELTS", image: "/certs/minh-quang-ielts.png" },
            { name: "TESOL", image: "/certs/minh-quang-tesol.png" },
        ],


        awards: [
            {
                title: "Academic Achievements",
                timeframe: "",
                detail: "8.0 IELTS, C1 French, Học bổng Học sinh Chuyên",
            },
        ],


        skills: [
            "Curriculum Design",
            "Teaching",
            "System Thinking",
            "Language Training",
        ],

        languages: [
            { name: "English", level: 95 },
            { name: "French", level: 85 },
        ],
    },

    {
        slug: "hoai-nam",
        name: "Nguyễn Hoài Nam",
        role: "Academic Coach",
        avatar: "/members/hoai-nam.png",
        summary:
            "Tập trung vào việc hỗ trợ học viên cải thiện hiệu suất học tập và đạt kết quả ổn định trong kỳ thi IELTS.",

        phone: "—",
        email: "—",
        handle: "@hoainam",
        address: "Hà Nội",

        education: {
            school: "Đại học Bách Khoa Hà Nội",
            gpa: "9.2",
            items: [
                "IELTS: 8.0",
                "SAT: 1570",
                "TESOL Certified",
                "Học sinh tiêu biểu THPT Chuyên Ngoại Ngữ",
            ],
        },

        certificates: [
            { name: "IELTS", image: "/certs/hoai-nam-ielts.png" },
            { name: "SAT", image: "/certs/hoai-nam-sat.png" },
            { name: "TESOL", image: "/certs/hoai-nam-tesol.png" },
        ],

        awards: [
            {
                title: "Academic Achievements",
                timeframe: "",
                detail: "8.0 IELTS, 1570 SAT, Học sinh tiêu biểu THPT Chuyên Ngoại Ngữ",
            },
        ],


        skills: [
            "Coaching",
            "IELTS Training",
            "Student Support",
            "Performance Tracking",
        ],

        languages: [
            { name: "English", level: 92 },
            { name: "Vietnamese", level: 100 },
        ],
    },
];