import React from 'react';
import Course from './course';

function MainContent() {
const courses = [
  { imgSrc: './img/Picture3.png', title: 'Spring Boot / Angular', price: '350 DT/ Month' },
  { imgSrc: './img/Picture4.png', title: 'Node JS / React', price: '350 DT/ Month' },
  { imgSrc: './img/Picture5.png', title: 'Flutter / Firebase', price: '350 DT/ Month' },
  { imgSrc: './img/Picture6.png', title: 'Business Intelligence', price: '350 DT/ Month' },
  { imgSrc: './img/Picture7.png', title: 'Artificial Intelligence', price: '350 DT/ Month' },
  { imgSrc: './img/Picture8.png', title: 'Devops', price: '350 DT/ Month' },

];


  return (
    <section className="container">
      <div className="first_section">
        <div>
          <h1>
            Improve your skills on your own
            To prepare for a better future
          </h1>
          <button className="btn">REGISTER NOW</button>
        </div>
      </div>
      
      <div className="title">
        <h1>Discover Our Courses</h1>
        <button className="btn">
          <a href="http://">View More</a>
        </button>
      </div>
      
      <div className="grid">
        {courses.map((course, index) => (
          <Course
            key={index}
            imgSrc={course.imgSrc}
            title={course.title}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
}

export default MainContent;
