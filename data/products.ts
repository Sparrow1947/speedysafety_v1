
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Bird Spikes
  {
    id: 'bs-001',
    name: 'Stainless Steel Bird Spike',
    category: 'Bird Spike',
    shortDescription: 'Industrial grade SS spikes for ledge protection.',
    fullDescription: 'High-quality polycarbonate base with stainless steel spikes. Durable and weather resistant. Prevents birds from landing on ledges and signboards.',
    images: ['https://picsum.photos/seed/spike1/800/600'],
    price: { amount: 65, unit: 'Foot' }
  },
  {
    id: 'bs-002',
    name: 'Plastic Bird Spike',
    category: 'Bird Spike',
    shortDescription: 'UV stabilized plastic spikes for residential use.',
    fullDescription: 'Affordable and effective plastic bird spikes. Ideal for residential balconies and windowsills.',
    images: ['https://picsum.photos/seed/spike2/800/600'],
    price: { amount: 110, unit: 'Foot' }
  },
  // Birds Nets
  {
    id: 'bn-001',
    name: 'Anti Bird Net',
    category: 'Birds Nets',
    shortDescription: 'Nylon knotted anti-bird netting.',
    fullDescription: 'Knotted nylon nets designed to block pigeons and other birds without harming them.',
    images: ['https://picsum.photos/seed/birdnet1/800/600']
  },
  {
    id: 'bn-002',
    name: 'Birds Protective Nets',
    category: 'Birds Nets',
    shortDescription: 'Heavy duty protective netting for industrial spaces.',
    fullDescription: 'Protective netting solutions for warehouses and factories to prevent bird entry.',
    images: ['https://picsum.photos/seed/birdnet2/800/600']
  },
  {
    id: 'bn-003',
    name: 'Protection Bird Net',
    category: 'Birds Nets',
    shortDescription: 'Transparent bird netting for aesthetic views.',
    fullDescription: 'Virtually invisible netting that provides safety while maintaining your view.',
    images: ['https://picsum.photos/seed/birdnet3/800/600']
  },
  // Artificial Grass
  {
    id: 'ag-001',
    name: 'Premium Artificial Grass - 40mm',
    category: 'Artificial Grass',
    shortDescription: 'Lush green landscape grass.',
    fullDescription: 'Realistic feel and look. Maintenance free artificial turf for gardens.',
    images: ['https://picsum.photos/seed/grass40/800/600']
  },
  {
    id: 'ag-002',
    name: 'Artificial Lawn Grass',
    category: 'Artificial Grass',
    shortDescription: 'Multi-purpose lawn grass for rooftops.',
    fullDescription: 'High density fibers with excellent drainage for terrace gardens.',
    images: ['https://picsum.photos/seed/grasslawn/800/600']
  },
  // Carpet Grass
  {
    id: 'cg-001',
    name: 'Carpet Grass Roll',
    category: 'Carpet Grass',
    shortDescription: 'Easy to install grass rolls for events.',
    fullDescription: 'Portable and durable grass carpet rolls for indoor and outdoor events.',
    images: ['https://picsum.photos/seed/carpetgrass/800/600']
  },
  // Football Turf
  {
    id: 'ft-001',
    name: 'Professional Football Ground Turf',
    category: 'Football Turf',
    shortDescription: 'FIFA grade football turf installation.',
    fullDescription: 'High performance sports turf designed for heavy footfall and player safety.',
    images: ['https://picsum.photos/seed/footy/800/600']
  },
  // Grass Mats
  {
    id: 'gm-001',
    name: 'Decorative Grass Mats',
    category: 'Grass Mats',
    shortDescription: 'Interlocking grass mats for balconies.',
    fullDescription: 'Small modular grass mats for quick balcony makeovers.',
    images: ['https://picsum.photos/seed/grassmat/800/600']
  },
  // Monsoon Shed
  {
    id: 'ms-001',
    name: 'Industrial Monsoon Shed',
    category: 'Monsoon Shed',
    shortDescription: 'Heavy duty rain protection sheds.',
    fullDescription: 'Customized monsoon sheds for storage areas and loading bays.',
    images: ['https://picsum.photos/seed/monsoon/800/600']
  },
  // Nylon Hammock
  {
    id: 'nh-001',
    name: 'Nylon Hammock Hanging Mesh Net',
    category: 'Nylon Hammock',
    shortDescription: 'Strong nylon hanging mesh for relaxation.',
    fullDescription: 'High-tensile strength nylon rope mesh for hammocks and adventure zones.',
    images: ['https://picsum.photos/seed/hammock/800/600']
  },
  // PE Tarpaulin
  {
    id: 'pt-001',
    name: 'Blue PE Tarpaulin',
    category: 'PE Tarpaulin',
    shortDescription: 'Waterproof PE tarpaulin for general use.',
    fullDescription: 'Lightweight yet strong waterproof cover for multiple applications.',
    images: ['https://picsum.photos/seed/tarpaulin1/800/600']
  },
  {
    id: 'pt-002',
    name: 'Heavy Duty HDPE Tarpaulin',
    category: 'PE Tarpaulin',
    shortDescription: 'Reinforced tarpaulin for vehicle covers.',
    fullDescription: 'Maximum protection against rain and sun. High GSM variant.',
    images: ['https://picsum.photos/seed/tarpaulin2/800/600']
  },
  // PP Rope
  {
    id: 'ppr-001',
    name: 'Braided PP Rope',
    category: 'PP Rope',
    shortDescription: 'High strength polypropylene braided rope.',
    fullDescription: 'Versatile industrial rope for securing cargo and nets.',
    images: ['https://picsum.photos/seed/rope1/800/600']
  },
  {
    id: 'ppr-002',
    name: 'Twisted PP Safety Rope',
    category: 'PP Rope',
    shortDescription: 'Safety grade twisted rope for construction.',
    fullDescription: 'Strong and reliable twisted rope for height safety systems.',
    images: ['https://picsum.photos/seed/rope2/800/600']
  },
  // Safety Nets
  {
    id: 'sn-001',
    name: 'Construction Fall Safety Net',
    category: 'Safety Nets',
    shortDescription: 'Site safety nets for high-rise projects.',
    fullDescription: 'Impact tested debris and fall protection nets for engineering sites.',
    images: ['https://picsum.photos/seed/safenet1/800/600']
  },
  {
    id: 'sn-002',
    name: 'Balcony Anti-Fall Net',
    category: 'Safety Nets',
    shortDescription: 'Home safety nets for kids and pets.',
    fullDescription: 'Durable nylon nets for balcony safety without blocking air.',
    images: ['https://picsum.photos/seed/safenet2/800/600']
  },
  {
    id: 'sn-003',
    name: 'Industrial Debris Net',
    category: 'Safety Nets',
    shortDescription: 'Fine mesh nets for debris containment.',
    fullDescription: 'Prevents falling debris at construction sites. Breathable mesh.',
    images: ['https://picsum.photos/seed/safenet3/800/600']
  },
  // Shade Nets
  {
    id: 'shn-001',
    name: 'Agri Shade Net - 75%',
    category: 'Shade Nets',
    shortDescription: 'Agriculture grade sun protection net.',
    fullDescription: 'Green shade nets for nursery and agricultural greenhouse use.',
    images: ['https://picsum.photos/seed/shadenet1/800/600']
  },
  {
    id: 'shn-002',
    name: 'Car Parking Shade Mesh',
    category: 'Shade Nets',
    shortDescription: 'Premium shade mesh for vehicle shelters.',
    fullDescription: 'Durable mesh designed to reduce heat in parking zones.',
    images: ['https://picsum.photos/seed/shadenet2/800/600']
  },
  {
    id: 'shn-003',
    name: 'Privacy Fence Shade',
    category: 'Shade Nets',
    shortDescription: 'Privacy netting for residential fences.',
    fullDescription: 'Blocks visibility while allowing airflow. Ideal for gardens.',
    images: ['https://picsum.photos/seed/shadenet3/800/600']
  },
  // Sports Nets
  {
    id: 'spn-001',
    name: 'Cricket Box Net',
    category: 'Sports Nets',
    shortDescription: 'Fully enclosed cricket practice net.',
    fullDescription: 'Complete box enclosure for professional cricket practice.',
    images: ['https://picsum.photos/seed/sportnet1/800/600']
  },
  {
    id: 'spn-002',
    name: 'Football Goal Post Net',
    category: 'Sports Nets',
    shortDescription: 'Heavy duty goal post netting.',
    fullDescription: 'Weatherproof nylon nets for professional goal posts.',
    images: ['https://picsum.photos/seed/sportnet2/800/600']
  },
  {
    id: 'spn-003',
    name: 'Tennis Boundary Net',
    category: 'Sports Nets',
    shortDescription: 'Wide span boundary netting for courts.',
    fullDescription: 'Tall boundary nets for tennis and volleyball courts.',
    images: ['https://picsum.photos/seed/sportnet3/800/600']
  }
];
