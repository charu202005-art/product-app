import { Link } from "react-router-dom";

function Home() {
  const products = [
    { id: 1, name: "iPhone 15", price: "₹79,999" },
    { id: 2, name: "Samsung S24", price: "₹69,999" },
    { id: 3, name: "OnePlus 12", price: "₹59,999" },
  ];

  return (
    <div style={styles.container}>
      <h1>🛍 Product List</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>

            <Link to={`/product/${product.id}`}>
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
    textAlign: "center",
    fontFamily: "Arial",
    padding: "40px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "15px",
    width: "200px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
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