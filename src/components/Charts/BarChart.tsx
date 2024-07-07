"use client";

import { BarChart } from "@tremor/react";
import { FinancialDataProps } from "@/data/types/global";
import Card from "../Common/Card";
import { useAppSelector } from "@/redux/hooks";

const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString() + "%";

export function BarChartHero() {
    const { avgGrowth } = useAppSelector((state) => state.calc);
    const chart_data = [
        {
            name: "S&P 500",
            "S&P 500": avgGrowth.sp,
        },
        {
            name: "FIA",
            FIA: avgGrowth.inPar,
        },
        {
            name: "FIA+B",
            "FIA+B": avgGrowth.inParBonus,
        },
        {
            name: "SN",
            SN: avgGrowth.sn,
        },
    ];
    return (
        <Card title="Avg RoR Cap">
            <BarChart
                className="mt-6"
                data={chart_data}
                index="name"
                categories={["S&P 500", "FIA", "FIA+B", "SN"]}
                colors={["orange", "gray", "green", "blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={36}
            />
        </Card>
    );
}
