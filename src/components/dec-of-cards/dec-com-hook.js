import { useState, useEffect } from "react";
import Form from "../../components/forms/form"

async function createDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  return await response.json();
}

const DeckList = (props) => {
  return (
    <ul style={{listStyle: "none",background: "grey"}}>
      {props.cards.map((card, index) => {
        return (
          <li key={index}>
            <img src={card.image} alt={card.value} />
          </li>
        );
      })}
    </ul>
  );
};

const DeckOfCards = () => {
  const [deck, setDeck] = useState({
    cards: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck();
      const data = await getCards(deckId);

      setDeck({
        cards: data.cards,
      });
    };

    fetchData();
  }, []);

  const addCard = (newCard) =>{
    console.log(newCard);
    setDeck({
      cards: [...deck.cards, newCard]
    })
  } 
  

  return (
    <section style={{display: "flex",minHeight: "100vh", flexDirection: "column",justifyContent: "center",alignItems: "center", background: "grey"}}>
      <Form addCard={addCard}/>
      {deck.cards.length > 0 ? <DeckList cards={deck.cards} /> : "nem uma carta encontrada"}
    </section>
  );
};

export default DeckOfCards;
