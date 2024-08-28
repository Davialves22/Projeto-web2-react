import { Card } from './../../components/card/Card'
import { CardData } from './../../interfaces/CardData'
import classes from './Produtos.module.css'

export function Produto() {

    const cardsData: CardData[] = [
        { id: "1011", title: "Produto 1", text: "Texto personalizado para o Card 1.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 2", text: "Texto personalizado para o Card 2.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 3", text: "Texto personalizado para o Card 3.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 4", text: "Texto personalizado para o Card 4.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
        { id: "1011", title: "Produto 5", text: "Texto personalizado para o Card 5.", imageSrc: "https://picsum.photos/id/1011/185/132", price: 29.99 },
        { id: "1012", title: "Produto 6", text: "Texto personalizado para o Card 6.", imageSrc: "https://picsum.photos/id/1012/185/132", price: 49.99 },
        { id: "1013", title: "Produto 7", text: "Texto personalizado para o Card 7.", imageSrc: "https://picsum.photos/id/1013/185/132", price: 19.99 },
        { id: "1014", title: "Produto 8", text: "Texto personalizado para o Card 8.", imageSrc: "https://picsum.photos/id/1014/185/132", price: 39.99 },
    ];

    return (

        <section className={`container`}>
            <div className={`row g-5 my-5 p-5`}>
                {cardsData.map((card, index) => (
                    <div key={index} className="col-12 col-md-3 mb-5 justify-content-center gap-2">
                        <Card
                            title={card.title}
                            text={`Preço: R$ ${card.price}\n${card.text}`}
                            imageSrc={card.imageSrc}
                            buyButtonText="Comprar"
                            buyButtonLink="#"
                            cartButtonText="bi bi-cart"
                            cartButtonLink="#"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}