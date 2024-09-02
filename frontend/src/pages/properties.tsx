import Header from "../components/header";
import ServiceList from "../components/serviceList";

const styles = {
    app: {
      padding: '20px',
    },
  };
  
export const Properties = () => {
    return (
        <div style={styles.app}>
            <Header />
            <h2>Service apartments</h2>
            <ServiceList />
        </div>
    )
}