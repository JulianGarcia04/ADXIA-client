import React from "react";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import NavBar from "@/components/NavBar/NavBar";
import FigureBackground from '@/components/FigureBackground/FigureBackground';
import Avatar from "@/assets/images/Avatar.svg";
import Figure from '@/assets/images/GroupWhite.svg';
import styles from "./home.module.scss";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";
import { requiredEmployee } from "~/helpers/requiredEmployee";
import { EMPLOYEE_TYPE_ADMIN, EMPLOYEE_TYPE_DELIVERER, EMPLOYEE_TYPE_VENDOR } from "~/constants/employeeTypes";
import OrdersSkeleton from "~/components/OrdersSkeleton/OrdersSkeleton";
import { useIsFetching } from "react-query";
import { Orders } from "~/components/Orders/Orders";
import { useOrder } from "~/contexts/orderContext";
import { useEmployee } from "~/contexts/employeeContext";

function Index({ employee }) {
  useEmployee(employee);

  const { resetState } = useOrder();
  
  const isFetchingOrders = useIsFetching(["orders"]);

  React.useEffect(()=> { 
    resetState();
  }, []);

  return (
    <DefaultLayout className={styles.layout}>
      {/* Header color blue where contain differents information of the user */}
      <header className={styles.headerContainer}>
        <FigureBackground src={Figure} right={0} top={0} rotate={50}/>
        <FigureBackground src={Figure} left={0} bottom={0} rotate={10}/>
        <div className={styles.informationContainer}>
          <Image src={Avatar} alt="Perfil Image" width={50} height={50} />
          <Link href={'/orders'}>
            {({
              [EMPLOYEE_TYPE_ADMIN]: "Como han estado las ventas",
              [EMPLOYEE_TYPE_VENDOR]: "Como han estado las ventas",
              [EMPLOYEE_TYPE_DELIVERER]: "Como han estado las entregas"
            })[employee.type]}
          </Link>
        </div>
        <div className={styles.nameConatainer}>
            <h1>Bienvenido</h1>
            <h5>{employee.name} {employee.surname}</h5>
        </div>
      </header>
      {/* Options for access to orders and clients */}
      <section className={styles.mainMenu}>
        <h1>Menu principal</h1>
        {(employee.type === EMPLOYEE_TYPE_ADMIN ||
          employee.type === EMPLOYEE_TYPE_VENDOR ||
          employee.type === EMPLOYEE_TYPE_DELIVERER) ? 
          <Link href={'/orders'}>
            <div style={{borderBottom:'1px solid #F1F1FF'}}>
              <h1>Pedidos</h1>
              <span>Visualiza todos los pedidos que has realizado</span>
            </div>
          </Link> : null}
        {(employee.type === EMPLOYEE_TYPE_ADMIN ||
          employee.type === EMPLOYEE_TYPE_VENDOR) ?
          <Link href={'/clients'}>
            <div style={{borderBottom:'1px solid #F1F1FF'}}>
              <h1>Clientes</h1>
              <span>Visualiza, agregar, elimina y actualiza clientes</span>
            </div>
          </Link> : null}
        {employee.type === EMPLOYEE_TYPE_ADMIN &&
        <Link href={'/employees'}>
          <div style={{borderBottom:'1px solid #F1F1FF'}}>
            <h1>Empleados</h1>
            <span>Visualiza, agregar, elimina y actualiza empleados</span>
          </div>
        </Link>}
        {employee.type === EMPLOYEE_TYPE_ADMIN &&
        <Link href={'/products'}>
          <div>
            <h1>Productos</h1>
            <span>Visualiza, agregar, elimina y actualiza productos</span>
          </div>
        </Link>}
      </section>
      <section className={styles.recientOrders}>
        <h1 className={styles.title}>Pedidos recientes</h1>
        {isFetchingOrders ? <OrdersSkeleton/> : <Orders/>}
      </section>
      <NavBar>
        <OptionsNavBar linkAdd={'/orders/add'}/>
      </NavBar>
    </DefaultLayout>
  );
}

export default Index;

export const getServerSideProps = requiredEmployee((employee)=> {
  
  if(employee.type === EMPLOYEE_TYPE_ADMIN ||
    employee.type === EMPLOYEE_TYPE_VENDOR ||
    employee.type === EMPLOYEE_TYPE_DELIVERER) {
    return {props: {employee}};
  } 

  return {props: {}, redirect: {ddestination: "/login"}};
})
