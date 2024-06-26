import React from "react";

import {
    Table,
    TableHead,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
} from "@tremor/react";
import Card from "../Common/Card";
import "./TableStyle.css";

import { FinancialDataProps } from "@/data/types/global";

interface AccountBalanceTableProps {
    balance_data: FinancialDataProps[];
}

export function AccountBalanceTable(props: AccountBalanceTableProps) {
    const { balance_data } = props;
    return (
        <Card title="Account Balance Table">
            <Table className="mt-5 text-center table-collapse">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className="table-header-cell"></TableHeaderCell>
                        <TableHeaderCell
                            colSpan={4}
                            className="table-header-cell table-cell-s-p-500"
                        >
                            S&P 500
                        </TableHeaderCell>
                        <TableHeaderCell
                            colSpan={3}
                            className="table-header-cell table-cell-fia-index"
                        >
                            FIA + Index Par
                        </TableHeaderCell>
                        <TableHeaderCell
                            colSpan={3}
                            className="table-header-cell table-cell-fia-index-bonus"
                        >
                            FIA + Index Par + Bonus
                        </TableHeaderCell>
                        <TableHeaderCell
                            colSpan={3}
                            className="table-header-cell table-cell-structured-notes"
                        >
                            Structured Notes
                        </TableHeaderCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell className="bg-red-100 text-center table-cell">
                            Age
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-s-p-500">
                            Account Balance
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-s-p-500">
                            Growth
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-s-p-500">
                            Net Growth
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-s-p-500">
                            W/D
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index">
                            Account Balance
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index">
                            Growth
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index">
                            W/D
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index-bonus">
                            Account Balance
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index-bonus">
                            Growth
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-fia-index-bonus">
                            W/D
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-structured-notes">
                            Account Balance
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-structured-notes">
                            Growth
                        </TableHeaderCell>
                        <TableHeaderCell className="table-cell table-cell-structured-notes">
                            W/D
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {balance_data.map((item: FinancialDataProps) => {
                        return (
                            <TableRow key={item["Age"]}>
                                <TableCell className="bg-red-100 text-center table-cell">
                                    {item["Age"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-s-p-500">
                                    {item["S&P 500"]["Account Balance"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-s-p-500">
                                    {item["S&P 500"]["Growth"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-s-p-500">
                                    {item["S&P 500"]["Net Growth"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-s-p-500">
                                    {item["S&P 500"]["W/D"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index">
                                    {item["FIA + Index Par"]["Account Balance"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index">
                                    {item["FIA + Index Par"]["Growth"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index">
                                    {item["FIA + Index Par"]["W/D"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index-bonus">
                                    {
                                        item["FIA + Index Par + Bonus"][
                                            "Account Balance"
                                        ]
                                    }
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index-bonus">
                                    {item["FIA + Index Par + Bonus"]["Growth"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-fia-index-bonus">
                                    {item["FIA + Index Par + Bonus"]["W/D"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-structured-notes">
                                    {
                                        item["Struntured Notes"][
                                            "Account Balance"
                                        ]
                                    }
                                </TableCell>
                                <TableCell className="table-cell table-cell-structured-notes">
                                    {item["Struntured Notes"]["Growth"]}
                                </TableCell>
                                <TableCell className="table-cell table-cell-structured-notes">
                                    {item["Struntured Notes"]["W/D"]}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Card>
    );
}
