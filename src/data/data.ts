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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.egypt?.hotspots?.[0]
                    },
                    {
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.egypt?.hotspots?.[1]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.africa?.egypt?.cuisines?.[0]
                    },
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.southafrica?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.africa?.southafrica?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.morroco?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.africa?.morroco?.cuisines?.[0]
                    }
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.tanzania?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.africa?.morroco?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.africa?.tunisia?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.africa?.tunisia?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.america?.la?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.america?.la?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.america?.ny?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.america?.ny?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.america?.sf?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.america?.sf?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.america?.toronto?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.america?.toronto?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.america?.vancouver?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.america?.vancouver?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.asia?.china?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.asia?.china?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.asia?.indonesia?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.asia?.indonesia?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.asia?.japan?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.asia?.japan?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.asia?.malaysia?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.asia?.malaysia?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.asia?.thailand?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.asia?.thailand?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.europe?.france?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.europe?.france?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.europe?.germany?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.europe?.germany?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.europe?.netherlands?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.europe?.netherlands?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.europe?.turkey?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.europe?.turkey?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.europe?.uk?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.europe?.uk?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.oceania?.australia?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.oceania?.australia?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.oceania?.fiji?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.oceania?.fiji?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.oceania?.newzealand?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.oceania?.newzealand?.cuisines?.[0]
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.oceania?.palau?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.oceania?.palau?.cuisines?.[0]
                    }
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
                        name: 'Pyramids of Giza',
                        desc: 'Iconic ancient pyramids and archaeological wonders.',
                        image: imageIndex.oceania?.vanuatu?.hotspots?.[0]
                    }
                ],

                cuisines: [
                    {
                        name: 'Koshari',
                        desc: 'A popular Egyptian comfort dish.',
                        image: imageIndex.oceania?.vanuatu?.cuisines?.[0]
                    }
                ]
            },
        }
    }
};