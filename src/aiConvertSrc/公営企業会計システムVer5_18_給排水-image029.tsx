import React from 'react';
import styled from '@emotion/styled';

type WaterSystemProps = {
  title: string;
  registrationDate: string;
  data: Array<{
    code: string;
    name: string;
  }>;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const RegistrationDate = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
  
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const WaterSystem: React.FC<WaterSystemProps> = ({ title, registrationDate, data }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <RegistrationDate>登録締切作業証明書: {registrationDate}</RegistrationDate>
      </Header>
      <SearchContainer>
        <SearchInput type="text" placeholder="名前または住所で検索" />
      </SearchContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>コード</th>
              <th>名称</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData = [
    { code: '01', name: '加入負担金' },
    { code: '02', name: '臨時メータ' },
    { code: '03', name: '検査手数料' },
    { code: '04', name: '工事用メータ' },
    { code: '05', name: '検定手数料' },
  ];

  return (
    <WaterSystem
      title="給排水マスタ"
      registrationDate="平成30年02月27日"
      data={sampleData}
    />
  );
};

export default App;