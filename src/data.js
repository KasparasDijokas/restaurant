import salmonImg from './assets/images/homepage/salmon-mobile@2x.jpg';
import trout from './assets/images/homepage/trout.jpg';
import beefImg from './assets/images/homepage/beef-mobile@2x.jpg';
import mousseImg from './assets/images/homepage/chocolate-mobile@2x.jpg';
import wellington from './assets/images/homepage/wellington.jpg';
import cake from './assets/images/homepage/cake.png';
import salad_1 from './assets/images/homepage/salad-1.png';
import salad_2 from './assets/images/homepage/salad-2.png';

export const data = {
  fish: {
    salmon: {
      id: "salmon-1",
      alt: "salmon",
      img: salmonImg,
      heading: "Seared Salmon Fillet",
      text: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
      price: 15.99
    },
    fish_tacos: {
      id: "trout",
      alt: "trout",
      img: trout,
      heading: "Mary Berry's whole roasted trout",
      text: "Simply cooked with delicate fresh herbs, lemon and tomatoes, this whole roasted trout is a real treat.",
      price: 9.99
    }
  },
  meat: {
    mignon: {
      id: "mignon-1",
      alt: "mignon",
      img: beefImg,
      heading: "Rosemary Filet Mignon",
      text: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
      price: 12.99
    },
    wellington: {
      id: "wellington",
      alt: "wellington",
      img: wellington,
      heading: "Beef Wellington",
      text: "Beef Wellington celebrates the luxurious and very tender fillet of beef and is one of those ultimate blowout dishes that hits the right spot several times in one meal.",
      price: 18.99
    },
  },
  desserts: {
    mousse: {
      id: "mousse-1",
      alt: "mousse",
      img: mousseImg,
      heading: "Summer Fruit Chocolate Mousse",
      text: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
      price: 7.49
    },
    cake: {
      id: "cake",
      alt: "cake",
      img: cake,
      heading: "Drizzle bundt cake",
      text: "TAHINI & YOGHURT SPONGE, POMEGRANATE & ROSE WATER DRIZZLE, PISTACHIO DUST",
      price: 7.49
    },
  },
  salad: {
    mandolin: {
      id: "mandolin-salad",
      alt: "mandolin salad",
      img: mousseImg,
      heading: "Mandolin salad",
      text: "Using a mandolin to make this ribbon salad quickly turns something frumpy into something gorgeous ",
      price: 7.49
    },
    greek: {
      id: "greek-salad",
      alt: "greek salad",
      img: salad_2,
      heading: "Chicken salad",
      text: "The fresh, nutty, slightly spicy homemade dressing transforms this simple chicken salad",
      price: 7.49
    },
  }
}
