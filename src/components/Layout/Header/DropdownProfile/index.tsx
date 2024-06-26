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

const DropDownProfile = ({
    children,
    align = "start",
}: DropdownUserProfileProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent align={align}>
                <DropdownMenuLabel>emma.stone@acme.com</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Documentation
                        <RiArrowRightUpLine
                            className="mb-1 ml-1 size-2.5 shrink-0 text-gray-500"
                            aria-hidden="true"
                        />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownProfile;
