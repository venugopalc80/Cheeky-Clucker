import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarDays, ExternalLink, Instagram, MapPin, Menu as MenuIcon, Sparkles, Truck, X } from 'lucide-react';
import './styles.css';

const menu = [
  { title: 'Wings', text: 'Crispy wings with the sauces that made Cheeky Clucker famous.', image: 'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453586741-XUF3NB8VD6HITDIQ5XU8/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-7.jpg' },
  { title: 'Tenders', text: 'Golden, crispy chicken tenders made for dipping and sharing.', image: 'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453588329-GSSE1VTG6RZVLJWP2XFO/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-8.jpg' },
  { title: 'Chicken Sandwiches', text: 'Crispy chicken, bold sauces and a proper bun.', image: 'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453589864-XX66D114EF0KDWS157AZ/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-18.jpg' },
  { title: 'Burgers', text: 'Big chicken burgers with the Cheeky Clucker twist.', image: 'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453586752-JZRQ4EE6BXO0MPYWEKG3/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-5.jpg' },
  { title: 'Loaded Fries', text: 'Crispy fries loaded with flavour and built to share.', image: 'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453588318-ZBZNUK2M20RPT89VYYRJ/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-17.jpg' }
];
const events = ['Festivals', 'Weddings', 'Private Parties', 'Corporate Events', 'Street Food Events'];
const gallery = [
  'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453589864-XX66D114EF0KDWS157AZ/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-18.jpg',
  'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453586752-JZRQ4EE6BXO0MPYWEKG3/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-5.jpg',
  'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453586741-XUF3NB8VD6HITDIQ5XU8/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-7.jpg',
  'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453588329-GSSE1VTG6RZVLJWP2XFO/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-8.jpg',
  'https://images.squarespace-cdn.com/content/v1/5bb4859977b9034f3f47cdac/1624453588318-ZBZNUK2M20RPT89VYYRJ/%C2%A9-cene-magazine-%2316-Nov-Dec-2020-Cheeky-Clucker-Rochester-Bite-Club-17.jpg'
];
function Logo({ small = false }) {
  return <img className={small ? 'logo small' : 'logo'} src="/cheeky-clucker-logo.svg" alt="Cheeky Clucker" />;
}
function App() {
  const [open, setOpen] = React.useState(false);
  const [orderOpen, setOrderOpen] = React.useState(false);
  const [cart, setCart] = React.useState({});
  const [orderType, setOrderType] = React.useState('collection');
  const [notes, setNotes] = React.useState('');
  const addItem = (title) => setCart(prev => ({...prev, [title]: (prev[title] || 0) + 1}));
  const removeItem = (title) => setCart(prev => { const next={...prev}; if ((next[title]||0) <= 1) delete next[title]; else next[title]--; return next; });
  const cartCount = Object.values(cart).reduce((sum,n) => sum+n, 0);
  const orderSummary = Object.entries(cart).map(([name,qty]) => qty + ' x ' + name).join('\\n');
  const openOrder = () => setOrderOpen(true);
  const close = () => setOpen(false);
  return <div className="app">
    <header className="nav"><div className="nav-inner">
      <a href="#home" className="brand"><Logo small /></a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <MenuIcon />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {[['MENU','#menu'],['FIND US','#find-us'],['EVENTS','#events'],['ABOUT','#about'],['CONTACT','#contact']].map(([label,href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
        <a className="instagram" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
        <a className="order-top" href="#order" onClick={(e)=>{e.preventDefault();openOrder();}}>ORDER NOW <ArrowRight size={15} /></a>
      </nav>
    </div></header>
    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"></span> THE CLUCK TRUCK IS BACK</div>
          <h1>PROPER<br /><span>FRIED CHICKEN.</span></h1>
          <p className="hero-lead">Cheeky Clucker is back in Rochester. Find the Cluck Truck at The George, grab the classics, and follow the truck to festivals and events across the UK.</p>
          <div className="cta-row"><a className="btn primary" href="#order" onClick={(e)=>{e.preventDefault();openOrder();}}>ORDER NOW <ArrowRight size={18} /></a><a className="btn light" href="#find-us"><MapPin size={18} /> FIND THE TRUCK</a><a className="btn yellow" href="#events"><Truck size={18} /> BOOK THE TRUCK</a></div>
          <div className="hero-meta"><span><CalendarDays size={16} /> FRIDAY & SATURDAY</span><span><MapPin size={16} /> THE GEORGE, ROCHESTER</span></div>
        </div>
        <div className="hero-visual"><div className="hero-logo-card"><Logo /><div className="card-stamp">AWARD<br />WINNING<br />FRIED<br />CHICKEN</div></div><div className="hero-note">GOOD<br />CHICKEN.<br /><span>GOOD TIMES.</span></div></div>
      </section>
      <section className="ticker"><div><Sparkles size={18} /> AWARD WINNING FRIED CHICKEN</div><div>WINGS • TENDERS • SANDWICHES • BURGERS • LOADED FRIES</div><div><Truck size={18} /> FESTIVALS & EVENTS</div></section>
      <section id="menu" className="section menu-section">
        <div className="section-head"><div><p className="kicker">THE CLASSICS</p><h2>WHAT'S <span>CLUCKING?</span></h2></div><p>Core favourites are back on the mobile menu. Check the ordering link for the current availability and specials.</p></div>
        <div className="menu-grid">{menu.map((item, i) => <article className={'menu-card card-' + i} key={item.title}><div className="menu-image"><img src={item.image} alt={item.title + ' from Cheeky Clucker'} loading="lazy" /><span>CHEEKY</span></div><div className="menu-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <div className="flavours"><strong>CHEEKY FLAVOURS</strong><span>Buffalo BBQ</span><span>Honey Sriracha</span><span>Honey Garlic</span><span>Soy</span><span>Garlic Parmesan</span></div>
        <div className="center"><a className="btn primary" href="#order" onClick={(e)=>{e.preventDefault();openOrder();}}>BUILD YOUR ORDER <ArrowRight size={17} /></a></div>
      </section>
      <section id="find-us" className="find-section">
        <div className="find-copy"><p className="kicker yellow-text">FIND US</p><h2>THE CLUCK TRUCK<br /><span>AT THE GEORGE.</span></h2><p>Cheeky Clucker's new mobile home is at The George Pub in City Way, Rochester. The truck is also built to travel — from local events to major UK festivals.</p>
          <div className="find-facts"><div><CalendarDays /><strong>FRIDAY & SATURDAY</strong><span>Weekly at The George</span></div><div><MapPin /><strong>344 CITY WAY</strong><span>Rochester, ME1 2BH</span></div></div>
          <div className="cta-row"><a className="btn yellow" href="https://www.google.com/maps/search/?api=1&query=The+George+344+City+Way+Rochester" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={18} /></a><a className="btn outline" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer">CHECK INSTAGRAM <Instagram size={18} /></a></div>
        </div>
        <div className="location-card"><div className="location-grid"></div><div className="location-pin"><MapPin size={30} /></div><div className="location-label"><span>CHEEKY CLUCKER</span><strong>THE GEORGE</strong><small>CITY WAY, ROCHESTER</small></div></div>
      </section>
      <section id="order" className="order-section"><div className="order-panel"><div><p className="kicker">ORDERING</p><h2>BUILD YOUR<br /><span>CLUCKER ORDER.</span></h2><p>We are moving the ordering journey onto the website instead of sending customers through old restaurant links. Choose what you want, select collection or delivery, then send the order request to the team.</p><div className="order-benefits"><span>✓ No old Linktree journey</span><span>✓ Mobile-friendly ordering</span><span>✓ Easy to update when specials change</span></div></div><div className="order-card"><Logo small /><h3>START YOUR ORDER</h3><p>{cartCount ? cartCount + " item" + (cartCount===1?"":"s") + " selected" : "Choose your food and build your basket."}</p><button className="btn primary full" type="button" onClick={openOrder}>START ORDER <ArrowRight size={17} /></button><small>Current prices and item options can be loaded as soon as the client confirms the live menu.</small></div></div></section>
      <section id="events" className="events-section"><div className="events-visual"><img src={gallery[0]} alt="Cheeky Clucker food" loading="lazy" /><div className="event-badge">BOOK<br /><span>THE<br />TRUCK</span></div></div><div className="events-copy"><p className="kicker yellow-text">CATERING & EVENTS</p><h2>BRING THE<br /><span>CLUCKER.</span></h2><p>The mobile setup makes Cheeky Clucker a natural fit for weddings, private parties, corporate bookings, festivals and street food events.</p><div className="event-list">{events.map(e => <span key={e}>✓ {e}</span>)}</div><a className="btn yellow" href="#contact">START AN ENQUIRY <ArrowRight size={18} /></a></div></section>
      <section id="about" className="about-section"><div className="about-copy"><p className="kicker">THE NEW CHEEKY CLUCKER</p><h2>BUILT TO<br /><span>MOVE.</span></h2><p>Cheeky Clucker has moved into a mobile format with the Cluck Truck — giving the brand a base in Rochester while keeping the freedom to serve festivals, weddings, corporate bookings and private events.</p></div><div className="about-points"><div><strong>01</strong><span>ROCHESTER HOME</span><p>The George, City Way is the current weekly base.</p></div><div><strong>02</strong><span>FESTIVAL READY</span><p>The truck can travel to events across the UK.</p></div><div><strong>03</strong><span>BOOKABLE</span><p>Enquiries welcome for private and corporate events.</p></div></div></section>
      <section id="gallery" className="gallery-section"><div className="section-head"><div><p className="kicker yellow-text">FROM THE FLOCK</p><h2>FOOD <span>GALLERY.</span></h2></div><a className="btn outline" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer"><Instagram size={18} /> FOLLOW @CHEEKYCLUCKERUK</a></div><div className="gallery-grid">{gallery.map((src, i) => <div className={'gallery-item g' + i} key={src}><img src={src} alt="Cheeky Clucker food" loading="lazy" /></div>)}</div><p className="image-note">Demo photography is used here to show the layout. We can swap this for the team's current truck and food photography once the refresh is approved.</p></section>
      <section id="contact" className="contact-section"><div><p className="kicker yellow-text">LET'S TALK</p><h2>READY TO<br /><span>GET CHEEKY?</span></h2><p>For catering, festivals, weddings, corporate bookings or general enquiries, message the team directly.</p><a className="btn yellow" href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer">DM ON INSTAGRAM <Instagram size={18} /></a></div><div className="contact-card"><Logo small /><h3>EVENT ENQUIRIES</h3>{events.map(e => <a key={e} href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer">{e}<ArrowRight size={16} /></a>)}</div></section>
    </main>
    {orderOpen && <div className="order-overlay" role="dialog" aria-modal="true" aria-label="Cheeky Clucker order"><div className="order-drawer"><div className="drawer-head"><div><p className="kicker">ORDER NOW</p><h3>BUILD YOUR ORDER</h3></div><button className="drawer-close" onClick={()=>setOrderOpen(false)} aria-label="Close order"><X /></button></div><div className="drawer-body"><div className="order-type"><button className={orderType==='collection'?'active':''} onClick={()=>setOrderType('collection')}>COLLECTION</button><button className={orderType==='delivery'?'active':''} onClick={()=>setOrderType('delivery')}>DELIVERY</button></div><p className="drawer-note">Select your food below. Prices and live availability can be added once the current menu is confirmed.</p><div className="order-items">{menu.map(item=><div className="order-item" key={item.title}><div><strong>{item.title}</strong><span>{item.text}</span></div><div className="qty"><button onClick={()=>removeItem(item.title)} aria-label={"Remove " + item.title}>−</button><b>{cart[item.title]||0}</b><button onClick={()=>addItem(item.title)} aria-label={"Add " + item.title}>+</button></div></div>)}</div><label className="order-notes">NOTES<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Sauce, allergy or order notes..." /></label>{cartCount>0 && <div className="order-summary"><strong>YOUR ORDER</strong><pre>{orderSummary}</pre><span>{orderType==='collection'?'Collection at The George, Rochester':'Delivery — availability to be confirmed'}</span></div>}<div className="drawer-actions"><button className="btn outline dark" onClick={()=>setOrderOpen(false)}>KEEP SHOPPING</button><a className={"btn primary" + (cartCount ? "" : " disabled")} href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer">CONTINUE TO INSTAGRAM <Instagram size={17} /></a></div><small className="checkout-note">The final order hand-off can be connected to the preferred checkout channel once it is confirmed. For now, the basket demonstrates the new ordering journey.</small></div></div></div>}\n    <div className="mobile-cta"><a href="#order" onClick={(e)=>{e.preventDefault();openOrder();}}>ORDER {cartCount > 0 ? "(" + cartCount + ")" : ""} <ArrowRight size={15} /></a><a href="#find-us">FIND US <MapPin size={15} /></a><a href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer">DM <Instagram size={15} /></a></div>
    <footer><div><Logo small /><p>AWARD WINNING FRIED CHICKEN<br />ROCHESTER • KENT • UK EVENTS</p></div><div><h4>EXPLORE</h4><a href="#menu">Menu</a><a href="#find-us">Find Us</a><a href="#events">Catering & Events</a><a href="#about">About</a></div><div><h4>CONNECT</h4><a href="https://www.instagram.com/cheekycluckeruk/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="#order" onClick={(e)=>{e.preventDefault();openOrder();}}><ArrowRight size={16} /> Ordering</a><span><MapPin size={16} /> Rochester, Kent</span></div><div className="footer-mark">CLUCK<br /><span>YEAH.</span></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
