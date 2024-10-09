// DateDisplay.tsx
import React from 'react';

type DateDisplayProps = {
  /** 次年度 */
  nextYear: string;
  /** 月 */
  month: string;
  /** 日 */
  day: string;
  /** 節 */
  season: string;
  /** 細節 */
  subSeason: string;
  /** 明細 */
  detail: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({
  nextYear,
  month,
  day,
  season,
  subSeason,
  detail,
}) => {
  return (
    <div className="flex space-x-4">
      {/* 次年度 */}
      <div className="text-center">
        <div className="text-sm font-bold">次年度</div>
        <div className="text-lg">{nextYear || '---'}</div>
      </div>

      {/* 月 */}
      <div className="text-center">
        <div className="text-sm font-bold">月</div>
        <div className="text-lg">{month || '---'}</div>
      </div>

      {/* 日 */}
      <div className="text-center">
        <div className="text-sm font-bold">日</div>
        <div className="text-lg">{day || '---'}</div>
      </div>

      {/* 節 */}
      <div className="text-center">
        <div className="text-sm font-bold">節</div>
        <div className="text-lg">{season || '---'}</div>
      </div>

      {/* 細節 */}
      <div className="text-center">
        <div className="text-sm font-bold">細節</div>
        <div className="text-lg">{subSeason || '---'}</div>
      </div>

      {/* 明細 */}
      <div className="text-center">
        <div className="text-sm font-bold">明細</div>
        <div className="text-lg">{detail || '---'}</div>
      </div>
    </div>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: DateDisplayProps = {
    nextYear: '002',
    month: '01',
    day: '01',
    season: '13',
    subSeason: '0001',
    detail: '0001',
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">日付表示サンプル</h2>
      <DateDisplay {...sampleData} />
    </div>
  );
};

export default DateDisplay;