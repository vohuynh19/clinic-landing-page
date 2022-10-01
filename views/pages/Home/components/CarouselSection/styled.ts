import styled from "styled-components";

export const Wrapper = styled.section`
  .swiper {
    img {
      width: 100%;
      height: auto;
    }
    z-index: 0;
  }

  .swiper-pagination-bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px 10px !important;
    box-sizing: content-box;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #f8e7ab;
    border-radius: 10px;
  }
  .swiper-pagination-bullet-active {
    background-color: #f8e7ab;
  }
`;

export const NextBtn = styled.div`
  border: solid #fdfdfd;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 6px;
  cursor: pointer;

  position: absolute;
  right: 6%;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
`;

export const PrevBtn = styled.div`
  border: solid #fdfdfd;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 6px;
  cursor: pointer;

  position: absolute;
  left: 6%;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%) rotate(135deg);
`;
