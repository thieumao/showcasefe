import React, { useEffect } from "react";
import projectAPI from "../../api/projectAPI";
import Project from '../../components/Project';
import { useHistory } from "react-router-dom";
import { updateDataAction } from '../../store/actionTypes/actionType';
import { useDispatch, useSelector } from 'react-redux';
import { getEPIList } from '../../store/selectors/projectSelectors';

const EPIList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector(getEPIList);
  const history = useHistory();

  useEffect(() => {
    try {
      if (dataList.length == 0) {
        projectAPI.getAll().then((data) => {
          const caseStudies = data && data.caseStudies ? data.caseStudies : [];
          const list = caseStudies.filter(item => item.group_mask == 1); 
          dispatch(updateDataAction('EPIList', list));
        });
      }
    } catch (error) {}
  }, []);

  const itemClick = (item, index) => history.push(`/detail/${item.id}`);

  const listItems = dataList.map((item, index) => (
    <Project project={item} onPress={() => itemClick(item, index)} key={`${index}`}/>
  ));
  return (
    <div id="container">
      {/* <h1>EPI Server List</h1> */}
      <ul className="project-list">{listItems}</ul>
    </div>
  );
};

export default EPIList;