import React from 'react';
import styled from 'styled-components';

// 収納日締処理コンポーネントの型定義
interface IClosingDateProps {
  startDate: string;
  endDate: string;
  onDateChange: (startDate: string, endDate: string) => void;
}

// 収納日締処理コンポーネント
const ClosingDate: React.FC<IClosingDateProps> = ({ startDate, endDate, onDateChange }) => {
  return (
    <ClosingDateWrapper>
      <ClosingDateTitle>収納日締処理（伝票単位）</ClosingDateTitle>
      <ClosingDateRange>
        <div>
          <div>所属日</div>
          <input type="date" value={startDate} onChange={e => onDateChange(e.target.value, endDate)} /> ～ <input type="date" value={endDate} onChange={e => onDateChange(startDate, e.target.value)} />
        </div>
        <div>
          <input type="checkbox" id="omit-sun" defaultChecked /> <label htmlFor="omit-sun">日曜日</label>
          <input type="checkbox" id="omit-sat" defaultChecked /> <label htmlFor="omit-sat">集合</label>
          <input type="checkbox" id="omit-holiday" defaultChecked /> <label htmlFor="omit-holiday">統計水</label>
        </div>
        <div>
          <input type="checkbox" id="execute" /> <label htmlFor="execute">実行</label>
        </div>
      </ClosingDateRange>
      <ExecuteButton>実行</ExecuteButton>
    </ClosingDateWrapper>
  );
};

// スタイリング
const ClosingDateWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
`;

const ClosingDateTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ClosingDateRange = styled.div`
  > div {
    margin-top: 5px;
  }
  input[type="date"] {
    margin: 0 5px;
  }
`;

const ExecuteButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// 明細行コンポーネントの型定義
interface IDetailRowProps {
  id: string;
  date: string;
  branch: string;
  section: string;
  teller: string;
  detail: string;
  amount: number;
  onSelectChange: (id: string, checked: boolean) => void;
}

// 明細行コンポーネント 
const DetailRow: React.FC<IDetailRowProps> = ({ id, date, branch, section, teller, detail, amount, onSelectChange }) => {
  return (
    <tr>
      <td><input type="checkbox" checked={true} onChange={e => onSelectChange(id, e.target.checked)} /></td>
      <td>{date}</td>  
      <td>{branch}</td>
      <td>{section}</td>
      <td>{teller}</td>
      <td>{detail}</td>
      <td>{amount.toLocaleString()}</td>
    </tr>
  );
};

// 収納日締処理画面コンポーネント
const ClosingScreen: React.FC = () => {
  // 開始日と終了日のstate
  const [startDate, setStartDate] = React.useState('2009-01-18');
  const [endDate, setEndDate] = React.useState('2009-01-31');
  
  // 日付変更ハンドラ
  const handleDateChange = (newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  // 明細の選択状態管理用state
  const [selectedDetails, setSelectedDetails] = React.useState(new Set<string>());
  
  // 明細の選択状態変更ハンドラ  
  const handleSelectChange = (id: string, checked: boolean) => {
    const newSelectedDetails = new Set(selectedDetails);
    if (checked) {
      newSelectedDetails.add(id);
    } else {
      newSelectedDetails.delete(id);
    }
    setSelectedDetails(newSelectedDetails);
  };

  // ダミーデータ
  const detailsData = [
    { id: '1', date: '06/01/18', branch: '梅田', section: 'IHD', teller: '303:C(開閉調整-日計調節)', amount: 5500 },
    { id: '2', date: '06/01/19', branch: '船橋駅前', section: '給排水', teller: '303:C(給排水テスト)', amount: 55000 },  
  ];

  return (
    <ClosingScreenWrapper>
      <ClosingDate
        startDate={startDate}
        endDate={endDate}
        onDateChange={handleDateChange}
      />
      
      <ClosingDetailTable>
        <thead>
          <tr>
            <th></th>
            <th>収納日</th>
            <th>所属</th>
            <th>種別</th>
            <th>伝票番号</th>
            <th>摘要</th>  
            <th>合計金額</th>
          </tr>
        </thead>
        <tbody>
          {detailsData.map(detail => (
            <DetailRow
              key={detail.id}
              id={detail.id}
              date={detail.date}
              branch={detail.branch}
              section={detail.section}
              teller={detail.teller}
              detail={detail.amount.toLocaleString()}
              amount={detail.amount}
              onSelectChange={handleSelectChange}
            />
          ))}
        </tbody>
      </ClosingDetailTable>

      <ClosingActions>
        <div>
          <span>（一番絞り込んだ後の情報を表示する）</span><br />
          <span>処理件数：0000000        処理金額：9999999</span> 
        </div>
        <div>
          <button>エラー確認</button>
          <button>OK</button>
          <button>クリア</button>
          <button>終了</button>
        </div>
      </ClosingActions>
    </ClosingScreenWrapper>
  );
};

const ClosingScreenWrapper = styled.div`
  font-size: 14px;
`;

const ClosingDetailTable = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }

  th {
    background-color: #f0f0f0;
    text-align: center;
  }
  
  td {
    text-align: right;
  }
`;

const ClosingActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    margin-left: 5px;
  }
`;

export default ClosingScreen;