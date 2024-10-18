import React, { useState } from 'react';
import styled from '@emotion/styled';

// 予約・仕訳科目別管理保守コンポーネントの型定義
type ReservationManagementProps = {
  accountNumber: string;
  startDate: string;
  endDate: string;
  segmentCode: string;
  managementCode: string;
  managementSegments: { code: string; name: string }[];
};

// 予約・仕訳科目別管理保守コンポーネント
const ReservationManagement: React.FC<ReservationManagementProps> = ({
  accountNumber,
  startDate,
  endDate,
  segmentCode,
  managementCode,
  managementSegments,
}) => {
  // ステートの管理
  const [selectedSegment, setSelectedSegment] = useState(segmentCode);
  const [selectedManagement, setSelectedManagement] = useState(managementCode);

  return (
    <Container>
      <Title>予算・仕訳科目別管理保守</Title>
      <Form>
        {/* 会計年度 */}
        <FormField>
          <Label>会計年度</Label>
          <Input value={accountNumber} readOnly />
        </FormField>

        {/* 予算科目 */}
        <FormField>
          <Label>予算科目</Label>
          <Select>
            <option value="">仕訳科目</option>
            <option value="">年度</option>
          </Select>
        </FormField>

        {/* 管理区分 */}
        <FormField>
          <Label>管理区分</Label>
          <Select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
          >
            <option value="">管理区分を選択</option>
            {managementSegments.map((segment) => (
              <option key={segment.code} value={segment.code}>
                {segment.name}
              </option>
            ))}
          </Select>
        </FormField>

        {/* 科目 */}
        <FormField>
          <Label>科目</Label>
          <Input
            value={selectedManagement}
            onChange={(e) => setSelectedManagement(e.target.value)}
          />
        </FormField>

        {/* 日付 */}
        <FormField>
          <Label>開始日</Label>
          <Input value={startDate} />
          <Label>〜</Label>
          <Label>終了日</Label>
          <Input value={endDate} />
          <Button>表示</Button>
        </FormField>

        {/* 科目明細別管理コード関連付け */}
        <Table>
          <thead>
            <TableRow>
              <TableHeader>科目コード</TableHeader>
              <TableHeader>セグメント</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {/* サンプルデータを使用して表示 */}
            <TableRow>
              <TableCell>001:01:04:00:002:001</TableCell>
              <TableCell>管理区分</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>001:01:04:00:003:001</TableCell>
              <TableCell>管理区分</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Form>

      {/* ボタン */}
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  gap: 10px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
`;

// サンプルデータを使用してコンポーネントの使用例を表示
const App: React.FC = () => {
  const sampleData: ReservationManagementProps = {
    accountNumber: '令和29年06月31日',
    startDate: '9999999999999999',
    endDate: '9999999999999999',
    segmentCode: '01',
    managementCode: '管理名称',
    managementSegments: [
      { code: '01', name: '管理区分1' },
      { code: '02', name: '管理区分2' },
    ],
  };

  return <ReservationManagement {...sampleData} />;
};

export default App;