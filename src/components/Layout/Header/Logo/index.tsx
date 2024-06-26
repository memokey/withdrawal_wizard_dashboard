import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image
                src={"/images/Logo-01.png"}
                alt="logo"
                width={188}
                height={36}
            />
        </Link>
    );
};

export default Logo;
