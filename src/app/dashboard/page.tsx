"use client";

import Layout from "@/components/Layout";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import { LineChartHero } from "@/components/Charts/LineChart";
import { BarChartHero } from "@/components/Charts/BarChart";
import { AccountBalanceTable } from "@/components/Table/AccountBalanceTable";

import json_data from "@/data/moke-data/chartData.json";
import { FinancialDataProps } from "@/data/types/global";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const financial_data: FinancialDataProps[] = json_data;

const Dashboard = () => {
    const router = useRouter();
    const { authenticated, ready } = usePrivy();

    useEffect(() => {
        if (!authenticated && ready) {
            router.push("/login");
        }
    }, [ready, authenticated]);

    return (
        <Layout leftSidebar={<LeftSidebar />}>
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
};

export default Dashboard;
