import React from 'react';
import styled from '@emotion/styled';

type Division = {
  code: string;
  name: string;
}

type Props = {
  companyYear: string;
  companyCode: string;
  divisions: Division[];
  onChangeDivision: (division: Division) => void;
  onChangeLimit: (limit: number) => void;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const CompanySettingsForm: React.FC<Props> = ({
  companyYear,
  companyCode,
  divisions,
  onChangeDivision,
  onChangeLimit,
}) => {
  return (
    <div>
      <h2>セッション管理保守</h2>
      <p>行政市水道事業会計</p>
      <p>総務課 予算・会計担当 ぎょうせい太郎</p>
      <p>平成29年09月05日</p>

      <div>
        <label>
          <input type="radio" name="mode" value="登録" /> 登録
        </label>
        <label>
          <input type="radio" name="mode" value="訂正" /> 訂正
        </label>
        <label>
          <input type="radio" name="mode" value="削除" /> 削除
        </label>
      </div>

      <div>
        <label>セッション制限方法</label>
        <select value={companyYear} readOnly>
          <option value="H29">H29</option>
        </select>
        年度
      </div>

      <div>
        <label>会計年度</label>
        <input type="text" value={companyCode} readOnly />
      </div>
      
      <div>
        <label>大分類</label>
        <input type="text" value="00" readOnly />
        <label>所属大分類名称</label>
      </div>

      <div>
        <label>中分類</label>
        <input type="text" value="00" readOnly />
        <label>所属中分類名称</label>
      </div>

      <div>
        <label>小分類</label>
        <select onChange={e => {
          const division = divisions.find(d => d.code === e.target.value);
          if (division) {
            onChangeDivision(division);
          }
        }}>
          {divisions.map(division => (
            <option key={division.code} value={division.code}>{division.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>制限数</label>
        <input 
          type="number" 
          min="1"
          defaultValue="2"
          onChange={e => onChangeLimit(Number(e.target.value))}
        />
      </div>

      <StyledTable>
        <thead>
          <tr>
            <th>所属大分類名称</th>
            <th>所属中分類名称</th>
            <th>所属小分類名称</th>
            <th>制限数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>所属大分類名称</td>
            <td>所属中分類名称</td>
            <td>総務課</td>
            <td>1</td>
          </tr>
        </tbody>
      </StyledTable>

      <div>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </div>
    </div>
  );
};

export default CompanySettingsForm;

// Usage example
const divisions = [
  { code: '001', name: '管理課' },
  { code: '002', name: '営業課' },
  { code: '003', name: '工務課' },
];

const ExampleUsage = () => {
  const handleDivisionChange = (division: Division) => {
    console.log('Selected division:', division);
  };

  const handleLimitChange = (limit: number) => {
    console.log('Limit changed:', limit);
  };

  return (
    <CompanySettingsForm 
      companyYear="H29"
      companyCode="12345"
      divisions={divisions}
      onChangeDivision={handleDivisionChange}
      onChangeLimit={handleLimitChange}
    />
  );
}