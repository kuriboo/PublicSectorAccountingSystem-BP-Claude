import React from 'react';
import styled from 'styled-components';

// 予算執行状況表のプロパティの型定義
interface BudgetExecutionTableProps {
  executionType: '予算執行状況表1' | '予算執行状況表2' | '予算執行状況表3';
  executionDate: string;
  openDate: string;
  closeDate: string;
  executionDivision: '日' | '節' | '細節' | '明細';
}

// 予算執行状況表のコンポーネント
const BudgetExecutionTable: React.FC<BudgetExecutionTableProps> = ({
  executionType,
  executionDate,
  openDate,
  closeDate,
  executionDivision,
}) => {
  return (
    <Container>
      <Title>予算執行状況表</Title>
      <Subtitle>行政市事業会計 最高権限 管理者 行政 太郎 令和05年07月24日</Subtitle>

      <ExecutionTypeContainer>
        <ExecutionTypeLabel>
          <input type="radio" checked={executionType === '予算執行状況表1'} readOnly />
          予算執行状況表1（予定/員担）
        </ExecutionTypeLabel>
        <ExecutionTypeLabel>
          <input type="radio" checked={executionType === '予算執行状況表2'} readOnly />
          予算執行状況表2（負担/執行）
        </ExecutionTypeLabel>
        <ExecutionTypeLabel>
          <input type="radio" checked={executionType === '予算執行状況表3'} readOnly />
          予算執行状況表3（執行内訳別）  
        </ExecutionTypeLabel>
      </ExecutionTypeContainer>

      <DetailsContainer>
        <DetailsLabel>作表日</DetailsLabel>
        <DetailsValue>{executionDate}</DetailsValue>

        <ButtonsContainer>
          <Button>所属</Button>
          <DateInput value={openDate} readOnly />
          <span>～</span>
          <DateInput value={closeDate} readOnly />
        </ButtonsContainer>

        <ExecutionDivisionContainer>
          <ExecutionDivisionLabel>
            <input type="radio" checked={executionDivision === '日'} readOnly />
            日
          </ExecutionDivisionLabel>
          <ExecutionDivisionLabel>
            <input type="radio" checked={executionDivision === '節'} readOnly />  
            節
          </ExecutionDivisionLabel>
          <ExecutionDivisionLabel>
            <input type="radio" checked={executionDivision === '細節'} readOnly />
            細節
          </ExecutionDivisionLabel>
          <ExecutionDivisionLabel>
            <input type="radio" checked={executionDivision === '明細'} readOnly />
            明細
          </ExecutionDivisionLabel>
        </ExecutionDivisionContainer>
      </DetailsContainer>

      <ButtonGroupContainer>
        <ButtonGroupButton>CSV出力</ButtonGroupButton>
        <ButtonGroupButton>クリア</ButtonGroupButton>
        <ButtonGroupButton>終了</ButtonGroupButton>  
      </ButtonGroupContainer>
    </Container>
  );
};

// サンプルデータを用いた予算執行状況表の表示例
const SampleBudgetExecutionTable: React.FC = () => {
  return (
    <BudgetExecutionTable
      executionType="予算執行状況表1"
      executionDate="令和05年07月24日"
      openDate="00000000"
      closeDate="99999999"  
      executionDivision="節"
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const ExecutionTypeContainer = styled.div`
  margin-bottom: 24px;
`;

const ExecutionTypeLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DetailsLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const DetailsValue = styled.span`
  margin-right: 24px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 600px) {
    margin-top: 8px;
    margin-right: 0;
  }
`;

const Button = styled.button`
  margin-right: 8px;
`;

const DateInput = styled.input`
  margin-right: 8px;
  width: 100px;
`;

const ExecutionDivisionContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 8px;
  }  
`;

const ExecutionDivisionLabel = styled.label`
  margin-right: 8px;
`;

const ButtonGroupContainer = styled.div`
  text-align: center;
`;

const ButtonGroupButton = styled.button`
  margin: 0 8px;
`;

export default SampleBudgetExecutionTable;