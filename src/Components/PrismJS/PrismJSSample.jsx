import React from "react"
import {PrismCode} from "./PrismCode"
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
const PrismJSSample = () => (
  <PrismCode
    code={code}
    language="js"
    plugins={["line-numbers"]}
  />
)

export default PrismJSSample