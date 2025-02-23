import './section1.scss';
import Mask from './img/Mask.png'
import Mask_Group from './img/Mask_Group.png'
import Facebook from './img/Facebook.png'
import Google from './img/Google.png'
import Twitter from './img/twit.png'
import Linkedin from './img/Linkedin.png' 

function Section1() {
  return (
    <section className="section1">
        <div className='blok-one'>
            <div>
                <h5>Signy  /  Блог  /  Название статьи</h5>
            </div>
            <h1>Название статьи</h1>
            <div className='blok-two'>
                <p>28.05.2020</p>
                <a href="">МНОГО ТЕГОВ</a>
                <a href="">ТЕГИ</a>
                <a href="">МНОГО ТЕГОВ</a>
            </div>
        </div>

        <div className='div-center'>
            <div className='div-right'>
                <p>Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. One of the best ways to get the luxury of the rich and famous to fit into your budget can be yours through yacht charter companies. These companies specialize in creating custom sailing vacations that redefine travel. </p>

                <p>Planning Your Luxury Trip</p> 

                <p>With your budget in mind, it is easy to plan a chartered yacht vacation. Companies often have a fleet of sailing vessels that can accommodate parties of various sizes. You may want to make it a more intimate trip with only close family. There are charters that can be rented for as few as two people. These include either a sailboat or motorboat and can come with or without a crew and captain to sail the ship for you. If you choose not to hire a crew, you will have to show that you are knowledgeable of sailing and can handle the ship competently.</p>

                <p>The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.</p>

                <p>Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.</p>

             <img src={Mask_Group}/>
            <p>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.</p>

            </div>
            <div className='div-left'>
                <img src={Mask}/>
                <p>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way. Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.</p>

                <p>If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.</p>

                <p>If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course. </p>

                <p>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.</p>

                <p>If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course. </p>

                <p>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.</p>
            </div>
        </div>
        <div className='icon'>
            <p className='p'>Поделится:</p>
            <div className='logo'>
                <img src={Twitter}/>
                <img src={Linkedin}/>  
                <img src={Google}/>
                <img src={Facebook}/>     
            </div>
            <div className='logo-center'>
                <div className='logo-right'>
                    <p>Название статьи в 
                    два рядка</p>
                    <a href="">Предыдущая статья</a>
                </div>
                <div className='logo-left'>
                    <p>Название статьи в два рядка</p>
                    <a href="">Следующая статья</a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section1