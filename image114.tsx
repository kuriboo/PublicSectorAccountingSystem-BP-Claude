import React from 'react';
import styled from '@emotion/styled';

type Ward = '取水' | '管理';
type Structure = '：理築' | '：建築';
type Grade = '：基礎概略想定(大)' | '：詳細概略想定(大)' | '：基準点概略想定(詳)' | '：詳細概略想定(詳)';
type IeVal = '対象' | '対象外';

interface AssetManagementSystemFormProps {
  assetNumber: string;
  structureName: string;
  ward?: Ward;
  structure?: Structure;
  grade?: Grade;
  registerName: string;
  areaName: string;
  basePoint1: string;
  basePoint2: string;
  basePoint3: string;
  detailedSurvey1: string;
  detailedSurvey2: string;
  detailedSurvey3: string;
  detailedSurvey4: string;
  detailedSurvey5: string;
  ieVal?: IeVal;
  onSave: () => void;
  onCancel: () => void;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FormLabel = styled.label`
  min-width: 100px;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AssetManagementSystemForm: React.FC<AssetManagementSystemFormProps> = ({
  assetNumber,
  structureName,
  ward,
  structure,
  grade,
  registerName,
  areaName,
  basePoint1,
  basePoint2,
  basePoint3,
  detailedSurvey1,
  detailedSurvey2,
  detailedSurvey3,
  detailedSurvey4,
  detailedSurvey5,
  ieVal,
  onSave,
  onCancel,
}) => {
  return (
    <FormContainer>
      <FormRow>
        <FormLabel>管理番号</FormLabel>
        <FormInput type="text" value={assetNumber} readOnly />
        <FormLabel>構造名</FormLabel>
        <FormInput type="text" value={structureName} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>区分</FormLabel>
        <FormSelect value={ward}>
          <option value="取水">取水</option>
          <option value="管理">管理</option>
        </FormSelect>
        <FormLabel>工種</FormLabel>
        <FormSelect value={structure}>
          <option value="：理築">：理築</option>
          <option value="：建築">：建築</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>重要度</FormLabel>
        <FormSelect value={grade}>
          <option value="：基礎概略想定(大)">：基礎概略想定(大)</option>
          <option value="：詳細概略想定(大)">：詳細概略想定(大)</option>
          <option value="：基準点概略想定(詳)">：基準点概略想定(詳)</option>
          <option value="：詳細概略想定(詳)">：詳細概略想定(詳)</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>施設名</FormLabel>
        <FormInput type="text" value={registerName} />
        <FormLabel>○○土地管区</FormLabel>
        <FormInput type="text" value={areaName} />
      </FormRow>
      <FormRow>
        <FormLabel>基本種別1</FormLabel>
        <FormInput type="text" value={basePoint1} />
        <FormLabel>基本種別2</FormLabel>
        <FormInput type="text" value={basePoint2} />
        <FormLabel>基本種別3</FormLabel>
        <FormInput type="text" value={basePoint3} />
      </FormRow>
      <FormRow>
        <FormLabel>詳細区分1</FormLabel>
        <FormInput type="text" value={detailedSurvey1} />
        <FormLabel>詳細区分2</FormLabel>
        <FormInput type="text" value={detailedSurvey2} />
        <FormLabel>詳細区分3</FormLabel>
        <FormInput type="text" value={detailedSurvey3} />
      </FormRow>
      <FormRow>
        <FormLabel>詳細区分4</FormLabel>
        <FormInput type="text" value={detailedSurvey4} />
        <FormLabel>詳細区分5</FormLabel>
        <FormInput type="text" value={detailedSurvey5} />
      </FormRow>
      <FormRow>
        <FormLabel>更新基準年数(現有)</FormLabel>
        <FormInput type="text" value="" />
        <FormLabel>更新基準年数(更新後)</FormLabel>
        <FormInput type="text" value="" />
      </FormRow>
      <FormRow>
        <FormLabel>EU対象</FormLabel>
        <FormSelect value={ieVal}>
          <option value="対象">対象</option>
          <option value="対象外">対象外</option>
        </FormSelect>
      </FormRow>
      <ButtonContainer>
        <Button onClick={onSave}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button disabled>終了</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default AssetManagementSystemForm;

// 使用例
const sampleData = {
  assetNumber: '800800',
  structureName: '○○土地管区',
  ward: '取水',
  structure: '：理築',
  grade: '：基準点概略想定(詳)',
  registerName: '○○土地管区',
  areaName: 'A:浄水場',
  basePoint1: '取水施設1',
  basePoint2: '取水施設2', 
  basePoint3: '取水施設3',
  detailedSurvey1: '取水ポンプ1',
  detailedSurvey2: '取水ポンプ2',
  detailedSurvey3: '取水ポンプ3',
  detailedSurvey4: '取水ポンプ4',
  detailedSurvey5: '取水ポンプ5',
  ieVal: '対象',
};

export const SampleAssetManagementSystemForm = () => (
  <AssetManagementSystemForm
    {...sampleData}
    onSave={() => console.log('Save button clicked')}
    onCancel={() => console.log('Cancel button clicked')}
  />
);