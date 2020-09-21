import React, { useEffect } from 'react';
import projectAPI from '../../api/projectAPI'
import axios from 'axios';

const CaseStudyList = () => {

  useEffect(() => {
    console.log('Thieu Mao');
    try {
      projectAPI.getAll().then(data => {
        console.log(data);
      });
      /// cs_episerver0.json
      // projectAPI.get('cs_episerver0').then(data => {
      //   console.log(data);
      // });
    } catch (error) {

    }
  }, []);

  return (
    <div id="container">
      <h1>Case Study List</h1>
      <NumberList />
    </div>
  );
}

export default CaseStudyList;


function NumberList() {
  const listItems = [1, 2, 3, 4, 5, 6, 7].map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}