// ReportForm.tsx
import React from 'react';
import styled from '@emotion/styled';

// 検索条件の型定義
type SearchCondition = {
  dateRange: {
    from: string;
    to: string;
  };
  priceRange: {
    min: number | null;
    max: number | null;
  };
  paymentMethod: 'creditCard' | 'bankTransfer' | 'payEasy' | null;
  fareType: 'reserved' | 'unreserved' | null;
  ticketType: 'normal' | 'discount' | null;
  specifyPurchaser: 'specify' | 'notSpecify' | null;
  staffCode?: string;
}

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RowLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const NumberInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

// コンポーネント定義
type ReportFormProps = {
  searchCondition: SearchCondition;
  onChangeSearchCondition: (searchCondition: SearchCondition) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  searchCondition,
  onChangeSearchCondition,
}) => {
  // 入力値変更時のハンドラ
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>, key: 'from' | 'to') => {
    const newSearchCondition: SearchCondition = {
      ...searchCondition,
      dateRange: {
        ...searchCondition.dateRange,
        [key]: e.target.value,
      }
    }
    onChangeSearchCondition(newSearchCondition);
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>, key: 'min' | 'max') => {
    const newSearchCondition: SearchCondition = {
      ...searchCondition,
      priceRange: {
        ...searchCondition.priceRange,
        [key]: e.target.value ? Number(e.target.value) : null,
      }
    }
    onChangeSearchCondition(newSearchCondition);
  }

  const handleChangeRadio = (key: keyof SearchCondition) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchCondition: SearchCondition = {
      ...searchCondition,
      [key]: e.target.value as any,
    }
    onChangeSearchCondition(newSearchCondition);
  }

  const handleChangeStaffCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchCondition: SearchCondition = {
      ...searchCondition,
      staffCode: e.target.value,
    }
    onChangeSearchCondition(newSearchCondition);
  }

  return (
    <FormContainer>
      <SectionTitle>期間指定</SectionTitle>
      <Row>
        <RowLabel>
          振替日 
          <DateInput type="date" value={searchCondition.dateRange.from} onChange={(e) => handleChangeDate(e, 'from')} />
          ～
          <DateInput type="date" value={searchCondition.dateRange.to} onChange={(e) => handleChangeDate(e, 'to')} />
        </RowLabel>
      </Row>

      <SectionTitle>所属</SectionTitle>
      <Row>
        <label>
          <input type="radio" value="reserved" checked={searchCondition.fareType === 'reserved'} onChange={handleChangeRadio('fareType')} />
          予約所属
        </label>
        <label>
          <input type="radio" value="unreserved" checked={searchCondition.fareType === 'unreserved'} onChange={handleChangeRadio('fareType')} />
          当駅所属 
        </label>
      </Row>

      <Row>
        <RowLabel>
          所属
          <Select value={searchCondition.ticketType ?? ''} onChange={handleChangeRadio('ticketType')}>
            <option value="">指定しない</option>
            <option value="normal">新規</option>
            <option value="discount">再発行</option>
          </Select>
        </RowLabel>
      </Row>
      
      <SectionTitle>発行区分</SectionTitle>
      <Row>
        <label>
          <input type="radio" value="creditCard" checked={searchCondition.paymentMethod === 'creditCard'} onChange={handleChangeRadio('paymentMethod')} />
          クレジット 
        </label>
        <label>
          <input type="radio" value="bankTransfer" checked={searchCondition.paymentMethod === 'bankTransfer'} onChange={handleChangeRadio('paymentMethod')} />
          振込
        </label>
        <label>
          <input type="radio" value="payEasy" checked={searchCondition.paymentMethod === 'payEasy'} onChange={handleChangeRadio('paymentMethod')} /> 
          ペイジー
        </label>
      </Row>
            
      <SectionTitle>指定先印字</SectionTitle>
      <Row>
        <label>
          <input type="radio" value="specify" checked={searchCondition.specifyPurchaser === 'specify'} onChange={handleChangeRadio('specifyPurchaser')} />
          印字する
        </label>  
        <label>
          <input type="radio" value="notSpecify" checked={searchCondition.specifyPurchaser === 'notSpecify'} onChange={handleChangeRadio('specifyPurchaser')} />
          印字しない
        </label>
      </Row>

      <Row>
        <RowLabel>
          担当者コード
          <TextInput type="text" value={searchCondition.staffCode ?? ''} onChange={handleChangeStaffCode} />          
        </RowLabel>
      </Row>
    </FormContainer>
  )
}

export default ReportForm;

// サンプルデータでの使用例
const sampleSearchCondition: SearchCondition = {
  dateRange: {
    from: '2023-09-04',
    to: '2023-09-04',
  },
  priceRange: {
    min: 0,
    max: 9999999,
  },
  paymentMethod: 'creditCard',
  fareType: 'reserved',
  ticketType: 'normal',
  specifyPurchaser: null,
  staffCode: '999999',
};

const SampleUsage: React.FC = () => {
  const [searchCondition, setSearchCondition] = React.useState<SearchCondition>(sampleSearchCondition);

  return (
    <div>
      <h2>振替伝票（単票）作成</h2>
      <ReportForm 
        searchCondition={searchCondition}
        onChangeSearchCondition={setSearchCondition}
      />
    </div>  
  );
}