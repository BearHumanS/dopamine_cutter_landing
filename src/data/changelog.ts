export interface ChangelogEntry {
    version: string;
    date: string;
    title: {
        en: string;
        ko: string;
    };
    description: {
        en: string[];
        ko: string[];
    };
    type?: 'feature' | 'fix' | 'improvement';
}

export const changelogData: ChangelogEntry[] = [
    {
        version: "v1.1.4",
        date: "2025-12-17",
        title: {
            en: "Deep Focus & Resilience",
            ko: "몰입과 회복력"
        },
        description: {
            en: [
                "Deep Focus Mode: Replaced Shorts/Reels with motivational quotes to break the loop.",
                "Dynamic Wisdom: Quotes automatically rotate every minute to keep inspiration fresh.",
                "Bilingual Support: Auto-detects system language (English/Korean) for quotes.",
                "Data Persistence: Fixed database connectivity for reliable focus streak tracking."
            ],
            ko: [
                "딥 포커스 모드: 쇼츠/릴스 자리에 대신 동기 부여 명언을 표시하여 중독 고리를 끊습니다.",
                "다이내믹 위즈덤: 명언이 1분마다 자동으로 교체되어 지루함을 방지합니다.",
                "이중 언어 지원: 시스템 언어(영어/한국어)를 감지하여 알맞은 명언을 보여줍니다.",
                "데이터 안정성 강화: 집중 기록이 안전하게 저장되도록 데이터베이스 연결을 개선했습니다."
            ]
        },
        type: "feature"
    },
    {
        version: "v1.0.0",
        date: "2025-12-14",
        title: {
            en: "Initial Launch",
            ko: "초기 런칭"
        },
        description: {
            en: [
                "Released Dopamine Cutter Chrome Extension.",
                "Blocked Shorts, Reels, and TikTok feeds by default.",
                "Added customizable 'Replace with Wisdom' quote feature.",
                "Implemented strict mode for deep focus sessions."
            ],
            ko: [
                "도파민 커터 크롬 익스텐션 출시.",
                "쇼츠, 릴스, 틱톡 피드를 기본적으로 차단.",
                "'명언으로 대체하기' 기능 추가.",
                "깊은 집중을 위한 엄격 모드 구현."
            ]
        },
        type: "feature"
    }
];
