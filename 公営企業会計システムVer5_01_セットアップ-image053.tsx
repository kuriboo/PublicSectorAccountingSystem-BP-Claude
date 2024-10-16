import React from 'react';
import styled from '@emotion/styled';

type MasterProps = {
  companyCode: string;
  year: number;
  accountingPeriod: number;
  collectMethod: '換金' | '請求' | 'その他' | null;
  targetDate: '年度' | '年月'; 
  totalAmount: number;
  projectCode: string;
  deadlineMonth: number;
  paymentDate: number;
  aggregateMethod: '各顧客・金額日平' | '各顧客日平・金額日平' | '顧客計・日平計' | '日平計・顧客計' | '顧客計' | '日平計' | null;
  items: {code: string, name: string, amount: number}[];
};

const MasterForm: React.FC<MasterProps> = ({
  companyCode,
  year,
  accountingPeriod,
  collectMethod,
  targetDate,
  totalAmount,
  projectCode,
  deadlineMonth,
  paymentDate,
  aggregateMethod,
  items
}) => {
  return (
    <FormContainer>
      <TitleContainer>
        <h2>試算表集計マスタ</h2>
        <span>行政市水道事業会計</span>
      </TitleContainer>

      <Row>
        <label>会計年度</label>
        <span>{year}年度</span>
      </Row>
      
      <Row>
        <label>集計番号</label>
        <input type="text" value={projectCode} readOnly/>
      </Row>

      <Row>
        <label>項目区分</label>
        <span>{collectMethod === '換金' ? '見出しのみ印字(金額なし)' : '印字しない'}</span>
      </Row>

      <DateContainer>
        <span>締日</span>
        <label>
          <input type="radio" checked={targetDate === '年度'}/> 年度 
        </label>
        <label>
          <input type="radio" checked={targetDate === '年月'}/> 年月
        </label>
      </DateContainer>
      
      <Row>
       <label>金額印字区分</label>
       <ComboBox>
         <option>各顧客・金額日平</option>
         <option>各顧客日平・金額日平</option>
         <option>顧客計・日平計</option>
         <option>日平計・顧客計</option>
         <option>顧客計</option>
         <option>日平計</option>
       </ComboBox>
      </Row>

      <Row>
        <label>改行区分</label> 
        <span>行政</span>
      </Row>

      <ButtonContainer>
        <Button>集計先番号</Button>
        <ItemsContainer>
          {items.map(item => (
            <ItemRow key={item.code}>
              <span>{item.code}</span>  
              <span>{item.name}</span>
              <span>{item.amount}</span>
            </ItemRow>
          ))}
        </ItemsContainer>
        <Button>削除</Button>
      </ButtonContainer>

      <ButtonRow>
        <Button>前データ</Button>  
        <Button>次データ</Button>
      </ButtonRow>
      
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button> 
        <Button>終了</Button>
      </ButtonRow>

    </FormContainer>  
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleMasterForm: React.FC = () => {
  const sampleData: MasterProps = {
    companyCode: 'C01',
    year: 2029,
    accountingPeriod: 6,
    collectMethod: '換金',  
    targetDate: '年度',
    totalAmount: 240,
    projectCode: 'A001',
    deadlineMonth: 6,
    paymentDate: 5,
    aggregateMethod: '各顧客日平・金額日平',
    items: [
      {code: '100', name: 'サンプル項目1', amount: 100},
      {code: '200', name: 'サンプル項目2', amount: 200},
      {code: '300', name: 'サンプル項目3', amount: 300},
    ]
  };

  return <MasterForm {...sampleData} />;
};

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  font-size: 14px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const DateContainer = styled(Row)`
  label {
    margin-right: 1rem;
  }  
`;

const ComboBox = styled.select`
  padding: 4px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;  
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 4px 0;
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export default SampleMasterForm;