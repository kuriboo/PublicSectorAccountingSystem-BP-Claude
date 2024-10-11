import React from 'react';
import styled from 'styled-components';

// 契約発注入力のプロパティ型定義
type ContractOrderProps = {
  registrationNumber: string;
  contractName: string;
  contractor: string;
  contractDate: string;
  expiration: string;
  paymentTerms: number;
  paymentMethod: string;
  industry: string;
  contractDetails: string;
  item: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxRate: number;
  consumptionTax: number;
  total: number;
  supportCost: number;
  expenseCost: number;
  settlementMethod: string;
  settlementDate: string;
};

// 契約発注入力のコンポーネント
const ContractOrder: React.FC<ContractOrderProps> = ({
  registrationNumber,
  contractName,
  contractor,
  contractDate,
  expiration,
  paymentTerms,
  paymentMethod,
  industry,
  contractDetails,
  item,
  quantity,
  unitPrice,
  amount,
  taxRate,
  consumptionTax,
  total,
  supportCost,
  expenseCost,
  settlementMethod,
  settlementDate,
}) => {
  return (
    <Container>
      <Title>契約発注入力</Title>
      <RegistrationInfo>
        <Label>契約番号</Label>
        <span>{registrationNumber}</span>
        <Label>契約名</Label>
        <span>{contractName}</span>
      </RegistrationInfo>
      <ContractorInfo>
        <Label>契約年月日</Label>
        <span>{contractDate}</span>
        <Label>期限</Label>
        <span>{expiration}</span>
        <Label>締年月日</Label>
        <span>{settlementDate}</span>
      </ContractorInfo>
      <PaymentInfo>
        <Label>支払サイト</Label>
        <span>{paymentTerms}日</span>
        <Label>現預依頼番号</Label>
        <span>{paymentMethod}</span>
      </PaymentInfo>
      <IndustryInfo>
        <Label>工事名称所</Label>
        <span>{industry}</span>
        <Label>摘要</Label>
        <span>{contractDetails}</span>
      </IndustryInfo>
      <TableHeader>
        <span>品番</span>
        <span>品名</span>
        <span>規格</span>
        <span>数量</span>
        <span>単位</span>
        <span>単価</span>
        <span>金額</span>
      </TableHeader>
      <TableRow>
        <span>0051300013</span>
        <span>{item}</span>
        <span>ø13</span>
        <span>{quantity}</span>
        <span>m</span>
        <span>{unitPrice}</span>
        <span>{amount}</span>
      </TableRow>
      <PriceInfo>
        <Label>消費税率</Label>
        <span>{taxRate}</span>
        <Label>%</Label>
        <Label>支払方法金額</Label>
        <span>{supportCost}</span>
        <Label>税抜金額</Label>
        <span>{expenseCost}</span>
        <Label>消費税額</Label>
        <span>{consumptionTax}</span>
      </PriceInfo>
      <Total>
        <Label>合計金額</Label>
        <span>{total}</span>
      </Total>
      <SettlementInfo>
        <Label>支出負担行為</Label>
        <RadioButton>
          <input type="radio" id="notRequired" name="settlement" />
          <label htmlFor="notRequired">不要</label>
        </RadioButton>
        <RadioButton>
          <input type="radio" id="required" name="settlement" />
          <label htmlFor="required">必要</label>
        </RadioButton>
      </SettlementInfo>
      <ButtonGroup>
        <Button>支出負担</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: ContractOrderProps = {
  registrationNumber: '510009',
  contractName: '管理者',
  contractor: '9999999',
  contractDate: '平成31年08月31日',
  expiration: '平成31年08月31日',
  paymentTerms: 35,
  paymentMethod: '01001',
  industry: '平成30年度 施設管理 1号',
  contractDetails: '施設管理備品など',
  item: '管理費',
  quantity: 1,
  unitPrice: 100000,
  amount: 100000,
  taxRate: 8,
  consumptionTax: 8000,
  total: 108000,
  supportCost: 108000,
  expenseCost: 100000,
  settlementMethod: '支出負担行為が必要',
  settlementDate: '平成31年04月16日',
};

// 契約発注入力のスタイリング
const Container = styled.div`
  font-size: 14px;
`;

const Title = styled.h2`
  text-align: center;
`;

const RegistrationInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContractorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IndustryInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;
`;

const SettlementInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RadioButton = styled.div`
  margin-right: 10px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <ContractOrder {...sampleData} />
    </div>
  );
};

export default App;