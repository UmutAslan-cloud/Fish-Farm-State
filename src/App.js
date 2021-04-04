/**
 * Bu odevde bizden verilen data yapisini state kullanarak ekrana yansitmamiz isteniyor
 * oncelikle bir state yapisi kurarak bu yapiya listeyi gonderiyoruz
 * daha sonra render kisminda bir map yapisi kullanarak bu listenin tamamini ve bilgilerini ekrana yazdiriyoruz
 * olusturdugumuz bu componenti import ederek app.js te calistiriyoruz
 */


import FishWiev from "./components/user"

import './App.css';

function App() {
  return (
    <main>
<FishWiev/>
    </main>
  );
}

export default App;
