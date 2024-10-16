import React from 'react';
import styled from 'styled-components';

// 補てん財源マスタ保守の画面のプロパティ
interface MasterMaintenanceScreenProps {
  companyName: string;
  lastMaintenanceDate: string;
}

// 補てん財源マスタ保守の画面コンポーネント
const MasterMaintenanceScreen: React.FC<MasterMaintenanceScreenProps> = ({
  companyName,
  lastMaintenanceDate,
}) => {
  // 補てん財源の金額を管理するstate
  const [companyPension, setCompanyPension] = React.useState(1000);
  const [employeePension, setEmployeePension] = React.useState(200);
  const [compensatoryPension, setCompensatoryPension] = React.useState(300);
  const [financialAidPension, setFinancialAidPension] = React.useState(400);
  const [companyWelfare, setCompanyWelfare] = React.useState(500);
  const [securedLoan, setSecuredLoan] = React.useState(600);
  const [unsecuredLoan, setUnsecuredLoan] = React.useState(700);
  const [sicknessCure, setSicknessCure] = React.useState(800);
  const [sicknessCost, setSicknessCost] = React.useState(900);

  // 表示モードを管理するstate
  const [displayMode, setDisplayMode] = React.useState('edit');

  // 補てん期間の管理のためのstate
  const [duration, setDuration] = React.useState(1);

  // 入力モードの切り替え
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayMode(event.target.value);
  };

  // 補てん期間の設定
  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value));
  };

  return (
    <Container>
      <Title>補てん財源マスタ保守</Title>
      <CompanyInfo>
        <div>行政市水道事業会計</div>
        <div>総務課 予算・会計担当 ぎょうせい太郎</div>
        <div>平成29年09月04日</div>
      </CompanyInfo>
      <InputContainer>
        <InputRow>
          <InputLabel>表No.</InputLabel>
          <div>1</div>
        </InputRow>
        <InputRow>
          <InputLabel>年度</InputLabel>
          <RadioButton
            type="radio"
            value="current"
            checked={displayMode === 'current'}
            onChange={handleModeChange}
          />
          <RadioButtonLabel>当年</RadioButtonLabel>
          <RadioButton
            type="radio"
            value="edit"
            checked={displayMode === 'edit'}
            onChange={handleModeChange}
          />
          <RadioButtonLabel>決算</RadioButtonLabel>
        </InputRow>
        <InputRow>
          <InputLabel>予算編成区分</InputLabel>
          <Select defaultValue={1}>
            <option value={1}>当初予算</option>
          </Select>
        </InputRow>
        <InputRow>
          <InputLabel>回数</InputLabel>
          <Input type="number" defaultValue={1} />
        </InputRow>
      </InputContainer>

      <TableContainer>
        <TableHeader>
          <Row>
            <HeaderCell>補てん財源科目</HeaderCell>
            <HeaderCell>金額</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>企業債予算科目</Cell>
            <Cell>
              <Input
                type="number"
                value={companyPension}
                onChange={(e) => setCompanyPension(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
            <Cell>
              <RadioButton
                type="radio"
                checked={duration === 1}
                onChange={() => setDuration(1)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>集計/除先</RadioButtonLabel>
              <RadioButton
                type="radio"
                checked={duration !== 1}
                onChange={() => setDuration(2)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>入力/除先</RadioButtonLabel>
            </Cell>
          </Row>
          <Row>
            <Cell>出資金予算科目</Cell>
            <Cell>
              <Input
                type="number"
                value={employeePension}
                onChange={(e) => setEmployeePension(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
            <Cell>
              <RadioButton
                type="radio"
                checked={duration === 1}
                onChange={() => setDuration(1)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>集計/除先</RadioButtonLabel>
              <RadioButton
                type="radio"
                checked={duration !== 1}
                onChange={() => setDuration(2)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>入力/除先</RadioButtonLabel>
            </Cell>
          </Row>
          <Row>
            <Cell>補助金予算科目</Cell>
            <Cell>
              <Input
                type="number"
                value={compensatoryPension}
                onChange={(e) => setCompensatoryPension(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
            <Cell>
              <RadioButton
                type="radio"
                checked={duration === 1}
                onChange={() => setDuration(1)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>集計/除先</RadioButtonLabel>
              <RadioButton
                type="radio"
                checked={duration !== 1}
                onChange={() => setDuration(2)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>入力/除先</RadioButtonLabel>
            </Cell>
          </Row>
          <Row>
            <Cell>負担金予算科目</Cell>
            <Cell>
              <Input
                type="number"
                value={financialAidPension}
                onChange={(e) => setFinancialAidPension(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
            <Cell>
              <RadioButton
                type="radio"
                checked={duration === 1}
                onChange={() => setDuration(1)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>集計/除先</RadioButtonLabel>
              <RadioButton
                type="radio"
                checked={duration !== 1}
                onChange={() => setDuration(2)}
                disabled={displayMode !== 'edit'}
              />
              <RadioButtonLabel>入力/除先</RadioButtonLabel>
            </Cell>
          </Row>
          <Row>
            <Cell>補てん財源使用可能額</Cell>
            <Cell>
              <Input 
                type="number"
                value={companyWelfare}
                onChange={(e) => setCompanyWelfare(Number(e.target.value))}
                readOnly 
              />
            </Cell>
          </Row>
          <Row>
            <Cell>積立金取崩額</Cell>
            <Cell>
              <Input
                type="number"
                value={securedLoan}
                onChange={(e) => setSecuredLoan(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>当年度分積立額定留保資金</Cell>
            <Cell>
              <Input
                type="number"
                value={unsecuredLoan}
                onChange={(e) => setUnsecuredLoan(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>過年度分損益勘定留保資金</Cell>
            <Cell>
              <Input
                type="number"
                value={sicknessCure}
                onChange={(e) => setSicknessCure(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>当年度利益剰余金処分額</Cell>
            <Cell>
              <Input
                type="number"
                value={sicknessCost}
                onChange={(e) => setSicknessCost(Number(e.target.value))}
                readOnly={displayMode !== 'edit'}
              />
            </Cell>
            <Cell>
              <CheckBox type="checkbox" disabled={displayMode !== 'edit'} />
              <RadioButtonLabel>当年度分 ✓</RadioButtonLabel>
            </Cell>
          </Row>
          <Row>
            <Cell>その他</Cell>
            <Cell>
              <Input type="number" defaultValue={1400} readOnly />  
            </Cell>
          </Row>
        </TableBody>
      </TableContainer>
      <ButtonContainer>
        <Button>前回参照</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: MasterMaintenanceScreenProps = {
  companyName: '株式会社サンプル',
  lastMaintenanceDate: '2023/06/01',
};

// サンプル表示用コンポーネント
const SampleMasterMaintenance: React.FC = () => {
  return (
    <MasterMaintenanceScreen 
      companyName={sampleData.companyName}
      lastMaintenanceDate={sampleData.lastMaintenanceDate}
    />
  );
}

// styled-componentsでスタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CompanyInfo = styled.div`
  margin-bottom: 10px;
  > div {
    margin-bottom: 5px;
  }
`;

const InputContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.div`
  width: 150px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100px;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const RadioButton = styled.input`
  margin-left: 10px;
`;

const RadioButtonLabel = styled.label`
  margin-left: 5px;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default MasterMaintenanceScreen;