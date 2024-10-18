import React from 'react';
import styled from '@emotion/styled';

type MasterType = 'company' | 'branch' | 'dept';

interface MasterData {
  code: number;
  name: string;
  startDate: string;
  retirementDate: string;
}

interface MasterMaintenanceProps {
  masterType: MasterType;
  data: MasterData[];
}

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ masterType, data }) => {
  // 選択された詳細マスタの種別に応じて表示するラベルを決定
  const getTypeLabel = () => {
    switch (masterType) {
      case 'company':
        return '会社';
      case 'branch':
        return '支店';
      case 'dept':
        return '部署';
      default:
        return '';
    }
  };

  return (
    <Container>
      <Title>詳細マスタ管理システム</Title>
      <MasterTypeContainer>
        <MasterTypeLabel>マスタ</MasterTypeLabel>
        <MasterTypeValue>{getTypeLabel()}</MasterTypeValue>
      </MasterTypeContainer>
      <InputContainer>
        <InputLabel>年号コード</InputLabel>
        <Input />
        <InputLabel>和暦年号</InputLabel>
        <Input />
        <InputLabel>開始年月日</InputLabel>
        <Input />
        <InputLabel>年</InputLabel>
        <InputSmall />
        <InputLabel>月</InputLabel>
        <InputSmall />
        <InputLabel>日</InputLabel>
        <InputSmall />
        <InputLabel>和暦表記年号</InputLabel>
        <Input />
      </InputContainer>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>コード</TableHeaderCell>
              <TableHeaderCell>和暦年号</TableHeaderCell>
              <TableHeaderCell>開始年月日</TableHeaderCell>
              <TableHeaderCell>和暦表記年号</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.retirementDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button>編集</Button>
        <Button>行削除</Button>
        <Button>終了</Button>
        <Button>クリア</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const MasterTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const MasterTypeLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const MasterTypeValue = styled.span`
  font-size: 18px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
`;

const InputSmall = styled.input`
  width: 40px;
  padding: 4px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

// サンプルデータを用いた使用例
const SampleMasterMaintenance: React.FC = () => {
  const sampleData: MasterData[] = [
    { code: 1, name: '明治', startDate: '1868/09/08', retirementDate: 'M' },
    { code: 2, name: '大正', startDate: '1912/07/30', retirementDate: 'T' },
    { code: 3, name: '昭和', startDate: '1926/12/25', retirementDate: 'S' },
    { code: 4, name: '平成', startDate: '1989/01/07', retirementDate: 'H' },
  ];

  return <MasterMaintenance masterType="company" data={sampleData} />;
};

export default SampleMasterMaintenance;