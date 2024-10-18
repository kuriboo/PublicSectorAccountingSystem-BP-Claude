import React from 'react';
import styled from 'styled-components';

type YoyakuJohoType = {
  collectDate: string; // 集計日付
  timePoint: string; // 時点
  yoyakuStatus: '予約' | '仮予約'; // 予約ステータス
  kingaku: number; // 予約金額
};

type Props = {
  yoyakuJoho: YoyakuJohoType;
};

const YoyakuJoho: React.FC<Props> = ({ yoyakuJoho }) => {
  const { collectDate, timePoint, yoyakuStatus, kingaku } = yoyakuJoho;

  return (
    <Container>
      <Title>予算執行状況表2(科目別・負担/執行)</Title>
      <Table>
        <tbody>
          <tr>
            <Th>範囲指定</Th>
            <Td>
              <DateInput type="date" defaultValue={collectDate} />
              <span>時点</span>
              <TimePointSelect defaultValue={timePoint}>
                <option value="令和05年09月20日">令和05年09月20日</option>
                <option value="令和05年09月01日">令和05年09月01日</option>
              </TimePointSelect>
            </Td>
          </tr>
          <tr>
            <Th>予算科目</Th>
            <Td>
              <LabeledRadio>
                <input type="radio" name="accountTitle" defaultChecked /> 日
              </LabeledRadio>
              <LabeledRadio>
                <input type="radio" name="accountTitle" /> 節
              </LabeledRadio>
              <LabeledRadio>
                <input type="radio" name="accountTitle" /> 細節
              </LabeledRadio>
              <LabeledRadio>
                <input type="radio" name="accountTitle" /> 明細
              </LabeledRadio>
            </Td>
          </tr>
          <tr>
            <Th>額掛け</Th>
            <Td>
              <LabeledRadio>
                <input type="radio" name="displayType" defaultChecked /> する
              </LabeledRadio>
              <LabeledRadio>
                <input type="radio" name="displayType" /> しない
              </LabeledRadio>
            </Td>
          </tr>
        </tbody>
      </Table>
      <Footer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleYoyakuJoho = () => {
  const sampleData: YoyakuJohoType = {
    collectDate: '2023-06-20',
    timePoint: '令和05年09月20日',
    yoyakuStatus: '予約',
    kingaku: 10000000,
  };

  return <YoyakuJoho yoyakuJoho={sampleData} />;
};

// スタイリング用のコンポーネント
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  width: 120px;
`;

const Td = styled.td`
  padding: 10px;
`;

const DateInput = styled.input`
  margin-right: 10px;
`;

const TimePointSelect = styled.select`
  margin-left: 10px;
`;

const LabeledRadio = styled.label`
  margin-right: 10px;
`;

const Footer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 20px;
  font-size: 16px;
`;

export default YoyakuJoho;