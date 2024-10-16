import React from 'react';
import styled from '@emotion/styled';

type MasterItem = {
  id: string;
  name: string;
  year: string;
  semester: string;
};

type Props = {
  masterItems: MasterItem[];
  referenceNumber1?: string;
  referenceNumber2?: string;
  name?: string;
  remarks?: string;
  reserveField1?: string;
  reserveField2?: string;
  reserveField3?: string;
  reserveField4?: string;
};

const Container = styled.div`
  font-family: 'MS Gothic';
  padding: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 4px;
  }
  
  th {
    background-color: #f0f0f0;
    text-align: center;
  }
`;

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 4px;
`;

const MasterMaintenance: React.FC<Props> = ({
  masterItems,
  referenceNumber1 = '',
  referenceNumber2 = '',
  name = '',
  remarks = '',
  reserveField1 = '',
  reserveField2 = '',
  reserveField3 = '',
  reserveField4 = '',
}) => {
  return (
    <Container>
      <Header>
        <HeaderText>用語マスタ</HeaderText>
        <div>
          <span>行政市水道事業会計</span>
          <span>総務課 予算・会計担当 ぎょうせい太郎</span>
          <span>平成29年09月12日</span>
        </div>
      </Header>

      <StyledTable>
        <thead>
          <tr>
            <th>用語番号</th>
            <th>用語番号2</th>
            <th>名称</th>
            <th>略名</th>
            <th>予備1</th>
            <th>予備2</th>
            <th>予備3</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {masterItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}年{item.semester === '1' ? '前期' : '後期'}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <div>
        <div>
          <span>用語番号1</span>
          <InputField type="text" value={referenceNumber1} />
        </div>
        <div>
          <span>用語番号2</span>
          <InputField type="text" value={referenceNumber2} />
        </div>
        <div>
          <span>名称</span>
          <InputField type="text" value={name} />
        </div>
        <div>
          <span>略名</span>
          <InputField type="text" value={remarks} />
        </div>
        <div>
          <span>予備1</span>
          <InputField type="text" value={reserveField1} />
        </div>
        <div>
          <span>予備2</span>
          <InputField type="text" value={reserveField2} />
        </div>
        <div>
          <span>予備3</span>
          <InputField type="text" value={reserveField3} />
        </div>
        <div>
          <span>予備4</span>
          <InputField type="text" value={reserveField4} />
        </div>
      </div>

      <div>
        <Button>行確定</Button>
        <Button>行ｷｬﾝｾﾙ</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

export default MasterMaintenance;

// Usage example
const App: React.FC = () => {
  const sampleData: MasterItem[] = [
    { id: '011', name: '市上下水道部3階 第1研修室', year: '2021', semester: '1' },
    { id: '202', name: '市上下水道部3階 202会議室', year: '2022', semester: '0' },
    { id: '301', name: '市上下水道部3階 301会議室', year: '2021', semester: '0' },
    { id: '302', name: '市上下水道部3階 302会議室', year: '2022', semester: '0' },
    { id: '303', name: '市上下水道部3階 303会議室', year: '2023', semester: '0' },
    { id: '304', name: '市上下水道部3階 下水道建設課', year: '', semester: '' },
    { id: '305', name: '浄化センター', year: '', semester: '' },
  ];

  return (
    <MasterMaintenance 
      masterItems={sampleData}
      referenceNumber1="011"
      referenceNumber2="000"
      name="市上下水道部3階 第1研修室"
      remarks=""
    />
  );
};