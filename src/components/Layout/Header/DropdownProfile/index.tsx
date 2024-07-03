"use client";

import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/Common/Dropdown";
import { RiArrowRightUpLine } from "@remixicon/react";
import React from "react";
import { DropdownUserProfileProps } from "@/data/types/global";
import { usePrivy } from "@privy-io/react-auth";
import { useAppDispatch } from "@/redux/hooks";
import { setNoticeModal } from "@/redux/slices/calcSlice";

const DropDownProfile = ({
    children,
    align = "start",
}: DropdownUserProfileProps) => {
    const dispath = useAppDispatch();
    const { ready, authenticated, logout, login } = usePrivy();

    const signout = () => {
        logout();
    };

    const disableLogout = !ready || (ready && !authenticated);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent align={align}>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onClick={() => dispath(setNoticeModal(true))}
                    >
                        What the tool
                        <RiArrowRightUpLine
                            className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
                            aria-hidden="true"
                        />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        disabled={disableLogout}
                        onClick={signout}
                    >
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownProfile;
