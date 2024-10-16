import React from 'react';
import styled from 'styled-components';

// 決算統計調査表データ出力の型定義
type FinancialStatementOutputData = {
  id: number;
  name: string;
  checked: boolean;
}

// 決算統計調査表データ出力のプロパティ型定義
type FinancialStatementOutputProps = {
  data: FinancialStatementOutputData[];
  onDataFileExport: () => void;
}

// 決算統計調査表データ出力コンポーネント
const FinancialStatementOutput: React.FC<FinancialStatementOutputProps> = ({ data, onDataFileExport }) => {
  return (
    <Container>
      <Title>決算統計調査表データ出力</Title>
      <InfoText>
        令和03年11月23日<br />
        令和4年度　令和3日登録権限者　全権限
      </InfoText>
      <FormContainer>
        <Label>
          <span>令和02</span>
          <span>:</span>
          <Select>
            <option>公共下水道</option>
          </Select>
        </Label>
        <Table>
          <thead>
            <tr>
              <th>選択</th>
              <th>業務号</th>
              <th>名称</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" checked={item.checked} onChange={() => {}} />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </FormContainer>
      <ExportButton onClick={onDataFileExport}>dat出力</ExportButton>
      <NoticeText>
        出力したファイルは、総務省が提供する電子調査表システムに取り込むことができます。
        また、調査表datファイル取込みツールによって、調査表様式のExcelファイルで集計結果を確認することができます。
      </NoticeText>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const InfoText = styled.p`
  margin-bottom: 16px;
  line-height: 1.5;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;

  & > span {
    margin-right: 4px;
  }
`;

const Select = styled.select`
  padding: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
    text-align: left;
  }
`;

const ExportButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const NoticeText = styled.p`
  margin-top: 16px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

// 決算統計調査表データ出力の表示用コンポーネント
const FinancialStatementOutputDemo: React.FC = () => {
  // サンプルデータ
  const data: FinancialStatementOutputData[] = [
    { id: 20, name: '損益計算書', checked: true },
    { id: 21, name: '費用構成表', checked: true },
    { id: 22, name: '資借対照表', checked: true },
    { id: 23, name: '資本的収支に関する調', checked: true },
    { id: 24, name: '企業債に関する調', checked: true },
    { id: 32, name: '経営分析に関する調(一)', checked: true },
    { id: 40, name: '導入金に関する調', checked: true },
    { id: 45, name: '企業債年度別償還状況調', checked: true },
    { id: 52, name: 'その他', checked: true },
  ];

  // dat出力ボタンクリック時の処理
  const handleDataFileExport = () => {
    // 実際のデータ出力処理を実装する
    console.log('データファイルを出力します');
  };

  return (
    <FinancialStatementOutput
      data={data}
      onDataFileExport={handleDataFileExport}
    />
  );
};

export default FinancialStatementOutputDemo;