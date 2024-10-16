import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  division: string;
  businessPlace: string;
  workplace: string;
  machineNumber: string;
  reservationDate: string;
  previousDay: number;
  consumption: number;
  consumptionTax: number;
  subTotal: number;
  total: number;
  predictionRate: number;
  tax: number;
};

type Props = {
  data: ReservationData;
};

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<Props> = ({ data }) => {
  // 予約残数の計算
  const remainingReservations = Math.floor(data.predictionRate * 100);

  return (
    <div>
      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <th>予算科目</th>
              <td>{data.division}</td>
            </tr>
            <tr>
              <th>予算節</th>
              <td>{data.businessPlace}</td>
            </tr>
            <tr>
              <th>予算細節</th>
              <td>{data.workplace}</td>
            </tr>
            <tr>
              <th>科目選択</th>
              <td>{data.machineNumber}</td>
            </tr>
            <tr>
              <th>取引日</th>
              <td>{data.reservationDate}</td>
            </tr>
            <tr>
              <th>収入区分</th>
              <td>
                <select>
                  <option>自社</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>決定額</th>
              <td>
                <input type="text" defaultValue={data.consumption} />
              </td>
            </tr>
            <tr>
              <th>税抜額</th>
              <td>{data.previousDay}</td>
            </tr>
            <tr>
              <th>消費税率</th>
              <td>
                <input type="text" defaultValue={data.tax * 100} />%
              </td>
            </tr>
            <tr>
              <th>消費税額</th>
              <td>{data.consumptionTax}</td>
            </tr>
            <tr>
              <th>予算残高</th>
              <td>{remainingReservations}</td>
            </tr>
            <tr>
              <th>他予算残</th>
              <td>
                <input type="text" defaultValue={0} disabled />%
              </td>
            </tr>
            <tr>
              <th>摘要</th>
              <td>
                <textarea />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>

      <ButtonContainer>
        <Button>振替</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </div>
  );
};

// 使用例
const sampleData: ReservationData = {
  division: '0001',
  businessPlace: '本社',
  workplace: '総務部',
  machineNumber: '001',
  reservationDate: '2023-07-13',
  previousDay: 32504,
  consumption: 1000000,
  consumptionTax: 100000,
  subTotal: -1001000,
  total: -1001000,
  predictionRate: 0.74074,
  tax: 0.1,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予算決定科目登録</h1>
      <ReservationForm data={sampleData} />
    </div>
  );
};

export default App;