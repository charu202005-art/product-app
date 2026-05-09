import { useParams } from "react-router-dom";
import products from "../data";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>❌ Product Not Found</h1>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>{product.name}</h1>

        <h2>{product.price}</h2>

        <p>
          This is dynamic product details
          page.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #667eea, #764ba2)",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
  },
};

export default ProductDetails;