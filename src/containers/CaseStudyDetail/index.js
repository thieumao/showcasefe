import React, { useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import projectAPI from "../../api/projectAPI";

const CaseStudyDetail = () => {
  let { projectID } = useParams();
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [content, setContent] = useState('');

  const [title3, setTitle3] = useState('');

  useEffect(() => {
    console.log("CaseStudyDetail");
    try {
      projectAPI.get(projectID).then(data => {
        console.log(data);
        parse(data);
      });
    } catch (error) {}
  }, []);

  const parse = (data) => {
    setTitle1(data[0].title);
    setTitle2(data[1].title);
    setContent(data[1].content);
    setTitle3(data[2].title);
  }

  return (
    <div>
      <h1>Case Study Detail {projectID}</h1>
      <h3>{title1}</h3>
      <h3>{title2}</h3>
      <h4>{content}</h4>
      <h3>{title3}</h3>
    </div>
  );
}

export default CaseStudyDetail;
