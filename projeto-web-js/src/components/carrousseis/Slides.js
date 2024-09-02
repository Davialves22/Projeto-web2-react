import styles from './CSS/Slides.module.css';
import image1 from './../../assets/images/gojo-vs-sukuna-manga-jjk.jpg';
import image2 from './../../assets/images/Bateria_carro.jpg'
import image3 from './../../assets/images/Banner1.jpg'

export function Slides() {
    return (
        <div>
            <section className={styles.sectionSpacing}>
                <div id="carouselExampleIndicators" className={`carousel slide ${styles.carouselSlides}`}>
                    <div className={`carousel-indicators ${styles.indicators}`}>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={image1}
                                className="d-block w-100"
                                alt="Gojo vs Sukuna"
                                width={1920}
                                height={300}
                                style={{ objectFit: "fill", objectPosition: "center top" }}
                            />
                        </div>

                        <div className="carousel-item">
                            <img
                                src={image2}
                                className="d-block w-100"
                                alt="Baterias"
                                width={1920}
                                height={300}
                                style={{ objectFit: 'fill', objectPosition: 'center top' }}
                            />
                        </div>

                        <div className="carousel-item">
                            <img
                                src={image3}
                                className="d-block w-100"
                                alt="Banner 3"
                                width={1920}
                                height={300}
                                style={{ objectFit: 'fill', objectPosition: 'center top' }}
                            />
                        </div>

                    </div>

                    <button
                        className={`carousel-control-prev ${styles.carouselButton}`}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="bi bi-caret-left-fill" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                        className={`carousel-control-next ${styles.carouselButton}`}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="bi bi-caret-right-fill" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
