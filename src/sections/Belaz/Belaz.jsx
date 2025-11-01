import './Belaz.scss'
import belaz1 from '@/assets/images/belaz1.jpg'
import belaz2 from '@/assets/images/belaz2.jpg'
import belaz3 from '@/assets/images/belaz3.jpg'

export default () => {
  const belazList = [belaz1, belaz2, belaz3]

  return (
    <section className="belaz" aria-labelledby="belaz-title">
      <div className="belaz__inner container">
        <h2 className="belaz__title visually-hidden" id="belaz-title">
          История БЕЛАЗ
        </h2>
        <div className="belaz__container">
          <div className="belaz__info">
            <img
              className="belaz__info-image"
              src={belaz1}
              alt=""
              width="539"
              height="376"
              loading="lazy"
            />
            <img
              className="belaz__info-image"
              src={belaz2}
              alt=""
              width="235"
              height="376"
              loading="lazy"
            />
            <div className="belaz__info-description">
              <p>
                Продукция жодинских машиностроителей является брендом мирового
                уровня. Непрерывная работа над совершенствованием качества и
                конкурентоспособности выпускаемой продукции, внимание к
                потребителям, внедрение инноваций, модернизация производства
                позволяют предприятию удерживать ведущие позиции в отрасли и
                осуществлять поставки более чем в 70 стран мира.
              </p>
            </div>
            <img
              className="belaz__info-image"
              src={belaz3}
              alt=""
              width="235"
              height="376"
              loading="lazy"
            />
          </div>
          <div className="belaz__description">
            <p>
              ОАО «БЕЛАЗ» — управляющая компания холдинга «БЕЛАЗ-ХОЛДИНГ» —
              крупнейший мировой производитель карьерных самосвалов
              и транспортного оборудования для горнодобывающей и строительной
              промышленности. Мы строим свой успех, опираясь на опыт и знания
              предшествующих поколений, воплощая лучшие традиции в новых моделях
              техники. Репутация бренда «БЕЛАЗ» отражает годы стабильного
              развития. Постоянное повышение эффективности производства,
              совершенствование применяемых технологий, внедрение инноваций —
              только такой подход к работе позволяет целиком отвечать
              требованиям рынка.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
