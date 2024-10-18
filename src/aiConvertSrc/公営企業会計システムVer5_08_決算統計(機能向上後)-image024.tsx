import React from 'react';
import styled from '@emotion/styled';

type ProcessingType = '決算金額集計' | '決算統計千円丸め処理' | '決算統計分析データ';
type CalculationType = '予算科目' | '仕訳科目';
type CollectiveType = '全体' | 'ブロック' | 'セグメント';

interface ProcessingSettingsProps {
  defaultProcessingType?: ProcessingType;
  defaultCalculationType?: CalculationType;
  defaultStartDate?: string;
  defaultEndDate?: string;
  defaultCollectiveType?: CollectiveType;
}

const ProcessingSettings: React.FC<ProcessingSettingsProps> = ({
  defaultProcessingType = '決算金額集計',
  defaultCalculationType = '予算科目',
  defaultStartDate = '',
  defaultEndDate = '',
  defaultCollectiveType = '全体',
}) => {
  const [processingType, setProcessingType] = React.useState<ProcessingType>(defaultProcessingType);
  const [calculationType, setCalculationType] = React.useState<CalculationType>(defaultCalculationType);
  const [startDate, setStartDate] = React.useState(defaultStartDate);
  const [endDate, setEndDate] = React.useState(defaultEndDate);
  const [collectiveType, setCollectiveType] = React.useState<CollectiveType>(defaultCollectiveType);

  const handleSubmit = () => {
    // 処理実行のロジックをここに実装
    console.log('処理実行');
  };

  return (
    <Container>
      <Title>決算統計処理金額出力</Title>
      <Row>
        <FieldTitle>処理区分</FieldTitle>
        <div>
          <input
            type="radio"
            id="processing1"
            checked={processingType === '決算金額集計'}
            onChange={() => setProcessingType('決算金額集計')}
          />
          <label htmlFor="processing1">決算金額集計</label>
          <input
            type="radio"
            id="processing2"
            checked={processingType === '決算統計千円丸め処理'}
            onChange={() => setProcessingType('決算統計千円丸め処理')}
          />
          <label htmlFor="processing2">決算統計千円丸め処理</label>
          <input
            type="radio"
            id="processing3"
            checked={processingType === '決算統計分析データ'}
            onChange={() => setProcessingType('決算統計分析データ')}
          />
          <label htmlFor="processing3">決算統計分析データ</label>
        </div>
      </Row>
      <Row>
        <FieldTitle>範囲指定</FieldTitle>
        <div>
          <input
            type="radio"
            id="calculation1"
            checked={calculationType === '予算科目'}
            onChange={() => setCalculationType('予算科目')}
          />
          <label htmlFor="calculation1">予算科目</label>
          <input
            type="radio"
            id="calculation2"
            checked={calculationType === '仕訳科目'}
            onChange={() => setCalculationType('仕訳科目')}
          />
          <label htmlFor="calculation2">仕訳科目</label>
        </div>
        <div>
          <label>
            科目範囲:
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="999999999999999"
            />
            ～
            <input
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="999999999999999"
            />
          </label>
        </div>
      </Row>
      <Row>
        <FieldTitle>集計対象</FieldTitle>
        <div>
          <label>
            <input
              type="radio"
              checked={collectiveType === '全体'}
              onChange={() => setCollectiveType('全体')}
            />
            全体
          </label>
          <label>
            <input
              type="radio"
              checked={collectiveType === 'ブロック'}
              onChange={() => setCollectiveType('ブロック')}
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              checked={collectiveType === 'セグメント'}
              onChange={() => setCollectiveType('セグメント')}
            />
            セグメント
          </label>
        </div>
      </Row>
      <Row>
        <FieldTitle>処理概要</FieldTitle>
        <div>
          各集計処理画面において集計した内容をCSVファイルで出力します。
          <br />
          CSVファイルはzipに圧縮された状態で保存します。
        </div>
      </Row>
      <ButtonRow>
        <Button onClick={handleSubmit}>CSV出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin-bottom: 20px;
`;

const FieldTitle = styled.div`
  font-weight: bold;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>処理設定</h1>
      <ProcessingSettings
        defaultProcessingType="決算金額集計"
        defaultCalculationType="予算科目"
        defaultStartDate="202201"
        defaultEndDate="202212"
        defaultCollectiveType="全体"
      />
    </div>
  );
};

export default App;