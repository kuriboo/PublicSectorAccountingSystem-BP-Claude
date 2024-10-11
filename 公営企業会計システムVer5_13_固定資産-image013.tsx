import React from 'react';
import styled from '@emotion/styled';

type LandPurchaseInputFormProps = {
  onSubmit: (data: LandPurchaseInputData) => void;
};

type LandPurchaseInputData = {
  documentNumber: string;
  landCategory: '土地' | '建物' | '計正' | '削除';
  addressNumber: string;
  addressStreet: string;
  landNumber: string;
  landArea: string;
  acquisitionDate: string;
  acquisitionMonth: number;
  acquisitionYear: number;
  landShape: string;
  landRemarks: string;
  shareOwnership: string;
  ownershipRatio: string;
  mortgageBank: string;
  borrowingAmount: number;
  transactionDate: string;
  registeredAddress: string;
  registeredMortgageAmount: number;
};

const LandPurchaseInputForm: React.FC<LandPurchaseInputFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data: LandPurchaseInputData = {
      documentNumber: form.documentNumber.value,
      landCategory: form.landCategory.value as LandPurchaseInputData['landCategory'],
      addressNumber: form.addressNumber.value,
      addressStreet: form.addressStreet.value,
      landNumber: form.landNumber.value,
      landArea: form.landArea.value,
      acquisitionDate: `${form.acquisitionYear.value}-${form.acquisitionMonth.value}-01`,
      acquisitionMonth: Number(form.acquisitionMonth.value),
      acquisitionYear: Number(form.acquisitionYear.value),
      landShape: form.landShape.value,
      landRemarks: form.landRemarks.value,
      shareOwnership: form.shareOwnership.value,
      ownershipRatio: form.ownershipRatio.value,
      mortgageBank: form.mortgageBank.value,
      borrowingAmount: Number(form.borrowingAmount.value),
      transactionDate: form.transactionDate.value,
      registeredAddress: form.registeredAddress.value,
      registeredMortgageAmount: Number(form.registeredMortgageAmount.value),
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <div>
          <Label>資産番号</Label>
          <Input type="text" name="documentNumber" defaultValue="802400" required />
        </div>
        <div>
          <Label>土地取得入力</Label>
          <Select name="landCategory" defaultValue="土地" required>
            <option value="土地">土地</option>
            <option value="建物">建物</option>
            <option value="計正">計正</option>
            <option value="削除">削除</option>
          </Select>
        </div>
      </FormSection>
      <FormSection>
        <div>
          <Label>節</Label>
          <Input type="text" name="addressNumber" defaultValue="0510101" required />
        </div>
        <div>
          <Label>細節</Label>
          <Input type="text" name="addressStreet" defaultValue="0001" required />
        </div>
        <div>
          <Label>明細</Label>
          <Input type="text" name="landNumber" defaultValue="0001" required />
        </div>
      </FormSection>
      <FormSection>
        <div>
          <Label>資産名称</Label>
          <Input type="text" name="landName" defaultValue="行政市町水池駐車場" required />
        </div>
        <div>
          <Label>異動摘要</Label>
          <Input type="text" name="landRemarks" defaultValue="取得" required />
        </div>
      </FormSection>
      <FormSection>
        <div>
          <Label>所在地</Label>
          <Input type="text" name="landAddress" defaultValue="水道施設管理センター" required />  
        </div>
        <div>
          <Label>部門</Label>
          <Input type="text" name="department" defaultValue="001" required />
        </div>
        <div>
          <Label>地区</Label>
          <Input type="text" name="district" defaultValue="001" required />
        </div>  
      </FormSection>
      <FormSection>
        <div>
          <Label>科目</Label>
          <Select name="accountCategory" required>
            <option value="">選択してください</option>
            {/* account category options */}
          </Select>
        </div>
        <div>
          <Label>取得年月日</Label>  
          <div>
            <Input type="number" name="acquisitionYear" min="1900" max="2100" defaultValue={2017} required />
            年  
            <Input type="number" name="acquisitionMonth" min="1" max="12" defaultValue={9} required />
            月
          </div>
        </div>
      </FormSection>
      <FormSection>  
        <div>
          <Label>業者</Label>
          <div>
            <Input type="text" name="contractorCode" defaultValue="000001" required />
            <Input type="text" name="contractorName" defaultValue="水道管路維持補修" required />
          </div>
        </div>
        <div>  
          <Label>総面積</Label>
          <Input type="number" name="totalArea" defaultValue={0.00} step="0.01" required />
          ㎡
        </div>
        <div>
          <Label>総価額</Label> 
          <Input type="number" name="totalAmount" defaultValue={5000000} required />
          円
        </div>
      </FormSection>  
      <FormSection>
        <div>  
          <Label>取得年月日</Label>
          <Input type="date" name="transactionDate" defaultValue="2017-09-08" required />
        </div>
        <div>
          <Label>総括摘要</Label>
          <Input type="text" name="summaryRemarks" defaultValue="行政市町水池駐車場の取得" required />
        </div>
      </FormSection>
      <FormSection>  
        <div>
          <Label>総括異動金額</Label>
          <Input type="number" name="totalTransactionAmount" defaultValue={5000000} required /> 
          円
        </div>
      </FormSection>
      
      <div>  
        <button type="button">異動年月日</button>
        <button type="button">異動区分</button>
        <button type="button">財源設定</button>  
      </div>

      <div>
        <button type="submit">OK</button>  
        <button type="button">クリア</button>
        <button type="button">終了</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormSection = styled.div`
  display: grid;  
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  
  > div {
    display: flex;
    flex-direction: column;  
    gap: 5px;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;  
`;

// Usage example  
const LandPurchaseInputPage: React.FC = () => {
  const handleSubmit = (data: LandPurchaseInputData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h1>土地取得入力</h1>
      <LandPurchaseInputForm onSubmit={handleSubmit} />  
    </div>
  );
};

export default LandPurchaseInputPage;