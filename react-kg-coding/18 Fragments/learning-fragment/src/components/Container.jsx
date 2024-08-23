import styles from "./Container.module.css";

const Container = (props) => {
    // return <div>Container</div>
    return <div className={styles.container}>{props.children}</div>;
};

export default Container;