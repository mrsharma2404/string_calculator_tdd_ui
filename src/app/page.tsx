"use client";
import { useState } from "react";
import BasicButton from "./components/BasicButton";
import StringCalculator from "./helpers/StringCalculator";
import styles from "./page.module.css";

export default function Home() {
  const [stringInput, setStringInput] = useState("");
  const [stringSum, setStringSum] = useState<number>(0);

  const handleCalculateBtn = () => {
    // the input box is interpreting line break \n as an escaped newline character \\n.
    const formattedInput = stringInput.replace(/\\n/g, "\n");
    // replacing \\n with \n to handle input box behaviour
    let sum = StringCalculator(formattedInput);
    setStringSum(sum);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <input
          onChange={(e) => setStringInput(e.target.value)}
          value={stringInput}
        />
      </div>
      <div>
        <BasicButton onClickFun={handleCalculateBtn} label="Calculate" />
      </div>
      <div>Sum : {stringSum}</div>
    </div>
  );
}
