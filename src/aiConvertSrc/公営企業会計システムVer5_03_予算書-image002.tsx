import React from 'react';
import styled from 'styled-components';

// 予算科目調整入力のプロパティ型定義
type YosanKamokuChoseiInputProps = {
  nendo: number;
  yosanKamoku: string;
  yosanBango: number;
  toshiKbn: '日' | '節' | '細節' | '明細';
  zenki: number;
  toki: number;
  zokei: number;
  tokiSoGaku: number;
  renkeiSoGaku: number;
  onCloseButtonClick: () => void;
  onSaveButtonClick: () => void;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 4px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 4px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const AmountTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

/**
 * 予算科目調整入力コンポーネント
 */
const YosanKamokuChoseiInput: React.FC<YosanKamokuChoseiInputProps> = ({
  nendo,
  yosanKamoku,
  yosanBango,
  toshiKbn,
  zenki,
  toki,
  zokei,
  tokiSoGaku,
  renkeiSoGaku,
  onCloseButtonClick,
  onSaveButtonClick,
}) => {
  return (
    <Container>
      <Title>予算科目調整入力</Title>
      <div>
        <FormLabel>年度</FormLabel>
        <div>{nendo}</div>
      </div>
      <div>
        <FormLabel>予算科目</FormLabel>
        <div>{yosanKamoku}</div>
      </div>
      <div>
        <FormLabel>予算番号</FormLabel>
        <div>{yosanBango}</div>
      </div>
      <div>
        <FormLabel>都市区分</FormLabel>
        <StyledSelect value={toshiKbn}>
          <option value="日">日</option>
          <option value="節">節</option>
          <option value="細節">細節</option>
          <option value="明細">明細</option>
        </StyledSelect>
      </div>
      <div>
        <FormLabel>節</FormLabel>
        <StyledInput type="text" value="水道使用料" readOnly />
      </div>
      <div>
        <FormLabel>細節</FormLabel>
        <StyledInput type="text" value="水道料金" readOnly />
      </div>
      <div>
        <FormLabel>明細</FormLabel>
        <StyledInput type="text" value="水道料金2020" readOnly />
      </div>
      <AmountTable>
        <tbody>
          <tr>
            <th>前年科目</th>
            <td>{zenki.toLocaleString()}</td>
          </tr>
          <tr>
            <th>当期科目</th>
            <td>{toki.toLocaleString()}</td>
          </tr>
          <tr>
            <th>増減</th>
            <td>{zokei.toLocaleString()}</td>
          </tr>
          <tr>
            <th>当期調整額</th>
            <td>{tokiSoGaku.toLocaleString()}</td>
          </tr>
          <tr>
            <th>連携調整額</th>
            <td>{renkeiSoGaku.toLocaleString()}</td>
          </tr>
        </tbody>
      </AmountTable>
      <ButtonContainer>
        <Button onClick={onCloseButtonClick}>閉じる</Button>
        <Button onClick={onSaveButtonClick}>保存</Button>
      </ButtonContainer>
    </Container>
  );
};

export default YosanKamokuChoseiInput;

// 使用例
const App: React.FC = () => {
  return (
    <YosanKamokuChoseiInput
      nendo={2022}
      yosanKamoku="予算科目A"
      yosanBango={1}
      toshiKbn="節"
      zenki={1000000}
      toki={1100000}
      zokei={100000}
      tokiSoGaku={1050000}
      renkeiSoGaku={1000000}
      onCloseButtonClick={() => console.log('Close button clicked')}
      onSaveButtonClick={() => console.log('Save button clicked')}
    />
  );
};