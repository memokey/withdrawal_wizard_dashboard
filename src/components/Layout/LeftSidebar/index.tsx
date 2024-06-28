"use client";

import React from "react";
import Logo from "../Header/Logo";
import DropDownProfile from "../Header/DropdownProfile";
import { Button } from "@/components/Common/Button";
import { cx, focusRing, percentageFormatter } from "@/lib/utils";
import {
    RiAlarmFill,
    RiMoneyDollarCircleFill,
    RiMoneyDollarCircleLine,
    RiMore2Fill,
    RiOrganizationChart,
    RiPercentFill,
    RiPsychotherapyFill,
    RiPsychotherapyLine,
} from "@remixicon/react";
import { Badge, Divider, TextInput } from "@tremor/react";
import { DEFAULT_INPUTS } from "@/data";

const LeftSidebar = () => {
    return (
        <aside className="flex grow flex-col gap-y-6 overflow-y-auto border-r border-gray-200 bg-white py-4 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-1 flex-col">
                <div className="flex justify-center mt-4 px-4">
                    <Logo />
                </div>
                <div className="mt-[40px] h-[calc(100vh-188px)] overflow-y-auto px-4">
                    <div className="">
                        <Divider className="my-2">Default Values</Divider>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Investment amount($)
                            </label>
                            <TextInput
                                icon={RiMoneyDollarCircleFill}
                                className="mx-auto max-w-xs mt-1"
                                placeholder="Investment"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.investment}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Client age
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPsychotherapyFill}
                                placeholder="Client Age"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.clientAge}
                                error={true}
                                errorMessage="The age should be in 20."
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Years
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiAlarmFill}
                                placeholder="Years"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.years}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Beginning year
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiOrganizationChart}
                                placeholder="Year"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.years}
                            />
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <Divider className="my-2">
                            <Badge>S&P 500 Index</Badge>
                        </Divider>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Desired allocation (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Allocation"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.sp_rate}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Withdrawals
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiMoneyDollarCircleFill}
                                placeholder="Withdrawals"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.wd_money}
                            />
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <Divider className="my-2">
                            <Badge color={"orange"}>FIA + Index Par</Badge>
                        </Divider>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Desired allocation (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Allocation"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.sp_rate}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Index Participation Rate (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Allocation"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.in_par}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Withdrawals
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiMoneyDollarCircleFill}
                                placeholder="Withdrawals"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.wd_money}
                            />
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <Divider className="my-2">
                            <Badge color={"green"}>
                                FIA + Index Par + Bonus
                            </Badge>
                        </Divider>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Desired allocation (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Allocation"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.sp_rate}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Bonus (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Bonus"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.in_par}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Withdrawals
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiMoneyDollarCircleFill}
                                placeholder="Withdrawals"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.wd_money}
                            />
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <Divider className="my-2">
                            <Badge color={"gray"}>Structured Notes</Badge>
                        </Divider>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Desired allocation (%)
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiPercentFill}
                                placeholder="Allocation"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.sp_rate}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 h-[90px]">
                            <label className="text-sm leading-none text-gray-600 dark:text-gray-50 font-medium">
                                Withdrawals
                            </label>
                            <TextInput
                                className="mx-auto max-w-xs mt-1"
                                icon={RiMoneyDollarCircleFill}
                                placeholder="Withdrawals"
                                type="number"
                                defaultValue={DEFAULT_INPUTS.wd_money}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-full px-4">
                <DropDownProfile>
                    <Button
                        aria-label="User settings"
                        variant="ghost"
                        className={cx(
                            focusRing,
                            "group flex w-full !outline-none items-center justify-between rounded-md p-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                        )}
                    >
                        <span className="flex items-center gap-3">
                            <span
                                className="flex aspect-square size-8 items-center justify-center rounded bg-tremor-brand-primary p-2 text-xs font-medium text-white dark:bg-indigo-500"
                                aria-hidden="true"
                            >
                                ES
                            </span>
                            <span>Emma Stone</span>
                        </span>
                        <RiMore2Fill
                            className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-400"
                            aria-hidden="true"
                        />
                    </Button>
                </DropDownProfile>
            </div>
        </aside>
    );
};

export default LeftSidebar;
