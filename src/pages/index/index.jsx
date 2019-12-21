import React, { useState } from 'react';
import styles from "./index.scss";
import { Link } from 'react-router-dom';
import ShowEarth from '../../components/earth/showearth';

function IndexPage() {
  // const [count, setCount] = useState(0);
  return (
    <div className={styles.page}>
      <ShowEarth />
    </div>
  );
}
export default IndexPage;
