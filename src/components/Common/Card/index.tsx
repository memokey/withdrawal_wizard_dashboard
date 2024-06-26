import { CardType } from "@/data/types/global";
import React from "react";

const Card = (props: CardType) => {
    return (
        <div className={`shadow-tremor rounded-xl ${props.styles}`}>
            <div className="z-10 rounded-xl bg-slate-50/40 p-1.5 ring-1 ring-inset ring-slate-200/50">
                <div className="overflow-hidden rounded-md bg-white p-6 shadow-2xl shadow-black/5 ring-1 ring-slate-900/5">
                    <h3 className="text-tremor-default text-tremor-content">
                        {props.title}
                    </h3>
                    <div className="w-full mt-6 hidden h-fit lg:block">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
