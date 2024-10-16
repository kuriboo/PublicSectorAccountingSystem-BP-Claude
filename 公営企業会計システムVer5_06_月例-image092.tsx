import React from 'react';
import styled from '@emotion/styled';

type CashFlowProps = {
  month: string;
  segment: string;
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

const Notice = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const CashFlow: React.FC<CashFlowProps> = ({ month, segment }) => {
  // 月の初期値を設定
  const defaultMonth = month || '令和05年10月';

  // セグメントの初期値を設定（空の場合は空文字列）
  const defaultSegment = segment || '';

  return (
    <Container>
      <Title>キャッシュ・フロー計算書集計</Title>
      <Row>
        <Label>範囲指定</Label>
      </Row>
      <Row>
        <Label>集計年月</Label>
        <Input type="text" defaultValue={defaultMonth} />
      </Row>
      <Row>
        <Label>セグメント</Label>
        <Select defaultValue={defaultSegment}>
          <option value="">選択してください</option>
          {/* セグメントの選択肢をここに追加 */}
        </Select>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
      <Notice>
        「キャッシュ・フロー計算書マスタ保守」の集計設定に基づいて、指定した集計年月までに発生した伝票を集計します。
        集計された伝票の一覧は「キャッシュ・フロー集計伝票突合CSV作成」画面でCSV出力することができます。
        また、「キャッシュ・フロー伝票集計先指示入力」画面でも確認することができます。
        同画面では、手動で伝票を集計に加算・減算を行い、キャッシュ・フローの金額を調整することも可能です。
      </Notice>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>キャッシュ・フロー計算書集計</h1>
      <CashFlow month="令和05年10月" segment="セグメント1" />
    </div>
  );
};

export default App;