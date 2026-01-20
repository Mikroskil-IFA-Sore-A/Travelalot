import type { Entries } from './types';
import { buildImageIndex } from './imageIndex';

const imageIndex = buildImageIndex();
console.log("FINAL IMAGE INDEX: ", imageIndex);

export const entries: Entries = {
    africa: {
        slug: 'africa',
        name: 'Africa',
        desc: 'Africa offers an extraordinary blend of wildlife safaris, ancient history, vibrant traditions, and dramatic natural scenery across deserts, savannas, and coastlines.',
        countries: {
            egypt: {
                slug: 'egypt',
                name: 'Egypt',
                desc: 'Egypt is a land of ancient civilizations and timeless wonders, renowned for its iconic pyramids, historic temples, and the life-giving Nile River. Blending rich history with vibrant modern culture, Egypt offers an unforgettable journey through thousands of years of human heritage.',
                shortDesc: 'Ancient wonders, Nile heritage, and timeless history.',
                images: imageIndex.africa?.egypt?.main ?? [],

                heroImage: imageIndex.africa?.egypt?.main?.[0],

                hotspots: [
                    {
                        name: 'Mosque-Madrasah of Sultan Hassan',
                        desc: 'A massive Mamluk-era structure built between 1356 and 1363. It is considered one of the finest examples of early Islamic architecture in the world, famous for its giant portal and soaring minarets.',
                        image: imageIndex.africa?.egypt?.hotspots?.[0]
                    },
                    {
                        name: 'Nile River Cityscape',
                        desc: 'The image features several docked and moving riverboats, which are common in this area for dinner cruises and sightseeing tours.',
                        image: imageIndex.africa?.egypt?.hotspots?.[1]
                    },
                    {
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.egypt?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Falafel.',
                        desc: 'Falafel is a popular Middle Eastern street food made of deep-fried balls or patties from ground chickpeas or fava beans mixed with fresh herbs and spices..',
                        image: imageIndex.africa?.egypt?.cuisines?.[0]
                    },
                    {
                        name: 'Hummus',
                        desc: 'A smooth and creamy dip or spread made from cooked, mashed chickpeas blended with tahini (sesame paste), lemon juice, garlic, and olive oil. It is typically served with pita bread or as an accompaniment to various Middle Eastern dishes.',
                        image: imageIndex.africa?.egypt?.cuisines?.[1]
                    }
                ]
            },

            southafrica: {
                slug: 'southafrica',
                name: 'South Africa',
                desc: 'South Africa offers an exceptional mix of wildlife safaris, diverse cultures, and dramatic landscapes, from vast savannas and rugged coastlines to vibrant cities and renowned vineyards. It is a destination where adventure, nature, and modern life come together seamlessly.',
                shortDesc: 'Wildlife safaris, diverse culture, and dramatic landscapes.',
                images: imageIndex.africa?.southafrica?.main ?? [],

                heroImage: imageIndex.africa?.southafrica?.main?.[0],

                hotspots: [
                    {
                        name: 'Cape Town Cityscape.',
                        desc: 'As the oldest city in the country, the architecture reflects a blend of colonial history and contemporary development.',
                        image: imageIndex.africa?.southafrica?.hotspots?.[0]
                    },
                    {
                        name: 'Hillbrow Tower.',
                        desc: 'A 269-meter tall telecommunications tower that is a defining feature of the Johannesburg skyline. While no longer open to the public for safety reasons, it remains a powerful symbol of the city`s urban landscape and history.',
                        image: imageIndex.africa?.southafrica?.hotspots?.[1]
                    },
                    {
                        name: 'The Pinnacle Rock.',
                        desc: 'A popular tourist stop along South Africa`s Panorama Route, this is a massive freestanding quartzite tower rising out of a lush forest canyon. It offers spectacular photographic opportunities of the natural landscape.',
                        image: imageIndex.africa?.southafrica?.hotspots?.[2]
                    },
                ],

                cuisines: [
                    {
                        name: 'Shakshuka',
                        desc: 'A popular Middle Eastern and North African dish consisting of poached eggs in a savory, spiced tomato and bell pepper sauce, often seasoned with cumin, paprika, and garlic.',
                        image: imageIndex.africa?.southafrica?.cuisines?.[0]
                    },
                    {
                        name: 'Potjiekos',
                        desc: 'A traditional South African stew cooked outdoors in a tiered, cast-iron pot (potjie).',
                        image: imageIndex.africa?.southafrica?.cuisines?.[1]
                    }
                ]
            },
            morroco: {
                slug: 'morroco',
                name: 'Morroco',
                desc: 'Morocco is known for its colorful souks, historic medinas, and striking desert landscapes, blending rich traditions with distinctive architecture and cuisine. From bustling cities to serene desert escapes, the country offers a deeply immersive cultural experience.',
                shortDesc: 'Colorful souks, desert scenery, and rich traditions.',
                images: imageIndex.africa?.morroco?.main ?? [],

                heroImage: imageIndex.africa?.morroco?.main?.[0],

                hotspots: [
                    {
                        name: 'Hassan II Mosque',
                        desc: 'This architectural marvel is the second largest functioning mosque in Africa and features the world`s second tallest minaret, standing at 210 meters (689 feet).',
                        image: imageIndex.africa?.morroco?.hotspots?.[0]
                    },
                    {
                        name: 'El Badi Palace',
                        desc: 'Large-scale 16th-century ruins consisting of pisé walls and sunken gardens.',
                        image: imageIndex.africa?.morroco?.hotspots?.[1]
                    },
                    {
                        name: 'Archaeological Site of Volubilis',
                        desc: 'Preserved ruins of a partially excavated Roman city featuring standing columns and arches.',
                        image: imageIndex.africa?.morroco?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Potato Latkes',
                        desc: 'Crispy, shallow-fried pancakes made from grated potatoes, flour, and egg, often seasoned with garlic or onion and served with sour cream or applesauce.',
                        image: imageIndex.africa?.morroco?.cuisines?.[0]
                    },
                    {
                        name: 'Salade Panachée',
                        desc: 'A vibrant and colorful platter of various cooked and raw vegetable salads, often including beets, carrots, potatoes, and cucumbers, beautifully arranged around a center of rice or tuna.',
                        image: imageIndex.africa?.morroco?.cuisines?.[1]
                    },
                ]
            },
            tanzania: {
                slug: 'tanzania',
                name: 'Tanzania',
                desc: 'Tanzania is celebrated for its extraordinary wildlife and natural wonders, home to vast national parks, iconic safaris, and Africa’s highest peak, Mount Kilimanjaro. Its unspoiled landscapes and rich biodiversity make it a premier destination for nature and adventure enthusiasts.',
                shortDesc: 'Iconic safaris, vast plains, and natural wonders.',
                images: imageIndex.africa?.tanzania?.main ?? [],

                heroImage: imageIndex.africa?.tanzania?.main?.[0],

                hotspots: [
                    {
                        name: 'Mount Kilimanjaro',
                        desc: 'A dormant volcano and the highest mountain in Africa, featuring a snow-capped summit rising above a vast savanna landscape.',
                        image: imageIndex.africa?.tanzania?.hotspots?.[0]
                    },
                    {
                        name: 'Zebras in the Serengeti',
                        desc: 'A herd of zebras grazing and crossing a shallow river within a vast savanna ecosystem. The landscape features dry riverbanks and sparse vegetation typical of the East African plains.',
                        image: imageIndex.africa?.tanzania?.hotspots?.[1]
                    },
                    {
                        name: 'Zanzibar Beach and Tropical Resort',
                        desc: 'A coastal landscape featuring traditional thatched-roof bungalows situated along a rocky shoreline and white sand beach. The scene is characterized by clear turquoise waters and lush palm trees typical of a tropical archipelago.',
                        image: imageIndex.africa?.tanzania?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Mandazi',
                        desc: 'A form of hollow, fried dough (similar to a doughnut) that is lightly sweetened and often spiced with cardamom.',
                        image: imageIndex.africa?.morroco?.cuisines?.[0]
                    },
                    {
                        name: 'Erwtensoep',
                        desc: 'A thick and hearty traditional pea soup made from split peas, vegetables, and pork, often served with rye bread or smoked sausage (rookworst).',
                        image: imageIndex.africa?.morroco?.cuisines?.[1]
                    }
                ]
            },
            tunisia: {
                slug: 'tunisia',
                name: 'Tunisia',
                desc: 'Tunisia combines Mediterranean beauty with ancient history, featuring Roman ruins, desert landscapes, and coastal resorts. With its blend of cultural heritage and relaxed seaside atmosphere, it offers a unique and accessible travel experience.',
                shortDesc: 'Mediterranean charm with ancient historical heritage.',
                images: imageIndex.africa?.tunisia?.main ?? [],

                heroImage: imageIndex.africa?.tunisia?.main?.[0],

                hotspots: [
                    {
                        name: 'Amphitheatre of El Jem',
                        desc: 'A massive stone Roman amphitheater featuring three tiers of Corinthian-style arches and arcades. It is one of the best-preserved Roman ruins in the world and remains the largest colosseum in North Africa.',
                        image: imageIndex.africa?.tunisia?.hotspots?.[0]
                    },
                    {
                        name: 'Great Mosque of Sousse',
                        desc: 'A historic stone fortress-like mosque featuring a large open courtyard with arched porticos and rounded corner towers. The structure overlooks a public square and is situated near a busy port area with various urban commercial buildings.',
                        image: imageIndex.africa?.tunisia?.hotspots?.[1]
                    },
                    {
                        name: 'Sidi Bou Said Village',
                        desc: 'A Mediterranean coastal village known for its distinct white-washed buildings with blue-painted doors, windows, and decorative ironwork. The architecture features domed structures and terraces overlooking the turquoise waters of the Gulf of Tunis.',
                        image: imageIndex.africa?.tunisia?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Lablabi',
                        desc: 'A hearty and spicy Tunisian chickpea-based soup flavored with garlic, cumin, and harissa, traditionally served over pieces of stale crusty bread.',
                        image: imageIndex.africa?.tunisia?.cuisines?.[0]
                    },
                    {
                        name: 'Rozz Jerbi',
                        desc: 'A traditional steamed rice dish from the island of Djerba, where rice is mixed with finely chopped vegetables (such as spinach, carrots, and herbs), spices, and meat or liver, then steamed together in a couscoussier.',
                        image: imageIndex.africa?.tunisia?.cuisines?.[1]
                    }
                ]
            },
        },
    },

    america: {
        slug: 'america',
        name: 'America',
        desc: 'America offers a diverse blend of cultures, landscapes, and experiences, ranging from vibrant cities and historic landmarks to vast national parks, tropical beaches, and dramatic mountain ranges. The continent presents endless opportunities for exploration and adventure.',
        countries: {
            la: {
                slug: 'la',
                name: 'Los Angeles (LA)',
                desc:'Los Angeles is a dynamic city known for its entertainment industry, iconic beaches, and diverse neighborhoods. From Hollywood landmarks to coastal sunsets and vibrant cultural scenes, the city offers a blend of creativity, lifestyle, and urban exploration.',
                shortDesc: 'Entertainment capital with beaches, culture, and creativity.',
                images: imageIndex.america?.la?.main ?? [],

                heroImage: imageIndex.america?.la?.main?.[0],

                hotspots: [
                    {
                        name: 'Venice Beach',
                        desc: 'A world-famous oceanfront promenade featuring a sandy beach, palm trees, and coastal residential buildings.',
                        image: imageIndex.america?.la?.hotspots?.[0]
                    },
                    {
                        name: 'Griffith Observatory',
                        desc: 'An Art Deco landmark building featuring three large copper-clad domes and an astronomical telescope facility overlooking the city.',
                        image: imageIndex.america?.la?.hotspots?.[1]
                    },
                    {
                        name: 'Hollywood Sign',
                        desc: 'An iconic cultural landmark consisting of nine 45-foot-tall white capital letters situated on Mount Lee.',
                        image: imageIndex.america?.la?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Avocado Toast',
                        desc: 'A modern California staple featuring thick slices of creamy avocado layered over toasted artisanal bread, often garnished with red pepper flakes, seeds, or a drizzle of olive oil.',
                        image: imageIndex.america?.la?.cuisines?.[0]
                    },
                    {
                        name: 'Street Tacos',
                        desc: 'Authentic Mexican-style soft corn tortillas filled with seasoned grilled meat, topped with fresh chopped onions, cilantro, and a squeeze of lime, reflecting the city`s rich Latin heritage.',
                        image: imageIndex.america?.la?.cuisines?.[1]
                    }
                ]
            },

            ny: {
                slug: 'ny',
                name: 'New York (NY)',
                desc:'New York is a global metropolis celebrated for its iconic skyline, cultural diversity, and world-renowned landmarks. From historic neighborhoods and renowned museums to bustling streets and scenic parks, the city delivers an unmatched urban experience.',
                shortDesc: 'Iconic skyline, diverse culture, and nonstop city life.',
                images: imageIndex.america?.ny?.main ?? [],

                heroImage: imageIndex.america?.ny?.main?.[0],

                hotspots: [
                    {
                        name: 'Central Park',
                        desc: 'An expansive urban park consisting of 843 acres of green space, lakes, and trees surrounded by a dense skyscraper skyline.',
                        image: imageIndex.america?.ny?.hotspots?.[0]
                    },
                    {
                        name: 'Times Square',
                        desc: 'A major commercial intersection and bright pedestrian plaza illuminated by massive digital billboards and advertisements.',
                        image: imageIndex.america?.ny?.hotspots?.[1]
                    },
                    {
                        name: 'Empire State Building',
                        desc: 'A legendary 102-story Art Deco skyscraper featuring a tiered spire that is often illuminated with colorful decorative lighting.',
                        image: imageIndex.america?.ny?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'New York Cheesecake',
                        desc: 'A rich and dense dessert made with a high proportion of cream cheese for a smooth, velvety texture, typically served on a graham cracker crust and topped with a vibrant strawberry glaze.',
                        image: imageIndex.america?.ny?.cuisines?.[0]
                    },
                    {
                        name: 'New York-Style Pizza',
                        desc: 'A large, hand-tossed thin-crust pie characterized by its wide, foldable slices, a light layer of tomato sauce, and a generous coating of melted full-fat mozzarella cheese.',
                        image: imageIndex.america?.ny?.cuisines?.[1]
                    }
                ]
            },

            sf: {
                slug: 'sf',
                name: 'San Francisco (SF)',
                desc:'San Francisco is famous for its rolling hills, historic cable cars, and striking waterfront views. With its blend of innovation, culture, and scenic beauty, the city offers a distinctive and charming travel experience.',
                shortDesc: 'Scenic hills, waterfront views, and innovative spirit.',
                images: imageIndex.america?.sf?.main ?? [],

                heroImage: imageIndex.america?.sf?.main?.[0],

                hotspots: [
                    {
                        name: 'Alcatraz Federal Penitentiary',
                        desc: 'A historic high-security prison complex situated on a rugged island, featuring weathered concrete structures and a prominent lighthouse overlooking the bay.',
                        image: imageIndex.america?.sf?.hotspots?.[0]
                    },
                    {
                        name: 'Dragon`s Gate',
                        desc: 'An ornamental gateway featuring traditional green-tiled pagoda roofs, intricate dragon carvings, and stone guardian lions marking the entrance to a historic neighborhood.',
                        image: imageIndex.america?.sf?.hotspots?.[1]
                    },
                    {
                        name: 'Golden Gate Bridge',
                        desc: 'A massive suspension bridge finished in a signature orange hue, spanning a wide strait between steep coastal hills and deep blue waters.',
                        image: imageIndex.america?.sf?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Cioppino',
                        desc: 'A robust Italian-American seafood stew traditionally made from the "catch of the day"—typically including dungeness crab, clams, shrimp, and mussels—simmered in a savory tomato and wine broth.',
                        image: imageIndex.america?.sf?.cuisines?.[0]
                    },
                    {
                        name: 'Sourdough Bread',
                        desc: 'An iconic artisanal bread famous for its distinctively tangy flavor and chewy texture, achieved through a unique local wild yeast fermentation process.',
                        image: imageIndex.america?.sf?.cuisines?.[1]
                    }
                ]
            },

            toronto: {
                slug: 'toronto',
                name: 'Toronto',
                desc:'Toronto is a vibrant multicultural city known for its modern skyline, thriving arts scene, and diverse neighborhoods. Blending urban sophistication with cultural richness, it serves as a gateway to both city life and nearby natural attractions.',
                shortDesc: 'Multicultural metropolis with modern skyline and arts.',
                images: imageIndex.america?.toronto?.main ?? [],

                heroImage: imageIndex.america?.toronto?.main?.[0],

                hotspots: [
                    {
                        name: 'Royal Ontario Museum',
                        desc: 'A striking architectural fusion where a heritage stone building meets a jagged, modern addition of glass and aluminum known as the "Michael Lee-Chin Crystal."',
                        image: imageIndex.america?.toronto?.hotspots?.[0]
                    },
                    {
                        name: 'Ontario Legislative Building',
                        desc: 'A grand Richardsonian Romanesque-style structure built of pink sandstone, featuring asymmetrical towers, rounded arches, and a stately park setting.',
                        image: imageIndex.america?.toronto?.hotspots?.[1]
                    },
                    {
                        name: 'Toronto Skyline and CN Tower',
                        desc: 'A dense urban cityscape dominated by a slender, world-famous telecommunications needle, situated along the shimmering blue waters of Lake Ontario.',
                        image: imageIndex.america?.toronto?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Peameal Bacon Sandwich',
                        desc: 'A Toronto classic consisting of lean, cornmeal-crusted back bacon slices grilled to perfection and served on a soft kaiser roll, often paired with honey mustard.',
                        image: imageIndex.america?.toronto?.cuisines?.[0]
                    },
                    {
                        name: 'Poutine',
                        desc: 'A comforting Canadian dish featuring a bed of crispy golden french fries topped with fresh, squeaky cheese curds and smothered in a rich, savory brown gravy.',
                        image: imageIndex.america?.toronto?.cuisines?.[1]
                    }
                ]
            },

            vancouver: {
                slug: 'vancouver',
                name: 'Vancouver',
                desc:'Vancouver is renowned for its stunning natural surroundings, where mountains, forests, and the Pacific coastline meet a modern urban center. The city offers a unique balance of outdoor adventure, sustainability, and cosmopolitan living.',
                shortDesc: 'Coastal city blending nature, mountains, and urban life.',
                images: imageIndex.america?.vancouver?.main ?? [],

                heroImage: imageIndex.america?.vancouver?.main?.[0],

                hotspots: [
                    {
                        name: 'Science World',
                        desc: 'A distinctive geodesic dome structure featuring a gleaming silver lattice exterior, situated on the edge of a scenic waterfront.',
                        image: imageIndex.america?.vancouver?.hotspots?.[0]
                    },
                    {
                        name: 'Vancouver Art Gallery',
                        desc: 'A neoclassical heritage building featuring massive stone columns and a central dome, facing a sprawling paved public plaza at night.',
                        image: imageIndex.america?.vancouver?.hotspots?.[1]
                    },
                    {
                        name: 'Lions Gate Bridge and Stanley Park Seawall',
                        desc: 'A scenic coastal pathway lined with lush evergreen trees, offering views of a long green suspension bridge framed by distant mountains.',
                        image: imageIndex.america?.vancouver?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Japadog',
                        desc: 'A unique street food fusion featuring a traditional hot dog topped with Japanese ingredients such as seaweed, teriyaki sauce, kewpie mayo, and bonito flakes.',
                        image: imageIndex.america?.vancouver?.cuisines?.[0]
                    },
                    {
                        name: 'Candied Salmon',
                        desc: 'Fresh Pacific salmon strips that are brined in salt and maple syrup, then smoked until they achieve a sweet, firm, and jewel-like glazed finish.',
                        image: imageIndex.america?.vancouver?.cuisines?.[1]
                    }
                ]
            },
        }
    },

    asia: {
        slug: 'asia',
        name: 'Asia',
        desc: 'Asia is a vast continent known for its rich cultural heritage, ancient civilizations, diverse cuisines, and breathtaking landscapes ranging from tropical islands to towering mountains.',
        countries: {
            china: {
                slug: 'china',
                name: 'China',
                desc:'China is a vast country rich in history and cultural heritage, offering ancient landmarks, diverse landscapes, and rapidly modernizing cities. From historic traditions to contemporary innovation, it presents a fascinating blend of past and present.',
                shortDesc: 'Ancient heritage, diverse landscapes, and modern cities.',
                images: imageIndex.asia?.china?.main ?? [],

                heroImage: imageIndex.asia?.china?.main?.[0],

                hotspots: [
                    {
                        name: 'Shanghai Tower and Lujiazui Skyline',
                        desc: 'A futuristic collection of glass-clad skyscrapers, including a prominent twisting tower and a building with a unique rectangular aperture, glowing during the golden hour.',
                        image: imageIndex.asia?.china?.hotspots?.[0]
                    },
                    {
                        name: 'The Bund',
                        desc: 'A historic waterfront promenade featuring a row of grand colonial-era buildings with illuminated domes and clock towers, set against a backdrop of colorful light trails from city traffic.',
                        image: imageIndex.asia?.china?.hotspots?.[1]
                    },
                    {
                        name: 'Yuyuan Garden',
                        desc: 'A vibrant pedestrian square surrounded by traditional Chinese buildings featuring ornate multi-tiered roofs, red-lacquered wood, and warm evening illumination.',
                        image: imageIndex.asia?.china?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Hong Shao Rou',
                        desc: 'A classic and indulgent Chinese dish featuring succulent cubes of pork belly slow-cooked in a rich glaze of soy sauce, sugar, and aromatic spices until the meat is melt-in-your-mouth tender and coated in a deep, caramelized red sauce.',
                        image: imageIndex.asia?.china?.cuisines?.[0]
                    },
                    {
                        name: 'Sheng Jian Bao',
                        desc: 'A popular Shanghainese breakfast staple consisting of yeasted buns filled with juicy minced pork and gelatin that melts into broth; they are pan-fried in a shallow skillet to create a crispy, golden-brown bottom while the tops are steamed and garnished with black sesame seeds and scallions.',
                        image: imageIndex.asia?.china?.cuisines?.[1]
                    },
                    {
                        name: 'Xiao Long Bao',
                        desc: 'Delicate, hand-pleated dumplings filled with a savory pork morsel and a pocket of hot, flavorful broth, traditionally steamed in bamboo baskets and served with black vinegar and slivered ginger.',
                        image: imageIndex.asia?.china?.cuisines?.[2]
                    }
                ]
            },

            indonesia: {
                slug: 'indonesia',
                name: 'Indonesia',
                desc:'Indonesia is an archipelago of tropical islands known for its rich cultural traditions, volcanic landscapes, and pristine beaches. With its diverse heritage and natural beauty, the country offers a wide range of immersive travel experiences.',
                shortDesc: 'Tropical islands, rich culture, and natural beauty.',
                images: imageIndex.asia?.indonesia?.main ?? [],

                heroImage: imageIndex.asia?.indonesia?.main?.[0],

                hotspots: [
                    {
                        name: 'Kuta Beach',
                        desc: 'A wide, sandy shoreline at dusk, where the receding tide reflects a dramatic sky filled with layers of fiery orange and golden clouds.',
                        image: imageIndex.asia?.indonesia?.hotspots?.[0]
                    },
                    {
                        name: 'Pura Ulun Danu Beratan',
                        desc: 'A picturesque Hindu temple complex featuring a multi-tiered black thatched roof (meru) situated on a small island within a calm lake, surrounded by colorful tropical flowers.',
                        image: imageIndex.asia?.indonesia?.hotspots?.[1]
                    },
                    {
                        name: 'Pura Saraswati',
                        desc: 'A grand traditional Balinese temple entrance with intricate stone carvings, accessed by a central walkway flanked by expansive ponds filled with blooming lotus leaves.',
                        image: imageIndex.asia?.indonesia?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Nasi Campur Bali (with Babi Guling)',
                        desc: 'A vibrant Balinese platter featuring steamed rice accompanied by various side dishes, most notably Babi Guling (roast suckling pig), crispy pork skin, spicy lawar (vegetable and coconut salad), and satay, served on a traditional banana leaf.',
                        image: imageIndex.asia?.indonesia?.cuisines?.[0]
                    },
                    {
                        name: 'Nasi Campur',
                        desc: 'A foundational Indonesian meal consisting of a central scoop of white rice surrounded by a diverse array of small portions of meats, vegetables, peanuts, eggs, and fried tofu, all brought together by a dollop of spicy sambal.',
                        image: imageIndex.asia?.indonesia?.cuisines?.[1]
                    },
                    {
                        name: 'Sate Lilit',
                        desc: 'A unique Balinese satay made from minced meat (usually fish, chicken, or pork) mixed with grated coconut, coconut milk, lime juice, and a complex spice paste, then wrapped around thick lemongrass stalks and grilled over charcoal.',
                        image: imageIndex.asia?.indonesia?.cuisines?.[2]
                    },
                    {
                        name: 'Sate Lilit with Sambal Matah',
                        desc: 'Savory minced meat skewers grilled on lemongrass sticks, served with Sambal Matah, a famous Balinese raw condiment made of sliced shallots, lemongrass, chilies, and lime juice for a fresh and spicy kick.',
                        image: imageIndex.asia?.indonesia?.cuisines?.[3]
                    }
                ]
            },

            japan: {
                slug: 'japan',
                name: 'Japan',
                desc:'Japan seamlessly blends ancient traditions with cutting-edge modernity, featuring historic temples, serene landscapes, and vibrant cities. Its refined culture, seasonal beauty, and technological innovation create a uniquely balanced travel experience.',
                shortDesc: 'Tradition meets modern innovation and refined culture.',
                images: imageIndex.asia?.japan?.main ?? [],

                heroImage: imageIndex.asia?.japan?.main?.[0],

                hotspots: [
                    {
                        name: 'Shibuya Crossing',
                        desc: 'A prominent glass-faced commercial building featuring a massive digital media screen, overlooking one of the world`s busiest pedestrian intersections.',
                        image: imageIndex.asia?.japan?.hotspots?.[0]
                    },
                    {
                        name: 'Tokyo Skytree',
                        desc: 'A towering neo-futuristic broadcasting and observation tower that stands as the tallest structure in the city`s skyline.',
                        image: imageIndex.asia?.japan?.hotspots?.[1]
                    },
                    {
                        name: 'Senso-ji Temple',
                        desc: 'A grand, traditional Buddhist gate painted in vibrant vermillion, adorned with massive paper lanterns and intricate architectural detailing.',
                        image: imageIndex.asia?.japan?.hotspots?.[2]
                    }
                    
                ],

                cuisines: [
                    {
                        name: 'Ramen',
                        desc: 'A comforting Japanese noodle soup consisting of wheat noodles served in a savory meat or fish-based broth, typically topped with sliced chashu pork, a soft-boiled marinated egg, nori, and bamboo shoots.',
                        image: imageIndex.asia?.japan?.cuisines?.[0]
                    },
                    {
                        name: 'Sushi Platter',
                        desc: 'An elegant assortment of vinegared rice topped with fresh slices of raw seafood like salmon and tuna (nigiri), or rolled with seaweed and various fillings (maki), served with wasabi, pickled ginger, and soy sauce.',
                        image: imageIndex.asia?.japan?.cuisines?.[1]
                    },
                    {
                        name: 'Tempura',
                        desc: 'A classic Japanese dish consisting of seafood and vegetables, such as shrimp, pumpkin, and green beans, lightly battered and deep-fried to a delicate, airy crispness, usually served with a dashi-based dipping sauce.',
                        image: imageIndex.asia?.japan?.cuisines?.[2]
                    }
                ]
            },

            malaysia: {
                slug: 'malaysia',
                name: 'Malaysia',
                desc:'Malaysia is celebrated for its cultural diversity, modern cities, and lush natural environments. From bustling urban centers to rainforests and tropical coastlines, it offers a harmonious mix of tradition, cuisine, and contemporary life.',
                shortDesc: 'Cultural diversity, modern cities, and lush nature.',
                images: imageIndex.asia?.malaysia?.main ?? [],

                heroImage: imageIndex.asia?.malaysia?.main?.[0],

                hotspots: [
                    {
                        name: 'Batu Caves',
                        desc: 'A colossal golden Hindu deity statue standing beside a vibrant, rainbow-colored staircase that leads into a series of limestone caves.',
                        image: imageIndex.asia?.malaysia?.hotspots?.[0]
                    },
                    {
                        name: 'Kasturi Walk',
                        desc: 'An outdoor pedestrian shopping covered walkway featuring a giant traditional Malay kite (Wau Bulan) monument at its entrance.',
                        image: imageIndex.asia?.malaysia?.hotspots?.[1]
                    },
                    {
                        name: 'Petronas Twin Towers',
                        desc: 'Iconic twin skyscrapers featuring a modern Islamic-inspired design and a double-decker skybridge connecting the two structures.',
                        image: imageIndex.asia?.malaysia?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Char Kway Teow',
                        desc: 'A smoky and savory stir-fried flat rice noodle dish cooked over high heat with prawns, Chinese sausage, eggs, and bean sprouts, flavored with a blend of soy sauces and chili paste.',
                        image: imageIndex.asia?.malaysia?.cuisines?.[0]
                    },
                    {
                        name: 'Nasi Lemak',
                        desc: 'Often considered the national dish of Malaysia, it features fragrant rice cooked in coconut milk and pandan leaf, served with spicy sambal, crispy anchovies, toasted peanuts, cucumber slices, and a hard-boiled egg.',
                        image: imageIndex.asia?.malaysia?.cuisines?.[1]
                    },
                    {
                        name: 'Satay with Peanut Sauce',
                        desc: 'Succulent skewers of marinated meat, grilled over charcoal until charred and smoky, traditionally served with a rich, aromatic peanut dipping sauce and a side of fresh onions and cucumbers.',
                        image: imageIndex.asia?.malaysia?.cuisines?.[2]
                    }
                ]
            },

            thailand: {
                slug: 'thailand',
                name: 'Thailand',
                desc:'Thailand is known for its warm hospitality, ornate temples, and vibrant street life, complemented by stunning beaches and natural scenery. The country offers a dynamic combination of cultural depth, relaxation, and adventure.',
                shortDesc: 'Vibrant culture, ornate temples, and stunning beaches.',
                images: imageIndex.asia?.thailand?.main ?? [],

                heroImage: imageIndex.asia?.thailand?.main?.[0],

                hotspots: [
                    {
                        name: 'Wat Arun',
                        desc: 'A grand Buddhist temple featuring a massive, intricately decorated central prang (spire) reflecting gold and white tones against a sunset sky by the riverside.',
                        image: imageIndex.asia?.thailand?.hotspots?.[0]
                    },
                    {
                        name: 'Ratchada Train Night Market',
                        desc: 'A vibrant aerial view of a bustling night market characterized by hundreds of colorful tent rooftops arranged in a dense, glowing grid under a twilight sky.',
                        image: imageIndex.asia?.thailand?.hotspots?.[1]
                    },
                    {
                        name: 'The Grand Palace and Wat Phra Kaew',
                        desc: 'An opulent complex of royal and religious buildings featuring golden spires, multi-tiered colorful roofs, and ornate white walls illuminated during the blue hour.',
                        image: imageIndex.asia?.thailand?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Mango Sticky Rice',
                        desc: 'A beloved Thai dessert featuring sweet, glutinous rice steamed with coconut milk and sugar, served alongside fresh, ripe mango slices and topped with a salty-sweet coconut cream sauce and toasted mung beans.',
                        image: imageIndex.asia?.thailand?.cuisines?.[0]
                    },
                    {
                        name: 'Vegetarian Pad Thai',
                        desc: 'A popular street-food staple of stir-fried rice noodles tossed with tofu, bean sprouts, and green onions in a tangy tamarind-based sauce, garnished with crushed peanuts and fresh lime.',
                        image: imageIndex.asia?.thailand?.cuisines?.[1]
                    },
                    {
                        name: 'Pad Thai with Shrimp',
                        desc: 'Thailand`s iconic stir-fried noodle dish, combining rice sticks with plump shrimp, eggs, and firm tofu in a complex sweet-savory sauce made from tamarind, fish sauce, and palm sugar.',
                        image: imageIndex.asia?.thailand?.cuisines?.[2]
                    },
                    {
                        name: 'om Yum Goong',
                        desc: 'A hot and sour Thai soup characterized by its fragrant broth infused with lemongrass, galangal, and kaffir lime leaves, loaded with succulent shrimp, mushrooms, and a spicy chili kick.',
                        image: imageIndex.asia?.thailand?.cuisines?.[3]
                    }
                ]
            },
        }
    },

    europe: {
        slug: 'europe',
        name: 'Europe',
        desc: 'Europe is a continent rich in history, art, and architectural heritage, offering a seamless blend of ancient landmarks, charming cities, and diverse cultures. From picturesque countryside and scenic coastlines to vibrant capitals and culinary traditions, Europe provides timeless and refined travel experiences.',
        countries: {
            france: {
                slug: 'france',
                name: 'France',
                desc:'France is renowned for its art, history, and refined cultural heritage, offering iconic landmarks, picturesque countryside, and world-class cuisine. From vibrant cities to charming villages, the country provides timeless and elegant travel experiences.',
                shortDesc: 'Art, cuisine, and timeless cultural elegance.',
                images: imageIndex.europe?.france?.main ?? [],

                heroImage: imageIndex.europe?.france?.main?.[0],

                hotspots: [
                    {
                        name: 'Palace of Versailles',
                        desc: 'A massive royal chateau viewed from above, showcasing symmetrical classical wings and extensive formal geometric gardens with fountains.',
                        image: imageIndex.europe?.france?.hotspots?.[0]
                    },
                    {
                        name: 'Arc de Triomphe',
                        desc: 'A monumental triumphal arch adorned with elaborate relief sculptures and inscriptions, standing at the center of a busy urban circular plaza.',
                        image: imageIndex.europe?.france?.hotspots?.[1]
                    },
                    {
                        name: 'The Louvre Museum and Pyramid',
                        desc: 'A wide courtyard view of a historic royal palace complex with a modern glass and metal pyramid structure as its centerpiece, lit up at night.',
                        image: imageIndex.europe?.france?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Ratatouille',
                        desc: 'A traditional French Provençal stewed vegetable dish, primarily made with eggplant, zucchini, onions, bell peppers, and tomatoes, seasoned with garlic and herbes de Provence for a rich, earthy flavor.',
                        image: imageIndex.europe?.france?.cuisines?.[0]
                    },
                    {
                        name: 'Macarons',
                        desc: 'Delicate and colorful meringue-based confections made with almond flour, egg whites, and sugar, featuring a smooth top, a ruffled "foot," and a creamy ganache, buttercream, or jam filling sandwiched between two shells.',
                        image: imageIndex.europe?.france?.cuisines?.[1]
                    }
                ]
            },

            germany: {
                slug: 'germany',
                name: 'Germany',
                desc:'Germany blends rich history with modern innovation, featuring medieval towns, contemporary cities, and scenic landscapes. Known for its cultural traditions and efficiency, it offers a diverse and well-rounded travel experience.',
                shortDesc: 'Historic towns, modern cities, and rich traditions.',
                images: imageIndex.europe?.germany?.main ?? [],

                heroImage: imageIndex.europe?.germany?.main?.[0],

                hotspots: [
                    {
                        name: 'Brandenburg Gate',
                        desc: 'A neoclassical sandstone monument featuring twelve Doric columns and topped with a Quadriga statue, illuminated against a twilight sky.',
                        image: imageIndex.europe?.germany?.hotspots?.[0]
                    },
                    {
                        name: 'Reichstag Building',
                        desc: 'A historic government edifice featuring a classical facade with a modern large glass dome on top, surrounded by green lawns and national flags.',
                        image: imageIndex.europe?.germany?.hotspots?.[1]
                    },
                    {
                        name: 'Gendarmenmarkt',
                        desc: 'A wide-angle panoramic view of an architectural ensemble featuring the Konzerthaus flanked by two matching domed cathedrals, all glowing under the evening light.',
                        image: imageIndex.europe?.germany?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Sauerbraten',
                        desc: 'A traditional German pot roast of heavily marinated meat, served with a thick sweet-and-sour gravy, accompanied by red cabbage (Rotkohl) and potato dumplings (Klöße) to soak up the sauce.',
                        image: imageIndex.europe?.germany?.cuisines?.[0]
                    },
                    {
                        name: 'Bitburger Pilsner',
                        desc: 'A premier German pilsner beer characterized by its bright golden color, a delicate hoppy aroma with a hint of malt sweetness, and a crisp, clean finish that is iconic to the Eifel region.',
                        image: imageIndex.europe?.germany?.cuisines?.[1]
                    }
                ]
            },

            netherlands: {
                slug: 'netherlands',
                name: 'Netherlands',
                desc:'The Netherlands is known for its scenic canals, historic cities, and progressive culture. With its blend of artistic heritage, modern design, and relaxed atmosphere, it offers a distinctive and welcoming travel experience.',
                shortDesc: 'Scenic canals, historic cities, and relaxed culture.',
                images: imageIndex.europe?.netherlands?.main ?? [],

                heroImage: imageIndex.europe?.netherlands?.main?.[0],

                hotspots: [
                    {
                        name: 'Royal Palace Amsterdam.',
                        desc: 'A monumental classical building with a symmetrical stone facade and an elegant central bell tower, facing the wide-open space of Dam Square.',
                        image: imageIndex.europe?.netherlands?.hotspots?.[0]
                    },
                    {
                        name: 'Rijksmuseum.',
                        desc: 'An iconic Gothic-Renaissance style museum building featuring two main towers and a large central arched passageway that allows cyclists and pedestrians to pass through the heart of the structure.',
                        image: imageIndex.europe?.netherlands?.hotspots?.[1]
                    },
                    {
                        name: 'Basilica of Saint Nicholas.',
                        desc: 'A grand Roman Catholic church featuring twin towers and a large central dome, standing prominently behind a row of traditional Dutch canal houses under a clear sky.',
                        image: imageIndex.europe?.netherlands?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Hachee',
                        desc: 'A traditional Dutch stew made with diced beef, fish, or poultry and caramelized onions, slow-cooked in a thick gravy flavored with vinegar, cloves, and bay leaves, typically served with mashed potatoes and red cabbage.',
                        image: imageIndex.europe?.netherlands?.cuisines?.[0]
                    },
                    {
                        name: 'Metworst',
                        desc: 'A type of traditional Dutch dried sausage with a strong, salty flavor and firm texture, often seasoned with cloves and eaten as a snack or served on a charcuterie board.',
                        image: imageIndex.europe?.netherlands?.cuisines?.[1]
                    }
                ]
            },

            turkey: {
                slug: 'turkey',
                name: 'Turkey',
                desc:'Turkey sits at the crossroads of Europe and Asia, offering a rich tapestry of cultures, historic sites, and diverse landscapes. From ancient ruins to vibrant bazaars and stunning coastlines, it delivers a deeply layered and memorable travel experience.',
                shortDesc: 'Crossroads of cultures with rich historical heritage.',
                images: imageIndex.europe?.turkey?.main ?? [],

                heroImage: imageIndex.europe?.turkey?.main?.[0],

                hotspots: [
                    {
                        name: 'The Blue Mosque',
                        desc: 'A panoramic aerial view featuring the majestic Blue Mosque with its six minarets in the foreground and the historic Hagia Sophia in the distance, separated by lush greenery against the backdrop of the Bosphorus Strait.',
                        image: imageIndex.europe?.turkey?.hotspots?.[0]
                    },
                    {
                        name: 'Galata Tower.',
                        desc: 'A tall, cylindrical stone tower with a distinctive conical roof, dominating the skyline of the Galata district with an observation deck at the top overlooking the city.',
                        image: imageIndex.europe?.turkey?.hotspots?.[1]
                    },
                    {
                        name: 'Topkapi Palace.',
                        desc: 'An expansive palace complex with various domes and towers nestled within a dense grove of trees, situated on a peninsula overlooking the busy waters of the Bosphorus and Golden Horn.',
                        image: imageIndex.europe?.turkey?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Turkish Delight',
                        desc: 'A family of confections based on a gel of starch and sugar, often flavored with rosewater, mastic, or lemon, and frequently packed with chopped pistachios, hazelnuts, or walnuts, then dusted with icing sugar.',
                        image: imageIndex.europe?.turkey?.cuisines?.[0]
                    },
                    {
                        name: 'Ali Nazik Kebab',
                        desc: 'A delicious Ottoman-style dish featuring smoked and spiced grilled lamb or beef served over a bed of warm, creamy eggplant purée mixed with garlic yogurt and drizzled with melted butter.',
                        image: imageIndex.europe?.turkey?.cuisines?.[1]
                    }
                ]
            },

            uk: {
                slug: 'uk',
                name: 'United Kingdom',
                desc:'The United Kingdom is rich in history and tradition, featuring historic landmarks, dynamic cities, and scenic countryside. With its blend of cultural heritage and contemporary life, it offers a diverse and engaging travel experience.',
                shortDesc: 'Historic landmarks, vibrant cities, and scenic countryside.',
                images: imageIndex.europe?.uk?.main ?? [],

                heroImage: imageIndex.europe?.uk?.main?.[0],

                hotspots: [
                    {
                        name: 'Piccadilly Circus.',
                        desc: 'A bustling evening scene at a major city junction, dominated by iconic curved electronic billboards displaying bright advertisements above a crowd of pedestrians and red double-decker buses.',
                        image: imageIndex.europe?.uk?.hotspots?.[0]
                    },
                    {
                        name: 'Palace of Westminster',
                        desc: 'A wide-angle view of the Gothic Revival architectural masterpiece situated along the River Thames, showcasing its intricate golden-brown facade and the famous clock tower under a cloudy sky.',
                        image: imageIndex.europe?.uk?.hotspots?.[1]
                    },
                    {
                        name: 'Canary Wharf Skyline',
                        desc: 'A vibrant twilight view of the Canary Wharf financial district skyline, with illuminated skyscrapers reflecting off the calm surface of the River Thames.',
                        image: imageIndex.europe?.uk?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Fish and Chips',
                        desc: 'A classic British comfort dish consisting of a fresh white fish fillet coated in a crispy golden batter, deep-fried to perfection, and served alongside thick-cut potato chips, mushy peas, and tartar sauce.',
                        image: imageIndex.europe?.uk?.cuisines?.[0]
                    },
                    {
                        name: 'Full English Breakfast',
                        desc: 'A substantial morning meal featuring fried eggs, sausages, back bacon, tomatoes, mushrooms, fried bread, and baked beans, often accompanied by black pudding and hash browns for a complete "fry-up" experience.',
                        image: imageIndex.europe?.uk?.cuisines?.[1]
                    }
                ]
            },
        }
    },

    oceania: {
        slug: 'oceania',
        name: 'Oceania',
        desc: 'Oceania is renowned for its pristine beaches, crystal-clear waters, and breathtaking natural landscapes, from coral reefs and tropical islands to rugged coastlines and lush rainforests. With a relaxed atmosphere and rich indigenous cultures, the region offers a perfect balance of adventure, nature, and tranquility.',
        countries: {
            australia: {
                slug: 'australia',
                name: 'Australia',
                desc:'Australia is known for its vast landscapes, vibrant cities, and unique wildlife, offering experiences that range from iconic beaches and deserts to modern urban centers. The country blends outdoor adventure with a relaxed lifestyle and diverse culture.',
                shortDesc: 'Vast landscapes, unique wildlife, and modern cities.',
                images: imageIndex.oceania?.australia?.main ?? [],

                heroImage: imageIndex.oceania?.australia?.main?.[0],

                hotspots: [
                    {
                        name: 'Sydney Opera House.',
                        desc: 'A world-renowned architectural landmark featuring a series of large precast concrete "shells" that form the roofs of the structure, set against the backdrop of the Sydney Harbour.',
                        image: imageIndex.oceania?.australia?.hotspots?.[0]
                    },
                    {
                        name: 'Uluru',
                        desc: 'A massive, sacred sandstone monolith characterized by its striking red hue, rising abruptly from the flat desert landscape of the "Red Centre".',
                        image: imageIndex.oceania?.australia?.hotspots?.[1]
                    },
                    {
                        name: 'The Great Barrier Reef',
                        desc: 'A stunning aerial view of the world`s largest coral reef system, featuring vibrant turquoise waters and unique natural formations, including the famous heart-shaped coral composition.',
                        image: imageIndex.oceania?.australia?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Australian Meat Pie',
                        desc: 'A classic Australian comfort food consisting of a flaky, golden-brown pastry crust filled with minced meat and gravy, often enjoyed with tomato sauce (ketchup).',
                        image: imageIndex.oceania?.australia?.cuisines?.[0]
                    },
                    {
                        name: 'Avocado and Bean Salad',
                        desc: 'A fresh and vibrant contemporary Australian salad featuring creamy avocado chunks, white beans, and cherry tomatoes, seasoned with fresh herbs and a light citrus vinaigrette.',
                        image: imageIndex.oceania?.australia?.cuisines?.[1]
                    }
                ]
            },

            fiji: {
                slug: 'fiji',
                name: 'Fiji',
                desc:'Fiji is a tropical paradise celebrated for its crystal-clear waters, coral reefs, and warm hospitality. With its idyllic islands and laid-back atmosphere, it offers a perfect escape for relaxation and ocean-based adventures.',
                shortDesc: 'Tropical islands, coral reefs, and warm hospitality.',
                images: imageIndex.oceania?.fiji?.main ?? [],

                heroImage: imageIndex.oceania?.fiji?.main?.[0],

                hotspots: [
                    {
                        name: 'Natadola Beach',
                        desc: 'A picturesque tropical shoreline featuring white sandy beaches and crystal-clear turquoise waters, widely considered one of the most beautiful coastal spots in the Fiji archipelago.',
                        image: imageIndex.oceania?.fiji?.hotspots?.[0]
                    },
                    {
                        name: 'Fiji Island Resort',
                        desc: 'A serene cluster of traditional thatched-roof villas (bures) nestled among coconut palms on a small coral island, surrounded by a shallow, vibrant blue lagoon.',
                        image: imageIndex.oceania?.fiji?.hotspots?.[1]
                    },
                    {
                        name: 'Sri Siva Subramaniya Temple.',
                        desc: 'A vibrant and intricately carved Hindu temple showcasing colorful Dravidian architecture, recognized as the largest Hindu temple in the Southern Hemisphere.',
                        image: imageIndex.oceania?.fiji?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Kokoda',
                        desc: 'A traditional Fijian raw fish salad marinated in lime juice and served in a rich, creamy coconut milk base with finely diced vegetables, often presented in a coconut shell.',
                        image: imageIndex.oceania?.fiji?.cuisines?.[0]
                    },
                    {
                        name: 'Lovo',
                        desc: 'A traditional Fijian feast where meat, seafood, and root vegetables like cassava and taro are slow-cooked in an underground earth oven over hot stones and covered with banana leaves.',
                        image: imageIndex.oceania?.fiji?.cuisines?.[1]
                    }
                ]
            },

            newzealand: {
                slug: 'newzealand',
                name: 'New Zealand',
                desc:'New Zealand is renowned for its dramatic natural scenery, featuring mountains, fjords, and lush countryside. Known for its outdoor adventures and welcoming culture, it delivers unforgettable experiences for nature lovers and explorers.',
                shortDesc: 'Dramatic scenery and outdoor adventure experiences.',
                images: imageIndex.oceania?.newzealand?.main ?? [],

                heroImage: imageIndex.oceania?.newzealand?.main?.[0],

                hotspots: [
                    {
                        name: 'Mitre Peak',
                        desc: 'A dramatic natural landscape featuring the iconic, sharp-peaked Mitre Peak rising steeply from the dark blue waters of a fjord, surrounded by lush green cliffs and sightseeing boats.',
                        image: imageIndex.oceania?.newzealand?.hotspots?.[0]
                    },
                    {
                        name: 'Aoraki / Mount Cook',
                        desc: 'A breathtaking view of New Zealand`s highest mountain peak, heavily covered in snow and ice, towering over a turquoise glacial lake and a foreground of dense evergreen forest.',
                        image: imageIndex.oceania?.newzealand?.hotspots?.[1]
                    },
                    {
                        name: 'Bag End',
                        desc: 'A charming, whimsical dwelling built into a grassy hillside, featuring a perfectly circular wooden door, rustic timber framing, and a vibrant garden filled with blooming flowers and a picket fence.',
                        image: imageIndex.oceania?.newzealand?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Hāngī',
                        desc: 'A traditional Māori method of cooking food using heated rocks buried in a pit oven, resulting in tender, smoky-flavored meats and root vegetables like kumara (sweet potato).',
                        image: imageIndex.oceania?.newzealand?.cuisines?.[0]
                    },
                    {
                        name: 'Green-Lipped Mussels',
                        desc: 'Iconic New Zealand green-lipped mussels steamed in a fragrant broth of white wine, garlic, and herbs, served with toasted sourdough bread to soak up the juices.',
                        image: imageIndex.oceania?.newzealand?.cuisines?.[1]
                    }
                ]
            },

            palau: {
                slug: 'palau',
                name: 'Palau',
                desc:'Palau is a pristine island nation famous for its rich marine biodiversity and turquoise waters. With its untouched reefs and serene environment, it is a premier destination for diving, snorkeling, and nature-focused travel.',
                shortDesc: 'Pristine reefs and world-class marine biodiversity.',
                images: imageIndex.oceania?.palau?.main ?? [],

                heroImage: imageIndex.oceania?.palau?.main?.[0],

                hotspots: [
                    {
                        name: 'Rock Islands',
                        desc: 'A vast aerial panorama of mushroom-shaped limestone islands covered in thick green vegetation, scattered across a vibrant turquoise and deep blue lagoon.',
                        image: imageIndex.oceania?.palau?.hotspots?.[0]
                    },
                    {
                        name: 'Ongeim`l Tketau',
                        desc: 'An aerial view of a secluded marine lake enclosed by dense, verdant tropical jungle, known for its unique ecosystem of stingless golden jellyfish.',
                        image: imageIndex.oceania?.palau?.hotspots?.[1]
                    },
                    {
                        name: 'Palauan Capitol',
                        desc: 'A grand legislative building designed in the Neoclassical style, featuring a prominent white central dome, a colonnaded entrance with towering pillars, and intricate decorative patterns on the facade, situated under a clear blue sky.',
                        image: imageIndex.oceania?.palau?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Grilled Whole Fish',
                        desc: 'A fresh, locally caught whole fish seasoned with tropical spices and grilled to perfection, typically garnished with calamansi and served on vibrant green leaves.',
                        image: imageIndex.oceania?.palau?.cuisines?.[0]
                    },
                    {
                        name: 'Sea Cucumber',
                        desc: 'A traditional Palauan delicacy consisting of prepared sea cucumber, often served raw or lightly blanched, known for its unique gelatinous texture and subtle ocean flavor.',
                        image: imageIndex.oceania?.palau?.cuisines?.[1]
                    },
                ]
            },

            vanuatu: {
                slug: 'vanuatu',
                name: 'Vanuatu',
                desc:'Vanuatu offers a blend of volcanic landscapes, tropical beaches, and vibrant local traditions. Its unspoiled natural beauty and strong cultural heritage make it an appealing destination for adventurous and culturally curious travelers.',
                shortDesc: 'Volcanic landscapes and vibrant island traditions.',
                images: imageIndex.oceania?.vanuatu?.main ?? [],

                heroImage: imageIndex.oceania?.vanuatu?.main?.[0],

                hotspots: [
                    {
                        name: 'Mount Yasur',
                        desc: 'A striking view of an active stratovolcano featuring a dark, ash-covered slope with a large plume of grey smoke billowing into the sky, contrasted by tropical greenery in the foreground.',
                        image: imageIndex.oceania?.vanuatu?.hotspots?.[0]
                    },
                    {
                        name: 'Nanda Blue Hole',
                        desc: 'A serene natural swimming hole featuring incredibly clear, deep blue water surrounded by lush tropical jungle and wooden viewing platforms.',
                        image: imageIndex.oceania?.vanuatu?.hotspots?.[1]
                    },
                    {
                        name: 'Mele Cascades',
                        desc: 'A beautiful tiered waterfall cascading over smooth limestone rocks into natural pools, set within a vibrant green rainforest environment under bright sunlight.',
                        image: imageIndex.oceania?.vanuatu?.hotspots?.[2]
                    }
                ],

                cuisines: [
                    {
                        name: 'Lap Lap',
                        desc: 'The national dish of Vanuatu, made by pounding taro or yam into a paste, topping it with fresh coconut cream and meat (such as pork or beef), and baking it inside banana leaves.',
                        image: imageIndex.oceania?.vanuatu?.cuisines?.[0]
                    },
                    {
                        name: 'Vanuatu Seafood and Steak Platter',
                        desc: 'A luxurious island meal featuring locally sourced lobster tail, grilled prawns, and tender beef steak, served with rice and fresh tropical vegetable garnishes.',
                        image: imageIndex.oceania?.vanuatu?.cuisines?.[1]
                    }
                ]
            },
        }
    }
};