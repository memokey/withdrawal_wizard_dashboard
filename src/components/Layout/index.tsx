import { LayoutType } from "@/data/types/global";
import React from "react";

// Import the JSON file
import data from "@/data/moke-data/chartData.json";

// Use the data with the defined type

const Layout = (props: LayoutType) => {
    return (
        <div>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
                {!!props.leftSidebar && props.leftSidebar}
            </div>
            <div className="w-full p-8 lg:pl-[352px] pt-2">
                {props.header}
                <div className="">{props.children}</div>
            </div>
            {!!props.footer && props.footer}
        </div>
    );
};

export default Layout;
