const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div >
      <img height="300" width="500" src="/images/Graze-Chia-seed-drink-in-glasses-1170x617.jpg" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home