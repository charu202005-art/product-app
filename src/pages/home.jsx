import { Link } from "react-router-dom";
import products from "../data";

function Home() {
  return (
    <div style={styles.container}>
      <h1>🛍 Product Store</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={styles.card}
          >
            <h2>{product.name}</h2>

            <h3>{product.price}</h3>

            <Link
              to={`/product/${product.id}`}
            >
              <button style={styles.button}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial",
  },

  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "15px",
    width: "220px",
  },

  button: {
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    background: "#764ba2",
    color: "white",
    cursor: "pointer",
  },
};

export default Home;