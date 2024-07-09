import React from "react";

import {
    Table,
    TableHead,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    Callout,
    TextInput,
} from "@tremor/react";
import Card from "../Common/Card";
import "../../styles/table.css";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSnSpecificGrowth } from "@/redux/slices/calcSlice";

export function AccountBalanceTable() {
    const dispatch = useAppDispatch();
    const { balances, isEditableModal, snGrowth } = useAppSelector(
        (state) => state.calc
    );
    return (
        <Card title="Account Balance Table" editable="true">
            <Table className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell
                            className="table-header-cell"
                            colSpan={3}
                        ></TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="S&P 500 Index"
                                color="orange"
                            ></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="FIA + Index Par"
                                color="gray"
                            ></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="FIA + Index Par + Bonus (CI)"
                                className="!border-tremo-brand-primary"
                                color={"green"}
                            ></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="Structured Notes (SI)"
                                color="blue"
                            ></Callout>
                        </TableHeaderCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell>No</TableHeaderCell>
                        <TableHeaderCell>Age</TableHeaderCell>
                        <TableHeaderCell>Year</TableHeaderCell>
                        <TableHeaderCell>Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {balances.map((bl: any, index: number) => {
                        return (
                            <TableRow key={bl.ages}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{bl.ages}</TableCell>
                                <TableCell>{bl.year}</TableCell>
                                <TableCell className="bg-[#ec732a1a]">
                                    {Math.round(bl.sp.balance)}
                                </TableCell>
                                <TableCell className="bg-[#ec732a1a]">
                                    {Math.round(bl.sp.growth * 100) / 100}
                                </TableCell>
                                <TableCell className="bg-[#ec732a1a]">
                                    {bl.sp.wdMoney}
                                </TableCell>
                                <TableCell className="bg-[#6060601a]">
                                    {Math.round(bl.inPar.balance)}
                                </TableCell>
                                <TableCell className="bg-[#6060601a]">
                                    {Math.round(bl.inPar.growth * 100) / 100}
                                </TableCell>
                                <TableCell className="bg-[#6060601a]">
                                    {bl.inPar.wdMoney}
                                </TableCell>
                                <TableCell className="bg-[#8cc44f1a]">
                                    {Math.round(bl.inParBonus.balance)}
                                </TableCell>
                                <TableCell className="bg-[#8cc44f1a]">
                                    {Math.round(bl.inParBonus.growth * 100) /
                                        100}
                                </TableCell>
                                <TableCell className="bg-[#8cc44f1a]">
                                    {bl.inParBonus.wdMoney}
                                </TableCell>
                                <TableCell className="bg-[#3b82f61a]">
                                    {Math.round(bl.sn.balance)}
                                </TableCell>
                                <TableCell className="bg-[#3b82f61a]">
                                    {isEditableModal ? (
                                        <TextInput
                                            placeholder="Growth"
                                            className="!w-20 !min-w-20"
                                            type="number"
                                            value={snGrowth[
                                                bl.year - 1970
                                            ].toString()}
                                            onChange={(e) =>
                                                dispatch(
                                                    setSnSpecificGrowth({
                                                        snSpecificGrowth:
                                                            e.target.value,
                                                        index: bl.year - 1970,
                                                    })
                                                )
                                            }
                                        />
                                    ) : (
                                        Math.round(bl.sn.growth * 100) / 100
                                    )}
                                </TableCell>
                                <TableCell className="bg-[#3b82f61a]">
                                    {bl.sn.wdMoney}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Card>
    );
}
