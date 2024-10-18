import React from 'react';
import styled from '@emotion/styled';

type YosanProps = {
  yosanDetail: {
    yosanCode: string;
    yosanName: string;
    yosanKind: string;
    yosanPurpose: string;
  };
  yosanSummary: {
    yosan: number;
    foodExpense: number;
    foodRemain: number;
    travelExpense: number;
    travelRemain: number;
  };
  consumptionTax: number;
  foodExpense: number;
  foodRemain: number;
  remarks: string;
};

const YosanWrapper = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f0f0f0;
`;

const YosanTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const YosanDetailTable = styled.table`
  width: 100%;
  margin-bottom: 24px;
  th {
    width: 20%;
    text-align: left;
    padding: 4px;
  }
  td {
    width: 30%;
    padding: 4px;
  }
`;

const YosanSummaryTable = styled.table`
  width: 60%;
  margin-bottom: 16px;
  th {
    width: 40%;
    text-align: left;
    padding: 4px;
  }
  td {
    width: 60%; 
    padding: 4px;
  }
`;

const InputWithLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  label {
    margin-right: 8px;
  }
  input {
    padding: 4px;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  button {
    margin: 0 8px;
  }  
`;

const Yosan: React.FC<YosanProps> = ({ yosanDetail, yosanSummary, consumptionTax, foodExpense, foodRemain, remarks }) => {
  return (
    <YosanWrapper>
      <YosanTitle>予算決定科目登録</YosanTitle>
      <YosanDetailTable>
        <tbody>
          <tr>
            <th>予算節</th>
            <td>{yosanDetail.yosanCode}</td>
            <td>{yosanDetail.yosanName}</td>
          </tr>
          <tr>  
            <th>予算細節</th>
            <td>{yosanDetail.yosanKind}</td>
            <td>{yosanDetail.yosanPurpose}</td>
          </tr>
          <tr>
            <th>税区分</th>
            <td colSpan={2}>
              {/* 課税を選択 */}
              <select>
                <option>課税</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>収入区分</th>
            <td colSpan={2}>共通</td>
          </tr>
        </tbody>
      </YosanDetailTable>

      <YosanSummaryTable>
        <tbody>
          <tr>
            <th>予算額</th>
            <td>{yosanSummary.yosan.toLocaleString()}</td>
          </tr>
          <tr>
            <th>負担累計</th>
            <td>{yosanSummary.foodExpense.toLocaleString()}</td>
          </tr>
          <tr>  
            <th>負担残額</th>
            <td>{yosanSummary.foodRemain.toLocaleString()}</td>
          </tr>
          <tr>
            <th>予定累計</th>
            <td>{yosanSummary.travelExpense.toLocaleString()}</td>
          </tr>
          <tr>
            <th>予定残額</th>  
            <td>{yosanSummary.travelRemain.toLocaleString()}</td>
          </tr>
        </tbody>
      </YosanSummaryTable>

      <InputWithLabel>
        <label>消費税率</label>
        <input type="text" value={`${consumptionTax} %`} readOnly />
      </InputWithLabel>

      <InputWithLabel>
        <label>負担残額</label>
        <input type="text" value={foodRemain.toLocaleString()} readOnly />
        <label>決定額</label>  
        <input type="text" value={foodExpense.toLocaleString()} /> 
        <button>控除入力</button>
      </InputWithLabel>

      <label>
        起工番号
        <input type="text" />  
      </label>

      <ButtonGroup>
        <button>確定</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </ButtonGroup>
    </YosanWrapper>
  );
};

// サンプルデータと使用例
const sampleData = {
  yosanDetail: {
    yosanCode: '0020104111',
    yosanName: '給料・備品費品費',
    yosanKind: '0001',
    yosanPurpose: '給料・備品費品費', 
  },
  yosanSummary: {
    yosan: 1237000,
    foodExpense: 45000, 
    foodRemain: 1192000,
    travelExpense: 0,
    travelRemain: 1192000,
  },
  consumptionTax: 10.0,
  foodExpense: 100.00,
  foodRemain: 900,
  remarks: '',
};

const YosanSample = () => {
  return (
    <Yosan
      yosanDetail={sampleData.yosanDetail}
      yosanSummary={sampleData.yosanSummary}  
      consumptionTax={sampleData.consumptionTax}
      foodExpense={sampleData.foodExpense}
      foodRemain={sampleData.foodRemain}
      remarks={sampleData.remarks}
    />
  );  
};

export default YosanSample;