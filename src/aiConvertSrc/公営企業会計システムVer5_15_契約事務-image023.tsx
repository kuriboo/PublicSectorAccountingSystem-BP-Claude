import React from 'react';
import styled from '@emotion/styled';

type IndustryType = '業種' | '業種地区別' | '業者別' | '地区業者別';
type PrintFormat = '印刷しない' | 'あり';

interface Props {
  fiscalYear: string;
  branch: string;
  department: string;
  printDate: string;
  industryTypes: IndustryType[];
  printFormats: PrintFormat[];
  kubun: string[];
  startDate: string;
  endDate: string;
  reportOutputDate: string;
}

const IndustrySelectForm: React.FC<Props> = ({
  fiscalYear,
  branch,
  department,
  printDate,
  industryTypes,
  printFormats,
  kubun,
  startDate,
  endDate,
  reportOutputDate,
}) => {
  return (
    <Container>
      <Header>
        <Title>業種別業者名簿(物品)</Title>
        <Info>
          <p>行政市事業会計</p>
          <p>最高権限 管理者 行政 太郎</p>
          <p>令和04年12月19日</p>
        </Info>
      </Header>
      
      <Form>
        <Row>
          <Label>令和04年度</Label>
        </Row>

        <SectionTitle>出力区分</SectionTitle>
        <Row>
          {industryTypes.map((type) => (
            <Checkbox key={type} value={type} label={type} name="industryType" />
          ))}
        </Row>

        <SectionTitle>印字区分</SectionTitle>
        <Row>
          {printFormats.map((format) => (
            <Checkbox key={format} value={format} label={format} name="printFormat" />
          ))}
        </Row>

        <Row>
          <InputGroup>
            <label>業種</label>
            <div>
              <Select options={['000']} />
              <span>～</span>
              <Select options={['999']} />
            </div>
          </InputGroup>

          <InputGroup>
            <label>業者</label>
            <div>
              <Input value="0000000000" readOnly />
              <span>～</span>
              <Input value="9999999999" readOnly />
            </div>
          </InputGroup>
        </Row>

        <Row>
          <RadioGroup>
            <Radio value="全て" label="適格請求書発行事業者" name="qualification" />
            <Radio value="" label="適格請求書発行予定事業者以外" name="qualification" />
          </RadioGroup>
        </Row>

        <Row>
          <InputGroup>
            <label>地区</label>
            <Select options={kubun} />
            <span>～</span>
            <Select options={kubun} />
          </InputGroup>
        </Row>

        <Row>
          <InputGroup>
            <label>変更届出日</label>
            <DatePicker value={startDate} />
            <span>～</span>
            <DatePicker value={endDate} />
          </InputGroup>
        </Row>

        <Row>
          <InputGroup>
            <label>指名停止基準日</label>
            <DatePicker value={reportOutputDate} />
            <label>時点</label>
          </InputGroup>
        </Row>

        <ButtonGroup>
          <Button>OK</Button>
          <Button>クリア</Button>
          <Button>終了</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Info = styled.div`
  text-align: right;
  
  p {
    margin: 0;
  }
`;

const Form = styled.div``;

const Row = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  label {
    margin-right: 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// ダミーコンポーネント 
const Checkbox = ({ value, label, name }) => <label><input type="checkbox" value={value} name={name} />{label}</label>;
const Select = ({ options }) => <select>{options.map(opt => <option key={opt}>{opt}</option>)}</select>; 
const Input = ({ value, readOnly }) => <input type="text" value={value} readOnly={readOnly} />;
const RadioGroup = ({ children }) => <div>{children}</div>;
const Radio = ({ value, label, name }) => <label><input type="radio" value={value} name={name} />{label}</label>;
const DatePicker = ({ value }) => <input type="date" value={value} />;
const Button = ({ children }) => <button>{children}</button>;

// サンプルデータでコンポーネントを表示
const SampleIndustrySelectForm = () => { 
  return (
    <IndustrySelectForm
      fiscalYear="令和04年度"
      branch="1000"
      department="総務部"
      printDate="令和04年12月19日"
      industryTypes={['業種', '業種地区別', '業者別', '地区業者別']}
      printFormats={['印刷しない', 'あり']}  
      kubun={['地区1', '地区2', '地区3']}
      startDate="2022-01-01"
      endDate="2022-12-31"
      reportOutputDate="2022-12-19"
    />
  );
};

export default SampleIndustrySelectForm;