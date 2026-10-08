"use client";
import { useEffect } from "react";

// Module-level, so the greeting logs once per page load even when React runs effects twice in development.
let greeted = false;

// A hello for anyone who opens DevTools.
export default function ConsoleGreeting() {
  useEffect(() => {
    if (greeted) return;
    greeted = true;
    console.log(
      "%cHi! Poking around the source?%c\nI’m looking for 2027 new grad roles. Say hi: oogale@uwaterloo.ca · github.com/OmOgale",
      "color: #b47c22; font-size: 16px; font-weight: 600; font-family: Georgia, serif;",
      "font-size: 13px; line-height: 1.6;"
    );
  }, []);
  return null;
}
