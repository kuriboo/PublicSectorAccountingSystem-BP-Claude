import React from 'react';
import styled from '@emotion/styled';

interface TaxInfoProps {
  type: string;
  material: string;
  consumption: string;
  taxRate: number;
  taxIncluded: number;
  workFee: number;
  taxFee: number;
  deduction: number;
  localTax: number;
  taxableAmount: number;
  taxAmount: number;
  totalAmount: number;
  departmentCode: string;
  projectCode: string;
  customerCode: string;
}

const TaxInfoTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const TaxInfo: React.FC<TaxInfoProps> = ({
  type,
  material,
  consumption,
  taxRate,
  taxIncluded,
  workFee,
  taxFee,
  deduction, 
  localTax,
  taxableAmount,
  taxAmount,
  totalAmount,
  departmentCode,
  projectCode,
  customerCode
}) => {
  return (
    <TaxInfoTable>
      <thead>
        <tr>
          <th>種別</th>
          <th>材料</th>
          <th>消費</th>
          <th>税率</th>
          <th>税込</th>
          <th>加工</th>  
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{type || '-'}</td>
          <td>{material || '-'}</td>
          <td>{consumption || '-'}</td>
          <td>{taxRate || 0}%</td>
          <td>{taxIncluded?.toLocaleString() || 0}</td>
          <td>{workFee?.toLocaleString() || 0}</td>
        </tr>
        <tr>
          <td colSpan={3}>税区分</td>
          <td colSpan={3}>{taxFee ? '課税' : '非課税'}</td>
        </tr>
        <tr>
          <td>仕入税金額</td>
          <td colSpan={2}>{deduction?.toLocaleString() || 0}</td>
          <td>消費税額</td>
          <td colSpan={2}>{localTax?.toLocaleString() || 0}</td>
        </tr>
        <tr>
          <td>課税標準額</td>
          <td>{taxableAmount?.toLocaleString() || 0}</td>
          <td>消費税額</td>
          <td>{taxAmount?.toLocaleString() || 0}</td>
          <td>税込金額</td>
          <td>{totalAmount?.toLocaleString() || 0}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>部門</td>
          <td>{departmentCode || '-'}</td>
          <td>プロジェクト</td>
          <td>{projectCode || '-'}</td>
          <td>得意先</td>
          <td>{customerCode || '-'}</td>
        </tr>  
      </tfoot>
    </TaxInfoTable>
  );
};

// Usage example
const App: React.FC = () => {
  const taxInfo = {
    type: 'ポリ袋詰め',
    material: '梱包資材',
    consumption: '梱包資材費1/個',
    taxRate: 10,  
    taxIncluded: 10000,
    workFee: 0,
    taxFee: 1,
    deduction: 0, 
    localTax: 0,
    taxableAmount: 10000,
    taxAmount: 0,
    totalAmount: 0,
    departmentCode: '期中仕訳',
    projectCode: '',
    customerCode: ''
  };

  return (
    <div>
      <h1>Tax Information</h1>
      <TaxInfo {...taxInfo} />
    </div>
  );
};

export default App;