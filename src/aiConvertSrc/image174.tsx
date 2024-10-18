import React from 'react';
import styled from '@emotion/styled';

type ControlledUnit = 'planned' | 'actual';
type Flag = 'on' | 'off';

interface DataEntryFormProps {
  controlledUnit?: ControlledUnit;
  averageCoast?: string;
  arrivalCode?: string;
  scheduledShippingDateCode?: string;
  openFlag?: Flag;
  removeFlag?: Flag;
  deleteFlag?: Flag;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({
  controlledUnit = 'planned',
  averageCoast = '',
  arrivalCode = '',
  scheduledShippingDateCode = '',
  openFlag = 'off',
  removeFlag = 'off',
  deleteFlag = 'off',
}) => {
  return (
    <StyledForm>
      <h2>データ権限個別設定マスタ</h2>
      {/* Radio buttons for controlled unit */}
      <StyledRadioGroup>
        <label>
          <input
            type="radio"
            name="controlledUnit"
            value="planned"
            checked={controlledUnit === 'planned'}
            readOnly
          />
          計画
        </label>
        <label>
          <input
            type="radio"
            name="controlledUnit"
            value="actual"
            checked={controlledUnit === 'actual'}
            readOnly
          />
          実績
        </label>
      </StyledRadioGroup>

      {/* Data entry fields */}
      <StyledFieldset>
        <label>
          平成29
          <input type="text" value={averageCoast} readOnly />
          年度
        </label>
        <label>
          所属コード
          <input type="text" value={arrivalCode} readOnly />
          予算担当
        </label>
        <label>
          担当コード
          <input type="text" value={scheduledShippingDateCode} readOnly />
          予算担当
        </label>
      </StyledFieldset>

      {/* Flag checkboxes */}      
      <StyledCheckboxGroup>
        <StyledCheckboxLabel>
          登録
          <input type="checkbox" checked={openFlag === 'on'} readOnly />
          不可 
          <input type="checkbox" checked={openFlag === 'off'} readOnly />
          可能
        </StyledCheckboxLabel>
        <StyledCheckboxLabel>
          削除
          <input type="checkbox" checked={removeFlag === 'on'} readOnly />
          不可
          <input type="checkbox" checked={removeFlag === 'off'} readOnly />
          可能  
        </StyledCheckboxLabel>
        <StyledCheckboxLabel>
          参照
          <input type="checkbox" checked={deleteFlag === 'on'} readOnly />
          不可
          <input type="checkbox" checked={deleteFlag === 'off'} readOnly />
          可能
        </StyledCheckboxLabel>
      </StyledCheckboxGroup>
      
      {/* Action buttons */}
      <StyledButtonGroup>
        <button>前データ</button>
        <button>次データ</button>
        <button>ＯＫ</button>
        <button>クリア</button>
        <button>終了</button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

const StyledRadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  border: none;

  label {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.5rem;
    align-items: center;
  }

  input {
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const StyledCheckboxGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const StyledCheckboxLabel = styled.label`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 0.5rem;
  align-items: center;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Data Entry Form Example</h1>
      <DataEntryForm
        controlledUnit="actual"
        averageCoast="0000001"
        arrivalCode="001"
        scheduledShippingDateCode="0000000"
        openFlag="on"
        removeFlag="off"
        deleteFlag="on"
      />
    </div>
  );
};

export default App;