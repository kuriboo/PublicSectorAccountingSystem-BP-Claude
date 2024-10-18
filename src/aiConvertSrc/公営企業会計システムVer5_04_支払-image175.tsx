import React from 'react';
import styled from '@emotion/styled';

type OutputRange = '所属部' | '所属細部' | '所属明細';

interface LoanSimulationFormProps {
  onSubmit: (data: {
    outputRange: OutputRange;
    period: { start: string; end: string };
    amountRange: { min: number; max: number };
    collection: '全体' | 'ブロック' | 'セグメント';
    options: {
      beforeTransfer: boolean;
      afterTransfer: boolean;
      afterCollection: boolean;
    };
  }) => void;
}

const LoanSimulationForm: React.FC<LoanSimulationFormProps> = ({ onSubmit }) => {
  const [outputRange, setOutputRange] = React.useState<OutputRange>('所属部');
  const [period, setPeriod] = React.useState({ start: '', end: '' });
  const [amountRange, setAmountRange] = React.useState({ min: 0, max: 999999999 });
  const [collection, setCollection] = React.useState<'全体' | 'ブロック' | 'セグメント'>('全体');
  const [options, setOptions] = React.useState({
    beforeTransfer: false,
    afterTransfer: false,
    afterCollection: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      outputRange,
      period,
      amountRange,
      collection,
      options,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>所属別支出予算差引簿（予定額有）</Title>
      <OutputRangeContainer>
        <OutputRangeLabel>
          <input
            type="radio"
            checked={outputRange === '所属部'}
            onChange={() => setOutputRange('所属部')}
          />
          所属部
        </OutputRangeLabel>
        <OutputRangeLabel>
          <input
            type="radio"
            checked={outputRange === '所属細部'}
            onChange={() => setOutputRange('所属細部')}
          />
          所属細部
        </OutputRangeLabel>
        <OutputRangeLabel>
          <input
            type="radio"
            checked={outputRange === '所属明細'}
            onChange={() => setOutputRange('所属明細')}
          />
          所属明細
        </OutputRangeLabel>
      </OutputRangeContainer>
      <PeriodContainer>
        <PeriodLabel>作表年月</PeriodLabel>
        <PeriodInput
          type="text"
          value={period.start}
          onChange={(e) => setPeriod({ ...period, start: e.target.value })}
        />
        〜
        <PeriodInput
          type="text"
          value={period.end}
          onChange={(e) => setPeriod({ ...period, end: e.target.value })}
        />
      </PeriodContainer>
      <AmountRangeContainer>
        <AmountRangeLabel>予算科目</AmountRangeLabel>
        <AmountRangeInput
          type="number"
          value={amountRange.min}
          onChange={(e) =>
            setAmountRange({ ...amountRange, min: Number(e.target.value) })
          }
        />
        〜
        <AmountRangeInput
          type="number"
          value={amountRange.max}
          onChange={(e) =>
            setAmountRange({ ...amountRange, max: Number(e.target.value) })
          }
        />
      </AmountRangeContainer>
      <CollectionLabel>
        集計対象
        <CollectionSelect
          value={collection}
          onChange={(e) =>
            setCollection(e.target.value as '全体' | 'ブロック' | 'セグメント')
          }
        >
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </CollectionSelect>
      </CollectionLabel>
      <OptionsContainer>
        <OptionLabel>
          <input
            type="checkbox"
            checked={options.beforeTransfer}
            onChange={(e) =>
              setOptions({ ...options, beforeTransfer: e.target.checked })
            }
          />
          前月繰越行のみでも印字する
        </OptionLabel>
        <OptionLabel>
          <input
            type="checkbox"
            checked={options.afterTransfer}
            onChange={(e) =>
              setOptions({ ...options, afterTransfer: e.target.checked })
            }
          />
          繰越行に工事名を印字する
        </OptionLabel>
        <OptionLabel>
          <input
            type="checkbox"
            checked={options.afterCollection}
            onChange={(e) =>
              setOptions({ ...options, afterCollection: e.target.checked })
            }
          />
          繰越行に単価名称を印字する
        </OptionLabel>
      </OptionsContainer>
      <SubmitButton type="submit">実行</SubmitButton>
      <PrintButton type="button">印刷</PrintButton>
      <ClearButton type="button">クリア</ClearButton>
      <CloseButton type="button">終了</CloseButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const OutputRangeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

const OutputRangeLabel = styled.label`
  display: flex;
  align-items: center;
`;

const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PeriodLabel = styled.span`
  margin-right: 10px;
`;

const PeriodInput = styled.input`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const AmountRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AmountRangeLabel = styled.span`
  margin-right: 10px;
`;

const AmountRangeInput = styled.input`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const CollectionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CollectionSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const PrintButton = styled(SubmitButton)`
  background-color: #28a745;
`;

const ClearButton = styled(SubmitButton)`
  background-color: #ffc107;
`;

const CloseButton = styled(SubmitButton)`
  background-color: #dc3545;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: {
    outputRange: OutputRange;
    period: { start: string; end: string };
    amountRange: { min: number; max: number };
    collection: '全体' | 'ブロック' | 'セグメント';
    options: {
      beforeTransfer: boolean;
      afterTransfer: boolean;
      afterCollection: boolean;
    };
  }) => {
    console.log(data);
  };

  return <LoanSimulationForm onSubmit={handleSubmit} />;
};

export default App;