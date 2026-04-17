
import Navber from "./Component/Navber"
import Entry from "./Component/Entry"
import annapurna from "./assets/Annapurna.webp"
import k2 from "./assets/k2-treak.jpg"
import lakshdeep from "./assets/lakshdeep.webp"

export default function App(){

  return(
    <>
      <Navber />
      <Entry
        img={annapurna}
        imgalt="Annapurna Basecamp"
        location="https://maps.app.goo.gl/BEqHoPmCyNKW3s4e7"
        name="Annapurna Basecamp"
        description="A classic 7–12 day trek in Nepal through rhododendron forests and high alpine valleys."
      />
      <Entry
        img={k2}
        imgalt="K2 Basecamp"
        location="https://www.google.com/maps/place/K2"
        name="K2 Basecamp"
        description="A high-altitude expedition region with dramatic peaks and challenging weather."
      />
      <Entry
        img={lakshdeep}
        imgalt="Lakshadweep Island"
        location="https://www.google.com/maps/place/Lakshadweep"
        name="Lakshadweep Islands"
        description="Tropical turquoise waters and quiet coral atolls, perfect for snorkeling and relaxation."
      />
    </>
  )
}