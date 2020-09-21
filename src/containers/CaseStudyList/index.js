import React, { useEffect, useState } from "react";
import projectAPI from "../../api/projectAPI";
import Project from './shared/Project';

const CaseStudyList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    console.log("Thieu Mao");
    try {
      projectAPI.getAll().then((data) => {
        console.log(data);
        const caseStudies = data && data.caseStudies ? data.caseStudies : [];
        setProjectList(caseStudies);
      });
      // / cs_episerver0.json
      // projectAPI.get('cs_episerver0').then(data => {
      //   console.log(data);
      // });
    } catch (error) {}
  }, []);

  const itemClick = (item, index) => {
    console.log(index);
    console.log(item);
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
      <h1>Case Study List</h1>
      <ul className="project-list">{listItems}</ul>
    </div>
  );
};

export default CaseStudyList;