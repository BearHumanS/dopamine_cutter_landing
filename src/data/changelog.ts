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
        version: "v1.1.9",
        date: "2025-12-20",
        title: {
            en: "Gamification & Stats",
            ko: "게이미피케이션 & 통계"
        },
        description: {
            en: [
                "Gamified Dashboard: Instantly see 'Shorts Blocked Today' via the popup badge and track lifetime stats.",
                "Enhanced Counting Logic: Now counts every individual short removed (e.g., +4 for a shelf) for more satisfying feedback."
            ],
            ko: [
                "차단 대시보드: 팝업 배지로 '오늘 방어한 숏츠'를 확인하고, 통계 메뉴에서 누적 차단 횟수를 볼 수 있습니다.",
                "강력해진 카운팅: 단순 횟수가 아닌 실제 제거된 쇼츠 영상 개수를 모두 카운트하여 차단하는 맛을 더했습니다."
            ]
        },
        type: "feature"
    },
    {
        version: "v1.1.8",
        date: "2025-12-20",
        title: {
            en: "Smart Review Requests",
            ko: "스마트 리뷰 요청 시스템"
        },
        description: {
            en: [
                "Smart Review System: A non-intrusive way to gather feedback from engaged users.",
                "Optimized Performance: Improved logic for tracking blocked content without affecting browsing speed.",
                "Enhanced Privacy: All tracking data is stored locally on your device."
            ],
            ko: [
                "스마트 리뷰 시스템: 참여도가 높은 사용자에게만 방해되지 않는 방식으로 피드백을 요청합니다.",
                "성능 최적화: 브라우징 속도에 영향을 주지 않도록 차단 로직을 개선했습니다.",
                "프라이버시 강화: 모든 데이터는 사용자 기기에만 로컬로 저장됩니다."
            ]
        },
        type: "feature"
    },
    {
        version: "v1.1.7",
        date: "2025-12-20",
        title: {
            en: "Statistics Page Hotfix",
            ko: "통계 페이지 긴급 수정"
        },
        description: {
            en: [
                "Fixed Stats Page Loading: Resolved an internal variable name conflict that caused infinite loading.",
                "You can now view your focus records normally."
            ],
            ko: [
                "통계 페이지 로딩 오류 수정: 내부 변수명 충돌로 인해 통계 페이지가 열리지 않던 문제를 수정했습니다.",
                "이제 정상적으로 집중 기록을 확인할 수 있습니다."
            ]
        },
        type: "fix"
    },
    {
        version: "v1.1.6",
        date: "2025-12-19",
        title: {
            en: "Enhanced Focus & Content",
            ko: "더 강력해진 집중과 풍부한 명언"
        },
        description: {
            en: [
                "Expanded Coverage: Now identifies and replaces Shorts hidden within search results.",
                "More Wisdom: Added over 200 new quotes to keep you motivated."
            ],
            ko: [
                "커버리지 확장: 검색 결과에 숨어있는 쇼츠까지 찾아내어 명언으로 대체합니다.",
                "풍부해진 명언: 200개 이상의 새로운 명언을 추가하여 동기 부여를 강화했습니다."
            ]
        },
        type: "improvement"
    },
    {
        version: "v1.1.5",
        date: "2025-12-18",
        title: {
            en: "Quotes & Timer Rhythm",
            ko: "집중 시간과 하나가 된 명언"
        },
        description: {
            en: [
                "Synced with Focus Timer: Quotes now update exactly when the timer minute changes.",
                "Visual Progress: A progress bar below the quote card tracks the remaining seconds."
            ],
            ko: [
                "타이머 동기화: 타이머의 '분' 숫자가 바뀔 때마다(예: 25분 -> 24분) 명언도 함께 교체됩니다.",
                "시각화: 명언 카드 아래의 바(Bar)가 남은 '초'에 맞춰 줄어듭니다."
            ]
        },
        type: "feature"
    },
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
