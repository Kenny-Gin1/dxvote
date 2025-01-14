import styled from 'styled-components';
import { Box } from 'components/Guilds/common/Layout';
import { ProposalOptionTag } from '../ProposalOptionTag';
import AddButton from '../AddButton';
import ActionView, { Action } from '../Action';

export interface Option {
  index: number;
  label: string;
  actions?: Action[];
}

interface OptionRowProps {
  data: Option;
  editable: boolean;
}

const ActionCountLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray};
`;

const OptionWrapper = styled(Box)`
  padding: 1rem;
`;

const DetailWrapper = styled(Box)`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OptionRow: React.FC<OptionRowProps> = ({ data, editable }) => {
  return (
    <OptionWrapper>
      <DetailWrapper>
        <ProposalOptionTag option={data} />
        <ActionCountLabel>
          {data?.actions?.length || 'No'} on-chain{' '}
          {data?.actions?.length > 2 ? 'actions' : 'action'}
        </ActionCountLabel>
      </DetailWrapper>

      {!editable &&
        data?.actions?.map((action, index) => (
          <ActionView key={index} action={action} />
        ))}

      {editable && <AddButton label="Add Action" />}
    </OptionWrapper>
  );
};

export default OptionRow;
