import React from 'react';
import styled from '@emotion/styled';

type ReservationSearchFormProps = {
  onSubmit: (params: {
    reservationType: string;
    arriveYear: number;
    arriveMonth: number;
    arriveDay: number;
    departureYear: number;
    departureMonth: number;
    departureDay: number;
    stayCount: number;
    roomCount: number;
    adultCount: number;
    taxRate: number;
    fromPrice: number;
    toPrice: number;
    fromReserveNumber: number;
    toReserveNumber: number;
  }) => void;
};

const ReservationSearchForm: React.FC<ReservationSearchFormProps> = ({
  onSubmit,
}) => {
  // 検索ボタンクリック時の処理
  const handleSubmit = () => {
    // フォームの値を取得
    const reservationType = '予約';
    const arriveYear = parseInt(document.getElementById('arriveYear').value);
    const arriveMonth = parseInt(document.getElementById('arriveMonth').value);
    const arriveDay = parseInt(document.getElementById('arriveDay').value);
    const departureYear = parseInt(document.getElementById('departureYear').value);
    const departureMonth = parseInt(document.getElementById('departureMonth').value);  
    const departureDay = parseInt(document.getElementById('departureDay').value);
    const stayCount = parseInt(document.getElementById('stayCount').value);
    const roomCount = parseInt(document.getElementById('roomCount').value);
    const adultCount = parseInt(document.getElementById('adultCount').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const fromPrice = parseInt(document.getElementById('fromPrice').value);
    const toPrice = parseInt(document.getElementById('toPrice').value);
    const fromReserveNumber = parseInt(document.getElementById('fromReserveNumber').value);
    const toReserveNumber = parseInt(document.getElementById('toReserveNumber').value);

    // 入力チェック
    if (arriveYear < 1900 || departureYear < 1900) {
      alert('年の指定が不正です。');
      return; 
    }

    if (
      arriveMonth < 1 || arriveMonth > 12 ||
      departureMonth < 1 || departureMonth > 12
    ) {
      alert('月の指定が不正です。');
      return;
    }

    if (arriveDay < 1 || arriveDay > 31 || departureDay < 1 || departureDay > 31) {
      alert('日の指定が不正です。');  
      return;
    }

    if (fromPrice > toPrice) {
      alert('料金の範囲指定が不正です。');
      return;  
    }

    if (fromReserveNumber > toReserveNumber) {
     alert('予約番号の範囲指定が不正です。'); 
     return;
    }

    // 親コンポーネントに検索パラメータを渡す
    onSubmit({
      reservationType,
      arriveYear,
      arriveMonth, 
      arriveDay,
      departureYear,
      departureMonth,
      departureDay,
      stayCount,
      roomCount,
      adultCount,
      taxRate,
      fromPrice,
      toPrice,  
      fromReserveNumber,
      toReserveNumber,
    });
  };

  return (
    <Container>
      <Title>科目別執行計画額一覧作成</Title>
      
      <FieldContainer>        
        <FieldLabel>対象予算</FieldLabel>
        <div>
          <Select id="arriveYear" defaultValue="30">
            <option value="30">30年</option>
          </Select>
          年度
        </div>

        <FieldLabel>予算編成区分</FieldLabel>
        <Select id="stayCount" defaultValue="1">
          <option value="1">当初予算</option>
        </Select>

        <FieldLabel>回数</FieldLabel>
        <Input type="number" defaultValue="1" id="roomCount" />

        <CheckField>
          <input type="checkbox" id="saimokuCheck" defaultChecked />
          <label htmlFor="saimokuCheck">過年度実績</label>
        </CheckField>

      </FieldContainer>

      <FieldContainer>
        <FieldLabel>対象実績</FieldLabel>
        <div>  
          <Select id="departureYear" defaultValue="26">
            <option value="26">26年</option>
          </Select>
          年度
          〜
          <Select id="departureMonth" defaultValue="28">
            <option value="28">28年</option>
          </Select>
          年度
        </div>
      </FieldContainer>

      <FieldContainer>
        <FieldLabel>作成範囲</FieldLabel>
        <div>
          所属:
          <Input type="number" defaultValue="0000000" id="fromPrice" />
          〜  
          <Input type="number" defaultValue="9999999" id="toPrice" />
        </div>
        <div>
          予算科目: 
          <Input type="number" defaultValue="00000000000000000" id="fromReserveNumber" />
          〜
          <Input type="number" defaultValue="99999999999999999" id="toReserveNumber" />  
        </div>
      </FieldContainer>
        
      <FieldContainer>
        <FieldLabel>税金率</FieldLabel>
        <TaxRateInput type="number" defaultValue="1.00" id="taxRate" />%  
      </FieldContainer>

      <ButtonContainer>
        <Button type="button" onClick={handleSubmit}>OK</Button>  
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
      
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  & > *:not(:last-child) {
    margin-right: 8px;  
  }
`;

const FieldLabel = styled.div`
  font-weight: bold;
  white-space: nowrap;
  margin-right: 16px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Input = styled.input`
  padding: 4px;
  width: 100px;
`;

const CheckField = styled.label`
  display: flex;
  align-items: center;  
`;

const TaxRateInput = styled(Input)`
  width: 60px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;  
  
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  min-width: 100px;
`;

export default ReservationSearchForm;

// 使用例
const App = () => {
  const handleSubmit = (params) => {
    console.log(params);
    // 検索処理を実装する  
  };

  return (
    <div>  
      <h1>宿泊予約検索</h1>
      <ReservationSearchForm onSubmit={handleSubmit} />
    </div>
  );  
};