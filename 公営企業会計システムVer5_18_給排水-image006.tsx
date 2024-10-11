import React from 'react';
import styled from 'styled-components';

// 工事施工承認書の型定義
interface ConstructionApprovalFormProps {
  branch: string;
  approvalDate: string;
  startDate: string;
  endDate: string;
  applicant: string;
  position: string;
  constructionName: string;
  constructionDetails: string;
  supplier: string;
  supplierManager: string;
  contractorName: string;
  contractorManager: string;
  companyId: string;
  companyName: string;
  electricalType: string;
  voltage: string;
  frequency: string;
  period: string;
  usage: string;
  maintenancePeriod: string;
  price: string;
  taxIncluded: string;
}

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f0f0f0;
    text-align: left;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 工事施工承認書コンポーネント
const ConstructionApprovalForm: React.FC<ConstructionApprovalFormProps> = ({
  branch,
  approvalDate,
  startDate,
  endDate,
  applicant,
  position,
  constructionName,
  constructionDetails,
  supplier,
  supplierManager,
  contractorName, 
  contractorManager,
  companyId,
  companyName,
  electricalType,
  voltage,
  frequency,
  period,
  usage,
  maintenancePeriod,
  price,
  taxIncluded,
}) => {
  return (
    <Container>
      <Title>工事施工承認書</Title>
      <Table>
        <tbody>
          <tr>
            <th>支店番号</th>
            <td>{branch || '-'}</td>
          </tr>
          <tr>
            <th>受付日</th>
            <td>{approvalDate || '-'}</td>
          </tr>
          <tr>
            <th>着工日</th>
            <td>{startDate || '-'}</td>
          </tr>
          <tr>
            <th>完成日</th>
            <td>{endDate || '-'}</td>
          </tr>
          <tr>
            <th>申請者情報</th>
            <td>
              {applicant || '-'}<br />
              {position || '-'}
            </td>
          </tr>
          <tr>
            <th>工事名</th>
            <td>{constructionName || '-'}</td>
          </tr>
          <tr>
            <th>工事内容</th>
            <td>{constructionDetails || '-'}</td>
          </tr>
          <tr>
            <th>電源番号</th>
            <td>{companyId || '-'}</td>
          </tr>
          <tr>
            <th>供給者</th>
            <td>
              {supplier || '-'}<br />
              {supplierManager || '-'}
            </td>
          </tr>
          <tr>
            <th>工事代理人情報</th>
            <td>
              {contractorName || '-'}<br />
              {contractorManager || '-'}
            </td>
          </tr>
          <tr>
            <th>電気方式</th>
            <td>{electricalType || '-'}</td>
          </tr>
          <tr>
            <th>電圧</th>
            <td>{voltage || '-'}</td>
          </tr>
          <tr>
            <th>周波数</th>
            <td>{frequency || '-'}</td>
          </tr>
          <tr>
            <th>供給期間</th>
            <td>{period || '-'}</td>
          </tr>
          <tr>
            <th>用途</th>
            <td>{usage || '-'}</td>
          </tr>
          <tr>
            <th>保守期間</th>
            <td>{maintenancePeriod || '-'}</td>
          </tr>
          <tr>
            <th>工事金額</th>
            <td>
              {price || '-'}<br />
              {taxIncluded ? '税込' : '税抜'}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button>承認</Button>
    </Container>
  );
};

export default ConstructionApprovalForm;

// 使用例
const ExampleUsage: React.FC = () => {
  // サンプルデータ
  const sampleData: ConstructionApprovalFormProps = {
    branch: '4',
    approvalDate: '平成30年2月27日', 
    startDate: '平成30年2月27日',
    endDate: '平成30年2月27日',
    applicant: '東刊山都仙辺町以下に機能がない場合',
    position: '東刊山都仙辺町以下に機能がない場合',
    constructionName: 'OL飲料水',
    constructionDetails: '1.新設  02.集合住宅  02.直結直圧  階建',
    supplier: 'test',
    supplierManager: 'test',
    contractorName: 'test',
    contractorManager: 'test',
    companyId: '0000000002',
    companyName: 'test',
    electricalType: 'test',
    voltage: '100V/200V',
    frequency: '50Hz/60Hz',
    period: '平成30年2月27日~平成30年2月27日',
    usage: '照明器',
    maintenancePeriod: 'test',
    price: 'test',
    taxIncluded: '税抜',
  };

  return <ConstructionApprovalForm {...sampleData} />;
};