import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  予算科目: string;
  予算節: string;
  予算細節: string;
  予算明細: string;
  税区分: string;
  消費税率: number;
  単価: number;
  数量: number;
  金額: number;
};

type Props = {
  data: FormData;
};

const ReservationForm: React.FC<Props> = ({ data }) => {
  return (
    <FormWrapper>
      <FormHeader>
        <div>予算</div>
        <div>訂正</div>
      </FormHeader>
      <FormBody>
        <FormRow>
          <FormLabel>予算科目</FormLabel>
          <FormValue>{data.予算科目 || '---'}</FormValue>
        </FormRow>
        <FormRow>
          <FormLabel>予算節</FormLabel>
          <FormValue>{data.予算節 || '---'}</FormValue>
        </FormRow>
        <FormRow>
          <FormLabel>予算細節</FormLabel>
          <FormValue>{data.予算細節 || '---'}</FormValue>
        </FormRow>
        <FormRow>
          <FormLabel>予算明細</FormLabel> 
          <FormValue>{data.予算明細 || '---'}</FormValue>
        </FormRow>
      </FormBody>
      <FormFooter>
        <FooterRow>
          <FooterLabel>税区分</FooterLabel>
          <FooterValue>{data.税区分}</FooterValue>
        </FooterRow>
        <FooterRow>
          <FooterLabel>消費税率</FooterLabel>
          <FooterValue>{data.消費税率}%</FooterValue>
        </FooterRow>
        <PriceTable>
          <thead>
            <tr>
              <th>単価</th>
              <th>数量</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.単価.toLocaleString()}</td>
              <td>{data.数量}</td>
              <td>{data.金額.toLocaleString()}</td>
            </tr>
          </tbody>
        </PriceTable>
      </FormFooter>
    </FormWrapper>
  );
};

// Styling with Emotion
const FormWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const FormBody = styled.div`
  margin-bottom: 24px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FormLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const FormValue = styled.div`
  flex: 1;
`;

const FormFooter = styled.div``;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FooterLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const FooterValue = styled.div`
  flex: 1;
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// Sample usage
const sampleData: FormData = {
  予算科目: '0020104111',
  予算節: '0002',
  予算細節: '0010',
  予算明細: '',
  税区分: '課税',
  消費税率: 10,
  単価: 10000,
  数量: 1.0,
  金額: 10000,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm data={sampleData} />
    </div>
  );
};

export default App;