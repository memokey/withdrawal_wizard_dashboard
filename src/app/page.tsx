import Header from "@/components/Layout/Header";
import Layout from "@/components/Layout";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import { LineChartHero } from "@/components/Charts/LineChart";
import { BarChartHero } from "@/components/Charts/BarChart";
import { AccountBalanceTable } from "@/components/Table/AccountBalanceTable";

import json_data from "@/data/moke-data/chartData.json";
import { FinancialDataProps } from "@/data/types/global";

const financial_data: FinancialDataProps[] = json_data;

export default function Home() {
    return (
        <Layout leftSidebar={<LeftSidebar />}>
            <div className="mb-5">
                <div className="mt-4 text-tremor-brand-secondary font-bold font-extrabold normal-case tracking-tight sm:text-3xl mb-0">
                    Withdrawal Wizard
                </div>
                <h3 className="text-lg text-tremor-brand-secondary">
                    Distribution Risk Analyzer
                </h3>
            </div>
            <div className="grid grid-cols-10">
                <div className="col-span-7 mr-4">
                    <LineChartHero linechart_data={financial_data} />
                </div>
                <div className="col-span-3">
                    <BarChartHero barchart_data={financial_data} />
                </div>
            </div>
            <div className="mt-4">
                <AccountBalanceTable
                    balance_data={financial_data}
                ></AccountBalanceTable>
            </div>
        </Layout>
    );
}
