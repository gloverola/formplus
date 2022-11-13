import { templateSelector } from "~/redux/features/templateSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as PrevIcon } from "~/assets/icons/arrow-left-icon.svg";
import { ReactComponent as NextIcon } from "~/assets/icons/arrow-right-icon.svg";
import { setCurrentPage } from "~/redux/features/templateSlice";
import { setItemOffSet } from "~/redux/features/templateSlice";
import { setCurrentItems } from "~/redux/features/templateSlice";

/**
 * * Pagination component
 * @param {templates} param0
 * @returns Pagination
 */
const Pagination = ({ templates }) => {
  const dispatch = useDispatch();
  const { currentPage, pageCount, totalTemplates } =
    useSelector(templateSelector);

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
    const newOffset = ((currentPage + 1) * 15) % totalTemplates;
    dispatch(setItemOffSet(newOffset));
    dispatch(setCurrentItems(templates?.slice(newOffset, newOffset + 15)));
    console.log("new", newOffset);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
    const newOffset =
      ((currentPage > 1 ? currentPage - 1 : currentPage) * 15) % totalTemplates;
    dispatch(setItemOffSet(newOffset));
    dispatch(setCurrentItems(templates?.slice(newOffset, newOffset + 15)));
  };
  return (
    <PaginationView>
      <button className="prev" onClick={prevPage}>
        <PrevIcon /> Previous
      </button>
      <div className="page">
        <div className="current">{currentPage}</div>
        <span> of {pageCount}</span>
      </div>
      <button className="next" onClick={nextPage}>
        Next <NextIcon />
      </button>
    </PaginationView>
  );
};

export default Pagination;

const PaginationView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .next {
    svg {
      margin-left: 8px;
    }
  }

  .page {
    display: flex;
    align-items: center;
    .current {
      height: 30px;
      border: 1px solid;
      margin-right: 5px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
    }
  }
`;
