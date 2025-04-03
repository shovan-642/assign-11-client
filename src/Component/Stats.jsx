import React from "react";

const Stats = () => {
  return (
    <div className="relative z-50 w-5/12 mx-auto top-[-50px] rounded-2xl bg-white">
      <div className="grid grid-cols-4 shadow rounded-2xl relative z-40" >
        <div className="stat">
          <div className="stat-value">32000+</div>
          <div className="stat-desc">Experienced Tutors</div>
        </div>

        <div className="stat">
          <div className="stat-value">300000+</div>
          <div className="stat-desc">5 star tutor reviews</div>
        </div>

        <div className="stat">
          <div className="stat-value">100+</div>
          <div className="stat-desc">Languages</div>
        </div>
        <div className="stat">
          <div className="stat-value">180+</div>
          <div className="stat-desc">User's Counts</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
