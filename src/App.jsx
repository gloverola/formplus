import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAllTemplates } from "./api/templateApi";
import Header from "./components/Header";
import Info from "./components/Info";
import Pagination from "./components/Pagination";
import TemplateList from "./components/TemplateList";
import {
  setCurrentItems,
  setLoading,
  setPageCount,
  setTotalTemplates,
  templateSelector,
} from "./redux/features/templateSlice";
import { device } from "./styles/breakpoints";

const App = () => {
  const dispatch = useDispatch();
  const { itemOffSet, endOffSet } = useSelector(templateSelector);

  // Fetch templates >>>> used react query to Optimize for a good user experience and add some level of performance improvements.
  const templates = useQuery({
    queryKey: ["templates"],
    queryFn: fetchAllTemplates,
    onSuccess: (data) => {
      dispatch(setTotalTemplates(data?.length));
      dispatch(setCurrentItems(data?.slice(itemOffSet, endOffSet)));
      dispatch(setPageCount(Math.ceil(data?.length / 15)));
    },
  });

  useEffect(() => {
    dispatch(setLoading(templates.isFetching));
  }, [templates.isFetching]);

  return (
    <AppView>
      <Header templates={templates?.data} />
      <Info />
      <TemplateList loading={templates.isFetching} />
      <Pagination templates={templates?.data} />
    </AppView>
  );
};

export default App;

const AppView = styled.section`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    width: 100%;
    padding: 40px;
  }

  @media ${device.phone} {
    width: 100%;
    padding: 20px;
  }
`;
