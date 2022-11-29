import React from "react";
import Link from "next/link";
import { Home, BarChart2, Plus } from "react-feather";
import styles from './styles.module.scss';

function View({linkAdd, path}) {
  return (
    <div className={styles.navBar}>
      <Link href={"/home"}>
        <div className={path==='/home'?'active':''}>
          <Home />
        </div>
      </Link>

      <Link href={linkAdd}>
        <div className={styles.add}>
          <Plus color="white" />
        </div>
      </Link>

      <Link href={"/updateing"}>
        <div className={path==='/updateing'?'active':''}>
          <BarChart2 color="#D6E0F6" />
        </div>
      </Link>
    </div>
  );
}

export default View;
