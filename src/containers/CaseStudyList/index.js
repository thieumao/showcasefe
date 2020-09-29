import React, { useEffect, useState } from "react";
import projectAPI from "../../api/projectAPI";
import Project from '../../components/Project';
import { useHistory } from "react-router-dom";
import "./styles.scss";

const EPIList = () => {
  const history = useHistory();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    console.log("EPIList");
    try {
      projectAPI.getAll().then((data) => {
        console.log(data);
        const caseStudies = data && data.caseStudies ? data.caseStudies : [];
        setProjectList(caseStudies);
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
    <Project project={item} onPress={() => itemClick(item, index)} key={`${index}`} />
  ));
  return (
    <div id="container">
      {/* <h1>Case Study List</h1> */}
      <div className="project-list">{listItems}</div>
    </div>
  );
};

export default EPIList;