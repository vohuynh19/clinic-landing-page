import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

type ImageBgProps = {
  src: string;
};
export const ImageBg = styled.div<ImageBgProps>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  width: 100%;
`;
