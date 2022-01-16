import React from "react";

function App() {
   return (
      <div className="wrapper clear">
         <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
               <h2 className="d-flex justify-between mb-30">
                  Корзина{" "}
                  <img
                     className="cu-p"
                     src="/img/btn-remove.svg"
                     alt="Remove"
                  />
               </h2>
               <div className="items">
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Кросівки Nike Blazer Mid Suede</p>
                        <b>12 999 грн.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                     />
                  </div>
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Кросівки Nike Blazer Mid Suede</p>
                        <b>12 999 грн.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                     />
                  </div>
                  <div className="cartItem d-flex align-center">
                     <div
                        style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Кросівки Nike Blazer Mid Suede</p>
                        <b>12 999 грн.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                     />
                  </div>
               </div>
               <div className="cartTotalBlock">
                  <ul>
                     <li>
                        <span>Разом:</span>
                        <div></div>
                        <b>21 498 грн.</b>
                     </li>

                     <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 грн.</b>
                     </li>
                  </ul>
                  <button className="greenButton">
                     Оформити замовлення{" "}
                     <img src="/img/arrow.svg" alt="Arrow" />
                  </button>
               </div>
            </div>
         </div>
         <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
               <img width={40} height={40} src="/img/logo.png" alt="logo" />
               <div>
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин найкращих кросівок</p>
               </div>
            </div>
            <ul className="d-flex">
               <li className="mr-30">
                  <img width={18} height={18} src="/img/cart.svg" alt="Card" />
                  <span>1205 грн.</span>
               </li>
               <li>
                  <img width={18} height={18} src="/img/user.svg" alt="User" />
               </li>
            </ul>
         </header>
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Всі кросівки</h1>
               <div className="search-block d-flex">
                  <img src="/img/search.svg" alt="Search" />
                  <input placeholder="Пошук..." />
               </div>
            </div>

            <div className="d-flex">
               <div className="card">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unliked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/img/sneakers/1.jpg"
                     alt="Sneakers"
                  />
                  <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Ціна:</span>
                        <b>12 999 грн.</b>
                     </div>
                     <button className="button">
                        <img
                           width={11}
                           height={11}
                           src="/img/plus.svg"
                           alt="Plus"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unliked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/img/sneakers/2.jpg"
                     alt="Sneakers"
                  />
                  <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Ціна:</span>
                        <b>12 999 грн.</b>
                     </div>
                     <button className="button">
                        <img
                           width={11}
                           height={11}
                           src="/img/plus.svg"
                           alt="Plus"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unliked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/img/sneakers/3.jpg"
                     alt="Sneakers"
                  />
                  <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Ціна:</span>
                        <b>12 999 грн.</b>
                     </div>
                     <button className="button">
                        <img
                           width={11}
                           height={11}
                           src="/img/plus.svg"
                           alt="Plus"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unliked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/img/sneakers/4.jpg"
                     alt="Sneakers"
                  />
                  <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Ціна:</span>
                        <b>12 999 грн.</b>
                     </div>
                     <button className="button">
                        <img
                           width={11}
                           height={11}
                           src="/img/plus.svg"
                           alt="Plus"
                        />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
