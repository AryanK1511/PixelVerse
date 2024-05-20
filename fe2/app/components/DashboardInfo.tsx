import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";
import React from 'react';

const DashboardInfo = withAuthInfo((props: WithAuthInfoProps) => {
    return (
    <>
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-7xl dark:text-white flex flex-col">
        <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
        {"Hello!"}
        </span>
        <span className="text-7xl mt-5">{props.user?.username}</span>
        </h1>
    </>
    );
});

export default DashboardInfo;