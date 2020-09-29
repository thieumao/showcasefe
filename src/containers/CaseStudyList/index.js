import React, { useEffect } from "react";
import projectAPI from "../../api/projectAPI";
import Project from '../../components/Project';
import { useHistory } from "react-router-dom";
import "./styles.scss";
import { updateDataAction } from '../../store/actionTypes/actionType';
import { useDispatch, useSelector } from 'react-redux';
import { getCaseStudyList } from '../../store/selectors/projectSelectors';

const CaseStudyList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const dataList = useSelector(getCaseStudyList);

  useEffect(() => {
    try {
      if (dataList.length == 0) {
        projectAPI.getAll().then((data) => {
          console.log(data);
          const caseStudies = data && data.caseStudies ? data.caseStudies : [];
          dispatch(updateDataAction('CaseStudyList', caseStudies));
        });
      }
    } catch (error) {}
  }, []);

  const itemClick = (item, index) => history.push(`/detail/${item.id}`);

  const listItems = dataList.map((item, index) => (
    <Project project={item} onPress={() => itemClick(item, index)} key={`${index}`} />
  ));
  return (
    <div id="container">
      <div className="project-list">{listItems}</div>
    </div>
  );
};

export default CaseStudyList;