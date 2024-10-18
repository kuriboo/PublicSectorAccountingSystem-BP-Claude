import React from 'react';
import styled from '@emotion/styled';

type WatermarkProtectionProps = {
  data: {
    id: number;
    name: string;
    value: number;
    unit: string;
  }[];
};

const WatermarkProtection: React.FC<WatermarkProtectionProps> = ({ data }) => {
  return (
    <Container>
      <Title>制御マスタ保守</Title>
      <Table>
        <thead>
          <tr>
            <th>制御内容</th>
            <th>制御値</th>
            <th>設定</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {item.value}
                {item.unit}
              </td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample data for demo
const sampleData = [
  { id: 1, name: '*物品 明細控制限', value: 1, unit: '制限なし' },
  { id: 2, name: '*一般 明細控制限', value: 1, unit: '制限なし' },
  { id: 3, name: '*小規模版 設定', value: 0, unit: '標準版' },
  { id: 4, name: '*時限品 契約書発遣機', value: 1, unit: 'する' },
  { id: 5, name: '*契約書発遣機 複数明細に配賦比率を使用', value: 0, unit: 'しない' },
  // ...
];

// Demo component
const Demo = () => <WatermarkProtection data={sampleData} />;

export default WatermarkProtection;