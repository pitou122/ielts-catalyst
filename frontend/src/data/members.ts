export type Member = {
    slug: string;
    name: string;
    role: string;
    avatar: string;
    summary: string;
    email: string;
    address: string;
    experience: string[];
    education: {
        school: string;
        gpa: string;
        items: string[];
    };
    certificates: {
        name: string;
        image: string;
    }[];
    feedbacks: {
        name: string;
        image: string;
        content: string;
        rating?: number;
    }[];
};

export const members: Member[] = [
    {
        slug: "phuc-lam",
        name: "Nguyễn Triệu Phúc Lâm",
        role: "Academic Team Lead",
        avatar: "/members/phuc-lam.png",
        summary:
            "Theo đuổi phương pháp giảng dạy IELTS theo hướng logic và science-based, giúp học viên hiểu bản chất thay vì học mẹo rời rạc.",

        email: "—",
        address: "Hà Nội",
        experience: [
            "Giảng dạy tiếng Anh lớp 1:1 và lớp 10 học sinh từ 2023",
            "Hoàn thành 120 giờ giảng dạy trong chương trình TESOL",
            "Tham gia xây dựng các khóa học & project ngôn ngữ ngắn hạn",
            "70% học sinh đạt IELTS từ 7.0+",
            "Học sinh đạt điểm IELTS từ 6.0 - 8.0",
        ],

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

        feedbacks: [
            {
                name: "Bảo Linh",
                image: "/feedbacks/phuc-lam-1.png",
                content: "THPT Chuyên Hà Nội - Amsterdam",
                rating: 5,
            },
            {
                name: "Hoàng Anh",
                image: "/feedbacks/phuc-lam-2.png",
                content: "THPT Marie Curie",
                rating: 5,
            },
            {
                name: "Minh Tùng",
                image: "/feedbacks/phuc-lam-3.png",
                content: "THPT Chuyên Khoa Học Tự Nhiên",
                rating: 5,
            },
        ],
    },

    {
        slug: "minh-quang",
        name: "Phạm Minh Quang",
        role: "Teacher Assistant / Tutor",
        avatar: "/members/minh-quang.png",
        summary:
            "Chuyên về xây dựng hệ thống bài giảng rõ ràng, logic, giúp học viên tiếp cận IELTS một cách bài bản và hiệu quả.",

        email: "—",
        address: "Hà Nội",
        experience: [
            "Kinh nghiệm ôn thi và tổ chức chương trình IELTS cấp tốc",
            "Giảng dạy IELTS trực tiếp tại Hà Nội",
            "Bổ trợ ngoại ngữ cho học sinh chương trình chất lượng cao & quốc tế",
            "Hỗ trợ học viên cần thi IELTS gấp",
        ],

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

        feedbacks: [],
    },

    {
        slug: "hoai-nam",
        name: "Nguyễn Hoài Nam",
        role: "Teacher Assistant / Tutor",
        avatar: "/members/hoai-nam.png",
        summary:
            "Tập trung vào việc hỗ trợ học viên cải thiện hiệu suất học tập và đạt kết quả ổn định trong kỳ thi IELTS.",

        email: "—",
        address: "Hà Nội",
        experience: [
            "Giảng dạy IELTS và SAT cho học sinh THPT",
            "Ôn thi chuyên Anh (CNN, Ams, ...)",
            "Tham gia và giảng dạy các buổi speech IELTS Speaking",
            "Tư vấn và tổ chức mock test Speaking",
            "80% học viên SAT đạt trên 1500",
        ],

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
        feedbacks: [],
    },
];