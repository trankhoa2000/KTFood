import React from 'react';
import './../homepage.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Marquee from './Marquee';
import RankingTable from './RankingTable';
import ReviewTable from './ReviewTable';
import DishCard from './DishCard';
import Footer from './Footer';

const HomePage = () => {
  const dishes = [
    {
      image: 'img/5.png',
      name: 'Bún Chả Hà Nội',
      description: 'Bún chả Hà Nội gồm thịt nướng thơm lừng, nước chấm chua ngọt,...',
      oldPrice: '$350',
      newPrice: '$240'
    },
    {
      image: 'img/6.png',
      name: 'Gỏi Cuốn Sài Gòn',
      description: 'Gỏi cuốn với tôm, thịt, bún và rau sống cuộn trong bánh tráng mỏng.',
      oldPrice: '$15',
      newPrice: '$12'
    },
    {
      image: 'img/7.png',
      name: 'Cao Lầu Hội An',
      description: 'Cao lầu với sợi mì vàng dai, thịt xá xíu, rau sống và bánh đa giòn',
      oldPrice: '$20',
      newPrice: '$16'
    },
    {
      image: 'img/8.png',
      name: 'Mì Quảng Đà Nẵng',
      description: 'Mì Quảng với sợi mì vàng, thịt gà hoặc tôm, trứng cút,...',
      oldPrice: '$25',
      newPrice: '$20'
    },
    {
      image: 'img/7.png',
      name: 'Cao Lầu Hội An',
      description: 'Cao lầu với sợi mì vàng dai, thịt xá xíu, rau sống và bánh đa giòn',
      oldPrice: '$20',
      newPrice: '$16'
    },
    {
      image: 'img/8.png',
      name: 'Mì Quảng Đà Nẵng',
      description: 'Mì Quảng với sợi mì vàng, thịt gà hoặc tôm, trứng cút,...',
      oldPrice: '$25',
      newPrice: '$20'
    }
  ];

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <RankingTable />
            <ReviewTable />
          </div>
          
          <div className="col-9">
            <Marquee />

            <div className="row">
            {dishes.map((dish, index) => (
              <DishCard 
                key={index}
                image={dish.image}
                name={dish.name}
                description={dish.description}
                oldPrice={dish.oldPrice}
                newPrice={dish.newPrice}
              />
            ))}
          </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
