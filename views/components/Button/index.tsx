import styled from "styled-components";

const Button = ({ children, ...props }: any) => {
  return (
    <SButton {...props} className="btn">
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlightPrimary};
  }
`;

export default Button;
