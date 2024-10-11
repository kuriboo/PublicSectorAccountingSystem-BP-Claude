import React from 'react';
import styled from '@emotion/styled';

type YosanData = {
  jin: number;
  yosanGaku: number;
  tosishimuke: number;
  toshinokofu: number;
  shiharaiGaku: number;
  zanGaku: number;
};

type PredictionProps = {
  yosanData: YosanData;
  zandaka: number;
  ritu: number;
  shiwakeCode: number;
  shiwakeName: string;
};

const PredictionContainer = styled.div`
  font-family: sans-serif;
  padding: 1rem;

  table {
    border-collapse: collapse;
    width: 100%;
    
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: center;
    }

    th {
      background-color: #f2f2f2;
    }
  }

  input, select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
`;

const Prediction: React.FC<PredictionProps> = ({
  yosanData,
  zandaka,
  ritu,
  shiwakeCode,
  shiwakeName
}) => {
  return (
    <PredictionContainer>
      <table>
        <tbody>
          <tr>
            <th>予算科目</th>
            <td>
              {shiwakeCode} {shiwakeName}
            </td>
          </tr>
          <tr>
            <th>予算節</th>
            <td>
              {yosanData.jin.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>予算細節</th>
            <td>
              {yosanData.yosanGaku.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>予算明細</th>
            <td>
              {yosanData.tosishimuke.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>科目検索</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>収入区分</th>
            <td>
              <select>
                <option>選択</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table>
        <tbody>
          <tr>
            <th>前</th>
            <td>{yosanData.zanGaku.toLocaleString()}</td>
          </tr>
          <tr>  
            <th>予算現額</th>
            <td>{yosanData.yosanGaku.toLocaleString()}</td>
          </tr>
          <tr>
            <th>負担累計</th>
            <td>{yosanData.toshinokofu.toLocaleString()}</td>
          </tr>
          <tr>  
            <th>負担残額</th>
            <td>{yosanData.tosishimuke.toLocaleString()}</td>
          </tr>
          <tr>
            <th>予定累計</th>
            <td>0</td>
          </tr>
          <tr>
            <th>予定残額</th>
            <td>{yosanData.shiharaiGaku.toLocaleString()}</td>
          </tr>
        </tbody>  
      </table>
      
      <table>
        <tbody>
          <tr>
            <th>残高</th>  
            <td>
              <input type="text" value={zandaka.toLocaleString()} />
            </td>
          </tr>
          <tr>
            <th>税抜額</th>
            <td>
              <input type="text" value={(zandaka * (100 - ritu) / 100).toFixed(0)} />
            </td>  
          </tr>
          <tr>
            <th>消費税率</th>
            <td>
              <input type="text" value={ritu} /> %
            </td>
          </tr>
          <tr>
            <th>消費税額</th>
            <td>
              <input type="text" value={(zandaka * ritu / 100).toFixed(0)} />
            </td>
          </tr>
          <tr>
            <th>仮払率</th>
            <td>
              <input type="text" value="0.00" /> %  
            </td>
          </tr>
          <tr>
            <th>仮払額</th>
            <td>
              <input type="text" value="0" />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <button type="button">摘要</button>
            </th>
          </tr>
          <tr>
            <th colSpan={2}>
              <textarea rows={4}></textarea>  
            </th>
          </tr>
        </tbody>
      </table>
    </PredictionContainer>
  );
};

// サンプルデータ
const sampleData: PredictionProps = {
  yosanData: {
    jin: 1000000,
    yosanGaku: 1000000,
    tosishimuke: -1000000,
    toshinokofu: 1000000, 
    shiharaiGaku: -1000000,
    zanGaku: 1000000,
  },
  zandaka: 1000000,
  ritu: 8,
  shiwakeCode: 1113,
  shiwakeName: '○○事業費',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予算執行見込（一般　費用簿）</h1>
      <Prediction {...sampleData} />
    </div>
  );  
};

export default App;