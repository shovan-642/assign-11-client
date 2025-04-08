import React from "react";

const Stats = () => {
  return (
    <div className="relative z-50 w-5/12 mx-auto top-[-50px] rounded-2xl bg-gray-100 text-black dark:text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow rounded-2xl relative z-40" >
        <div className="stat">
          <div className="stat-value">320+</div>
          <div className="stat-desc dark:text-black">Experienced Tutors</div>
        </div>

        <div className="stat">
          <div className="stat-value">30000+</div>
          <div className="stat-desc dark:text-black">5 star tutor reviews</div>
        </div>

        <div className="stat">
          <div className="stat-value">100+</div>
          <div className="stat-desc dark:text-black">Languages</div>
        </div>
        <div className="stat">
          <div className="stat-value">180+</div>
          <div className="stat-desc dark:text-black">User's Counts</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
