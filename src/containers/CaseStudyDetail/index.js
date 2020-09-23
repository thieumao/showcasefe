import React, { useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import projectAPI from "../../api/projectAPI";
import "./styles.scss";

const CaseStudyDetail = () => {
  let { projectID } = useParams();
  const [title1, setTitle1] = useState('');
  const [list1, setList1] = useState([]);
  const [title2, setTitle2] = useState('');
  const [content, setContent] = useState('');
  const [title3, setTitle3] = useState('');
  const [list3, setList3] = useState([]);
  const [images, setImages] = useState([]);

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
    setList1(data[0].list);
    setTitle2(data[1].title);
    setContent(data[1].content);
    setTitle3(data[2].title);
    setList3(data[2].list);
    setImages(data[3].images);
  }

  const list1Items = list1.map((item, index) => (
    <div>{item}</div>
  ));

  const list3Items = list3.map((item, index) => (
    <div>{item}</div>
  ));

  const baseUrl = 'https://raw.githubusercontent.com/thieumao/ShowCaseNodeJS/master/';
  return (
    <div className="detail-container">
      {/* <h1>Case Study Detail {projectID}</h1> */}
      <img className="img1" src={baseUrl + images[2]} alt={title1} width="100%" height="1%" />
      <h3>{title1}</h3>
      {list1Items}
      <img className="img2" src={baseUrl + images[3]} alt={title1} width="50%" height="50%" />
      <h3>{title2}</h3>
      <div>{content}</div>
      <img className="img3" src={baseUrl + images[4]} alt={title1} width="50%" height="50%" />
      <h3>{title3}</h3>
      {list3Items}
      {/* <img src={baseUrl + images[0]} alt={title1} width="100" height="100" />
      <img src={baseUrl + images[1]} alt={title1} width="100" height="100" />
      <img src={baseUrl + images[2]} alt={title1} width="100" height="100" />
      <img src={baseUrl + images[3]} alt={title1} width="100" height="100" />
      <img src={baseUrl + images[4]} alt={title1} width="100" height="100" /> */}
    </div>
  );
}

export default CaseStudyDetail;
