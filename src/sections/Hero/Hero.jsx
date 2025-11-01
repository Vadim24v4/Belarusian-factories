import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__info">
          <h1 className="hero__title" id="hero-title">
            Промышленная мощь Беларуси: от гигантов карьеров до мировых полей
          </h1>
          <div className="hero__description">
            <p>
              {' '}
              Промышленная мощь Беларуси: от гигантов карьеров до мировых полей
              Беларусь — это страна с богатейшими промышленными традициями, где
              создают технику, известную на всех континентах. Наш сайт — это
              витрина лучших достижений отечественного машиностроения и
              производства, воплощенных в легендарных брендах, которые являются
              символом надежности, мощности и инноваций
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
