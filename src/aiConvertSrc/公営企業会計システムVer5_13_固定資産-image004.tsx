import React from 'react';
import styled from '@emotion/styled';

type Project = {
  title: string;
  number: string;
};

type Props = {
  projects: Project[];
  onSave: (selectedProject: Project) => void;
  onCancel: () => void;
};

const ProjectSelector: React.FC<Props> = ({ projects, onSave, onCancel }) => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const handleSave = () => {
    if (selectedProject) {
      onSave(selectedProject);
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>タイトル</TableHeader>
            <TableHeader>内容</TableHeader>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <TableRow key={index} isSelected={selectedProject === project} onClick={() => setSelectedProject(project)}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.number}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Footer>
        <Label>
          タイトル
          <Select value={selectedProject?.title || ''} onChange={(e) => setSelectedProject(projects.find(p => p.title === e.target.value) || null)}>
            <option value="">路線番号</option>
            {projects.map((project, index) => (
              <option key={index} value={project.title}>{project.title}</option>
            ))}
          </Select>
        </Label>
        <Label>
          内容
          <Input type="text" value={selectedProject?.number || ''} readOnly />
        </Label>
        <ButtonContainer>
          <Button onClick={handleSave}>行確定</Button>
          <CancelButton onClick={onCancel}>キャンセル</CancelButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#e6f7ff' : 'white')};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const Select = styled.select`
  margin-left: 8px;
  padding: 4px;
`;

const Input = styled.input`
  margin-left: 8px;
  padding: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #40a9ff;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Usage example
const App: React.FC = () => {
  const projects: Project[] = [
    { title: '路線番号', number: '1-1' },
    // Add more projects as needed
  ];

  const handleSave = (selectedProject: Project) => {
    console.log('Selected project:', selectedProject);
    // Handle saving the selected project
  };

  const handleCancel = () => {
    console.log('Selection canceled');
    // Handle canceling the selection
  };

  return (
    <div>
      <h1>Project Selector</h1>
      <ProjectSelector projects={projects} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default App;