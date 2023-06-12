
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/product";
import { productData, responsive } from "../data";
import Navbar from "../components/navbar";
import "../App.css";
import Footer from "../components/footer";

export default function Home() {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    return (
        <div className="fbg">
            <Navbar />
            <section className="sect1">
                <h1>Welcome to the Portal of Application for Somaiya Awards</h1>
            </section>
            <h2 className="applyA">Apply for Awards</h2>
            <Carousel showDots={true} responsive={responsive}>
                {product}
            </Carousel>
            <Footer />
        </div>
    );
}
