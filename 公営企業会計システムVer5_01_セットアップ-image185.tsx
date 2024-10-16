import React from 'react';
import styled from '@emotion/styled';

type CompanyMasterProps = {
  title: string;
  mapCode: string;
  departmentCode: string;
  registrationNumber: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  bankCode: string;
  branchCode1: string;
  branchCode2: string;
  branchCode3: string;
  accountType: string;
  taxFilingDate1: string;
  taxFilingMethod1: string;
  taxFilingDate2: string;
  taxFilingMethod2: string;
  taxFilingSubtitle1: string;
  taxFilingSubtitle2: string;
  startDate: string;
  endDate: string;
  active: boolean;
  system: boolean;
  title_flag: boolean;
  print_flag: boolean;
  deadline: string;
  paymentDate: string;
  itemVat: boolean;
  partCodeRegistrationDate: boolean;
  titleRegistrationNumber: boolean;
  printDealStatement: boolean;
  alwaysPrintDealStatement: boolean;
};

const CompanyMaster: React.FC<CompanyMasterProps> = ({
  title = '',
  mapCode = '',
  departmentCode = '',
  registrationNumber = '',
  postalCode = '',
  address = '',
  phoneNumber = '',
  faxNumber = '',
  bankCode = '',
  branchCode1 = '',
  branchCode2 = '',
  branchCode3 = '',
  accountType = '普通預金',
  taxFilingDate1 = '',
  taxFilingMethod1 = '',
  taxFilingDate2 = '',
  taxFilingMethod2 = '',
  taxFilingSubtitle1 = '',
  taxFilingSubtitle2 = '',
  startDate = '',
  endDate = '',
  active = false,
  system = false,
  title_flag = false,
  print_flag = false,
  deadline = '末日〆',
  paymentDate = '末日',
  itemVat = false,
  partCodeRegistrationDate = false,
  titleRegistrationNumber = false,
  printDealStatement = false,
  alwaysPrintDealStatement = false,
}) => {
  return (
    <Container>
      <Title>{title || '無題タイトル'}</Title>
      <Row>
        <Label>マップコード</Label>
        <div>{mapCode}</div>
      </Row>
      <Row>
        <Label>帳票タイトル</Label>
        <div>{departmentCode}</div>
      </Row>
      <Row>
        <Label>管理者番号</Label>
        <div>{registrationNumber}</div>
      </Row>
      <Row>
        <Label>郵便番号</Label>
        <div>{postalCode}</div>
      </Row>
      <Row>
        <Label>住所</Label>
        <div>{address}</div>
      </Row>
      <Row>
        <Label>電話番号</Label>
        <div>{phoneNumber}</div>
      </Row>
      <Row>
        <Label>FAX番号</Label>
        <div>{faxNumber}</div>
      </Row>
      <Row>
        <Label>決済コード</Label>
        <div>{bankCode}</div>
      </Row>
      <Row>
        <Label>銀行内容1</Label>
        <div>{branchCode1}</div>
      </Row>
      <Row>
        <Label>銀行内容2</Label>
        <div>{branchCode2}</div>
      </Row>
      <Row>
        <Label>銀行内容3</Label>
        <div>{branchCode3}</div>
      </Row>
      <Row>
        <Label>帳票種式</Label>
        <div>{accountType}</div>
      </Row>
      <Row>
        <Label>自由設定項目</Label>
        <div></div>
      </Row>
      <Row>
        <Label>自由設定日1</Label>
        <div>{taxFilingDate1}</div>
      </Row>
      <Row>
        <Label>自由設定日1印字名称</Label>
        <div>{taxFilingMethod1}</div>
      </Row>
      <Row>
        <Label>自由設定通年名称1</Label>
        <div>{taxFilingSubtitle1}</div>
      </Row>
      <Row>
        <Label>自由設定通年名称2</Label>
        <div>{taxFilingSubtitle2}</div>
      </Row>
      <Row>
        <Label>自由設定開始日</Label>
        <div>{startDate}</div>
      </Row>
      <Row>
        <Label>自由設定終了日</Label>
        <div>{endDate}</div>
      </Row>
      <Footer>
        <Checkbox type="checkbox" checked={active} readOnly />
        <CheckboxLabel>有効市水道事業会計</CheckboxLabel>
        <Checkbox type="checkbox" checked={system} readOnly />
        <CheckboxLabel>飯塚市水道事業会計</CheckboxLabel>
        <Checkbox type="checkbox" checked={title_flag} readOnly />
        <CheckboxLabel>印字</CheckboxLabel>
        <Checkbox type="checkbox" checked={print_flag} readOnly />
        <CheckboxLabel>印刷</CheckboxLabel>
      </Footer>
      <Footer>
        <div>締切{deadline}</div>
        <div>支払{paymentDate}</div>
      </Footer>
      <Footer>
        <Checkbox type="checkbox" checked={itemVat} readOnly />
        <CheckboxLabel>消費税計算書経理フラグ</CheckboxLabel>
        <Checkbox type="checkbox" checked={partCodeRegistrationDate} readOnly />
        <CheckboxLabel>品目締日</CheckboxLabel>
        <Checkbox type="checkbox" checked={titleRegistrationNumber} readOnly />
        <CheckboxLabel>不要印</CheckboxLabel>
        <div>
          <Checkbox type="checkbox" checked={printDealStatement} readOnly />
          <CheckboxLabel>取引明細書再登録時</CheckboxLabel>
        </div>
        <div>
          <Checkbox type="checkbox" checked={alwaysPrintDealStatement} readOnly />
          <CheckboxLabel>明細書経理登録</CheckboxLabel>
        </div>
      </Footer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: CompanyMasterProps = {
    title: 'サンプルタイトル',
    mapCode: 'MAP0060',
    departmentCode: '調整金（一般）',
    registrationNumber: '',
    postalCode: '',
    address: '',
    phoneNumber: '',
    faxNumber: '',
    bankCode: '',
    branchCode1: '',
    branchCode2: '',
    branchCode3: '',
    accountType: '普通預金',
    taxFilingDate1: '',
    taxFilingMethod1: '',
    taxFilingDate2: '',
    taxFilingMethod2: '',
    taxFilingSubtitle1: '',
    taxFilingSubtitle2: '',
    startDate: '',
    endDate: '',
    active: true,
    system: true,
    title_flag: true,
    print_flag: true,
    deadline: '末日',
    paymentDate: '末日',
    itemVat: true,
    partCodeRegistrationDate: false,
    titleRegistrationNumber: false,
    printDealStatement: false,
    alwaysPrintDealStatement: true,
  };

  return (
    <div>
      <h1>企業マスタ登録</h1>
      <CompanyMaster {...sampleData} />
    </div>
  );
};

export default App;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > div {
    flex: 1;
  }
`;

const Label = styled.div`
  font-weight: bold;
  min-width: 150px;
`;

const Footer = styled.div`
  display: flex; 
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin: 0 5px 0 10px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;