import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../styles/pages/product";
import { GetStaticProps } from "next";

export default function Product() {
    const { query } = useRouter()



    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span> R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed, suscipit laborum autem facere facilis adipisci, quia est odit minus reprehenderit, fuga itaque natus voluptatum consectetur non voluptas quae et.</p>
                <button>Comprar agora</button>

            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 1,

    }
}