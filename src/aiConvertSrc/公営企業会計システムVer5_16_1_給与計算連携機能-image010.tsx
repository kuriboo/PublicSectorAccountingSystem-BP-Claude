import React from 'react';
import styled from 'styled-components';

// 発行区分の型定義
type Division = '新規' | '再発行';

// プロパティの型定義
interface RemovalApplicationFormProps {
  defaultDivision?: Division;
  defaultPublicDate?: Date;
  defaultPrivateDate?: Date;
}

// コンポーネントの定義
const RemovalApplicationForm: React.FC<RemovalApplicationFormProps> = ({
  defaultDivision = '新規',
  defaultPublicDate = new Date(),
  defaultPrivateDate = new Date(),
}) => {
  // 状態管理
  const [division, setDivision] = React.useState<Division>(defaultDivision);
  const [publicDate, setPublicDate] = React.useState<Date>(defaultPublicDate);
  const [privateDate, setPrivateDate] = React.useState<Date>(defaultPrivateDate);

  // 発行区分の変更ハンドラ
  const handleDivisionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDivision(e.target.value as Division);
  };

  // 日付の変更ハンドラ
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date>>) => {
    const date = new Date(e.target.value);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  return (
    <Container>
      <Title>控除額支出命令書発行</Title>
      <DivisionWrapper>
        <div>
          <input 
            type="radio" 
            checked={division === '新規'} 
            onChange={handleDivisionChange} 
            value="新規" 
          />
          <label>新規</label>
        </div>
        <div>
          <input 
            type="radio" 
            checked={division === '再発行'} 
            onChange={handleDivisionChange}
            value="再発行"
          />
          <label>再発行</label>
        </div>
      </DivisionWrapper>
      <DateRangeWrapper>
        <div>
          <label>発効年月日</label>
          <input
            type="date"
            value={publicDate.toISOString().slice(0, 10)}
            onChange={(e) => handleDateChange(e, setPublicDate)}
          />
        </div>
        <div>
          <label>~</label>
        </div>
        <div>
          <input
            type="date"
            value={privateDate.toISOString().slice(0, 10)}
            onChange={(e) => handleDateChange(e, setPrivateDate)}
          />
        </div>
      </DateRangeWrapper>
      <div>
        <PrintDateSelect>
          <option value="public">発行年月日</option>
          <option value="private">支払年月日</option>
        </PrintDateSelect>
        <ButtonsWrapper>
          <button>OK</button>
          <button>クリア</button>
          <button>終了</button>
        </ButtonsWrapper>
      </div>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DivisionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  > div {
    margin: 0 10px;
  }
`;

const DateRangeWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 20px;

  > div {
    margin: 0 10px;
  }

  label {
    margin-right: 5px;
  }
`;

const PrintDateSelect = styled.select`
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

// サンプルデータ
const sampleData: RemovalApplicationFormProps = {
  defaultDivision: '新規',
  defaultPublicDate: new Date('2023-04-01'),
  defaultPrivateDate: new Date('2023-09-05'),
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>控除額支出命令書発行フォーム</h1>
      <RemovalApplicationForm {...sampleData} />
    </div>
  );
};

export default App;