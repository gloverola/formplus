import { templateSelector } from "~/redux/features/templateSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "~/assets/icons/search-icon.svg";
import SelectDropdown from "./SelectDropdown";
import { setCategory, setDate, setOrder } from "~/redux/features/templateSlice";
import useDebounce from "~/hooks/useDebounce";
import { setCurrentItems } from "~/redux/features/templateSlice";
import {
  setPageCount,
  setTotalTemplates,
} from "~/redux/features/templateSlice";
import { setCurrentPage } from "~/redux/features/templateSlice";
import { setItemOffSet } from "~/redux/features/templateSlice";
import { device } from "~/styles/breakpoints";
import { categories, filters } from "~/constants/data";

/**
 * * Header component
 * @param {templates} param0
 * @returns Header with search and filter input
 */
const Header = ({ templates }) => {
  const dispatch = useDispatch();
  const { category, order, date, itemOffSet, endOffSet, totalTemplates } =
    useSelector(templateSelector);
  const [search, setSearch] = useState("");

  // Debounce search query to provide better UX
  const debouncedsearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedsearch) {
      const filtered = templates.filter(
        (template) => template.name === debouncedsearch
      );
      dispatch(setCurrentItems(filtered));
    } else {
      dispatch(setCurrentItems(templates?.slice(itemOffSet, endOffSet)));
    }
  }, [debouncedsearch]);

  // Filter templates when category, order or date changes
  useEffect(() => {
    if (category !== "All") {
      const categorisedTemplates = templates?.filter((template) =>
        template.category?.includes(category)
      );

      if (order === "Ascending") {
        const sortedTemplates = categorisedTemplates.sort((a, b) => {
          let fa = a.name.toLowerCase();
          let fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
      }

      if (date === "Ascending") {
        const sortedTemplates = categorisedTemplates?.sort(function (a, b) {
          return a.created < b.created ? -1 : a.created > b.created ? 1 : 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setOrder("Default"));
      }

      if (order === "Descending") {
        const sortedTemplates = categorisedTemplates.sort((a, b) => {
          let fa = a.name.toLowerCase();
          let fb = b.name.toLowerCase();

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setDate("Default"));
      }

      if (date === "Descending") {
        const sortedTemplates = categorisedTemplates?.sort(function (a, b) {
          return a.created < b.created ? 1 : a.created > b.created ? -1 : 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setOrder("Default"));
      }

      if (order === "Default") {
        dispatch(setTotalTemplates(categorisedTemplates?.length));
        dispatch(setCurrentItems(categorisedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(categorisedTemplates?.length / 15)));
        dispatch(setCurrentPage(1));
        const newOffset = (1 * 15) % categorisedTemplates?.length;
        dispatch(setItemOffSet(newOffset));
      }

      if (date === "Default") {
        dispatch(setTotalTemplates(categorisedTemplates?.length));
        dispatch(setCurrentItems(categorisedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(categorisedTemplates?.length / 15)));
        dispatch(setCurrentPage(1));
        const newOffset = (1 * 15) % categorisedTemplates?.length;
        dispatch(setItemOffSet(newOffset));
      }

      dispatch(setTotalTemplates(categorisedTemplates?.length));
      dispatch(setCurrentItems(categorisedTemplates?.slice(0, endOffSet)));
      dispatch(setPageCount(Math.ceil(categorisedTemplates?.length / 15)));
      dispatch(setCurrentPage(1));
      const newOffset = (1 * 15) % categorisedTemplates?.length;
      dispatch(setItemOffSet(newOffset));
    } else {
      if (order === "Ascending") {
        const sortedTemplates = templates.sort((a, b) => {
          let fa = a.name.toLowerCase();
          let fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setDate("Default"));
      }

      if (date === "Ascending") {
        const sortedTemplates = templates?.sort(function (a, b) {
          return a.created < b.created ? -1 : a.created > b.created ? 1 : 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setOrder("Default"));
      }

      if (order === "Descending") {
        const sortedTemplates = templates.sort((a, b) => {
          let fa = a.name.toLowerCase();
          let fb = b.name.toLowerCase();

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setDate("Default"));
      }

      if (date === "Descending") {
        const sortedTemplates = templates?.sort(function (a, b) {
          return a.created < b.created ? 1 : a.created > b.created ? -1 : 0;
        });

        dispatch(setTotalTemplates(sortedTemplates?.length));
        dispatch(setCurrentItems(sortedTemplates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(sortedTemplates?.length / 15)));
        dispatch(setOrder("Default"));
      }

      if (order === "Default") {
        dispatch(setTotalTemplates(templates?.length));
        dispatch(setCurrentItems(templates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(templates?.length / 15)));
        dispatch(setCurrentPage(1));
        const newOffset = (1 * 15) % templates?.length;
        dispatch(setItemOffSet(newOffset));
      }

      if (date === "Default") {
        dispatch(setTotalTemplates(templates?.length));
        dispatch(setCurrentItems(templates?.slice(0, endOffSet)));
        dispatch(setPageCount(Math.ceil(templates?.length / 15)));
        dispatch(setCurrentPage(1));
        const newOffset = (1 * 15) % templates?.length;
        dispatch(setItemOffSet(newOffset));
      }

      dispatch(setTotalTemplates(templates?.length));
      dispatch(setCurrentItems(templates?.slice(0, endOffSet)));
      dispatch(setPageCount(Math.ceil(templates?.length / 15)));
      dispatch(setCurrentPage(1));
      const newOffset = (1 * 15) % templates?.length;
      dispatch(setItemOffSet(newOffset));
    }
    setSearch("");
  }, [category, order, date]);

  return (
    <HeaderView>
      <div className="search-input">
        <SearchIcon className="icon" />
        <input
          type="text"
          name="search"
          placeholder="Search templates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="sort-view">
        <div className="title">Sort By:</div>{" "}
        <div className="sort-inputs">
          <div className="sort">
            <SelectDropdown
              options={categories}
              value={category}
              setValue={setCategory}
              label="Category"
            />
          </div>
          <div className="sort">
            <SelectDropdown
              options={filters}
              value={order}
              setValue={setOrder}
              label="Order"
            />
          </div>
          <div className="sort">
            <SelectDropdown
              options={filters}
              value={date}
              setValue={setDate}
              label="Date"
            />
          </div>
        </div>
      </div>
    </HeaderView>
  );
};

export default Header;

const HeaderView = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device?.tablet} {
    flex-direction: column;
  }

  @media ${device?.phone} {
    flex-direction: column;
  }

  .search-input {
    width: 30%;
    position: relative;

    @media ${device?.tablet} {
      width: 100%;
    }

    @media ${device?.phone} {
      width: 100%;
    }

    input {
      width: 100%;
      height: 45px;
      padding: 12px;
      border: 0.5px solid ${({ theme }) => theme?.colors?.neutral_5};
      border-radius: 2px;
      background-color: ${({ theme }) => theme?.colors?.background};
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme?.colors?.neutral_6};
        font-size: 0.875rem;
      }

      &:focus {
        border-color: ${({ theme }) => theme?.colors?.neutral_6};
      }
    }

    .icon {
      position: absolute;
      right: 12px;
      top: 12px;
    }
  }

  .sort-view {
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
      width: 100%;
      flex-direction: column;
      margin-top: 10px;
    }

    @media ${device.phone} {
      width: 100%;
      flex-direction: column;
      margin-top: 10px;
    }

    .title {
      width: 10%;
      align-items: center;
      display: flex;
      color: ${({ theme }) => theme?.colors?.neutral_6};

      @media ${device?.tablet} {
        width: 100%;
        margin-bottom: 10px;
      }

      @media ${device?.phone} {
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .sort-inputs {
      width: 88%;
      display: flex;
      justify-content: space-between;

      @media ${device?.tablet} {
        width: 100%;
      }
      @media ${device?.phone} {
        width: 100%;
      }

      .sort {
        width: 30%;

        @media ${device?.tablet} {
          width: 32%;
        }

        @media ${device?.phone} {
          width: 32%;
        }
      }
    }
  }
`;
