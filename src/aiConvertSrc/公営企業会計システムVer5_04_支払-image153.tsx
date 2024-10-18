import React from 'react';
import styled from 'styled-components';

// 工事前払未振替一覧表作成のプロパティ型定義
type WorkPaymentSummaryProps = {
  authority?: string; // 範囲指定
  startDate?: string; // 作表現在日
  endDate?: string;   // 支出決定日
  division?: '全て' | '未振替' | '一部振替'; // 区分
};

// 工事前払未振替一覧表作成のスタイル定義
const WorkPaymentSummaryWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .label {
    width: 100px;
    font-weight: bold;
  }

  .value {
    margin-left: 8px;
  }

  .radio-group {
    display: flex;
  }

  .radio-item {
    margin-right: 16px;
  }

  .button-group {
    margin-top: 16px;
    text-align: center;
  }

  button {
    margin: 0 8px;
  }
`;

// 工事前払未振替一覧表作成コンポーネント
const WorkPaymentSummary: React.FC<WorkPaymentSummaryProps> = ({
  authority = '',
  startDate = '',
  endDate = '',
  division = '全て',
}) => {
  return (
    <WorkPaymentSummaryWrapper>
      <h2>工事前払未振替一覧表作成</h2>
      <div className="row">
        <div className="label">範囲指定</div>
        <div className="value">{authority}</div>
      </div>
      <div className="row">
        <div className="label">作表現在日</div>
        <div className="value">{startDate}</div>
      </div>
      <div className="row">
        <div className="label">支出決定日</div>
        <div className="value">{endDate}</div>
      </div>
      <div className="row">
        <div className="label">区分</div>
        <div className="radio-group">
          <label className="radio-item">
            <input
              type="radio"
              checked={division === '全て'}
              readOnly
            />
            全て
          </label>
          <label className="radio-item">
            <input
              type="radio"
              checked={division === '未振替'}
              readOnly
            />
            未振替
          </label>
          <label className="radio-item">
            <input
              type="radio"
              checked={division === '一部振替'}
              readOnly
            />
            一部振替
          </label>
        </div>
      </div>
      <div className="button-group">
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </div>
    </WorkPaymentSummaryWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleWorkPaymentSummary: React.FC = () => {
  return (
    <WorkPaymentSummary
      authority="管理者"
      startDate="令和02年12月23日"
      endDate="令和02年12月23日"
      division="全て"
    />
  );
};

export default WorkPaymentSummary;