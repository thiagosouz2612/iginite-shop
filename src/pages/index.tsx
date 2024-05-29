import Image from 'next/image';
import { stripe } from '@/src/lib/stripe';
import { HomeContainer, Product } from "./styles/pages/home";
import { GetStaticProps } from "next";
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe';

import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}
//Chamada à API do Stripe
export const getStaticProps: GetStaticProps = async ({ }) => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount != null ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100) : 0),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 6 * 2, // 2 horas
  }
}
