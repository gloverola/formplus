import React from "react";
import styled from "styled-components";
import TemplateCard from "./TemplateCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import { useSelector } from "react-redux";
import { templateSelector } from "~/redux/features/templateSlice";
import { device } from "~/styles/breakpoints";

/**
 * * Template component
 * @returns Templates
 */
const TemplateList = () => {
  const { currentItems, totalTemplates, loading, category } =
    useSelector(templateSelector);

  return (
    <ListView>
      <div className="heading">
        <p className="category">{category} Templates</p>
        {loading ? (
          <p className="count">
            <Skeleton width={100} />
          </p>
        ) : (
          <p className="count">{totalTemplates} templates</p>
        )}
      </div>
      <div className="templates">
        {loading ? (
          <CardSkeleton />
        ) : (
          currentItems?.map((template, i) => {
            return <TemplateCard key={`template-${i}`} template={template} />;
          })
        )}
      </div>
    </ListView>
  );
};

export default TemplateList;

const ListView = styled.div`
  width: 100%;

  .heading {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 25px;

    .category {
      color: ${({ theme }) => theme.colors.neutral_9};
    }

    .count {
      color: ${({ theme }) => theme.colors.neutral_6};
      font-size: 0.875rem;
      display: flex;
    }
  }

  .templates {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.phone} {
      width: 100%;
      flex-direction: column;
    }
  }
`;
