
export interface Product {
  id: string;
  name: string;
  description: string;
  // price: number;
  // originalPrice?: number;
  image: string;
  rating: number;
  reviews: number | null;
  category: string;
  tags: string[];
  affiliateUrl: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
{
  "id": "60",
  "name": "Dyazo Laptop Stand Foldable Height Angle Adjustable",
  "description": "A foldable and height/angle adjustable laptop riser designed for desk use. Compatible with laptops and notebooks up to 15.6 inches (including MacBook, Lenovo, Dell), it features a 360-degree rotating base for flexible viewing and collaborative work, promoting ergonomic posture. (Silver color).",
  "image": "https://m.media-amazon.com/images/I/61H2NeuN2kL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.5,
  "reviews": null,
  "category": "Electronics",
  "tags": ["laptop stand", "laptop riser", "adjustable", "foldable", "ergonomic", "desk accessory"],
  "affiliateUrl": "https://amzn.to/4ojaI3f",
  "features": [
    "Foldable and portable design",
    "Adjustable height and viewing angle",
    "360-degree rotating base",
    "Compatible with laptops up to 15.6 inches",
    "Promotes ergonomic posture (Silver finish)"
  ],
  "inStock": true
},
{
  "id": "59",
  "name": "Hoteon Extension Board 5 Meter",
  "description": "A heavy-duty 5-meter extension cord with a maximum capacity of 2500W and 10A. This expandable power strip features two universal outlets and a 3-pin power cord, making it suitable for extending power access in both home and office environments.",
  "image": "https://m.media-amazon.com/images/I/61NqQLRlsmL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.1,
  "reviews": null,
  "category": "Electronics",
  "tags": ["extension cord", "power strip", "extension board", "heavy duty", "home office", "5 meter"],
  "affiliateUrl": "https://amzn.to/3WtOvU9",
  "features": [
    "5-meter long wire extension",
    "2 universal power outlets",
    "2500W / 10A heavy-duty capacity",
    "3-pin power cord",
    "Suitable for home and office use"
  ],
  "inStock": true
},
{
  "id": "58",
  "name": "YOURKARTS.COM 5-in-1 Car Support Handle with Window Breaker",
  "description": "A versatile 5-in-1 car safety tool designed to assist seniors and those with mobility issues in getting into and out of the car easily. This easy-grip seat assist bar also functions as an emergency tool, featuring a built-in window breaker, seatbelt cutter, and flashlight, making it an essential car accessory.",
  "image": "https://m.media-amazon.com/images/I/51ycmOGwt1L._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.4,
  "reviews": null,
  "category": "Automotive",
  "tags": ["car handle", "seat assist", "safety tool", "window breaker", "car accessory", "seniors"],
  "affiliateUrl": "https://amzn.to/3VKZR61",
  "features": [
    "5-in-1 functions: Support handle, window breaker, seatbelt cutter, flashlight, and more",
    "Provides easy grip for car entry and exit",
    "Durable and lightweight construction",
    "Fits securely into the car door latch",
    "Essential emergency safety tool (Red color)"
  ],
  "inStock": true
},
{
  "id": "57",
  "name": "ANB Enterprise Shirt Folding Board",
  "description": "An adjustable clothes folder board (black) designed for fast and easy laundry folding. This 'Fold and Flip' tool helps quickly organize shirts, T-shirts, and other garments into neat, uniform piles, saving time and simplifying laundry chores.",
  "image": "https://m.media-amazon.com/images/I/51poRMQcf6L.jpg",
  "rating": 4.2,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["shirt folder", "laundry tool", "clothes folder", "organizer", "home organization"],
  "affiliateUrl": "https://amzn.to/3ITfc1m",
  "features": [
    "Fast and easy 'Fold and Flip' operation",
    "Adjustable to accommodate different sizes",
    "Simplifies laundry organization",
    "Durable plastic construction",
    "Saves time during folding"
  ],
  "inStock": true
},
{
  "id": "56",
  "name": "AGATHA Silicone Washer Balls",
  "description": "A set of 12 reusable, tangle-free, and eco-friendly silicone scrubbing balls designed to enhance your washing machine's cleaning power. These solid, colorful (Checkered) laundry balls help scrub clothes, reduce tangling, and soften fabrics during the wash cycle.",
  "image": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/48468b3b-530c-40a7-9d06-337dbeebcb05.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  "rating": 4.1,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["washer balls", "laundry", "silicone", "eco-friendly", "cleaning", "washing machine"],
  "affiliateUrl": "https://amzn.to/46W6jw7",
  "features": [
    "Set of 12 reusable silicone balls",
    "Tangle-free laundry experience",
    "Enhances machine cleaning power",
    "Eco-friendly and durable",
    "Checkered design"
  ],
  "inStock": true
},
{
  "id": "55",
  "name": "TEKCOOL Portable Mini Sealing Machine",
  "description": "A handheld, portable mini sealing machine designed to quickly and easily seal plastic bags for food, snacks, and chips, ensuring fresh storage. This packet sealer is perfect for kitchen use and comes with a 1-year warranty.",
  "image": "https://m.media-amazon.com/images/I/61KNdnQAERL._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.0,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["sealing machine", "mini sealer", "food sealer", "bag sealer", "kitchen tool", "portable"],
  "affiliateUrl": "https://amzn.to/4nLKTsm",
  "features": [
    "Handheld and portable design",
    "Seals plastic bags for fresh food storage",
    "Suitable for snacks and chips packets",
    "Easy to use",
    "1-year warranty"
  ],
  "inStock": true
},
{
  "id": "54",
  "name": "NEXT GEEK Glue Remover Cleaning Scraper Tool",
  "description": "A multipurpose double-edged scraper tool designed for removing paint, labels, and stickers. This kit includes 15 plastic blades and 15 metal blades, providing versatility for various cleaning and scraping tasks on different surfaces without causing damage.",
  "image": "https://m.media-amazon.com/images/I/71HhmKdEoQL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.3,
  "reviews": null,
  "category": "Home Improvement",
  "tags": ["scraper tool", "glue remover", "cleaning tool", "sticker remover", "blades"],
  "affiliateUrl": "https://amzn.to/3IR0aZX",
  "features": [
    "Double-edged scraper design",
    "Includes 15 plastic blades and 15 metal blades",
    "Multipurpose use for removing paint, labels, stickers",
    "Ergonomic handle for comfortable grip",
    "Suitable for a variety of surfaces"
  ],
  "inStock": true
},
{
  "id": "53",
  "name": "3M General Purpose Adhesive Cleaner",
  "description": "A versatile adhesive cleaner in a 425g can that effectively removes sticky residue from glue, stickers, and tapes. Its clear formula is safe to use on painted surfaces, making it ideal for various household and automotive cleaning tasks.",
  "image": "https://m.media-amazon.com/images/I/61amRxd+KKL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.3,
  "reviews": null,
  "category": "Home Improvement",
  "tags": ["adhesive remover", "cleaner", "sticky residue", "glue remover", "3m"],
  "affiliateUrl": "https://amzn.to/4mPXKZA",
  "features": [
    "425g aerosol can",
    "Removes glue, stickers, and tape residue",
    "Safe on most painted surfaces",
    "General purpose use",
    "Clear formula"
  ],
  "inStock": true
},
{
  "id": "52",
  "name": "Supreme On Mosquito Net for Double Bed",
  "description": "A premium queen-size mosquito net designed for double beds (6 x 6.5 feet), featuring a 30 Star design. Made with 30 GSM strong and durable net material, it has a foldable tent-type structure with a corrosion-resistant frame, providing effective protection against mosquitoes and insects while ensuring a comfortable sleep.",
  "image": "https://m.media-amazon.com/images/I/71lN8UKZsWL._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.0,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["mosquito net", "double bed", "queen-size", "machardani", "bedding", "home decor"],
  "affiliateUrl": "https://amzn.to/4mRNSi7",
  "features": [
    "Fits double beds (6 x 6.5 feet)",
    "30 GSM strong and durable net",
    "Foldable tent-type design",
    "Corrosion-resistant frame",
    "30 Star pattern design"
  ],
  "inStock": true
},
{
  "id": "51",
  "name": "CYMNIX 4-in-1 Table Lamp with Wireless Charging",
  "description": "A versatile 4-in-1 table lamp featuring a modern design with touch controls, adjustable LED light settings, and a built-in wireless charging pad. This lamp also includes a USB port and a unique removable ambiance wall lighting feature, making it a perfect multi-functional addition to a home office, study, or bedroom.",
  "image": "https://m.media-amazon.com/images/I/61og1WSycJL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.3,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["table lamp", "wireless charging", "desk lamp", "LED light", "touch control", "home office"],
  "affiliateUrl": "https://amzn.to/4mMSXIq",
  "features": [
    "4-in-1 functionality: lamp, wireless charger, USB port, wall light",
    "Touch-sensitive controls",
    "Adjustable LED light settings (brightness and color temperature)",
    "Removable ambiance wall lighting",
    "Modern and sleek design"
  ],
  "inStock": true
},
  {
  "id": "50",
  "name": "CELLO Roti Plus Insulated Stainless Steel Casserole",
  "description": "A 2500ml insulated stainless steel casserole with a lid, designed to keep rotis and chapatis hot and fresh. This hot pot features a PU insulated inner steel body and a drip tray to prevent moisture buildup, making it perfect for the kitchen and dining table.",
  "image": "https://m.media-amazon.com/images/I/61rYnchxj7L._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.5,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["casserole", "insulated", "roti box", "hot pot", "kitchen", "stainless steel"],
  "affiliateUrl": "https://amzn.to/4o6gQvM",
  "features": [
    "2500ml capacity",
    "PU insulated to keep food hot",
    "Stainless steel inner body with drip tray",
    "Stylish pink color",
    "Ideal for storing rotis and chapatis"
  ],
  "inStock": true
},
  {
  "id": "49",
  "name": "Robodo USB Fingerprint Reader",
  "description": "A compact USB fingerprint reader for desktop and laptop computers, providing a quick and secure password-free login solution. This biometric scanner is designed for easy use, allowing you to access your device with just a touch.",
  "image": "https://m.media-amazon.com/images/I/51jWKhQLTxL._SL1500_.jpg",
  "rating": 4.1,
  "reviews": null,
  "category": "Electronics",
  "tags": ["fingerprint reader", "biometric scanner", "USB", "password-free", "login", "security"],
  "affiliateUrl": "https://amzn.to/3KQgGtM",
  "features": [
    "USB connectivity",
    "Password-free login with biometric security",
    "Compact and portable design",
    "Compatible with desktop and laptop computers",
    "Quick and easy setup"
  ],
  "inStock": true
},
  {
  "id": "48",
  "name": "FiABLE Premium Grade Silicone Trivet Mats",
  "description": "A set of three premium silicone trivet mats designed for use with hot pans and pots. These mats are non-stick, non-slip, and scratch-proof, offering high heat resistance to protect dining tables and kitchen countertops. They are extra thick (8mm) for enhanced durability and come in a stylish grey color.",
  "image": "https://m.media-amazon.com/images/I/717e3kIREqL._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.6,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["trivet mats", "silicone", "pot holder", "heat resistant", "kitchen", "dining"],
  "affiliateUrl": "https://amzn.to/3VN8nkY",
  "features": [
    "Set of 3 silicone mats",
    "High heat resistance",
    "Non-stick and non-slip surface",
    "Scratch-proof protection for surfaces",
    "8mm extra thick design"
  ],
  "inStock": true
},
  {
  "id": "47",
  "name": "Rio All in 1 4G Food Processor Attachment & Coconut Scrapper",
  "description": "A versatile universal attachment for existing mixer grinders, this 4G food processor can perform a variety of kitchen tasks including kneading dough, chopping vegetables, slicing, shredding, and coconut scraping. It features a unique gearbox to reduce the load on the mixer motor and comes with multiple blades for different functions.",
  "image": "https://m.media-amazon.com/images/I/61C5gMfbzCL._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.0,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["food processor", "attachment", "mixer grinder", "coconut scrapper", "kitchen appliance"],
  "affiliateUrl": "https://amzn.to/42qrpRL",
  "features": [
    "All-in-one food processing functions",
    "Includes coconut scrapper and various blades",
    "Universal design fits many mixer grinders (check compatibility)",
    "Gearbox to reduce motor load",
    "Unbreakable bowl and cover"
  ],
  "inStock": true
},
  {
  "id": "46",
  "name": "VAVSU Plastic Punch Free Towel Plug Holder",
  "description": "A set of three punch-free towel holders designed for easy installation in bathrooms and kitchens. These self-adhesive clips securely hold towels and washcloths, helping to keep the space organized without the need for drilling or hardware.",
  "image": "https://m.media-amazon.com/images/I/615wY1H8IgL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 3.9,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["towel holder", "punch free", "organizer", "bathroom", "kitchen", "storage"],
  "affiliateUrl": "https://amzn.to/46VLdOr",
  "features": [
    "Punch-free, self-adhesive design",
    "Easy and quick installation",
    "Suitable for towels and washcloths",
    "Space-saving and clutter-free solution",
    "Set of three holders"
  ],
  "inStock": true
},
  {
  "id": "45",
  "name": "Interhasa! Automatic Foam Soap Dispenser",
  "description": "An automatic foam soap dispenser with a touchless, hand-free sensor for hygienic use in bathrooms and kitchens. It has a 300ml/10oz capacity, is waterproof, and provides smart foaming for an efficient and mess-free handwashing experience.",
  "image": "https://m.media-amazon.com/images/I/51wUoqfgpuL._UF894,1000_QL80_FMwebp_.jpg",
  "rating": 4.2,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["soap dispenser", "automatic", "touchless", "foaming", "bathroom", "kitchen"],
  "affiliateUrl": "https://amzn.to/42ngEje",
  "features": [
    "Automatic, touchless sensor operation",
    "300ml/10oz capacity",
    "Smart foaming technology",
    "Waterproof design",
    "Suitable for bathroom and kitchen"
  ],
  "inStock": true
},
  {
  "id": "44",
  "name": "oddpod Metal Combination Key Safe Box",
  "description": "An outdoor key storage box with a combination password security lock. Made of durable metal, this safe box is designed to securely hold keys for homes, offices, or rentals, providing easy access for authorized users while protecting against theft.",
  "image": "https://m.media-amazon.com/images/I/51Uf+O5QuIL._UF1000,1000_QL80_FMwebp_.jpg",
  "rating": 4.3,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["key safe", "lock box", "key storage", "combination lock", "security"],
  "affiliateUrl": "https://amzn.to/46zklVp",
  "features": [
    "Metal construction for durability",
    "Combination password security lock",
    "Outdoor weather-resistant design",
    "Secure storage for multiple keys",
    "Easy to mount and use"
  ],
  "inStock": true
},
  {
  "id": "43",
  "name": "The Better Home Detachable Cookware Handle",
  "description": "A universal, removable pan handle suitable for all cookware. Features a quick-release mechanism for easy attachment and detachment, saving space and making it convenient for cooking and storage.",
  "image": "https://m.media-amazon.com/images/I/71nYIzfHN+L.jpg",
  "rating": 4.1,
  "reviews": null,
  "category": "Home & Kitchen",
  "tags": ["cookware", "handle", "detachable", "removable", "universal", "kitchen"],
  "affiliateUrl": "https://amzn.to/4qagVjV",
  "features": [
    "Detachable and removable design",
    "Universal fit for most cookware",
    "Quick-release mechanism",
    "Heat-resistant material",
    "Space-saving storage"
  ],
  "inStock": true
},
  {
  id: "42",
  name: "Verilux® Pendrive 128GB 4 in 1 Flash Drive",
  description: "A versatile 4-in-1 flash drive with Lightning, Micro USB, USB-A, and Type-C interfaces, offering 128GB of storage for iOS, Android, and PC devices.",
  image: "https://m.media-amazon.com/images/I/510ED46K8pL._SL1200_.jpg",
  rating: 4.5,
  reviews: null,
  category: "Electronics",
  tags: ["pendrive", "flash drive", "128gb", "4-in-1", "storage"],
  affiliateUrl: "https://amzn.to/4pU0cB8",
  features: [
    "128GB storage capacity",
    "4-in-1 interface: Lightning, Micro USB, USB A, Type-C",
    "Compatible with iPhone, iPad, Android, PC",
    "Mini hangable design"
  ],
  inStock: true
  },
  {
    id: "41",
    name: "Bathla Mobidry Flex Foldable Cloth Drying Stand",
    description: "A heavy-duty, lightweight and foldable cloth drying stand with 17 drying rails, offering 42 feet of drying length. Comes with a 2-year warranty.",
    image: "https://m.media-amazon.com/images/I/71cYdQxdwGL._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["cloth drying stand", "foldable", "laundry"],
    affiliateUrl: "https://amzn.to/4mMyR0T",
    features: [
      "3-way folding design",
      "17 drying rails",
      "42 feet drying length",
      "Heavy-duty & lightweight",
      "2-year warranty"
    ],
    inStock: true
  },
  {
    id: "40",
    name: "Portronics Clean N 19 in 1 Smart Gadget Cleaning Kit",
    description: "A comprehensive 19-in-1 cleaning kit for smartphones, tablets, laptops, and earbuds. Keeps all your gadgets spotless.",
    image: "https://m.media-amazon.com/images/I/61hi+-Ag87L._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.2,
    reviews: null,
    category: "Electronics",
    tags: ["cleaning kit", "gadget", "electronics", "accessories"],
    affiliateUrl: "https://amzn.to/4gSIVUA",
    features: [
      "19 different tools",
      "For smartphones, tablets, laptops, earbuds",
      "All-in-one solution",
      "Compact design"
    ],
    inStock: true
  },
  {
    id: "39",
    name: "TE Push Stapler 2 Pack",
    description: "A pack of two mini push staplers with 100 reusable clips. A convenient, clip-based alternative to traditional staplers for office, school, and home use.",
    image: "https://m.media-amazon.com/images/I/71YoQ4uf9BL._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.0,
    reviews: null,
    category: "Office & School Supplies",
    tags: ["stapler", "paper clamps", "office", "school"],
    affiliateUrl: "https://amzn.to/42XIP8z",
    features: [
      "2-pack mini staplers",
      "Includes 100 reusable clips",
      "Binder clip dispenser",
      "For documents and home supplies"
    ],
    inStock: true
  },
  {
    id: "38",
    name: "Amazon Basics Expanding File Folder with 13 Pockets",
    description: "An expanding file folder with 13 pockets to organize letter and A4 size documents. Made by Amazon Basics.",
    image: "https://m.media-amazon.com/images/I/61h1s3iyLtL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Office & School Supplies",
    tags: ["file folder", "document organizer", "amazon basics"],
    affiliateUrl: "https://amzn.to/3IsoOAb",
    features: [
      "13 pockets",
      "Fits letter and A4 size documents",
      "Durable black design"
    ],
    inStock: true
  },
  {
    id: "37",
    name: "InstaCuppa Electric Chopper for Kitchen Use with 3 Attachments",
    description: "A 300W electric chopper with a 2-litre stainless steel mincer, perfect for vegetables and meat. Includes garlic peeler and egg whisker attachments.",
    image: "https://m.media-amazon.com/images/I/61EognUyqAL._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.4,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["chopper", "electric", "kitchen appliance", "meat mincer"],
    affiliateUrl: "https://amzn.to/3IU6sIi",
    features: [
      "2-litre stainless steel bowl",
      "300W powerful motor",
      "Includes garlic peeler and egg whisker",
      "Multi-purpose for meat and vegetables"
    ],
    inStock: true
  },
  {
    id: "36",
    name: "ULTRAMAC® 24 inch 3mm Acrylic TV Screen Guard",
    description: "A 3mm thick acrylic screen guard for 24-inch TVs. Provides 9H hardness, scratch and splash resistance, and ultra HD clarity.",
    image: "https://m.media-amazon.com/images/I/51Im2A-6JmL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.7,
    reviews: null,
    category: "Electronics",
    tags: ["tv screen guard", "acrylic", "tv accessories", "screen protector"],
    affiliateUrl: "https://amzn.to/4mLGN2i",
    features: [
      "For 24 inch TVs",
      "3mm acrylic material",
      "9H hardness",
      "Scratch & splash resistant",
      "ISO certified"
    ],
    inStock: true
  },
  {
    id: "35",
    name: "KACA 13-Inch Monitor Screen Light Bar with Smart Touch Sensor",
    description: "A USB-powered 13-inch LED monitor light bar with a smart touch sensor. Features 3 color temperature modes and stepless dimming for comfortable e-reading.",
    image: "https://m.media-amazon.com/images/I/515hLdV2shL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.3,
    reviews: null,
    category: "Electronics",
    tags: ["monitor light", "screen bar", "led lamp", "desk accessories"],
    affiliateUrl: "https://amzn.to/3WmiXPW",
    features: [
      "13-inch size",
      "Smart touch sensor",
      "USB powered",
      "3 color temperature modes",
      "Stepless dimming"
    ],
    inStock: true
  },
  {
    id: "34",
    name: "12-in-1 Manicure Set Nail Clippers",
    description: "A 12-in-1 stainless steel grooming kit for men and women. Includes nail clippers, scissors, and tools for blackheads and acne, all in a leather travel case.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a4c04f29-685d-40db-a08c-850ee275ed48.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    rating: 4.5,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["manicure set", "grooming kit", "pedicure", "travel case"],
    affiliateUrl: "https://amzn.to/4pZYmyL",
    inStock: true,
    features: [
      "12 pieces in one set",
      "Stainless steel tools",
      "Leather travel case",
      "For men and women"
    ]
  },
  {
    id: "33",
    name: "CARESMITH Bloom Electronic Callus Remover For Feet",
    description: "An electronic foot scrubber designed to remove dead skin. It comes with 3 crystal quartz heads, providing a complete pedicure kit for a foot cleaner.",
    image: "https://m.media-amazon.com/images/I/71tqOVRtJbL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.1,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["foot scrubber", "callus remover", "pedicure", "dead skin"],
    affiliateUrl: "https://amzn.to/478pGmQ",
    inStock: true,
    features: [
      "Electronic foot scrubber",
      "3 crystal quartz heads",
      "Suitable for dead skin removal",
      "Pedicure kit for women"
    ]
  },
  {
    id: "32",
    name: "VYOOx Smarty 2 in 1 Soap Dispenser",
    description: "A 2-in-1 soap dispenser with a pump and a sponge holder for dishwasher liquid. Includes 6 pieces of dishcloth.",
    image: "https://m.media-amazon.com/images/I/61SmcNl+FfL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.4,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["soap dispenser", "kitchen organizer", "dishwashing"],
    affiliateUrl: "https://amzn.to/432hmCB",
    inStock: true,
    features: [
      "2-in-1 design",
      "Sponge holder",
      "Liquid dispenser pump",
      "Includes 6 dishcloths"
    ]
  },
  {
    id: "31",
    name: "Bosch Home & Garden Electric Cleaning Brush",
    description: "A cordless and rechargeable electric cleaning brush from Bosch. Features a powerful motor and is IPX5 water resistant, making it perfect for kitchen, bathroom, and more.",
    image: "https://m.media-amazon.com/images/I/815GvV+L03L._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["electric brush", "cleaning tool", "bosch", "rechargeable"],
    affiliateUrl: "https://amzn.to/48RDu6m",
    inStock: true,
    features: [
      "Cordless and rechargeable",
      "Powerful motor",
      "IPX5 water resistant",
      "For kitchen, bathroom, shoes, furniture"
    ]
  },
  {
    id: "30",
    name: "Zeitel® Mini Bluetooth Thermal Printer",
    description: "A mini portable thermal printer with Bluetooth connectivity for Android and iOS devices. Comes with 13 rolls of print paper and stickers.",
    image: "https://m.media-amazon.com/images/I/614cJhOw+TL.jpg",
    rating: 4.2,
    reviews: null,
    category: "Electronics",
    tags: ["thermal printer", "bluetooth", "portable", "label printer"],
    affiliateUrl: "https://amzn.to/4nZJtKP",
    inStock: true,
    features: [
      "Mini portable design",
      "Bluetooth connectivity",
      "Ink-free printing",
      "Compatible with Android & iOS",
      "Includes 13 rolls of paper"
    ]
  },
  {
    id: "29",
    name: "SWAPKART Flexible Mobile Tabletop Stand",
    description: "A flexible and heavy-duty tabletop stand with a metal build. Features a foldable lazy bracket clip mount for multi-angle viewing of all smartphones.",
    image: "https://m.media-amazon.com/images/I/71qLw4ghxwL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.1,
    reviews: null,
    category: "Accessories",
    tags: ["phone stand", "flexible", "tabletop", "lazy bracket"],
    affiliateUrl: "https://amzn.to/432Ir8K",
    inStock: true,
    features: [
      "Flexible and foldable",
      "Metal build",
      "Heavy-duty clip mount",
      "Multi-angle viewing",
      "For all smartphones"
    ]
  },
  {
    id: "28",
    name: "AGARO Percussion Muscle Ring Massager",
    description: "A rechargeable percussion muscle massager gun with 5 speed settings and 2 modes for deep tissue pain relief and relaxation.",
    image: "https://m.media-amazon.com/images/I/71Hxw4B1knL._SL1500_.jpg",
    rating: 4.7,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["massager", "percussion gun", "muscle relief", "rechargeable"],
    affiliateUrl: "https://amzn.to/4nz5Hnj",
    inStock: true,
    features: [
      "5 speed settings",
      "2 modes",
      "Rechargeable",
      "Deep tissue massage",
      "Full body pain relief"
    ]
  },
  {
    id: "27",
    name: "Portronics MOVO 3 in 1 Wireless Charger with Bluetooth Speaker & Makeup Mirror",
    description: "A 3-in-1 device that combines a Qi2-certified 15W wireless charger, a 5W Bluetooth speaker, and a makeup mirror with 3 adjustable LED lights.",
    image: "https://m.media-amazon.com/images/I/71PQ0g582mL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Electronics",
    tags: ["wireless charger", "bluetooth speaker", "makeup mirror", "3-in-1"],
    affiliateUrl: "https://amzn.to/3IORNht",
    inStock: true,
    features: [
      "15W wireless charging",
      "5W Bluetooth speaker",
      "3 LED light modes",
      "90° adjustable mirror",
      "Qi2 certified"
    ]
  },
  {
    id: "26",
    name: "SELLASTIC Period Cramp Relief Heating Pad Massager",
    description: "A portable, cordless heating pad and massager for menstrual pain relief. Features 3 heat modes, 3 massage modes, and a front LED display.",
    image: "https://m.media-amazon.com/images/I/61gIW4Izb4L._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.4,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["heating pad", "cramp relief", "massager", "menstrual pain"],
    affiliateUrl: "https://amzn.to/46OM8jp",
    inStock: true,
    features: [
      "Portable and cordless",
      "3 heat modes",
      "3 massage modes",
      "LED display",
      "For back and belly"
    ]
  },
  {
    id: "25",
    name: "CALLMATE Powernugget 5000mAh 23W Fast Charging Type C Power Bank",
    description: "A 5000mAh power bank with 23W fast charging and a Type C PD input and output. Compatible with Samsung and other Type C devices.",
    image: "https://m.media-amazon.com/images/I/611q3D1grKL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.3,
    reviews: null,
    category: "Electronics",
    tags: ["power bank", "fast charging", "type c", "portable charger"],
    affiliateUrl: "https://amzn.to/48HZe4D",
    inStock: true,
    features: [
      "5000mAh capacity",
      "23W fast charging",
      "Type C PD input & output",
      "Compact design"
    ]
  },
  {
    id: "24",
    name: "Fire-Boltt Phoenix Pro Smart Watch",
    description: "A 1.39-inch Bluetooth calling smartwatch with an AI voice assistant, a metal body, and over 120 sports modes. Monitors SpO2 and heart rate.",
    image: "https://m.media-amazon.com/images/I/61Y8u2y5XOL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.0,
    reviews: null,
    category: "Electronics",
    tags: ["smartwatch", "fitness tracker", "bluetooth calling"],
    affiliateUrl: "https://amzn.to/3INM9fy",
    inStock: true,
    features: [
      "1.39 inch HD display",
      "Bluetooth calling",
      "AI voice assistant",
      "120+ sports modes",
      "SpO2 & heart rate monitoring"
    ]
  },
  {
    id: "23",
    name: "Umi Vintage Twin Bell Alarm Clock",
    description: "A classic, battery-operated twin bell alarm clock by Amazon Brand - Umi. Features a silent movement and a night backlight for bedroom and office use.",
    image: "https://m.media-amazon.com/images/I/51zArrygQ8L._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["alarm clock", "vintage", "twin bell", "silent movement"],
    affiliateUrl: "https://amzn.to/4mQ4VkH",
    inStock: true,
    features: [
      "Vintage twin bell design",
      "Battery operated",
      "Night backlight",
      "Silent movement"
    ]
  },
  {
    id: "22",
    name: "Himster Wireless Doorbell",
    description: "A waterproof wireless doorbell with a range of up to 1000 feet. Features 56 melodies, an LED flash, and 7 adjustable volume levels.",
    image: "https://m.media-amazon.com/images/I/41dBhCUHFPL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["doorbell", "wireless", "waterproof", "home security"],
    affiliateUrl: "https://amzn.to/4mI5IUx",
    inStock: true,
    features: [
      "Waterproof design",
      "Upto 1000 feet range",
      "56 melodies",
      "7 adjustable volume levels",
      "LED flash"
    ]
  },
  {
    id: "21",
    name: "Eopora Automatic Water Dispenser Pump",
    description: "An electric foldable water dispenser pump for 20-litre bottles. It's USB rechargeable and features a 1200mAh battery, suitable for home and office use.",
    image: "https://m.media-amazon.com/images/I/6150XmkOQsL._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.3,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["water dispenser", "electric pump", "rechargeable", "bottle pump"],
    affiliateUrl: "https://amzn.to/433u04j",
    inStock: true,
    features: [
      "Automatic pump",
      "For 20 litre bottles",
      "USB rechargeable",
      "1200mAh battery",
      "Foldable design"
    ]
  },
  {
    id: "20",
    name: "InstaCuppa Portable Electric Kettle",
    description: "A portable electric kettle with temperature control and a cool-touch exterior. Features automatic shut-off and dry boil protection with a 500ML capacity.",
    image: "https://m.media-amazon.com/images/I/51gkg+w5GkL.jpg",
    rating: 4.4,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["electric kettle", "portable", "travel", "water boiler"],
    affiliateUrl: "https://amzn.to/42qEBpU",
    inStock: true,
    features: [
      "Portable and compact",
      "500ML capacity",
      "Temperature control",
      "Automatic shut-off",
      "Dry boil protection"
    ]
  },
  {
    id: "19",
    name: "Robustt Cable Organizer - Black (Pack of 1)",
    description: "A 1.5-meter flexible cable sleeve with a clip zipper to organize and protect cables. It has a 30MM diameter and is perfect for preventing pets from chewing on cords.",
    image: "https://m.media-amazon.com/images/I/71AJQDhvdpL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Accessories",
    tags: ["cable organizer", "cable sleeve", "cord protector", "home"],
    affiliateUrl: "https://amzn.to/4gTjnXr",
    inStock: true,
    features: [
      "1.5 meter length",
      "30MM diameter",
      "Clip zipper design",
      "Protects from pets"
    ]
  },
  {
    id: "18",
    name: "Urban yog MakeMeeBold 3-in-1 Hot Air Brush",
    description: "A 3-in-1 hot air brush that functions as a hair dryer, straightener, and volumizer. Features a 1.5-inch barrel and 1200 watts of power.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2db23195-251e-4830-b24f-6f016208edb3.__CR0,0,600,450_PT0_SX600_V1___.jpg",
    rating: 4.1,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["hair brush", "hot air brush", "hair dryer", "straightener"],
    affiliateUrl: "https://amzn.to/3INLWcg",
    inStock: true,
    features: [
      "3-in-1 functionality",
      "1.5-inch barrel",
      "1200 watt power",
      "Dries, straightens, and volumizes"
    ]
  },
  {
    id: "17",
    name: "Goodscity Multipurpose Electric Kettle",
    description: "A 1.2-liter multipurpose electric kettle with a ceramic coating. Can be used to boil, steam, fry, and sauté, making it perfect for preparing various foods.",
    image: "https://m.media-amazon.com/images/I/61waHDxO54L._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.3,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["electric kettle", "multi cooker", "ceramic coating", "hostel"],
    affiliateUrl: "https://amzn.to/4gSLyWL",
    inStock: true,
    features: [
      "1.2L capacity",
      "Ceramic coating",
      "Boil, steam, fry, sauté",
      "600W power",
      "1-year warranty"
    ]
  },
  {
    id: "16",
    name: "kahula Ultrasonic Cleaner Machine",
    description: "An ultrasonic jewelry cleaner machine with a digital timer. Ideal for cleaning glasses, rings, earrings, necklaces, and watch straps.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4b0f9e70-c746-4059-a8ad-21480ecaab2d.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    rating: 4.6,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["ultrasonic cleaner", "jewelry cleaner", "glasses", "watch cleaner"],
    affiliateUrl: "https://amzn.to/4nzf1aM",
    inStock: true,
    features: [
      "Ultrasonic technology",
      "Digital timer",
      "Cleans jewelry, glasses, watches",
      "Compact design"
    ]
  },
  {
    id: "15",
    name: "Lifelong Rechargeable Electric Head & Scalp Kneading Massager",
    description: "A rechargeable, handheld electric massager with 4 speed modes for hair growth, deep cleaning, and stress relief.",
    image: "https://m.media-amazon.com/images/I/5180qAE25rL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.2,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["head massager", "scalp massager", "rechargeable", "hair growth"],
    affiliateUrl: "https://amzn.to/4pTUYoP",
    inStock: true,
    features: [
      "Rechargeable",
      "4 speed modes",
      "Handheld and portable",
      "Relieves stress"
    ]
  },
  {
    id: "14",
    name: "boAt New Launch SmartRing Active Plus",
    description: "A lightweight smart ring with a stainless steel build. Features auto heart rate, sleep, SpO2, stress, and skin temperature monitoring with a 30-day battery life.",
    image: "https://m.media-amazon.com/images/I/61Q68Y3ikGL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Electronics",
    tags: ["smart ring", "boAt", "health monitor", "wearable tech"],
    affiliateUrl: "https://amzn.to/4pJqA0m",
    inStock: true,
    features: [
      "Auto heart rate monitor",
      "Sleep and SpO2 tracking",
      "Stress and skin temperature monitor",
      "30-day battery",
      "Stainless-steel build"
    ]
  },
  {
    id: "13",
    name: "Qubo Wired Bike GPS Tracker from Hero",
    description: "A wired GPS tracker for bikes from Hero, offering live location tracking with pinpoint accuracy and up to 6 months of ride history via the Qubo Go App.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ff76f761-c35b-4c16-9c66-e25141d3a6f6.__CR0,0,970,600_PT0_SX970_V1___.png",
    rating: 4.4,
    reviews: null,
    category: "Automotive",
    tags: ["gps tracker", "bike security", "hero", "live tracking"],
    affiliateUrl: "https://amzn.to/42qsmcN",
    inStock: true,
    features: [
      "Live location tracking",
      "Pinpoint GPS accuracy",
      "Ride history (up to 6 months)",
      "Qubo Go App integration"
    ]
  },
  {
    id: "12",
    name: "CostarMatter Clothes Warmer, Mini Portable Heater with PTC Heating",
    description: "A mini portable heater that helps dry clothes quickly, even in cold weather. It's effective for drying 4-5 pieces at a time.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6e57a177-497b-4759-8ff9-5d672f767105.__CR0,0,600,450_PT0_SX600_V1___.jpg",
    rating: 4.1,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["clothes warmer", "portable heater", "ptc heating", "laundry"],
    affiliateUrl: "https://amzn.to/488HUpl",
    inStock: true,
    features: [
      "Mini portable design",
      "PTC heating technology",
      "Dries clothes quickly",
      "Effective in cold weather"
    ]
  },
  {
    id: "11",
    name: "Ambrane 50000mAh Powerbank, 20W Fast Charging",
    description: "A massive 50000mAh power bank with 20W fast charging and triple output (2 USB and 1 Type C). It's a great travel companion with impressive build quality.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a2b2a34-258a-4283-a9ca-325b5f86fa9a.__CR0,0,2021,1250_PT0_SX970_V1___.jpg",
    rating: 4.7,
    reviews: null,
    category: "Electronics",
    tags: ["power bank", "ambrane", "50000mah", "fast charging", "travel"],
    affiliateUrl: "https://amzn.to/46JlQ3D",
    inStock: true,
    features: [
      "50000mAh capacity",
      "20W fast charging",
      "Triple output (2 USB & 1 Type C)",
      "Travel-friendly"
    ]
  },
  {
    id: "10",
    name: "Brago Electric Hair Oil Applicator and Scalp Head Massager",
    description: "An electric hair oil applicator and scalp massager that is practical for daily use, although some customers report mixed experiences with the oil dispensation.",
    image: "https://m.media-amazon.com/images/I/6118KpFC+8L._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 3.9,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["hair oil applicator", "scalp massager", "electric", "hair care"],
    affiliateUrl: "https://amzn.to/40RKuvf",
    inStock: true,
    features: [
      "Electric applicator",
      "Scalp massager function",
      "Designed for daily hair oil application"
    ]
  },
  {
    id: "9",
    name: "Wipro Odyssey Multifunctional Rechargeable LED Emergency Light",
    description: "A multifunctional rechargeable LED emergency light from Wipro with amazing light intensity and a reliable backup. It's built to withstand rough handling.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/db2cee73-e72f-4c20-99de-46f516b9de9e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    rating: 4.6,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["emergency light", "wipro", "rechargeable", "led light"],
    affiliateUrl: "https://amzn.to/3Ku6zuN",
    inStock: true,
    features: [
      "Multifunctional",
      "Rechargeable",
      "Amazing light intensity",
      "Reliable backup"
    ]
  },
  {
    id: "8",
    name: "Nutricook Stainless Steel Smart Pot 2",
    description: "A reliable and easy-to-use stainless steel smart pot that saves time on busy days by combining multiple cooking functions in one appliance.",
    image: "https://m.media-amazon.com/images/I/61fUcdgMzrL._SL1500_.jpg",
    rating: 4.7,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["smart pot", "pressure cooker", "nutricook", "stainless steel"],
    affiliateUrl: "https://amzn.to/4mMApYL",
    inStock: true,
    features: [
      "Stainless steel construction",
      "Smart pot functionality",
      "Easy to use",
      "Saves time"
    ]
  },
  {
    id: "7",
    name: "COSTAR Cordless Hair Straightener Brush",
    description: "A portable and lightweight hair straightener brush perfect for travel and daily use. Fits easily in bags for on-the-go styling.",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2a7c9a3e-cb8a-4942-bd80-1b3d0d634d93.__CR0,0,600,450_PT0_SX600_V1___.jpg",
    rating: 4.2,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["hair straightener", "cordless", "portable", "travel"],
    affiliateUrl: "https://amzn.to/3VNbA3S",
    inStock: true,
    features: [
      "Cordless design",
      "Portable and lightweight",
      "Ideal for travel and daily use",
      "Straightening brush"
    ]
  },
  {
    id: "6",
    name: "VANTRO 10L Portable Fridge Model",
    description: "A high-quality, compact, and portable 10L fridge. It's convenient for travel, particularly for carrying medications, and works very well.",
    image: "https://m.media-amazon.com/images/I/41RP0wfxQWL._UF894,1000_QL80_FMwebp_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["portable fridge", "mini fridge", "travel", "medication"],
    affiliateUrl: "https://amzn.to/48dHWfI",
    inStock: true,
    features: [
      "10L capacity",
      "Portable and compact",
      "High-quality design",
      "Convenient for travel"
    ]
  },
  {
    id: "5",
    name: "Xiaomi Ultra Slim Power Bank",
    description: "A compact and pocket-friendly power bank from Xiaomi. Ideal for emergency use due to its sleek and portable design.",
    image: "https://m.media-amazon.com/images/I/71Qb0m6xQvL._UF1000,1000_QL80_FMwebp_.jpg",
    rating: 4.4,
    reviews: null,
    category: "Electronics",
    tags: ["power bank", "xiaomi", "ultra slim", "portable"],
    affiliateUrl: "https://amzn.to/4nzfWIg",
    inStock: true,
    features: [
      "Ultra-slim design",
      "Pocket-friendly",
      "Compact size",
      "Emergency use"
    ]
  },
  {
    id: "4",
    name: "AGARO ROYAL AC Power Automatic Foot Spa Bath Massager With Heat",
    description: "An automatic foot spa massager with heat that provides a spa-like experience at home. Features automatic rollers that target pressure points for relaxation.",
    image: "https://m.media-amazon.com/images/I/71aeecYS2gL._SL1500_.jpg",
    rating: 4.8,
    reviews: null,
    category: "Personal Care & Health",
    tags: ["foot spa", "massager", "heat therapy", "agar", "relaxation"],
    affiliateUrl: "https://amzn.to/4pRoCer",
    inStock: true,
    features: [
      "Automatic rollers",
      "Heating function",
      "Targets pressure points",
      "Spa-like experience at home"
    ]
  },
  {
    id: "3",
    name: "InstaCuppa Portable Soda Maker",
    description: "A portable soda maker that is easy to use and offers the versatility to experiment with a variety of mocktails.",
    image: "https://m.media-amazon.com/images/I/71UtiZikJ1L._SL1500_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["soda maker", "portable", "mocktail", "instacuppa"],
    affiliateUrl: "https://amzn.to/3KvtBkW",
    inStock: true,
    features: [
      "Portable design",
      "Easy to use",
      "Versatile for mocktails",
      "Carbonates beverages"
    ]
  },
  {
    id: "2",
    name: "COSTAR Automatic Umbrella with Light Design Foldable",
    description: "An automatic, foldable umbrella with a smooth auto open and close mechanism. It includes a torch light for use at night.",
    image: "https://m.media-amazon.com/images/I/61i+fGyxZCL._SX679_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Accessories",
    tags: ["umbrella", "automatic", "foldable", "torch light"],
    affiliateUrl: "https://amzn.to/478rjRu",
    inStock: true,
    features: [
      "Automatic open and close",
      "Torch light for night use",
      "Foldable and portable",
      "Durable quality"
    ]
  },
  {
    id: "1",
    name: "NexLev Steam Cleaner",
    description: "A powerful steam cleaner that effectively loosens dirt and grime, especially on kitchen burner stains. Customers rate it as a highly effective cleaning tool.",
    image: "https://m.media-amazon.com/images/I/51agIZG4f6L._SL1080_.jpg",
    rating: 4.9,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["steam cleaner", "cleaning tool", "kitchen", "grime remover"],
    affiliateUrl: "https://amzn.to/48LYueR",
    inStock: true,
    features: [
      "Powerful steam",
      "Effectively loosens dirt and grime",
      "Ideal for kitchen burner stains",
      "Highly-rated"
    ]
  },
  {
    id: "1a",
    name: "boAt Airdopes Prime 701 ANC TWS Ear Buds",
    description: "These earbuds are praised for their amazing sound quality, crystal-clear precision, and professional-grade build. They offer a superior audio experience.",
    image: "https://m.media-amazon.com/images/I/81w9ih+LYSL._SL1500_.jpg",
    rating: 4.7,
    reviews: null,
    category: "Electronics",
    tags: ["earbuds", "boAt", "wireless", "anc", "audio"],
    affiliateUrl: "https://www.amazon.in/boAt-Airdopes-Multidevice-Bluetooth-Earphones/dp/B0F8BVYRWS?pd_rd_w=P22wW&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=ZBDDKXPZR3DEY957A5EZ&pd_rd_wg=kI3bs&pd_rd_r=167003c5-e9e2-4b21-8183-d19da90c7f38&pd_rd_i=B0F8BVYRWS&th=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=4cecf8ab37304b9c2f20c9188e428ecc&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "Amazing sound quality",
      "Active Noise Cancellation (ANC)",
      "Wireless design",
      "Professional-grade build"
    ]
  },
  {
    id: "1b",
    name: "Boat Airdopes Joy TWS Ear Buds",
    description: "These wireless earbuds offer amazing sound quality, a 50-hour playback time, a 15-hour battery life, and seamless Bluetooth 5.3 connectivity.",
    image: "https://m.media-amazon.com/images/I/61vHUffJazL._SL1500_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Electronics",
    tags: ["earbuds", "boat", "wireless", "audio", "bluetooth"],
    affiliateUrl: "https://www.amazon.in/boAt-Airdopes-Alpha-Wireless-Earbuds/dp/B0C3ZYFZ77/ref=asc_df_B0C3ZYFZ77?mcid=d17bcda88e3c37268e9b1eb350dae758&tag=googleshopdes-21&linkCode=df0&hvadid=710141150090&hvpos=&hvnetw=g&hvrand=13073845556360128916&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062050&hvtargid=pla-2296655777273&gad_source=1&th=1",
    inStock: true,
    features: [
      "50-hour playback",
      "15-hour battery life",
      "Seamless Bluetooth 5.3",
      "Good sound quality"
    ]
  },
  {
    id: "1c",
    name: "PEXPO Craft Pro 1000 Stainless Steel Sports Water Bottle",
    description: "An ISI-certified stainless steel water bottle with a sipper cap, convenient for daily travel and office use. Features a lightweight and premium-looking design.",
    image: "https://m.media-amazon.com/images/I/61LDoO9Jl7L._SL1500_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["water bottle", "stainless steel", "sports bottle", "sipper"],
    affiliateUrl: "https://www.amazon.in/PEXPO-Certified-Stainless-Purple-Pink-Friendly/dp/B0DRCYP93L?pd_rd_w=HT8j9&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=JT0D8VX4YMHFA550TK36&pd_rd_wg=2TRLb&pd_rd_r=df3a27f4-6551-4cee-a7fc-8c771a1a8fbf&pd_rd_i=B0DRCYP93L&psc=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=c9af122146398e5263108bebcebd83c6&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "ISI certified",
      "Stainless steel",
      "Sipper cap",
      "Lightweight and portable"
    ]
  },
  {
    id: "1d",
    name: "NutriPro Juicer Mixer Grinder - Smoothie Maker",
    description: "A powerful and solid blender that is easy to use for making smoothies and juices. Its motor handles everything from smoothies to chutneys with ease.",
    image: "https://m.media-amazon.com/images/I/71PkRff5mdL._SL1500_.jpg",
    rating: 4.7,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["blender", "juicer", "mixer grinder", "smoothie maker"],
    affiliateUrl: "https://www.amazon.in/NutriPro-Bullet-Juicer-Grinder-Blades/dp/B09J2T124D?pd_rd_w=HT8j9&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=JT0D8VX4YMHFA550TK36&pd_rd_wg=2TRLb&pd_rd_r=df3a27f4-6551-4cee-a7fc-8c771a1a8fbf&pd_rd_i=B09J2T124D&th=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=fe4e8fca018ae95609c2abd7cc311d60&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "Powerful motor",
      "Easy to use",
      "Suitable for smoothies and chutneys"
    ]
  },
  {
    id: "1e",
    name: "Premium Cloth Drying Stand - 3 Way Folding",
    description: "A well-designed and practical 3-way folding cloth drying stand. Customers find it to be of good quality and suitable for shirts and dresses.",
    image: "https://m.media-amazon.com/images/I/71vkps3XMVL._SL1500_.jpg",
    rating: 4.3,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["cloth drying stand", "laundry", "foldable", "clothes hanger"],
    affiliateUrl: "https://www.amazon.in/Amazon-Basics-Premium-Cloth-Drying/dp/B0DY4XZQ8L?pd_rd_w=OIGcL&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=X8KAS13082CX21VBJ5C3&pd_rd_wg=BsInI&pd_rd_r=59ce4f59-2176-4e61-b9f9-9ebe2a66868a&pd_rd_i=B0DY4XZQ8L&th=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=daef948be2adfbb029dc30918b39ca22&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "3-way folding design",
      "Good quality construction",
      "Practical for everyday use",
      "Suitable for various clothes"
    ]
  },
  {
    id: "1f",
    name: "One94store Astronaut Galaxy Projector Night Light",
    description: "A galaxy projector night light in the shape of an astronaut with a 360° rotating nebula and star projection. It includes a remote control and timer.",
    image: "https://m.media-amazon.com/images/I/71E6Z0oTisL._SL1500_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["night light", "projector", "astronaut", "galaxy", "home decor"],
    affiliateUrl: "https://www.amazon.in/One94store-Astronaut-Galaxy-Projector-Night/dp/B0DN1RWNSQ?pd_rd_w=HT8j9&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=JT0D8VX4YMHFA550TK36&pd_rd_wg=2TRLb&pd_rd_r=df3a27f4-6551-4cee-a7fc-8c771a1a8fbf&pd_rd_i=B0DN1RWNSQ&th=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=d0658df4f8d4529217048a138684977b&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "Astronaut design",
      "360° rotating nebula",
      "Remote control",
      "Timer function",
      "Good quality and appearance"
    ]
  },
  {
    id: "1g",
    name: "TEKCOOL UV Big Size Umbrella for Sun Protection",
    description: "A large, foldable umbrella that provides UV protection from the sun, and is windproof and rainproof. It's lightweight and easy to carry, making it suitable for travel.",
    image: "https://m.media-amazon.com/images/I/415HbMuaT+L.jpg",
    rating: 4.4,
    reviews: null,
    category: "Accessories",
    tags: ["umbrella", "uv protection", "windproof", "rainproof", "travel"],
    affiliateUrl: "https://amzn.to/4pGvHP3",
    inStock: true,
    features: [
      "UV protection",
      "Large size",
      "Windproof and rainproof",
      "Lightweight and portable"
    ]
  },
  {
    id: "1h",
    name: "Skybags Unisex Brat 20L Premium Polyester Backpack",
    description: "A 20-liter unisex backpack with a simple style and four compartments. It's made of premium polyester with adjustable straps and offers superb value for its price.",
    image: "https://m.media-amazon.com/images/I/611VkEgDqtL._SL1500_.jpg",
    rating: 4.6,
    reviews: null,
    category: "Bags & Luggage",
    tags: ["backpack", "skybags", "school bag", "travel"],
    affiliateUrl: "https://www.amazon.in/Skybags-Premium-Polyester-Adjustable-Backpack/dp/B0D1G32M32?pd_rd_w=kQyMk&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=JT0D8VX4YMHFA550TK36&pd_rd_wg=2TRLb&pd_rd_r=df3a27f4-6551-4cee-a7fc-8c771a1a8fbf&pd_rd_i=B0D1G32M32&th=1&linkCode=sl1&tag=jaydeals0f4-21&linkId=04fd107cd84e3516a7c2b0691f479ea8&language=en_IN&ref_=as_li_ss_tl",
    inStock: true,
    features: [
      "20L capacity",
      "Premium polyester",
      "4 compartments",
      "Adjustable straps",
      "Superb value"
    ]
  },
  {
    id: "1i",
    name: "Robustt Washing Machine Stand- Adjustable Metal Trolley",
    description: "An adjustable metal trolley with wheels and four anti-vibration rubber grips for washing machines. It is a sturdy and high-quality product that can be easily adjusted to fit different machine sizes.",
    image: "https://m.media-amazon.com/images/I/71Ly+bg4W8L._SL1500_.jpg",
    rating: 4.5,
    reviews: null,
    category: "Home & Kitchen",
    tags: ["washing machine stand", "trolley", "adjustable", "anti-vibration"],
    affiliateUrl: "https://amzn.to/3KqHeSn",
    inStock: true,
    features: [
      "Adjustable metal trolley",
      "Wheels for easy movement",
      "4 anti-vibration rubber grips",
      "Sturdy and high quality"
    ]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Home & Kitchen",
  "Personal Care & Health",
  "Office & School Supplies",
  "Accessories",
  "Bags & Luggage",
  "Automotive"
];
