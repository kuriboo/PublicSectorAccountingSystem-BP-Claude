import React from 'react';
import styled from '@emotion/styled';

type Ward = '1病棟' | '2病棟' | '3病棟' | '4病棟' | '5病棟';
type Position = '部長' | '医長' | '主任' | '副主任';
type Degree = '医学博士' | '大学院';

interface AssetManagementFormProps {
  accountTitle?: string;
  structure?: string;
  code?: string;
  constructionDate?: string;
  manufacturer?: string;
  modelNumber?: string;
  managementStatus?: string;
  currentValue?: number;
  newValue?: number;
  ward?: Ward;
  position?: Position;
  degree?: Degree;
  evaluation?: '対象' | '対象外'; 
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AssetManagementForm: React.FC<AssetManagementFormProps> = ({
  accountTitle = '',
  structure = '',
  code = '',
  constructionDate = '',
  manufacturer = '',
  modelNumber = '',
  managementStatus = '',
  currentValue = 0,
  newValue = 0,
  ward = '1病棟',
  position = '部長',
  degree = '医学博士',
  evaluation = '対象',
}) => {
  return (
    <Container>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" defaultValue={accountTitle} />
      </FormGroup>
      <FormGroup>
        <Label>OO土地資産</Label>
        <Input type="text" defaultValue={structure} />
      </FormGroup>
      <FormGroup>
        <Label>区分</Label>
        <Select defaultValue={code}>
          <option value="1:取得">1:取得</option>
          <option value="2:購入">2:購入</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>工種</Label>
        <Select defaultValue={constructionDate}>
          <option value="1:建築">1:建築</option>
          <option value="2:設備">2:設備</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>施設名</Label>
        <Input type="text" defaultValue={manufacturer} />
      </FormGroup>
      <FormGroup>
        <Label>重要度</Label>
        <Select defaultValue={managementStatus}>
          <option value="1:重要度の高い資産(大)">1:重要度の高い資産(大)</option>
          <option value="2:重要度の低い資産(小)">2:重要度の低い資産(小)</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>重要基準年数(現有)</Label>
        <Input type="number" defaultValue={currentValue} />
      </FormGroup>
      <FormGroup>
        <Label>重要基準年数(更新後)</Label>
        <Input type="number" defaultValue={newValue} />
      </FormGroup>
      {[1, 2, 3].map((num) => (
        <React.Fragment key={num}>
          <FormGroup>
            <Label>{`管理施設${num}`}</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>{`数値${num}の1`}</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>{`数値${num}の2`}</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>{`数値${num}の3`}</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>{`数値${num}の4`}</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>{`数値${num}の5`}</Label>
            <Input type="text" />
          </FormGroup>
        </React.Fragment>
      ))}
      <FormGroup>
        <Label>EU対応</Label>
        <Select defaultValue={evaluation}>
          <option value="対象">対象</option>
          <option value="対象外">対象外</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>系統</Label>
        <Select defaultValue={ward}>
          <option value="1病棟">1病棟</option>
          <option value="2病棟">2病棟</option>
          <option value="3病棟">3病棟</option>
          <option value="4病棟">4病棟</option>
          <option value="5病棟">5病棟</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>職種</Label>
        <Select defaultValue={position}>
          <option value="部長">部長</option>
          <option value="医長">医長</option>
          <option value="主任">主任</option>
          <option value="副主任">副主任</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>学位</Label>
        <Select defaultValue={degree}>
          <option value="医学博士">医学博士</option> 
          <option value="大学院">大学院</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Button>OK</Button>
      </FormGroup>
      <FormGroup>
        <Button>クリア</Button>
      </FormGroup>
      <FormGroup>
        <Button>終了</Button>  
      </FormGroup>
    </Container>
  );
};

export default AssetManagementForm;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Asset Management Form</h1>
      <AssetManagementForm 
        accountTitle="800001" 
        structure="OO土地資産"
        code="1:取得"
        constructionDate="1:建築"
        manufacturer="A病院"
        managementStatus="1:重要度の高い資産(大)"
        currentValue={29}
        newValue={14}
        ward="1病棟"
        position="部長"
        degree="医学博士"
        evaluation="対象"
      />
    </div>
  );
};