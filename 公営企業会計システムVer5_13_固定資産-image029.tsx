import React from 'react';
import styled from 'styled-components';

// 資産除却・一覧表作成コンポーネントの型定義
type AssetRemovalAndListingProps = {
  date: string;
  fromAssetNumber?: string;
  toAssetNumber?: string;
  financialYear: number;
  period: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const DateText = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NumberInput = styled.input`
  width: 150px;
  padding: 5px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Select = styled.select`
  width: 100px;
  padding: 5px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// 資産除却・一覧表作成コンポーネント
const AssetRemovalAndListing: React.FC<AssetRemovalAndListingProps> = ({
  date,
  fromAssetNumber = '',
  toAssetNumber = '',
  financialYear,
  period,
}) => {
  return (
    <Container>
      <Title>固定資産除却一覧表作成</Title>
      <DateText>作成年月日：{date}</DateText>

      <NumberInputContainer>
        <label htmlFor="fromAssetNumber">固定資産番号</label>
        <NumberInput
          type="text"
          id="fromAssetNumber"
          value={fromAssetNumber}
          readOnly
        />
        <span>～</span>
        <NumberInput
          type="text"
          id="toAssetNumber"
          value={toAssetNumber}
          readOnly
        />
      </NumberInputContainer>

      <SelectContainer>
        <label htmlFor="financialYear">財源コード</label>
        <Select id="financialYear" value={financialYear} readOnly>
          <option value={financialYear}>{financialYear}</option>
        </Select>
        <span>～</span>
        <Select id="financialYearTo" value={financialYear} readOnly>
          <option value={financialYear}>{financialYear}</option>
        </Select>
      </SelectContainer>

      <SelectContainer>
        <label htmlFor="period">期間コード</label>
        <Select id="period" value={period} readOnly>
          <option value={period}>{period}</option>
        </Select>
        <span>～</span>
        <Select id="periodTo" value={period} readOnly>
          <option value={period}>{period}</option>
        </Select>
      </SelectContainer>

      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: AssetRemovalAndListingProps = {
  date: '令和29年09月11日',
  fromAssetNumber: '00000000',
  toAssetNumber: '9999999999',
  financialYear: 6,
  period: '6',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>資産除却・一覧表作成</h1>
      <AssetRemovalAndListing {...sampleData} />
    </div>
  );
};

export default App;