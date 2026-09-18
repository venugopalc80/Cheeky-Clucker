import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarDays, Clock3, Crown, Instagram, MapPin, Menu as MenuIcon, Sparkles, Users, X } from 'lucide-react';
import './styles.css';

const menu = [
  {title:'Chicken Burgers', text:'Big flavours. Bigger satisfaction.', emoji:'🍔'},
  {title:'Chicken & Wings', text:'Crispy, juicy, unmissable.', emoji:'🍗'},
  {title:'Loaded Fries', text:'The perfect sidekick.', emoji:'🍟'},
  {title:'Sides & Extras', text:'More to love.', emoji:'🍟'},
  {title:'Drinks', text:'Cool it down.', emoji:'🥤'}
];

const events = ['Festivals','Weddings','Private Parties','Corporate Events','Street Food Events'];

function App(){
  const [open,setOpen] = React.useState(false);
  return <div className="app">
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Cheeky Clucker home"><span>CHEEKY</span> CLUCKER<div className="brand-sub">AWARD WINNING FRIED CHICKEN</div></a>
        <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<MenuIcon/>}</button>
        <nav className={open?'nav-links open':'nav-links'}>
          {['Home','Menu','Book a Table','Catering & Events','About','Gallery','Contact'].map((x,i)=><a key={x} href={['#home','#menu','#booking','#events','#about','#gallery','#contact'][i]} onClick={()=>setOpen(false)}>{x}</a>)}
          <a className="instagram" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer"><Instagram size={19}/></a>
          <a className="order-top" href="#order">ORDER NOW</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Crown size={18}/> Rochester's cheekiest chicken</div>
          <h1>AWARD WINNING<br/><span>FRIED CHICKEN!</span></h1>
          <p>Bold flavours. Proper chicken. Unforgettable experiences. Find us every Friday & Saturday at The George, Rochester, plus festivals and events across the UK.</p>
          <div className="cta-row">
            <a className="btn primary" href="#order">ORDER NOW <ArrowRight size={18}/></a>
            <a className="btn outline" href="#booking"><CalendarDays size={18}/> BOOK A TABLE</a>
            <a className="btn yellow" href="#events"><Users size={18}/> CATERING & EVENTS</a>
          </div>
        </div>
        <div className="hero-art"><div className="hero-glow"></div><div className="burger">🍔</div><div className="scribble">GOOD<br/>CHICKEN<br/>GOOD<br/>TIMES</div></div>
      </section>

      <section className="trust">
        <div><Crown/><strong>AWARD WINNING</strong><span>STREET FOOD</span></div>
        <div><Sparkles/><strong>FRESH INGREDIENTS</strong><span>BOLD FLAVOURS</span></div>
        <div><Users/><strong>FESTIVALS & EVENTS</strong><span>ACROSS THE UK</span></div>
        <div><MapPin/><strong>FRI & SAT AT</strong><span>THE GEORGE, ROCHESTER</span></div>
      </section>

      <section id="menu" className="section paper">
        <div className="section-head"><div><p className="label">OUR</p><h2>MENU</h2></div><p>Juicy chicken. Loaded fries. Burgers. Sides. And more.</p></div>
        <div className="menu-grid">{menu.map(m=><article className="card" key={m.title}><div className="food">{m.emoji}</div><div className="card-copy"><h3>{m.title}</h3><p>{m.text}</p></div></article>)}</div>
        <div className="center"><a className="btn primary" href="#order">VIEW FULL MENU <ArrowRight size={18}/></a></div>
      </section>

      <section id="events" className="events">
        <div className="truck">🚚</div>
        <div className="event-copy"><p className="label">BOOK THE CLUCKER</p><h2>BRING THE <span>CHEEKY CLUCKER</span><br/>TO YOUR EVENT</h2><p>From intimate gatherings to large-scale events, bring the flavour, the vibe and the chicken.</p><div className="event-list">{events.map(e=><span key={e}>✓ {e}</span>)}</div><a className="btn yellow" href="#contact">ENQUIRE NOW <ArrowRight size={18}/></a></div>
      </section>

      <section id="booking" className="section paper booking">
        <div><p className="label">VISIT US</p><h2>THE GEORGE<br/>ROCHESTER</h2><p className="muted">344 City Way, Rochester<br/>Medway ME1 2BH</p><div className="info"><span><CalendarDays size={18}/> Friday & Saturday</span><span><Clock3 size={18}/> Check socials for latest times</span></div><a className="btn outline dark" href="https://www.google.com/maps/search/?api=1&query=The+George+344+City+Way+Rochester" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={18}/></a></div>
        <div className="map"><div className="pin"><MapPin size={30}/></div><span>The George, Rochester</span></div>
        <div className="review"><p className="label">WHAT PEOPLE SAY</p><h3>Proper flavour and amazing vibes.</h3><div className="stars">★★★★★</div><p>Customer review</p><div className="dots">● ● ●</div></div>
      </section>

      <section id="order" className="order paper"><div><p className="label">READY TO EAT?</p><h2>ORDER YOUR<br/><span>CHICKEN FIX.</span></h2><p className="muted">We’ll keep the links clear, current and easy to use, whether you’re ordering collection or delivery.</p></div><div className="order-actions"><a className="btn primary" href="#" onClick={e=>{e.preventDefault(); alert('Collection ordering link to be connected.')}}>COLLECTION <ArrowRight size={18}/></a><a className="btn outline dark" href="#" onClick={e=>{e.preventDefault(); alert('Delivery ordering link to be connected.')}}>DELIVERY <ArrowRight size={18}/></a></div></section>

      <section id="about" className="about dark-section"><div><p className="label">ABOUT CHEEKY CLUCKER</p><h2>GOOD CHICKEN.<br/><span>GOOD TIMES.</span></h2></div><p>Cheeky Clucker brings award-winning fried chicken, big energy and proper street-food flavour to Rochester and events across the UK. Built for people who want memorable food without the fuss.</p></section>

      <section id="gallery" className="gallery paper"><div className="section-head"><div><p className="label">FOLLOW THE FLOCK</p><h2>GALLERY</h2></div><a className="btn outline dark" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer"><Instagram size={18}/> FOLLOW ON INSTAGRAM</a></div><div className="gallery-grid">{['🍗','🍔','🎪','🔥','🍟','🐔'].map((x,i)=><div className={'g g'+i} key={i}>{x}</div>)}</div></section>

      <section id="contact" className="contact dark-section"><div><p className="label">EVENTS, BOOKINGS & QUESTIONS</p><h2>LET'S GET<br/><span>CHEEKY.</span></h2></div><form onSubmit={e=>{e.preventDefault(); alert('Thanks! Your enquiry form is ready to connect to your inbox.')}}><input placeholder="Your name" required/><input type="email" placeholder="Email address" required/><select defaultValue=""><option value="" disabled>Event type</option>{events.map(e=><option key={e}>{e}</option>)}</select><textarea placeholder="Tell us about your event..." rows="4"></textarea><button className="btn yellow" type="submit">SEND ENQUIRY <ArrowRight size={18}/></button></form></section>
    </main>

    <footer id="footer"><div className="footer-brand"><a href="#home" className="brand"><span>CHEEKY</span> CLUCKER<div className="brand-sub">AWARD WINNING FRIED CHICKEN</div></a></div><div><h4>QUICK LINKS</h4><a href="#menu">Menu</a><a href="#booking">Book a Table</a><a href="#events">Catering & Events</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><h4>GET IN TOUCH</h4><span>📍 344 City Way, Rochester</span><span>📩 DM us on Instagram</span><a href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a></div><div className="footer-tag">GOOD<br/>CHICKEN<br/>GOOD<br/>TIMES</div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
