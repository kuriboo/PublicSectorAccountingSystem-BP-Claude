import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailsProps {
  reservationDate: string;
  reservationNumber: string;
  customerNumber: string;
  ordererName: string;
  ordererDepartment: string;
  ordererPhone: string;
  taxRate: number;
  subtotal: number;
  taxAmount: number;
  total: number;
  advancePayment: number;
  advancePaymentRate: number;
  consumption: number;
  service: number;
  advancePaymentAmount: number;
  deposit: number;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  reservationDate,
  reservationNumber,
  customerNumber,
  ordererName,
  ordererDepartment,
  ordererPhone,
  taxRate,
  subtotal,
  taxAmount,
  total,
  advancePayment,
  advancePaymentRate,
  consumption,
  service,
  advancePaymentAmount,
  deposit,
}) => {
  return (
    <Container>
      <DetailsTable>
        <tbody>
          <tr>
            <th>予算科目</th>
            <td>
              <div>{reservationDate}</div>
              <div>{reservationNumber}</div>
              <div>{customerNumber}</div>
            </td>
          </tr>
          <tr>
            <th>予算節</th>
            <td>
              <div>{ordererName}</div>
              <div>{ordererDepartment}</div>
              <div>{ordererPhone}</div>
            </td>
          </tr>
          <tr>
            <th>税区分</th>
            <td>課税</td>
          </tr>
        </tbody>
      </DetailsTable>

      <SummaryTable>
        <tbody>
          <tr>
            <th>予算残高</th>
            <td>{subtotal.toLocaleString()}</td>
          </tr>
          <tr>
            <th>請負率</th>
            <td>{taxRate}%</td>
          </tr>
        </tbody>
      </SummaryTable>

      <BreakdownTable>
        <tbody>
          <tr>
            <th>請負額</th>
            <td>
              <div>
                <span>変更前</span>
                <span>{consumption.toLocaleString()}</span>
              </div>
              <div>
                <span>変更後</span>
                <input type="text" defaultValue={service.toLocaleString()} />
              </div>
              <div>
                <span>差額</span>
                <span>{advancePaymentAmount.toLocaleString()}</span>
              </div>
            </td>
          </tr>
          <tr>
            <th>税抜額</th>
            <td>{subtotal.toLocaleString()}</td>
          </tr>
          <tr>
            <th>消費税率</th>
            <td>
              <input type="text" defaultValue={`${advancePaymentRate} %`} />
            </td>
          </tr>
          <tr>
            <th>消費税額</th>
            <td>{taxAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <th>前受金</th>
            <td>{deposit.toLocaleString()}</td>
          </tr>
        </tbody>
      </BreakdownTable>

      <ButtonContainer>
        <button>OK</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const DetailsTable = styled.table`
  width: 100%;
  margin-bottom: 16px;

  th {
    width: 120px;
    text-align: left;
    vertical-align: top;
    padding: 4px;
  }

  td {
    padding: 4px;
  }
`;

const SummaryTable = styled.table`
  width: 100%;
  margin-bottom: 16px;

  th {
    width: 120px;
    text-align: left;
    padding: 4px;
  }

  td {
    text-align: right;
    padding: 4px;
  }
`;

const BreakdownTable = styled.table`
  width: 100%;
  margin-bottom: 16px;

  th {
    width: 120px;
    text-align: left;
    vertical-align: top;
    padding: 4px;
  }

  td {
    text-align: right;
    padding: 4px;
  }

  input {
    width: 100px;
    text-align: right;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;

  button {
    margin: 0 8px;
  }
`;

// サンプルデータを用いた使用例
const SampleData: ReservationDetailsProps = {
  reservationDate: '004010828',
  reservationNumber: '009',
  customerNumber: '010',
  ordererName: '部改・工事請負費',
  ordererDepartment: '部改保新設事業',
  ordererPhone: '部改保新設工事',
  taxRate: 100,
  subtotal: 1100000,
  taxAmount: 550000,
  total: 1650000,
  advancePayment: 1500000,
  advancePaymentRate: 8,
  consumption: 1500000,
  service: 1650000,
  advancePaymentAmount: 150000,
  deposit: 500000,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予算変更(工事 請負)</h1>
      <ReservationDetails {...SampleData} />
    </div>
  );
};

export default App;