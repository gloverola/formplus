import { device } from "~/styles/breakpoints";
import React from "react";
import styled from "styled-components";
import { ReactComponent as InfoIcon } from "~/assets/icons/info-icon.svg";

/**
 * * Info component
 * @returns Info alert
 */
const Info = () => {
  return (
    <InfoView>
      <InfoIcon />{" "}
      <p>
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </InfoView>
  );
};

export default Info;

const InfoView = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.amber};
  border-radius: 2px;
  margin: 60px 0;

  @media ${device.phone} {
    width: 100%;
    padding: 10px;
    justify-content: flex-start;
  }

  p {
    margin-left: 5px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors?.neutral_8};

    @media ${device.phone} {
      width: 90%;
    }
  }
`;
