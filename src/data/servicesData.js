import { HiShieldCheck, HiLockClosed, HiWifi, HiTv } from 'react-icons/hi2'

export const services = [
  {
    id: 'surveillance',
    title: 'Surveillance & Perimeter Security',
    tagline: 'Protecting What Matters Most',
    icon: HiShieldCheck,
    short: 'CCTV, electric fencing and perimeter protection for properties of all sizes.',
    description:
      'Dependable surveillance and perimeter security solutions for homes, offices, apartment complexes, construction sites, commercial properties and industrial facilities. Our systems combine clear visibility, early intrusion detection and strong physical deterrence.',
    features: [
      'Clear live and recorded footage',
      'Remote viewing through mobile phones and computers',
      'Improved monitoring of entrances and high-risk areas',
      'Reliable evidence for incident investigation',
      '24-hour monitoring capability',
      'Integration with access control, alarms and intercom systems',
    ],
    subServices: [
      {
        title: 'CCTV Surveillance Systems',
        items: [
          'IP and analogue CCTV systems for properties of all sizes',
          'Project monitoring, staff supervision, theft prevention',
          'Safety management and dispute resolution',
        ],
      },
      {
        title: 'Electric & Razor Fencing',
        items: [
          'Strong physical and visible deterrence',
          'Continuous perimeter protection',
          'Rapid detection of attempted intrusion',
          'Low maintenance and long-term reliability',
        ],
      },
    ],
  },
  {
    id: 'access-control',
    title: 'Access Control & Entrance Automation',
    tagline: 'Smarter Access. Greater Control.',
    icon: HiLockClosed,
    short: 'Automated gates, biometric access, video intercom and electronic locks.',
    description:
      'Modern entrance and access solutions that help property owners manage movement, verify visitors and improve security. Suitable for private homes, apartment buildings, offices, hotels, commercial properties and industrial facilities.',
    features: [
      'Smooth and convenient gate operation',
      'Better control over property access',
      'Remote, keypad, card or sensor operation',
      'Battery backup during power outages',
      'Reliable performance for high-traffic entrances',
      'Integration with CCTV and intercom systems',
    ],
    subServices: [
      {
        title: 'Automated Gate Systems',
        items: [
          'Reliable automation for sliding and swing gates',
          'Secure and convenient access without manual operation',
        ],
      },
      {
        title: 'Access Control Systems',
        items: [
          'Biometric readers, access cards and RFID tags',
          'Keypad entry systems and electronic door locks',
          'Staff and visitor access management',
        ],
      },
      {
        title: 'Video Intercom Systems',
        items: [
          'Real-time visitor verification',
          'Remote entry management',
          'Integration with electric gates and electronic doors',
        ],
      },
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Structured Cabling',
    tagline: 'Reliable Connections. Smarter Spaces.',
    icon: HiWifi,
    short: 'Structured cabling, voice/data networks and Wi-Fi for apartments and offices.',
    description:
      'Structured networking systems that support smooth communication, fast data transfer and reliable connectivity across apartments, offices and commercial properties. Carefully planned to keep cables organised and infrastructure ready for future expansion.',
    features: [
      'Fast and stable internet connectivity',
      'Clear and uninterrupted voice communication',
      'Support for multiple users and devices',
      'Secure data transmission',
      'Easy system expansion',
      'Centralised monitoring and maintenance',
    ],
    subServices: [
      {
        title: 'Voice & Data Networking',
        items: [
          'Reliable networks for telephone, internet and internal communication',
        ],
      },
      {
        title: 'Apartment & Office Networking',
        items: [
          'Structured data cabling, internet distribution, wireless access points',
          'Network switches, cabinets and centralised systems',
        ],
      },
      {
        title: 'Piping, Conduiting & Structured Cabling',
        items: [
          'Clean, secure cable routing for electrical, internet, telephone, CCTV and TV systems',
          'Protection against damage and moisture',
          'Easy maintenance and future upgrades',
        ],
      },
    ],
  },
  {
    id: 'tv-satellite',
    title: 'TV, Satellite & Integrated Technology',
    tagline: 'Clear Entertainment. Connected Living.',
    icon: HiTv,
    short: 'TV, satellite, audio-visual and fully integrated smart systems.',
    description:
      'Professionally designed TV, satellite and audio-visual networking systems for apartments, offices, hotels, homes and commercial properties. Centralised solutions deliver clear signals while reducing unnecessary cabling and maintenance challenges.',
    features: [
      'Clear and consistent signal quality',
      'Central distribution to multiple rooms or units',
      'Fewer external satellite dishes and antennas',
      'Support for HD, 4K, IPTV and future upgrades',
      'Improved appearance of the property',
    ],
    subServices: [
      {
        title: 'TV & Satellite Networking',
        items: [
          'Shared television and satellite distribution systems',
          'Access to local, international and subscription-based channels',
        ],
      },
      {
        title: 'Audio-Visual Solutions',
        items: [
          'Installations for offices, conference rooms, hotels, reception areas',
          'Entertainment and information sharing systems',
        ],
      },
      {
        title: 'Integrated Technology Systems',
        items: [
          'Connected security, networking, access control, intercom, TV and entertainment',
          'One coordinated, professionally planned system',
        ],
      },
    ],
  },
]
