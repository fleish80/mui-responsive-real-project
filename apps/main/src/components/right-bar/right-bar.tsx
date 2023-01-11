import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RightBarProps {}

const StyledRightBar = styled.div`
  color: pink;
`;

export function RightBar(props: RightBarProps) {
  return (
    <StyledRightBar>
      <h1>Welcome to RightBar!</h1>
    </StyledRightBar>
  );
}

export default RightBar;
