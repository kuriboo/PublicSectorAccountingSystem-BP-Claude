import React from 'react';
import styled from '@emotion/styled';

type ContractPeriod = {
  year: number;
  month: string;
  workType: string;
  paymentRange: {
    from: number;
    to: number;
  };
  period: {
    from: string;
    to: string;
  };
};

type ContractFormProps = {
  contractPeriod: ContractPeriod;
  onContractPeriodChange: (contractPeriod: ContractPeriod) => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  contractPeriod,
  onContractPeriodChange,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onContractPeriodChange({ ...contractPeriod, [name]: value });
  };

  return (
    <FormWrapper>
      <FormRow>
        <label>
          年度
          <select
            name="year"
            value={contractPeriod.year}
            onChange={handleChange}
          >
            <option value={29}>29</option>
            {/* Add more options for years */}
          </select>
        </label>
        <label>
          月
          <select
            name="month"
            value={contractPeriod.month}
            onChange={handleChange}
          >
            <option value="04">04</option>
            {/* Add more options for months */}
          </select>
        </label>
        <label>
          業務区分
          <select
            name="workType"
            value={contractPeriod.workType}
            onChange={handleChange}
          >
            <option value="工事">工事</option>
            {/* Add more options for work types */}
          </select>
        </label>
      </FormRow>

      <FormRow>
        <label>
          落札率印字
          <input
            type="radio"
            name="printBidRate"
            value="有"
            checked={true}
            readOnly
          />
          有
          <input type="radio" name="printBidRate" value="無" readOnly />無
        </label>
      </FormRow>

      <FormRow>
        <label>
          受付番号
          <input
            type="text"
            name="fromPayment"
            value={contractPeriod.paymentRange.from}
            onChange={handleChange}
          />
          ～
          <input
            type="text"
            name="toPayment"
            value={contractPeriod.paymentRange.to}
            onChange={handleChange}
          />
        </label>
      </FormRow>

      <FormRow>
        <label>
          契約年月日
          <input
            type="text"
            name="fromDate"
            value={contractPeriod.period.from}
            onChange={handleChange}
          />
          ～
          <input
            type="text"
            name="toDate"
            value={contractPeriod.period.to}
            onChange={handleChange}
          />
        </label>
      </FormRow>

      <FormButtons>
        <button type="button">OK</button>
        <button type="button">クリア</button>
        <button type="button">終了</button>
      </FormButtons>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type='text'],
  select {
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

// Usage example
const App: React.FC = () => {
  const [contractPeriod, setContractPeriod] = React.useState<ContractPeriod>({
    year: 29,
    month: '04',
    workType: '工事',
    paymentRange: {
      from: 10000000,
      to: 999999999,
    },
    period: {
      from: '平成29年04月01日',
      to: '平成30年03月31日',
    },
  });

  const handleContractPeriodChange = (newContractPeriod: ContractPeriod) => {
    setContractPeriod(newContractPeriod);
  };

  return (
    <div>
      <h1>Contract Form</h1>
      <ContractForm
        contractPeriod={contractPeriod}
        onContractPeriodChange={handleContractPeriodChange}
      />
    </div>
  );
};

export default App;