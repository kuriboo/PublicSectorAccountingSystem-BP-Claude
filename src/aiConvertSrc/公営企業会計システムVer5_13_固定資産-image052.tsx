import React from 'react';
import styled from '@emotion/styled';

// 抽出固定資産の一覧表示コンポーネントの型定義
interface ExtractedFixedAssetListProps {
  extractionDate: string;
  returnDate: string;
  assetClassification: '管理(資産番号)' | '管理以外';
  assetNumberRange: {
    start: number;
    end: number;
  };
  registrationDateRange: {
    start: string;
    end: string;
  };
  disposalNumbers: {
    start: string;
    end: string;
  };
  accountingYears: {
    start: string;
    end: string;
  };
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 8px;
  min-width: 100px;

  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

// 抽出固定資産の一覧表示コンポーネント
const ExtractedFixedAssetList: React.FC<ExtractedFixedAssetListProps> = ({
  extractionDate,
  returnDate,
  assetClassification,
  assetNumberRange,
  registrationDateRange,
  disposalNumbers,
  accountingYears,
}) => {
  return (
    <Container>
      <Title>抽出固定資産一覧表作成</Title>
      <Row>
        <Label>作成年月日</Label>
        <Input type="text" value={extractionDate} readOnly />
        <Label>平成29年09月11日</Label>
        <Input type="text" value={returnDate} readOnly />
      </Row>
      <Row>
        <Label>作表区分</Label>
        <Select value={assetClassification}>
          <option value="管理(資産番号)">管理(資産番号)</option>
          <option value="管理以外">管理以外</option>
        </Select>
      </Row>
      <Row>
        <Label>範囲指定</Label>
        <Label>資産番号</Label>
        <Input type="number" value={assetNumberRange.start} /> ～ <Input type="number" value={assetNumberRange.end} />
      </Row>
      <Row>
        <Label>固定資産科目</Label>
        <Input type="text" value={registrationDateRange.start} /> ～ <Input type="text" value={registrationDateRange.end} />
      </Row>
      <Row>
        <Label>部門</Label>
        <Input type="text" value={disposalNumbers.start} /> ～ <Input type="text" value={disposalNumbers.end} />
      </Row>
      <Row>
        <Label>取得年月日</Label>
        <Input type="text" value={accountingYears.start} /> ～ <Input type="text" value={accountingYears.end} />
      </Row>
      <Row>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>        
      </Row>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: ExtractedFixedAssetListProps = {
    extractionDate: '平成29年09月11日',
    returnDate: '平成29年09月11日',  
    assetClassification: '管理(資産番号)',
    assetNumberRange: {
      start: 0,
      end: 9999999999,
    },
    registrationDateRange: {
      start: '00000000',
      end: '99999999',
    },
    disposalNumbers: {
      start: '001 取水',
      end: '002 導水',   
    },
    accountingYears: {
      start: '平成29年04月',
      end: '平成30年03月',
    },
  };

  return <ExtractedFixedAssetList {...sampleData} />;
};

export default ExtractedFixedAssetList;