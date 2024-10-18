import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  bango: string;
  shipto: string;
  hidzuke: string;
  eigyou: string;
  shikyaku: string;
  shohin: string;
  suuryou: number;
  tani: string;
  kinngaku: number;
  bikou: string;
  kinnsyuKingaku: number;
  nyuukin: string;
  youbi: string[];
  endService: boolean;
  water: boolean;
  toilet: boolean;
  yobiMemo: string;
};

type FormProps = {
  data?: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PreviewDataArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Form: React.FC<FormProps> = ({ data, onSubmit, onCancel }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      bango: formData.get('bango') as string,
      shipto: formData.get('shipto') as string,
      hidzuke: formData.get('hidzuke') as string,
      eigyou: formData.get('eigyou') as string,
      shikyaku: formData.get('shikyaku') as string,
      shohin: formData.get('shohin') as string,
      suuryou: Number(formData.get('suuryou')),
      tani: formData.get('tani') as string,
      kinngaku: Number(formData.get('kinngaku')),
      bikou: formData.get('bikou') as string,
      kinnsyuKingaku: Number(formData.get('kinnsyuKingaku')),
      nyuukin: formData.get('nyuukin') as string,
      youbi: (formData.getAll('youbi') as string[]).map(Number) as unknown as string[],
      endService: formData.get('endService') === 'on',
      water: formData.get('water') === 'on', 
      toilet: formData.get('toilet') === 'on',
      yobiMemo: formData.get('yobiMemo') as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <div>
          <Label>番号</Label>
          <Input type="text" name="bango" defaultValue={data?.bango} />
        </div>
        <div>
          <Label>師任</Label>
          <Input type="text" name="shipto" defaultValue={data?.shipto} />
        </div>
        <div>
          <Label>日付</Label>
          <Input type="date" name="hidzuke" defaultValue={data?.hidzuke} />
        </div>
        <div>
          <Label>営業マン</Label>
          <Input type="text" name="eigyou" defaultValue={data?.eigyou} />
        </div>
        <div>
          <Label>支社</Label>
          <Select name="shikyaku" defaultValue={data?.shikyaku}>
            <option value="1">神奈川</option>
            {/* Add more options */}
          </Select>
        </div>
        <div>
          <Label>商品</Label>
          <Select name="shohin" defaultValue={data?.shohin}>
            <option value="05">掃除機消耗品</option>
            {/* Add more options */}
          </Select>
        </div>
        <div>
          <Label>数量</Label>
          <Input type="number" name="suuryou" defaultValue={data?.suuryou} />
        </div>
        <div>
          <Label>単位</Label>
          <Select name="tani" defaultValue={data?.tani}>
            <option value="1">個</option>
            {/* Add more options */}
          </Select>
        </div>
        <div>
          <Label>金額</Label>
          <Input type="number" name="kinngaku" defaultValue={data?.kinngaku} />
        </div>
        <div>
          <Label>備考</Label>
          <Input type="text" name="bikou" defaultValue={data?.bikou} />
        </div>
        <div>
          <Label>請求金額</Label>
          <Input type="number" name="kinnsyuKingaku" defaultValue={data?.kinnsyuKingaku} />
        </div>
        <div>
          <Label>入金</Label>
          <Input type="text" name="nyuukin" defaultValue={data?.nyuukin} />
        </div>
        <div>
          <Label>事価番号</Label>
          <Input type="text" defaultValue="0000006" />
        </div>
        <div>
          <Label>予備</Label>
          <Input type="text" defaultValue="0000" />
        </div>
        <CheckboxContainer>
          <Label>
            <input type="checkbox" name="endService" defaultChecked={data?.endService} />
            サービス終了
          </Label>
        </CheckboxContainer>
        <CheckboxContainer>
          <Label>
            <input type="checkbox" name="water" defaultChecked={data?.water} />
            水道代
          </Label>
        </CheckboxContainer>
        <CheckboxContainer>
          <Label>  
            <input type="checkbox" name="toilet" defaultChecked={data?.toilet} />
            トイレ代  
          </Label>
        </CheckboxContainer>
        <div>
          <Label>予備</Label>  
          <Input type="text" name="yobiMemo" defaultValue={data?.yobiMemo} />
        </div>
      </Container>
      <ButtonContainer>
        <Button type="submit">OK</Button>
        <Button type="button" onClick={onCancel}>クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonContainer>
      {data && (
        <PreviewDataArea value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </form>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  const sampleData: FormData = {
    bango: '002010117',
    shipto: '阪＊零式科',
    hidzuke: '0001-11-27', 
    eigyou: '施設管理業務委託',
    shikyaku: '1',
    shohin: '05',
    suuryou: 8,
    tani: '1',
    kinngaku: 15000,
    bikou: '定検',
    kinnsyuKingaku: 500000,
    nyuukin: '0000<5MM',
    youbi: [1,2,3,4,5,6,0],
    endService: false,
    water: true,
    toilet: true, 
    yobiMemo: '佑侭納送業務委託',
  };

  return (
    <div>
      <h1>予算明細入力</h1>
      <Form data={sampleData} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;