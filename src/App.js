import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
   {
      title: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "/img/sneakers/1.jpg",
   },
   {
      title: "Чоловічі кросівки Nike Air Max 270",
      price: 12999,
      imageUrl: "/img/sneakers/2.jpg",
   },
   {
      title: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 8499,
      imageUrl: "/img/sneakers/3.jpg",
   },
   {
      title: "Кросівки Puma X Aka Boku Future Rider",
      price: 8999,
      imageUrl: "/img/sneakers/4.jpg",
   },
];

function App() {
   return (
      <div className="wrapper clear">
         <Header />
         <Drawer />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Всі кросівки</h1>
               <div className="search-block d-flex">
                  <img src="/img/search.svg" alt="Search" />
                  <input placeholder="Пошук..." />
               </div>
            </div>
            <div className="d-flex">
               {arr.map((obj) => (
                  <Card
                     title={obj.title}
                     price={obj.price}
                     imageUrl={obj.imageUrl}
                     onClick={() => console.log(obj)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
