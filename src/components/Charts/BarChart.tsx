"use client";

import { BarChart } from "@tremor/react";
import { FinancialDataProps } from "@/data/types/global";
import Card from "../Common/Card";

interface BarChartHeroProps {
    barchart_data: FinancialDataProps[];
}

const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString() + "%";

export function BarChartHero(props: BarChartHeroProps) {
    const { barchart_data } = props;
    const chart_data = [
        {
            name: "S&P 500",
            "S&P 500": 7.29,
        },
        {
            name: "FIA",
            FIA: 9.7,
        },
        {
            name: "FIA+B",
            "FIA+B": 12,
        },
        {
            name: "SN",
            SN: 8,
        },
    ];
    return (
        <Card title="Avg RoR Cap">
            <BarChart
                className="mt-6"
                data={chart_data}
                index="name"
                categories={["S&P 500", "FIA", "FIA+B", "SN"]}
                colors={["blue", "orange", "green", "gray"]}
                valueFormatter={dataFormatter}
                yAxisWidth={36}
            />
        </Card>
    );
}
