import React from 'react';
import styled from 'styled-components';

// 予定捻出計画作成フォームのプロパティ型定義
type ReservationPlanFormProps = {
  defaultDepartment?: string;
  defaultPosition?: number;
  defaultRotation?: number;
  defaultGoldBadgeDate?: string;
  defaultScheduleFrom?: string;
  defaultScheduleTo?: string;
  defaultSize?: 'A4' | 'A4 横';
  defaultCoverTitle?: string;
  defaultSubtitle?: string;
  defaultTitleLabel?: string;
  defaultPrintCount?: number;
};

// スタイル定義
const FormWrapper = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const FormRow = styled.div`
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 100px;
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const FormInput = styled.input`
  width: 200px;
  padding: 4px;
  @media (max-width: 768px) {
    width: 160px;
  }  
`;

const FormSelect = styled.select`
  width: 200px;
  padding: 4px;
  @media (max-width: 768px) {
    width: 160px;
  }
`;

const FormRadio = styled.input`
  margin-right: 8px;
`;

// 予定捻出計画作成フォームコンポーネント
const ReservationPlanForm: React.FC<ReservationPlanFormProps> = ({
  defaultDepartment = '',
  defaultPosition = 2,
  defaultRotation = 1,
  defaultGoldBadgeDate = '',
  defaultScheduleFrom = '',
  defaultScheduleTo = '',
  defaultSize = 'A4',
  defaultCoverTitle = '',
  defaultSubtitle = '',
  defaultTitleLabel = '',
  defaultPrintCount = 1,
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>年度</FormLabel>
        <FormSelect defaultValue={defaultDepartment}>
          <option value="令和02">令和02</option>
          {/* その他の年度オプション */}
        </FormSelect>
      </FormRow>
      <FormRow>  
        <FormLabel>予算編成区分</FormLabel>
        <FormSelect defaultValue={defaultPosition}>
          <option value={2}>補正予算</option>
          {/* その他の予算編成区分オプション */}
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>回数</FormLabel>
        <FormInput type="number" defaultValue={defaultRotation} min={1} />
      </FormRow>
      <FormRow>
        <FormLabel>金額番号</FormLabel>
        <FormInput type="text" defaultValue={defaultGoldBadgeDate} />
      </FormRow>
      <FormRow>
        <FormLabel>会計期間</FormLabel>
        <FormInput type="date" defaultValue={defaultScheduleFrom} /> 〜 <FormInput type="date" defaultValue={defaultScheduleTo} />
      </FormRow>
      <FormRow>
        <FormLabel>書式</FormLabel>
        <FormRadio type="radio" name="size" value="A4" defaultChecked={defaultSize === 'A4'} /> A4
        <FormRadio type="radio" name="size" value="A4 横" defaultChecked={defaultSize === 'A4 横'} /> A4 横
      </FormRow>
      <FormRow>
        <FormLabel>タイトル</FormLabel>  
        <FormInput type="text" defaultValue={defaultCoverTitle} />
      </FormRow>
      <FormRow>
        <FormLabel>サブタイトル</FormLabel>
        <FormInput type="text" defaultValue={defaultSubtitle} />
      </FormRow>
      <FormRow>  
        <FormLabel>柱タイトル</FormLabel>
        <FormInput type="text" defaultValue={defaultTitleLabel} />
      </FormRow>
      <FormRow>
        <FormLabel>印刷部数</FormLabel>  
        <FormInput type="number" defaultValue={defaultPrintCount} min={1} />
      </FormRow>
    </FormWrapper>
  );
};

export default ReservationPlanForm;

// 使用例
const SampleReservationPlanForm = () => {
  return (
    <ReservationPlanForm
      defaultDepartment="令和02"  
      defaultPosition={2}
      defaultRotation={1}
      defaultGoldBadgeDate="1号"
      defaultScheduleFrom="2020-04-01"
      defaultScheduleTo="2021-03-31"
      defaultSize="A4"
      defaultCoverTitle="予算要求書"
      defaultSubtitle=""
      defaultTitleLabel="見積要求"
      defaultPrintCount={1}
    />
  );
};