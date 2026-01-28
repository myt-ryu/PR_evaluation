export interface MediaMaster {
    name: string;
    defaultReach: number;
    category?: string;
    score?: number;
}

export const MEDIA_MASTER_DATA: MediaMaster[] = [
    // === テレビ（TV） ===
    { name: 'NHK', defaultReach: 15000000, category: 'TV', score: 10 },
    { name: '日本テレビ', defaultReach: 12000000, category: 'TV', score: 10 },
    { name: 'TBS', defaultReach: 12000000, category: 'TV', score: 10 },
    { name: 'フジテレビ', defaultReach: 12000000, category: 'TV', score: 10 },
    { name: 'テレビ朝日', defaultReach: 12000000, category: 'TV', score: 10 },
    { name: 'テレビ東京', defaultReach: 8000000, category: 'TV', score: 10 },
    { name: '東京MX', defaultReach: 3000000, category: 'TV', score: 8 },
    { name: '地方ローカル局', defaultReach: 2000000, category: 'TV', score: 8 },
    { name: 'BS系全般', defaultReach: 5000000, category: 'TV', score: 7 },

    // === 新聞 ===
    { name: '読売新聞', defaultReach: 7000000, category: '新聞', score: 7 },
    { name: '朝日新聞', defaultReach: 4500000, category: '新聞', score: 7 },
    { name: '毎日新聞', defaultReach: 2000000, category: '新聞', score: 7 },
    { name: '日経新聞', defaultReach: 2200000, category: '新聞', score: 7 },
    { name: '産経新聞', defaultReach: 1200000, category: '新聞', score: 7 },
    { name: '日経MJ', defaultReach: 150000, category: '新聞', score: 5 },
    { name: '日経産業新聞', defaultReach: 150000, category: '新聞', score: 5 },
    { name: '日刊工業新聞', defaultReach: 200000, category: '新聞', score: 5 },
    { name: '東京新聞など', defaultReach: 500000, category: '新聞', score: 3 },

    // === ビジネス雑誌 ===
    { name: 'Forbes Japan', defaultReach: 100000, category: 'ビジネス雑誌', score: 7 },
    { name: '日経トップリーダー', defaultReach: 80000, category: 'ビジネス雑誌', score: 7 },
    { name: '日経ビジネス', defaultReach: 250000, category: 'ビジネス雑誌', score: 7 },
    { name: '日経トレンディ', defaultReach: 150000, category: 'ビジネス雑誌', score: 5 },
    { name: '週刊東洋経済', defaultReach: 120000, category: 'ビジネス雑誌', score: 5 },
    { name: 'AERA', defaultReach: 150000, category: 'ビジネス雑誌', score: 5 },
    { name: 'PRESIDENT', defaultReach: 200000, category: 'ビジネス雑誌', score: 5 },
    { name: '週刊ダイヤモンド', defaultReach: 100000, category: 'ビジネス雑誌', score: 5 },
    { name: '週刊文春エンタ＋', defaultReach: 80000, category: 'ビジネス雑誌', score: 5 },
    { name: '日経WOMAN', defaultReach: 80000, category: 'ビジネス雑誌', score: 3 },
    { name: 'Wedge', defaultReach: 50000, category: 'ビジネス雑誌', score: 3 },
    { name: '月刊事業構想', defaultReach: 30000, category: 'ビジネス雑誌', score: 3 },

    // === ビジネスWebメディア ===
    { name: '東洋経済オンライン', defaultReach: 50000000, category: 'ビジネスWeb', score: 7 },
    { name: '全国紙の電子版', defaultReach: 30000000, category: 'ビジネスWeb', score: 7 },
    { name: '日経ビジネスオンライン', defaultReach: 20000000, category: 'ビジネスWeb', score: 7 },
    { name: 'ダイヤモンドオンライン', defaultReach: 18000000, category: 'ビジネスWeb', score: 5 },
    { name: '現代ビジネス', defaultReach: 15000000, category: 'ビジネスWeb', score: 5 },
    { name: 'ITmedia', defaultReach: 15000000, category: 'ビジネスWeb', score: 5 },
    { name: 'PRESIDENT online', defaultReach: 12000000, category: 'ビジネスWeb', score: 5 },
    { name: 'CNET Japan', defaultReach: 10000000, category: 'ビジネスWeb', score: 5 },
    { name: 'TechCrunch', defaultReach: 8000000, category: 'ビジネスWeb', score: 5 },
    { name: 'ログミー', defaultReach: 5000000, category: 'ビジネスWeb', score: 5 },
    { name: 'THE BRIDGE', defaultReach: 3000000, category: 'ビジネスWeb', score: 5 },
    { name: 'CAREER HACK', defaultReach: 2000000, category: 'ビジネスWeb', score: 5 },

    // === ニュースアプリ ===
    { name: 'Yahoo!ニュース（ヤフトピ）', defaultReach: 80000000, category: 'ニュースアプリ', score: 7 },
    { name: 'SmartNews', defaultReach: 30000000, category: 'ニュースアプリ', score: 5 },
    { name: 'グノシー', defaultReach: 15000000, category: 'ニュースアプリ', score: 5 },
    { name: 'NewsPicks', defaultReach: 10000000, category: 'ニュースアプリ', score: 5 },

    // === 科学・研究系Webメディア ⭐ ===
    { name: 'ナショナルジオグラフィック日本版', defaultReach: 5000000, category: '科学Web', score: 8 },
    { name: 'WIRED.jp', defaultReach: 3000000, category: '科学Web', score: 7 },
    { name: 'MIT Technology Review（日本版）', defaultReach: 500000, category: '科学Web', score: 7 },
    { name: 'サイエンスポータル', defaultReach: 2000000, category: '科学Web', score: 7 },
    { name: 'Gigazine（サイエンス）', defaultReach: 15000000, category: '科学Web', score: 5 },
    { name: 'マイナビニュース（テクノロジー）', defaultReach: 10000000, category: '科学Web', score: 5 },
    { name: 'ねとらぼ（科学）', defaultReach: 8000000, category: '科学Web', score: 5 },
    { name: 'ギズモード・ジャパン（サイエンス）', defaultReach: 8000000, category: '科学Web', score: 5 },
    { name: 'Engadget日本版（サイエンス）', defaultReach: 6000000, category: '科学Web', score: 5 },
    { name: 'ライフハッカー（サイエンス）', defaultReach: 6000000, category: '科学Web', score: 4 },
    { name: 'カラパイア', defaultReach: 5000000, category: '科学Web', score: 4 },
    { name: 'NewsPicks（テクノロジー）', defaultReach: 5000000, category: '科学Web', score: 5 },
    { name: 'PC Watch（テクノロジー）', defaultReach: 4000000, category: '科学Web', score: 4 },
    { name: 'JBpress（科学・技術）', defaultReach: 3000000, category: '科学Web', score: 6 },
    { name: 'ナゾロジー', defaultReach: 3000000, category: '科学Web', score: 5 },
    { name: 'sorae（宇宙）', defaultReach: 2000000, category: '科学Web', score: 5 },
    { name: 'リケラボ', defaultReach: 800000, category: '科学Web', score: 6 },
    { name: 'academist Journal', defaultReach: 500000, category: '科学Web', score: 6 },
    { name: 'アストロアーツ', defaultReach: 500000, category: '科学Web', score: 4 },
    { name: 'fabcross', defaultReach: 300000, category: '科学Web', score: 4 },

    // === 科学雑誌 ⭐ ===
    { name: 'Newton', defaultReach: 100000, category: '科学雑誌', score: 7 },
    { name: '日経サイエンス', defaultReach: 50000, category: '科学雑誌', score: 7 },
    { name: '子供の科学', defaultReach: 30000, category: '科学雑誌', score: 5 },
    { name: '実験医学', defaultReach: 20000, category: '科学雑誌', score: 5 },
    { name: '天文ガイド', defaultReach: 20000, category: '科学雑誌', score: 4 },
    { name: '日経バイオテク', defaultReach: 15000, category: '科学雑誌', score: 5 },
    { name: '月刊星ナビ', defaultReach: 15000, category: '科学雑誌', score: 4 },
    { name: '化学', defaultReach: 10000, category: '科学雑誌', score: 4 },
    { name: '細胞工学', defaultReach: 8000, category: '科学雑誌', score: 4 },
    { name: '生物の科学 遺伝', defaultReach: 5000, category: '科学雑誌', score: 4 },

    // === 専門雑誌 ===
    { name: '日経メディカル', defaultReach: 50000, category: '専門雑誌', score: 3 },
    { name: '宣伝会議/広報会議', defaultReach: 40000, category: '専門雑誌', score: 3 },
    { name: 'Software Design', defaultReach: 30000, category: '専門雑誌', score: 3 },
    { name: '日経ヘルスケア', defaultReach: 25000, category: '専門雑誌', score: 3 },
    { name: '日経デジタルマーケティング', defaultReach: 20000, category: '専門雑誌', score: 3 },
    { name: '月刊MarkeZine', defaultReach: 20000, category: '専門雑誌', score: 3 },

    // === 専門Webメディア ===
    { name: '日経コンピュータ/IT Pro', defaultReach: 5000000, category: '専門Web', score: 3 },
    { name: 'MarkeZine', defaultReach: 3000000, category: '専門Web', score: 3 },
    { name: 'gihyo.jp', defaultReach: 2000000, category: '専門Web', score: 3 },
    { name: 'CodeZine', defaultReach: 1500000, category: '専門Web', score: 3 },
    { name: '宣伝会議/広報会議オンライン', defaultReach: 1500000, category: '専門Web', score: 3 },
    { name: '日経デジタルヘルス', defaultReach: 1000000, category: '専門Web', score: 3 },
    { name: 'SELECK', defaultReach: 800000, category: '専門Web', score: 3 },


    // === ラジオ ===
    { name: 'NHKラジオ', defaultReach: 3000000, category: 'ラジオ', score: 6 },
    { name: 'TBSラジオ', defaultReach: 1500000, category: 'ラジオ', score: 5 },
    { name: '文化放送', defaultReach: 1200000, category: 'ラジオ', score: 5 },
    { name: 'ニッポン放送', defaultReach: 1200000, category: 'ラジオ', score: 5 },
    { name: 'J-WAVE', defaultReach: 800000, category: 'ラジオ', score: 4 },
    { name: 'TOKYO FM', defaultReach: 1000000, category: 'ラジオ', score: 4 },
    { name: 'InterFM', defaultReach: 300000, category: 'ラジオ', score: 3 },
    { name: '地方ラジオ局', defaultReach: 500000, category: 'ラジオ', score: 3 },

    // === ポッドキャスト ⭐ 新規カテゴリ ===
    { name: 'Spotify（ポッドキャスト）', defaultReach: 5000000, category: 'ポッドキャスト', score: 6 },
    { name: 'Apple Podcasts', defaultReach: 4000000, category: 'ポッドキャスト', score: 6 },
    { name: 'Amazon Music（ポッドキャスト）', defaultReach: 3000000, category: 'ポッドキャスト', score: 5 },
    { name: 'Voicy', defaultReach: 2000000, category: 'ポッドキャスト', score: 5 },
    { name: 'stand.fm', defaultReach: 1000000, category: 'ポッドキャスト', score: 4 },
    { name: 'Radiotalk', defaultReach: 500000, category: 'ポッドキャスト', score: 4 },
    { name: 'note（音声）', defaultReach: 800000, category: 'ポッドキャスト', score: 4 },
    { name: 'YouTube（ポッドキャスト形式）', defaultReach: 10000000, category: 'ポッドキャスト', score: 6 },

    // === その他 ===
    { name: 'その他のビジネス系雑誌', defaultReach: 10000, category: 'その他', score: 1 },
    { name: 'その他の専門雑誌', defaultReach: 5000, category: 'その他', score: 1 },
    { name: 'その他のビジネス系Webメディア', defaultReach: 500000, category: 'その他', score: 1 },
    { name: 'その他の専門系Webメディア', defaultReach: 500000, category: 'その他', score: 1 },
    { name: 'その他（カスタム）', defaultReach: 0, category: 'その他', score: 0 },
];

export function getMediaReach(mediaName: string): number {
    const media = MEDIA_MASTER_DATA.find(m => m.name === mediaName);
    return media?.defaultReach ?? 0;
}

export function getMediaByCategory(category: string): MediaMaster[] {
    return MEDIA_MASTER_DATA.filter(m => m.category === category);
}

export function getAllCategories(): string[] {
    const categories = new Set(MEDIA_MASTER_DATA.map(m => m.category).filter(Boolean));
    return Array.from(categories);
}
