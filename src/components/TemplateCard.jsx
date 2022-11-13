import { device } from "~/styles/breakpoints";
import React from "react";
import styled from "styled-components";

/**
 * * Template component
 * @param {template} param0 templat to display
 * @returns template card
 */
const TemplateCard = ({ template }) => {
  return (
    <CardView>
      <div className="template-info">
        <h3 className="template-name">{template?.name}</h3>
        <p className="template-desc">{template?.description}</p>
      </div>
      <div className="template-link">
        <span className="link">Use Template</span>
      </div>
    </CardView>
  );
};

export default TemplateCard;

const CardView = styled.div`
  width: 30%;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 70px;

  @media ${device.tablet} {
    width: 48%;
  }

  @media ${device.phone} {
    width: 100%;
  }

  .template-info {
    width: 100%;
    height: 190px;
    padding: 20px;

    .template-name {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 16px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.neutral_10};
    }

    .template-desc {
      font-size: 0.875rem;
      font-weight: 400;
      margin-bottom: 16px;
      line-height: 17px;
      color: ${({ theme }) => theme.colors.neutral_9};
    }
  }

  .template-link {
    height: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutral_4};
    display: flex;
    align-items: center;
    padding: 12px 20px;
    font-size: 0.875rem;

    .link {
      color: ${({ theme }) => theme.colors.shade_6};
    }
  }
`;
