"use client";

import { LayoutType } from "@/data/types/global";
import React, { useEffect } from "react";

// Import the JSON file
import { NoticeModal } from "../Common/Modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setNoticeModal } from "@/redux/slices/calcSlice";

// Use the data with the defined type

const Layout = (props: LayoutType) => {
    const dispatch = useAppDispatch();

    const { noticeModal } = useAppSelector((state) => state.calc);

    useEffect(() => {
        const noticeLocalModal = localStorage.getItem("notice-modal");
        console.log(noticeLocalModal);
        if (!noticeLocalModal || noticeLocalModal == "") {
            localStorage.setItem("notice-modal", "true");
            dispatch(setNoticeModal(true));
        }
    }, []);

    return (
        <div className="relative">
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-80 lg:flex-col">
                {!!props.leftSidebar && props.leftSidebar}
            </div>
            <div className="w-full p-8 lg:pl-[352px]">
                {props.header}
                <div className="">{props.children}</div>
            </div>
            {!!props.footer && props.footer}
            {noticeModal && <NoticeModal />}
        </div>
    );
};

export default Layout;
