import './Information.scss'
import logo1 from '@/assets/images/logo1.jpg'
import logo2 from '@/assets/images/logo2.jpg'
import logo3 from '@/assets/images/logo3.jpg'
import Button from '@/components/Button'

export default () => {
  const informationImages = [logo1, logo2, logo3]

  const information = [
    {
      href: '/belaz',
      description:
        ' «БЕЛАЗ» — мировой лидер в производстве карьерной техники. Эти исполины трудятся на самых масштабных рудниках планеты, олицетворяя невероятную мощь и engineering-гений белорусской промышленности.',
    },
    {
      href: '/mtz',
      description:
        'Минский тракторный завод (МТЗ) — «бренд на века». Тракторы «Беларус» — это более 70 лет опыта, миллионы единиц техники по всему миру и верный помощник для агробизнеса в десятках стран. Это синоним выносливости и эффективности.',
    },
    {
      href: '/bmz',
      description:
        'Белорусский металлургический завод — предприятие чёрной металлургии в городе Жлобине в Республике Беларусь. Численность персонала составляет около 11 тысяч человек. Является управляющей компанией холдинга «Белорусская металлургическая компания» (БМК).',
    },
  ]

  return (
    <section className="information" aria-labelledby="information-title">
      <div className="information__inner container">
        <h2
          className="information__title visually-hidden"
          id="information-title"
        >
          Короткая информация про заводы Беларуси
        </h2>
        <div className="information__menu">
          <ul className="information__menu-list">
            {information.map(({ description, href }, index) => {
              return (
                <li className="information__menu-item" key={index}>
                  <img
                    className="information__menu-image"
                    src={informationImages[index]}
                    alt=""
                    width="316"
                    height="350"
                    loading="lazy"
                  />
                  <div className="information__info">
                    <div className="information__info-description">
                      <p>{description}</p>
                    </div>
                    <Button href={href} className="information__info-button">
                      узнать больше
                    </Button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
