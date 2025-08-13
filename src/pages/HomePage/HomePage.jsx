import './home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ? swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const HomePage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	const cards = [
		{ title: "Active lids", icon: 'salom', number: 113, },
		{ title: "Active students", icon: 'salom', number: 113, },
		{ title: "Groups", icon: 'salom', number: 113, },
		{ title: "Debtors", icon: 'salom', number: 113, },
		{ title: "In a trial lesson", icon: 'salom', number: 113, },
		{ title: "Paid during the month", icon: 'salom', number: 113, },
		{ title: "Left active group", icon: 'salom', number: 113, },
		{ title: "Left after trial period", icon: 'salom', number: 113, }
	];

	return (
		<div className='home-page' data-aos="fade-left">
			<div className="element-card-bar">
				
				{/* ? swiper */}
				<Swiper
        slidesPerView={4} // nechta slayd bir sahifada ko'rsatiladi
        spaceBetween={10}
        navigation={true} // strelkalarni yoqadi
        modules={[Navigation]}
        // style={{ margin: "20px" }}
      >

	


			  {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="dashboard-element-card">
              <div className="card-icon">
                <h2>{card.icon}</h2>
              </div>
              <div>
                <h2>{card.title}</h2>
              </div>
              <br />
              <div>
                <h1>{card.number}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
			</div>
		</div>
	);
}

export default HomePage;
