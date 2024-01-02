import images from './images';

const juices = [
  {
    title: "Nightingale's Nest Baklava",
    price: '200₺',
    tags: 'Pistachio, Butter and Cream',
  },
  {
    title: 'Walnut Baklava',
    price: '180₺',
    tags: 'Walnut, Butter and Cream',
  },
  {
    title: 'Kunefe',
    price: '250₺',
    tags: 'Cheese, Butter and Peanut',
  },
  {
    title: 'Kadayif with Pistachio',
    price: '160₺',
    tags: 'Pistachio and Butter',
  },
  {
    title: 'Fresh Juice',
    price: '50₺',
    tags: 'All kinds of seasonal fresh fruit juices',
  },
  {
    title: 'Hot Drinks',
    price: '70₺',
    tags: 'Turkish coffee and herbal teas',
  },
];

const meals = [
  {
    title: 'Adana Kebab',
    price: '450₺',
    tags: 'The perfect taste of minced lamb and plenty of spices',
  },
  {
    title: "Shish Kebab",
    price: '700₺',
    tags: 'Lamb meat tastes delicious on the barbecue',
  },
  {
    title: 'Iskender Kebab',
    price: '400₺',
    tags: 'The perfect combination of meat, butter and yoghurt',
  },
  {
    title: 'Alinazik Kebab',
    price: '550₺',
    tags: 'The taste of meat, roasted eggplant and yoghurt',
  },
  {
    title: 'Lamb Stew',
    price: '650₺',
    tags: 'The flavor of lamb meat in casserole',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: '2008 & 2010 & 2019',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '2011 & 2020 & 2022',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '2012 & 2013 & 2017',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '2015& & 2021 & 2023',
  },
];

export default { juices, meals, awards };
