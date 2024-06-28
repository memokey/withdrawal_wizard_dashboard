"use client";

import { LineChart } from "@tremor/react";

import { FinancialDataProps } from "@/data/types/global";
import Card from "../Common/Card";

interface LineChartHeroProps {
    linechart_data: FinancialDataProps[];
}

const dataFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

export function LineChartHero(props: LineChartHeroProps) {
    const { linechart_data } = props;
    const chart_data = linechart_data.map((item: FinancialDataProps) => ({
        year: item.year,
        "S&P 500 Index": item["S&P 500"]["Account Balance"],
        "FIA + Index Par": item["FIA + Index Par"]["Account Balance"],
        "FIA + Index Par + Bonus":
            item["FIA + Index Par + Bonus"]["Account Balance"],
        "Struntured Notes": item["Struntured Notes"]["Account Balance"],
    }));
    return (
        <Card title="Account Balance">
            <LineChart
                className="h-80 w-full"
                data={chart_data}
                index="year"
                categories={[
                    "S&P 500 Index",
                    "FIA + Index Par",
                    "FIA + Index Par + Bonus",
                    "Struntured Notes",
                ]}
                colors={["blue", "orange", "green", "gray"]}
                valueFormatter={dataFormatter}
                yAxisWidth={80}
                onValueChange={(v) => console.log(v)}
            />
        </Card>
    );
}
