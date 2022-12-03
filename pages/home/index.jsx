import React from "react";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import NavBar from "@/components/NavBar/NavBar";
import FigureBackground from '@/components/FigureBackground/FigureBackground';
import OrdersCard from '@/components/OrdersCard/OrdersCard';
import Avatar from "@/assets/images/Avatar.svg";
import Figure from '@/assets/images/GroupWhite.svg';
import { Home, Plus, BarChart2 } from "react-feather";
import styles from "./home.module.scss";
import OptionsNavBar from "~/components/OptionsNavBar/OptionsNavBar";

function Index() {
  return (
    <DefaultLayout className={styles.layout}>
      {/* Header color blue where contain differents information of the user */}
      <header className={styles.headerContainer}>
        <FigureBackground src={Figure} right={0} top={0} rotate={50}/>
        <FigureBackground src={Figure} left={0} bottom={0} rotate={10}/>
        <div className={styles.informationContainer}>
          <Image src={Avatar} alt="Perfil Image" width={50} height={50} />
          <Link href={'/orders'}>Como han estado las ventas?</Link>
        </div>
        <div className={styles.nameConatainer}>
            <h1>Bienvenido</h1>
            <h5>Julián Martinez</h5>
        </div>
      </header>
      {/* Options for access to orders and clients */}
      <section className={styles.mainMenu}>
        <h1>Menu principal</h1>
        <Link href={'/orders'}>
          <div style={{borderBottom:'1px solid #F1F1FF'}}>
            <h1>Pedidos</h1>
            <span>Visualiza todos los pedidos que has realizado</span>
          </div>
        </Link>
        <Link href={'/clients'}>
          <div style={{borderBottom:'1px solid #F1F1FF'}}>
            <h1>Clientes</h1>
            <span>Visualiza, agregar, elimina y actualiza clientes</span>
          </div>
        </Link>
        <Link href={'/employees'}>
          <div style={{borderBottom:'1px solid #F1F1FF'}}>
            <h1>Empleados</h1>
            <span>Visualiza, agregar, elimina y actualiza empleados</span>
          </div>
        </Link>
        <Link href={'/products'}>
          <div>
            <h1>Productos</h1>
            <span>Visualiza, agregar, elimina y actualiza productos</span>
          </div>
        </Link>
      </section>
      <section className={styles.recientOrders}>
        <h1 className={styles.title}>Pedidos recientes</h1>
        <OrdersCard/>
        <OrdersCard/>
      </section>
      <NavBar>
        <OptionsNavBar linkAdd={'/orders/add'}/>
      </NavBar>
    </DefaultLayout>
  );
}

export default Index;
