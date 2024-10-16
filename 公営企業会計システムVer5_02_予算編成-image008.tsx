import React from 'react';
import styled from 'styled-components';

type UserInfoProps = {
  year: number;
  values: {
    from: number;
    to: number;
    unit_price: number;
    confirmed: boolean;
  }[];
  onInputChange: (index: number, key: string, value: number | boolean) => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ year, values, onInputChange }) => {
  return (
    <Container>
      <Title>新年度単価一覧表</Title>
      <YearSection>
        <Label>平成</Label>
        <YearInput type="number" value={year} onChange={(e) => onInputChange(0, 'year', Number(e.target.value))} />
        <span>年度</span>
      </YearSection>
      <InfoSection>
        <div>
          <input type="radio" checked={true} readOnly /> 単価コード別
          <input type="radio" disabled /> 所属別
        </div>
        <Table>
          <thead>
            <tr>
              <th>所属</th>
              <th>単価コード</th>
              <th>～</th>
              <th>所属</th>
              <th>単価コード</th>
              <th>～</th>
            </tr>
          </thead>
          <tbody>
            {values.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="number"
                    value={row.from}
                    onChange={(e) => onInputChange(index, 'from', Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.unit_price}
                    onChange={(e) => onInputChange(index, 'unit_price', Number(e.target.value))}
                  />
                </td>
                <td>～</td>
                <td>
                  <input
                    type="number"
                    value={row.to}
                    onChange={(e) => onInputChange(index, 'to', Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.unit_price}
                    onChange={(e) => onInputChange(index, 'unit_price', Number(e.target.value))}
                  />
                </td>
                <td>～</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <OptionRow>
          <input
            type="checkbox"
            checked={values.some((row) => row.confirmed)}
            onChange={(e) => onInputChange(0, 'confirmed', e.target.checked)}
          />
          <span>単価毎区分</span>
          <input
            type="checkbox"
            checked={values.some((row) => row.confirmed)}
            onChange={(e) => onInputChange(0, 'confirmed', e.target.checked)}
          />
          <span>手計算対象</span>
          <input
            type="checkbox"
            checked={values.some((row) => row.confirmed)}
            onChange={(e) => onInputChange(0, 'confirmed', e.target.checked)}
          />
          <span>手計算対象外</span>
          <input
            type="checkbox"
            checked={values.some((row) => row.confirmed)}
            onChange={(e) => onInputChange(0, 'confirmed', e.target.checked)}
          />
          <span>改定済</span>
        </OptionRow>
      </InfoSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const YearSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-right: 5px;
`;

const YearInput = styled.input`
  width: 60px;
  margin-right: 5px;
`;

const InfoSection = styled.div``;

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  
  th, td {
    padding: 5px;
    text-align: center;
    border: 1px solid #ccc;
  }
`;

const OptionRow = styled.div`
  margin-top: 10px;
  
  input {
    margin-right: 5px;
  }
  
  span {
    margin-right: 10px;
  }
`;

export default UserInfo;

// Usage example
const App: React.FC = () => {
  const handleInputChange = (index: number, key: string, value: number | boolean) => {
    // Handle input changes here
    console.log(`Index: ${index}, Key: ${key}, Value: ${value}`);
  };

  const sampleData = {
    year: 30,
    values: [
      { from: 0, to: 9999999, unit_price: 0, confirmed: false },
      { from: 999999999, to: 0, unit_price: 999999999, confirmed: false },
    ],
  };

  return <UserInfo {...sampleData} onInputChange={handleInputChange} />;
};