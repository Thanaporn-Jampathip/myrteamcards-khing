import React from "react";
import "./index.css";
import MemberCard from "./MemberCard.jsx";

function App() {
  const teamMembers = [
    {
      name: "Natthapat",
      role: "Frontend Developer",
      avatar: "profile boy 2.jpg",
    },
    { name: "Thanaporn", role: "Backend Developer", avatar: "profile boy.jpg" },
    { name: "Som", role: "Frontend Developer", avatar: "profile girl 2.jpg" },
    { name: "Nongnoi", role: "UI/UX Designer", avatar: "profile girl.jpg" },
  ];
  return (
    <>
      <div className='topic'>
        <h1>ทีมพัฒนาของบริษัท CodeVerse Studio</h1>
      </div>
      <hr className="line-basic" />
      <div className="main-container">
        {teamMembers.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </>
  );
}

export default App;
