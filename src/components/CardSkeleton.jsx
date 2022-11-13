import { device } from "~/styles/breakpoints";
import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

/**
 * * Loader component
 * @returns Skeleton Loader
 */
const CardSkeleton = () => {
  return Array(15)
    .fill(0)
    .map((item, i) => {
      return (
        <SkeletonView key={`index-${i}`}>
          <Skeleton height={230} />
        </SkeletonView>
      );
    });
};

export default CardSkeleton;

const SkeletonView = styled.div`
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
`;
