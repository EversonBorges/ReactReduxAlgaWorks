import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {sum, subtract} from '../store/Calculator/Calculator.actions'

function Calculator() {
  const disptach = useDispatch()
  const result =  useSelector(state => state.calculator)
  const[a, setA] = useState(0)
  const[b, setB] = useState(0)

  return <>
    <input type="text" placeholder="a" value={a} onChange={(e) => setA(Number(e.target.value))} />
    <input type="text" placeholder="b" value={b} onChange={(e) => setB(Number(e.target.value))}/>

    <button
      onClick={() =>{
        disptach(sum(a, b))
      }}
    >Somar</button>
    <button>Subtrair</button>
    <div>
      { result }
    </div>
  </>
}

export default Calculator

