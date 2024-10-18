import React from 'react';
import styled from '@emotion/styled';

type ContractInfo = {
  fiscalYear: string;
  year: number;
  contractNumber: string;
  contractType: string;
  paymentMonth: number;
  endOfContract: string;
  company: string;
  representative: string;
  address: string;
  contractDate: string;
  contractEndDate?: string;
  contractRenewDate?: string;
  details: ContractDetail[];
}

type ContractDetail = {
  item: string;
  spec: string;
  unitPrice: number;
  contractAmount: number;
}

type ContractFormProps = {
  contractInfo: ContractInfo;
}

const ContractForm: React.FC<ContractFormProps> = ({ contractInfo }) => {
  // 契約情報の各項目を分割代入
  const {
    fiscalYear,
    year,
    contractNumber,
    contractType,
    paymentMonth,
    endOfContract,
    company,
    representative,
    address,
    contractDate,
    contractEndDate,
    contractRenewDate,
    details
  } = contractInfo;

  return (
    <FormWrapper>
      <Title>支出負担行為</Title>
      
      <Row>
        <RowTitle>令和C年度</RowTitle>
        <RowValue>{fiscalYear}</RowValue>
        
        <RowTitle>負担番号</RowTitle>
        <RowValue>{contractNumber}</RowValue>
        
        <RowTitle>支更回数</RowValue>
        <RowValue>{year}年</RowValue>
      </Row>
      
      <Row>
        <RowTitle>支払年度</RowTitle>
        <RowValue>{fiscalYear}</RowValue>
        
        <RowTitle>負担処理日</RowTitle>
        <RowValue>{contractType}月{paymentMonth}日</RowValue>
        
        <RowTitle>起案所属</RowTitle>
        <RowValue>水道課工管</RowValue>
      </Row>
      
      <Row>
        <RowTitle>起案者</RowTitle>
        <RowValue>上田太郎</RowValue>
      </Row>
      
      <Row>
        <RowTitle>摘要</RowTitle>
        <RowValue>令和{year}年度 JR土地賃借料（仲町駅内積み）</RowValue>
      </Row>
      
      <Row>
        <RowTitle>着手年月日</RowTitle>
        <RowValue></RowValue>
        
        <RowTitle>完了年月日</RowTitle>
        <RowValue>{endOfContract}</RowValue>
      </Row>
      
      <Row>
        <RowTitle>契約年月日</RowTitle>
        <RowValue>{contractDate}</RowValue>
      </Row>
      
      <Row>
        <RowTitle>期間</RowTitle>
        <RowValue></RowValue>
      </Row>
      
      <Row>
        <RowTitle>契約方法</RowTitle>
        <RowValue>契約書番号</RowValue>
        <RowValue>合計負担額</RowValue>
        <PriceValue>14,400</PriceValue>
      </Row>
      
      <Row>
        <RowTitle>前払区分</RowTitle>
        <RowValue>契約保証人</RowValue>
        <RowValue>合計本体額</RowValue>  
        <PriceValue>14,400</PriceValue>
      </Row>
      
      <Row>
        <RowTitle>支払回数</RowTitle>
        <RowValue>1</RowValue>
        <RowValue>合計消費税額</RowValue>
        <PriceValue>0</PriceValue>
      </Row>
      
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>予算節</TableHeaderCell>
            <TableHeaderCell>配・款地(積算)</TableHeaderCell>
            <TableHeaderCell>配・款地(精算)</TableHeaderCell>  
            <TableHeaderCell>税</TableHeaderCell>
            <TableHeaderCell>税率</TableHeaderCell>
            <TableHeaderCell>負担額</TableHeaderCell>
            <TableHeaderCell>消費税額</TableHeaderCell>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {details.map((detail, index) => (
            <TableRow key={index}>
              <TableCell></TableCell>
              <TableCell>{detail.item}</TableCell>
              <TableCell>{detail.spec}</TableCell>
              <TableCell>非</TableCell>
              <TableCell>14,400</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          ))}
        </TableBody>  
      </TableWrapper>
      
      <Row>
        <Button>物品詳細</Button>
        <Button>現在行</Button>
        <SubmitButton>キャンセル</SubmitButton>
      </Row>
      
    </FormWrapper>
  );
};

export default ContractForm;

// サンプルデータ
const sampleData: ContractInfo = {
  fiscalYear: '4年',
  year: 1,
  contractNumber: '00000000000',
  contractType: '予定',
  paymentMonth: 3,
  endOfContract: '000000',  
  company: '株式会社西鉄総合',
  representative: '',
  address: '',
  contractDate: '',
  details: [
    {
      item: '契約書番号',
      spec: '契約保証人',
      unitPrice: 14400,
      contractAmount: 14400      
    }
  ]
};

// スタイリング
const FormWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RowTitle = styled.div`
  width: 120px;
  margin-right: 8px;
  
  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const RowValue = styled.div`
  flex: 1;
  margin-right: 16px;
  
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const PriceValue = styled.div`
  width: 100px;
  text-align: right;
`;

const TableWrapper = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;  
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.thead``;

const TableHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 8px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// 使用例
const UsageExample: React.FC = () => {
  return (
    <div>
      <ContractForm contractInfo={sampleData} />
    </div>
  );  
};