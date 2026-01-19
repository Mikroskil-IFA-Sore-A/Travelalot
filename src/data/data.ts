import type { Entries } from './types';
import { buildImageIndex } from './imageIndex';

const imageIndex = buildImageIndex();

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
                short: 'Ancient wonders, Nile heritage, and timeless history.',
                images: imageIndex.africa?.egypt ?? []
            },
            southafrica: {
                slug: 'southafrica',
                name: 'South Africa',
                desc: 'South Africa offers an exceptional mix of wildlife safaris, diverse cultures, and dramatic landscapes, from vast savannas and rugged coastlines to vibrant cities and renowned vineyards. It is a destination where adventure, nature, and modern life come together seamlessly.',
                short: 'Wildlife safaris, diverse culture, and dramatic landscapes.',
                images: imageIndex.africa?.southafrica ?? []
            },
            morroco: {
                slug: 'morroco',
                name: 'Morroco',
                desc: 'Morocco is known for its colorful souks, historic medinas, and striking desert landscapes, blending rich traditions with distinctive architecture and cuisine. From bustling cities to serene desert escapes, the country offers a deeply immersive cultural experience.',
                short: 'Colorful souks, desert scenery, and rich traditions.',
                images: imageIndex.africa?.morroco ?? []
            },
            tanzania: {
                slug: 'tanzania',
                name: 'Tanzania',
                desc: 'Tanzania is celebrated for its extraordinary wildlife and natural wonders, home to vast national parks, iconic safaris, and Africa’s highest peak, Mount Kilimanjaro. Its unspoiled landscapes and rich biodiversity make it a premier destination for nature and adventure enthusiasts.',
                short: 'Iconic safaris, vast plains, and natural wonders.',
                images: imageIndex.africa?.tanzania ?? []
            },
            tunisia: {
                slug: 'tunisia',
                name: 'Tunisia',
                desc: 'Tunisia combines Mediterranean beauty with ancient history, featuring Roman ruins, desert landscapes, and coastal resorts. With its blend of cultural heritage and relaxed seaside atmosphere, it offers a unique and accessible travel experience.',
                short: 'Mediterranean charm with ancient historical heritage.',
                images: imageIndex.africa?.tunisia ?? []
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
                short: '',
                images: imageIndex.america?.la ?? []
            },
            ny: {
                slug: 'ny',
                name: 'New York (NY)',
                desc:'New York is a global metropolis celebrated for its iconic skyline, cultural diversity, and world-renowned landmarks. From historic neighborhoods and renowned museums to bustling streets and scenic parks, the city delivers an unmatched urban experience.',
                short: '',
                images: imageIndex.america?.ny ?? []
            },
            sf: {
                slug: 'sf',
                name: 'San Francisco (SF)',
                desc:'San Francisco is famous for its rolling hills, historic cable cars, and striking waterfront views. With its blend of innovation, culture, and scenic beauty, the city offers a distinctive and charming travel experience.',
                short: '',
                images: imageIndex.america?.sf ?? []
            },
            toronto: {
                slug: 'toronto',
                name: 'Toronto',
                desc:'Toronto is a vibrant multicultural city known for its modern skyline, thriving arts scene, and diverse neighborhoods. Blending urban sophistication with cultural richness, it serves as a gateway to both city life and nearby natural attractions.',
                short: '',
                images: imageIndex.america?.toronto ?? []
            },
            vancouver: {
                slug: 'vancouver',
                name: 'Vancouver',
                desc:'Vancouver is renowned for its stunning natural surroundings, where mountains, forests, and the Pacific coastline meet a modern urban center. The city offers a unique balance of outdoor adventure, sustainability, and cosmopolitan living.',
                short: '',
                images: imageIndex.america?.vancouver ?? []
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
                short: 'Ancient heritage, diverse landscapes, and modern cities.',
                images: imageIndex.asia?.china ?? []
            },
            indonesia: {
                slug: 'indonesia',
                name: 'Indonesia',
                desc:'Indonesia is an archipelago of tropical islands known for its rich cultural traditions, volcanic landscapes, and pristine beaches. With its diverse heritage and natural beauty, the country offers a wide range of immersive travel experiences.',
                short: 'Tropical islands, rich culture, and natural beauty.',
                images: imageIndex.asia?.indonesia ?? []
            },
            japan: {
                slug: 'japan',
                name: 'Japan',
                desc:'Japan seamlessly blends ancient traditions with cutting-edge modernity, featuring historic temples, serene landscapes, and vibrant cities. Its refined culture, seasonal beauty, and technological innovation create a uniquely balanced travel experience.',
                short: 'Tradition meets modern innovation and refined culture.',
                images: imageIndex.asia?.japan ?? []
            },
            malaysia: {
                slug: 'malaysia',
                name: 'Malaysia',
                desc:'Malaysia is celebrated for its cultural diversity, modern cities, and lush natural environments. From bustling urban centers to rainforests and tropical coastlines, it offers a harmonious mix of tradition, cuisine, and contemporary life.',
                short: 'Cultural diversity, modern cities, and lush nature.',
                images: imageIndex.asia?.malaysia ?? []
            },
            thailand: {
                slug: 'thailand',
                name: 'Thailand',
                desc:'Thailand is known for its warm hospitality, ornate temples, and vibrant street life, complemented by stunning beaches and natural scenery. The country offers a dynamic combination of cultural depth, relaxation, and adventure.',
                short: 'Vibrant culture, ornate temples, and stunning beaches.',
                images: imageIndex.asia?.thailand ?? []
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
                short: 'Art, cuisine, and timeless cultural elegance.',
                images: imageIndex.europe?.france ?? []
            },
            germany: {
                slug: 'germany',
                name: 'Germany',
                desc:'Germany blends rich history with modern innovation, featuring medieval towns, contemporary cities, and scenic landscapes. Known for its cultural traditions and efficiency, it offers a diverse and well-rounded travel experience.',
                short: 'Historic towns, modern cities, and rich traditions.',
                images: imageIndex.europe?.germany ?? []
            },
            netherlands: {
                slug: 'netherlands',
                name: 'Netherlands',
                desc:'The Netherlands is known for its scenic canals, historic cities, and progressive culture. With its blend of artistic heritage, modern design, and relaxed atmosphere, it offers a distinctive and welcoming travel experience.',
                short: 'Scenic canals, historic cities, and relaxed culture.',
                images: imageIndex.europe?.netherlands ?? []
            },
            turkey: {
                slug: 'turkey',
                name: 'Turkey',
                desc:'Turkey sits at the crossroads of Europe and Asia, offering a rich tapestry of cultures, historic sites, and diverse landscapes. From ancient ruins to vibrant bazaars and stunning coastlines, it delivers a deeply layered and memorable travel experience.',
                short: 'Crossroads of cultures with rich historical heritage.',
                images: imageIndex.europe?.turkey ?? []
            },
            uk: {
                slug: 'uk',
                name: 'United Kingdom',
                desc:'The United Kingdom is rich in history and tradition, featuring historic landmarks, dynamic cities, and scenic countryside. With its blend of cultural heritage and contemporary life, it offers a diverse and engaging travel experience.',
                short: 'Historic landmarks, vibrant cities, and scenic countryside.',
                images: imageIndex.europe?.uk ?? []
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
                short: 'Vast landscapes, unique wildlife, and modern cities.',
                images: imageIndex.oceania?.australia ?? []
            },
            fiji: {
                slug: 'fiji',
                name: 'Fiji',
                desc:'Fiji is a tropical paradise celebrated for its crystal-clear waters, coral reefs, and warm hospitality. With its idyllic islands and laid-back atmosphere, it offers a perfect escape for relaxation and ocean-based adventures.',
                short: 'Tropical islands, coral reefs, and warm hospitality.',
                images: imageIndex.oceania?.fiji ?? []
            },
            newzealand: {
                slug: 'newzealand',
                name: 'New Zealand',
                desc:'New Zealand is renowned for its dramatic natural scenery, featuring mountains, fjords, and lush countryside. Known for its outdoor adventures and welcoming culture, it delivers unforgettable experiences for nature lovers and explorers.',
                short: 'Dramatic scenery and outdoor adventure experiences.',
                images: imageIndex.oceania?.newzealand ?? []
            },
            palau: {
                slug: 'palau',
                name: 'Palau',
                desc:'Palau is a pristine island nation famous for its rich marine biodiversity and turquoise waters. With its untouched reefs and serene environment, it is a premier destination for diving, snorkeling, and nature-focused travel.',
                short: 'Pristine reefs and world-class marine biodiversity.',
                images: imageIndex.oceania?.palau ?? []
            },
            vanuatu: {
                slug: 'vanuatu',
                name: 'Vanuatu',
                desc:'Vanuatu offers a blend of volcanic landscapes, tropical beaches, and vibrant local traditions. Its unspoiled natural beauty and strong cultural heritage make it an appealing destination for adventurous and culturally curious travelers.',
                short: 'Volcanic landscapes and vibrant island traditions.',
                images: imageIndex.oceania?.vanuatu ?? []
            },
        }
    }
};
