import './style.css'
import avatarFoto from './public/images/image-avatar.png'
import cardAnaGorsel from './public/images/image-equilibrium.jpg'
import ethIcon from './public/images/icon-ethereum.svg'
import clock from './public/images/icon-clock.svg'

document.querySelector('#app').innerHTML = `

<main>
  <section class="card">
    <div class="image-card">
      <img class="image" src="${cardAnaGorsel}" alt="">
    </div>
    <div class="card-title">
      <h2>Equilibrium #3429</h2>
      <p class="card-title-p">Our Equilibrium collection promotes balance and calm.</p>
      <div class="card-title-bottom">
        <p class="card-bottom-right-p"> <img class="iconBoyut" src="${ethIcon}" alt=""> 0.041 ETH</p>
        <p class="card-bottom-left-p"> <img class="iconBoyut" src="${clock}" alt=""> 3 days left</p>
      </div>
    </div>
    <div class="card-footer">
      <img class="avatarFoto" src="${avatarFoto}" alt="">
      <p>Creation of <span>Jules Wyvern</span></p>
    </div>
  </section>
</main>
`

