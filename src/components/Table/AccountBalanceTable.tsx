import React from "react";

import {
    Table,
    TableHead,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    Callout,
} from "@tremor/react";
import Card from "../Common/Card";
import "../../styles/tableStyle.css";

import { FinancialDataProps } from "@/data/types/global";

interface AccountBalanceTableProps {
    balance_data: FinancialDataProps[];
}

export function AccountBalanceTable(props: AccountBalanceTableProps) {
    const { balance_data } = props;
    return (
        <Card title="Account Balance Table">
            <Table className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell
                            className="table-header-cell"
                            colSpan={3}
                        ></TableHeaderCell>
                        <TableHeaderCell colSpan={4}>
                            <Callout title="S&P 500" color="blue"></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="FIA + Index Par"
                                color="orange"
                            ></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="FIA + Index Par + Bonus (S)"
                                className="!border-tremo-brand-primary"
                                color={"green"}
                            ></Callout>
                        </TableHeaderCell>
                        <TableHeaderCell colSpan={3}>
                            <Callout
                                title="Structured Notes (C)"
                                color="gray"
                            ></Callout>
                        </TableHeaderCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell>No</TableHeaderCell>
                        <TableHeaderCell>Age</TableHeaderCell>
                        <TableHeaderCell>Year</TableHeaderCell>
                        <TableHeaderCell>Account Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>Net Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Account Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Account Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                        <TableHeaderCell>Account Balance</TableHeaderCell>
                        <TableHeaderCell>Growth</TableHeaderCell>
                        <TableHeaderCell>W/D</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {balance_data.map(
                        (item: FinancialDataProps, index: number) => {
                            return (
                                <TableRow key={item["Age"]}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item["Age"]}</TableCell>
                                    <TableCell>{1999 + index}</TableCell>
                                    <TableCell>
                                        {item["S&P 500"]["Account Balance"]}
                                    </TableCell>
                                    <TableCell>
                                        {item["S&P 500"]["Growth"]}
                                    </TableCell>
                                    <TableCell>
                                        {item["S&P 500"]["Net Growth"]}
                                    </TableCell>
                                    <TableCell>
                                        {item["S&P 500"]["W/D"]}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            item["FIA + Index Par"][
                                                "Account Balance"
                                            ]
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {item["FIA + Index Par"]["Growth"]}
                                    </TableCell>
                                    <TableCell>
                                        {item["FIA + Index Par"]["W/D"]}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            item["FIA + Index Par + Bonus"][
                                                "Account Balance"
                                            ]
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {
                                            item["FIA + Index Par + Bonus"][
                                                "Growth"
                                            ]
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {item["FIA + Index Par + Bonus"]["W/D"]}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            item["Struntured Notes"][
                                                "Account Balance"
                                            ]
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {item["Struntured Notes"]["Growth"]}
                                    </TableCell>
                                    <TableCell>
                                        {item["Struntured Notes"]["W/D"]}
                                    </TableCell>
                                </TableRow>
                            );
                        }
                    )}
                </TableBody>
            </Table>
        </Card>
    );
}
