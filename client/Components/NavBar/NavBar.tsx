"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import style from "./NavBar.module.css";
import Link from "next/link";

interface LinkItem {
  ref: string;
  content: string;
}

interface NavBarProps {
  links: LinkItem[];
}

const NavBar = ({ links }: NavBarProps) => {
  return (
    <Box className={style.allContainer}>
      <Box className={style.decoration} />
      {links.map((data, i) => (
        <Typography key={i} className={style.textLink}>
          <Link href={data.ref}>{data.content}</Link>
        </Typography>
      ))}
      <Box className={style.decoration} />
    </Box>
  );
};

export default NavBar;
