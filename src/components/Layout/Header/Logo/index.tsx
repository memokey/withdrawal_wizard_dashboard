import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image
                src={"/images/Logo-01.png"}
                alt="logo"
                width={210}
                height={24}
            />
        </Link>
    );
};

export default Logo;
