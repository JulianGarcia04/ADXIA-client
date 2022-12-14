import React from "react";
import EmployeeCard from "~/components/EmployeeCard/EmployeeCard";
import { NothingMessage } from "~/components/NothingMessage/NothingMessage";
import styles from "./styles.module.scss";

function View({ employees }) {  
  return (
    <div className={styles.employees}>
      {(employees && employees.length === 0) ? 
      <NothingMessage message="No hay empleados"/> : null}
      {employees ? employees.map((employee)=> (
        <EmployeeCard key={employee.id} employeeData={employee} options/>
      )): null}
    </div>

  )
}

export default View;
