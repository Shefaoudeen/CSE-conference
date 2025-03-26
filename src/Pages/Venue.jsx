import React, { useState } from "react";
import cs1 from "../assets/Images/rock beach.jpg";
import cs2 from "../assets/Images/auroville.jpeg";
import cs3 from "../assets/Images/paradaise beach.jpg";
import cs4 from "../assets/Images/french colony.jpg";
import cs5 from "../assets/Images/Serenity Beach.jpg";
import cs6 from "../assets/Images/lighthouse.jpg";


import {
  MapPin,
  Users,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const touristSpots = [
  {
    name: "Rock Beach",
    image: cs1,
    description: `🌊 Rock Beach is one of the most scenic and peaceful
                  attractions in Puducherry, known for its rocky shoreline and
                  mesmerizing waves. The beachfront promenade is perfect for 
                  early morning or evening strolls. Sunrises here are breathtaking, 
                  with golden hues painting the sky. Visitors love the soothing sea 
                  breeze and rhythmic sound of waves crashing against the rocks.
                  No swimming is allowed, but it’s a fantastic place for photography 
                  and relaxation. The area is surrounded by cafés, street vendors, 
                  and vibrant markets, making it a lively spot. Fishermen boats,
                  historic statues, and the old lighthouse add charm to the place. 
                  The Gandhi Statue and War Memorial are located nearby, attracting
                  history enthusiasts. Whether you’re here for peaceful solitude 
                  or a lively atmosphere, Rock Beach is a must-visit! 🌅`,
                  map: "https://goo.gl/maps/XuG3j6Hh3nzU8Hdp9",
  },
  {
    name: "Auroville",
    image: cs2,
    description: `✨ Auroville is an experimental township built to promote human 
                  unity and spiritual growth. It was founded in 1968 by Mirra Alfassa 
                  (The Mother) and is home to people from over 50 nationalities. 
                  The most iconic landmark here is the Matrimandir, a golden, 
                  sphere-shaped structure used for silent meditation. 
                  The atmosphere is serene, eco-friendly, and spiritually uplifting. 
                  Visitors can explore organic farms, artisan workshops, and handcraft stores. 
                  Auroville’s cafés and eateries serve delicious organic and international cuisine. 
                  The township follows sustainable living practices, using solar power, eco-housing, 
                  and community farming. Tourists can walk or cycle through the green trails and 
                  experience nature at its finest. If you seek inner peace, cultural exchange, 
                  or sustainable living inspiration, Auroville is the perfect place! 🌱🌍`,             
    link: "https://auroville.org/",
  },
  {
    name: "Paradise Beach",
    image: cs3,
    description: `🏝️ Paradise Beach, also known as Plage Paradiso, is a secluded, 
                untouched paradise with golden sands and crystal-clear waters. Unlike other 
                crowded beaches, it’s accessible only by boat, making the journey itself exciting. 
                The backwaters surrounding the area create a tropical, exotic feel. Sunbathing, swimming,
                and beach sports are popular activities here. The water is calm and clean, making it a 
                great spot for family outings. You’ll find hammocks and thatched huts, giving off a perfect
                island vibe. The beach is surrounded by lush greenery, coconut groves, and mangrove forests.
                Local stalls offer fresh seafood and coconut water to enjoy. If you’re looking for a peaceful 
                getaway from city life, this is the ultimate destination. 🏖️🌴`,
    link: "https://www.tripadvisor.in/Attraction_Review-g659792-d3704972-Reviews-Paradise_Beach-Pondicherry_Union_Territory_of_Pondicherry.html",
  },
  {
    name: "French Colony",
    image: cs4,
    description: `🇫🇷 The French Colony in Puducherry is a historical treasure 
                  with beautiful pastel-colored buildings, bougainvillea-filled streets, 
                  and charming architecture. It reflects Puducherry’s colonial past, where 
                  French culture still thrives. Walking through the Rue de la Marine and Rue 
                  Saint Louis, you’ll feel like you’ve stepped into old France. The area is 
                  home to French-style cafés, bakeries, and art galleries. Many buildings now 
                  serve as boutique hotels, museums, and heritage homes. The streets are filled 
                  with vintage street signs, bicycle rentals, and cozy bookstores. White Town is 
                  the most famous part of the colony, where visitors love clicking pictures. 
                  The Basilica of the Sacred Heart of Jesus and Aayi Mandapam are must-visit 
                  landmarks nearby. Whether you’re a history buff, architecture lover, or just
                  looking for Instagram-worthy spots, the French Colony is a must-visit! ☕🏛️`,
    link: "https://www.tripadvisor.in/Attraction_Review-g659792-d10315694-Reviews-French_Quarter-Pondicherry_Union_Territory_of_Pondicherry.html",
  },
  {
    name: "Serenity Beach",
    image: cs5,
    description: `🌊 Serenity Beach is true to its name, offering a calm and peaceful escape
                 from the city’s hustle and bustle. Located just 15 minutes from Puducherry, 
                 it’s famous for its golden sands, blue waters, and gentle waves. It is a popular
                 surfing destination, attracting surfers from across India. Surf schools nearby 
                 lessons for beginners, making it a great place to try surfing. Early mornings 
                 are perfect for meditation, yoga, and beachside jogging. Fishermen can be seen setting 
                 out on their boats, adding to the coastal charm. Small beachfront cafés serve delicious 
                 seafood and refreshing drinks. You can find local craft stalls selling handmade jewelry
                 and souvenirs. Whether you’re here for surfing, relaxing, or enjoying a peaceful sunset, 
                 Serenity Beach offers a perfect coastal experience. 🏄‍♂️🌅`,
    link: "https://www.tripadvisor.in/Attraction_Review-g659792-d3655352-Reviews-Serenity_Beach-Pondicherry_Union_Territory_of_Pondicherry.html",
  },
  {
    name: "Light House",
    image: cs6,
    description: `💡 The Pondicherry Lighthouse is a historic landmark offering breathtaking panoramic 
                   views of the city and coastline. It was originally built in 1836 but later replaced with the newer, 
                   taller lighthouse in 1979. Visitors can climb to the top via a spiral staircase to enjoy spectacular 
                   views of the Bay of Bengal. The lighthouse is beautifully illuminated at night, creating a picturesque scene. 
                   It played a vital role during the colonial era, guiding ships into Puducherry’s harbor. The structure 
                   is surrounded by lush greenery and offers a peaceful environment for visitors. Photography enthusiasts love
                   capturing the lighthouse against the blue sky. Nearby attractions include Rock Beach and the French
                   War Memorial. If you love history, adventure, or scenic views, this lighthouse should be on your travel list! 🏗️🌆`,
    link: "https://www.tripadvisor.in/Attraction_Review-g659792-d3655352-Reviews-Pondicherry_Lighthouse-Pondicherry_Union_Territory_of_Pondicherry.html",
  },
];

const VenueDetails = () => {
  const [currentSpot, setCurrentSpot] = useState(0);

  const scrollLeft = () => {
    setCurrentSpot((prev) => (prev === 0 ? touristSpots.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentSpot((prev) => (prev === touristSpots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#1E90FF] to-[#FFD700] text-white p-6">

      
      {/* VENUE DETAILS */}
      <div className="w-full mt-40 max-w-5xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-2xl p-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-100">PTU Auditorium</h1>
        <p className="text-gray-300 mt-3 text-lg italic">Conference & Event Venue</p>
        <div className="w-24 h-1 bg-cyan-400 mx-auto my-6 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <p className="text-gray-200 text-lg">East Coast Road, Puducherry, 605 014</p>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-cyan-400" />
              <p className="text-gray-200 text-lg">500+ seats with modern AV setup</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-cyan-400" />
              <p className="text-gray-200 text-lg">0413-2655281-288</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <p className="text-gray-200 text-lg">info@ptuniv.edu.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* TOURIST ATTRACTIONS */}
      <div className="w-full max-w-4xl mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Tourist Attractions in Puducherry</h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <img
              src={touristSpots[currentSpot].image}
              alt={touristSpots[currentSpot].name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-100 mt-4">{touristSpots[currentSpot].name}</h3>
            <p className="text-gray-300 mt-2 text-sm">{touristSpots[currentSpot].description}</p>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
