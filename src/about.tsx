import React from 'react';

type Props = { // รับ state ไป ให้ Components
    // รับประเภท data ผ่าน props
    //ex1
    data: string[]
    func: React.Dispatch<React.SetStateAction<string>>;
};

const About = ({data , func} : Props) => { // {data} (assigned variables) or props(some new variables)
    return <div>
        <h1>about</h1>
        <button onClick={() => func("state set! Bois!")}>Click me Click me !</button>
        { // paste array (Raw Data) element เดียว
          data.map((item,idx) => (
          <h4 key={idx}> {item}</h4>
          )) // map = ดึงข้อมูลจาก array ทีละตัว , สามารถเขียน js ใน tsx ได้เลย
        }
    </div>;

};

export default About;


//shortcut -> tsracfe