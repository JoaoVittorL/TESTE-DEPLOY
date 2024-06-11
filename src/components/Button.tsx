"use client";
import React, { useState } from "react";

export default function Button() {
  const [valor, setValor] = useState("");

  async function handleValues() {
    setValor("teste");
  }

  return (
    <button
      onClick={() => handleValues()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Clique aqui
    </button>
  );
}
