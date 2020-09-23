import React, { useEffect, useState } from "react";
import projectAPI from "../../api/projectAPI";
import Project from './shared/Project';
import { useHistory } from "react-router-dom";

const CaseStudyList = () => {
  const history = useHistory();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    console.log("CaseStudyList");
    try {
      projectAPI.getAll().then((data) => {
        console.log(data);
        const caseStudies = data && data.caseStudies ? data.caseStudies : [];
        const list = caseStudies.filter(item => item.group_mask == 1); 
        setProjectList(list);
      });
    } catch (error) {}
  }, []);

  const itemClick = (item, index) => {
    console.log(index);
    console.log(item);
    history.push(`/detail/${item.id}`);
  }

  // group_mask: 2
  // id: "cs_other1"
  // img: "http://ncs.niteco.se/boncom/ipad-image.png"
  // link: "http://ncs.niteco.se/boncom/"
  // name: "boncom"
  // tags: ["boncom"]
  const listItems = projectList.map((item, index) => (
    <Project project={item} onPress={() => itemClick(item, index)} />
  ));
  return (
    <div id="container">
      {/* <h1>EPI Server List</h1> */}
      <ul className="project-list">{listItems}</ul>
    </div>
  );
};

export default CaseStudyList;