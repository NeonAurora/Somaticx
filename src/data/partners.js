export const partnerCategories = [
  {
    id: 'all',
    name: 'All Partners',
    icon: 'Group',
    count: 18,
    color: '#16a34a'
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: 'Computer',
    count: 6,
    color: '#2563eb'
  },
  {
    id: 'research',
    name: 'Research',
    icon: 'Science',
    count: 4,
    color: '#059669'
  },
  {
    id: 'distribution',
    name: 'Distribution',
    icon: 'LocalShipping',
    count: 3,
    color: '#dc2626'
  },
  {
    id: 'academic',
    name: 'Academic',
    icon: 'School',
    count: 3,
    color: '#d97706'
  },
  {
    id: 'government',
    name: 'Government',
    icon: 'AccountBalance',
    count: 2,
    color: '#7c3aed'
  }
];

export const partners = [
  {
    id: 'agritech-solutions',
    name: 'AgriTech Solutions Inc.',
    shortName: 'AgriTech',
    category: 'Technology',
    categoryId: 'technology',
    categoryIcon: 'Computer',
    logo: '/partners/agritech-logo.png',
    website: 'https://agritech-solutions.com',
    location: 'San Francisco, CA',
    country: 'United States',
    since: '2022',
    status: 'Strategic Partner',
    description: 'Leading provider of agricultural technology solutions specializing in precision farming and IoT sensors.',
    longDescription: `
      AgriTech Solutions Inc. is a pioneer in agricultural technology innovation, providing cutting-edge solutions for modern farming operations. Their expertise in IoT sensor networks and data analytics perfectly complements our bio-industry platforms.
      
      Our partnership focuses on integrating their precision farming technologies with our livestock monitoring systems to create comprehensive farm management solutions.
    `,
    services: [
      'IoT Sensor Networks',
      'Precision Agriculture',
      'Farm Management Software',
      'Data Analytics Platforms'
    ],
    benefits: [
      'Enhanced sensor accuracy for livestock monitoring',
      'Integrated farm-wide data collection',
      'Advanced analytics for yield optimization',
      'Reduced operational costs through automation'
    ],
    projects: [
      {
        name: 'Smart Farm Integration',
        description: 'Joint development of integrated IoT solutions for comprehensive farm monitoring',
        status: 'Active'
      },
      {
        name: 'Sensor Fusion Technology',
        description: 'Combining livestock and crop monitoring sensors for unified farm insights',
        status: 'In Development'
      }
    ],
    contact: {
      name: 'Dr. Sarah Kim',
      title: 'Director of Partnerships',
      email: 'partnerships@agritech-solutions.com'
    },
    metrics: {
      joinProjects: 8,
      yearsActive: 2,
      satisfaction: 4.8
    }
  },
  {
    id: 'biotech-research-institute',
    name: 'BioTech Research Institute',
    shortName: 'BTRI',
    category: 'Research',
    categoryId: 'research',
    categoryIcon: 'Science',
    logo: '/partners/btri-logo.png',
    website: 'https://btri.org',
    location: 'Boston, MA',
    country: 'United States',
    since: '2021',
    status: 'Research Partner',
    description: 'Premier research institution focused on biotechnology applications in agriculture and livestock management.',
    longDescription: `
      The BioTech Research Institute stands at the forefront of biological research, particularly in applications that benefit agricultural and livestock industries. Their team of world-class researchers brings invaluable expertise to our collaborative projects.
      
      Through this partnership, we gain access to cutting-edge research facilities and collaborate on breakthrough innovations in bio-monitoring technologies.
    `,
    services: [
      'Biotechnology Research',
      'Genetic Analysis',
      'Laboratory Testing',
      'Academic Publications'
    ],
    benefits: [
      'Access to advanced research facilities',
      'Collaboration with leading scientists',
      'Validation of biotechnology innovations',
      'Academic credibility and publications'
    ],
    projects: [
      {
        name: 'Genetic Health Markers',
        description: 'Research into genetic indicators for livestock health monitoring',
        status: 'Research Phase'
      },
      {
        name: 'Bio-Sensor Development',
        description: 'Development of next-generation biological sensors for animal health',
        status: 'Active'
      }
    ],
    contact: {
      name: 'Prof. Michael Chen',
      title: 'Research Director',
      email: 'partnerships@btri.org'
    },
    metrics: {
      joinProjects: 5,
      yearsActive: 3,
      satisfaction: 4.9
    }
  },
  {
    id: 'global-agri-distribution',
    name: 'Global Agri Distribution',
    shortName: 'GAD',
    category: 'Distribution',
    categoryId: 'distribution',
    categoryIcon: 'LocalShipping',
    logo: '/partners/gad-logo.png',
    website: 'https://globalagridist.com',
    location: 'Chicago, IL',
    country: 'United States',
    since: '2023',
    status: 'Distribution Partner',
    description: 'International distribution network specializing in agricultural technology and equipment worldwide.',
    longDescription: `
      Global Agri Distribution operates one of the largest agricultural technology distribution networks in North America and Europe. Their extensive reach and established relationships with farmers make them an ideal partner for scaling our solutions.
      
      This partnership enables us to reach new markets efficiently while providing customers with local support and faster delivery times.
    `,
    services: [
      'Global Distribution',
      'Local Support Services',
      'Installation & Maintenance',
      'Customer Training'
    ],
    benefits: [
      'Expanded market reach',
      'Local customer support',
      'Faster product delivery',
      'Reduced distribution costs'
    ],
    projects: [
      {
        name: 'European Market Expansion',
        description: 'Launch of Somaticx products across European markets',
        status: 'Active'
      },
      {
        name: 'Service Network Development',
        description: 'Building local installation and support services',
        status: 'Planning'
      }
    ],
    contact: {
      name: 'James Rodriguez',
      title: 'VP of Strategic Partnerships',
      email: 'partners@globalagridist.com'
    },
    metrics: {
      joinProjects: 3,
      yearsActive: 1,
      satisfaction: 4.7
    }
  },
  {
    id: 'state-agricultural-university',
    name: 'State Agricultural University',
    shortName: 'SAU',
    category: 'Academic',
    categoryId: 'academic',
    categoryIcon: 'School',
    logo: '/partners/sau-logo.png',
    website: 'https://sau.edu',
    location: 'Ames, IA',
    country: 'United States',
    since: '2022',
    status: 'Academic Partner',
    description: 'Leading agricultural university providing research collaboration and student internship programs.',
    longDescription: `
      State Agricultural University is renowned for its agricultural science programs and research initiatives. Our partnership provides mutual benefits through research collaboration, student internships, and technology validation in real-world academic settings.
      
      This relationship helps us stay connected to emerging talent while contributing to agricultural education and research advancement.
    `,
    services: [
      'Research Collaboration',
      'Student Internships',
      'Technology Validation',
      'Educational Programs'
    ],
    benefits: [
      'Access to emerging talent',
      'Research validation',
      'Educational impact',
      'Long-term innovation pipeline'
    ],
    projects: [
      {
        name: 'Internship Program',
        description: 'Semester-long internships for agricultural engineering students',
        status: 'Ongoing'
      },
      {
        name: 'Research Validation',
        description: 'Testing of new technologies in university farm settings',
        status: 'Active'
      }
    ],
    contact: {
      name: 'Dr. Lisa Thompson',
      title: 'Industry Relations Director',
      email: 'industry@sau.edu'
    },
    metrics: {
      joinProjects: 4,
      yearsActive: 2,
      satisfaction: 4.8
    }
  },
  {
    id: 'livestock-genetics-corp',
    name: 'Livestock Genetics Corporation',
    shortName: 'LGC',
    category: 'Technology',
    categoryId: 'technology',
    categoryIcon: 'Computer',
    logo: '/partners/lgc-logo.png',
    website: 'https://livestockgenetics.com',
    location: 'Austin, TX',
    country: 'United States',
    since: '2023',
    status: 'Technology Partner',
    description: 'Specialized company focusing on genetic analysis and breeding optimization for livestock operations.',
    longDescription: `
      Livestock Genetics Corporation brings deep expertise in animal genetics and breeding programs. Their genetic analysis capabilities complement our monitoring technologies to provide comprehensive livestock management solutions.
      
      Together, we&apos;re developing integrated systems that combine health monitoring with genetic insights for optimal breeding decisions.
    `,
    services: [
      'Genetic Analysis',
      'Breeding Optimization',
      'DNA Testing Services',
      'Reproductive Management'
    ],
    benefits: [
      'Enhanced breeding programs',
      'Genetic health insights',
      'Improved livestock quality',
      'Data-driven breeding decisions'
    ],
    projects: [
      {
        name: 'Integrated Health & Genetics Platform',
        description: 'Combining health monitoring with genetic analysis for breeding decisions',
        status: 'Development'
      }
    ],
    contact: {
      name: 'Dr. Robert Wilson',
      title: 'Chief Scientific Officer',
      email: 'partnerships@livestockgenetics.com'
    },
    metrics: {
      joinProjects: 2,
      yearsActive: 1,
      satisfaction: 4.6
    }
  },
  {
    id: 'department-agriculture',
    name: 'Department of Agriculture',
    shortName: 'USDA',
    category: 'Government',
    categoryId: 'government',
    categoryIcon: 'AccountBalance',
    logo: '/partners/usda-logo.png',
    website: 'https://usda.gov',
    location: 'Washington, DC',
    country: 'United States',
    since: '2022',
    status: 'Government Partner',
    description: 'Federal agency collaboration for agricultural innovation and regulatory compliance initiatives.',
    longDescription: `
      Our partnership with the Department of Agriculture focuses on advancing agricultural innovation while ensuring compliance with federal regulations. This collaboration helps validate our technologies for widespread adoption across the agricultural sector.
      
      Working with USDA provides credibility and helps establish industry standards for bio-monitoring technologies.
    `,
    services: [
      'Regulatory Guidance',
      'Standards Development',
      'Grant Programs',
      'Industry Validation'
    ],
    benefits: [
      'Regulatory compliance assurance',
      'Industry standard development',
      'Government endorsement',
      'Access to grant funding'
    ],
    projects: [
      {
        name: 'Agricultural Innovation Initiative',
        description: 'Collaborative development of industry standards for livestock monitoring',
        status: 'Active'
      }
    ],
    contact: {
      name: 'Dr. Patricia Martinez',
      title: 'Innovation Program Director',
      email: 'innovation@usda.gov'
    },
    metrics: {
      joinProjects: 2,
      yearsActive: 2,
      satisfaction: 4.7
    }
  }
];

export const partnershipBenefits = [
  {
    title: 'Technology Integration',
    description: 'Seamless integration of complementary technologies to create comprehensive solutions.',
    icon: 'Integration'
  },
  {
    title: 'Market Expansion',
    description: 'Access to new markets and customer segments through partner networks.',
    icon: 'TrendingUp'
  },
  {
    title: 'Research Collaboration',
    description: 'Joint research initiatives driving innovation in bio-industry technologies.',
    icon: 'Science'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Exchange of expertise and best practices across different domains.',
    icon: 'School'
  },
  {
    title: 'Risk Mitigation',
    description: 'Shared resources and expertise reduce development and market risks.',
    icon: 'Security'
  },
  {
    title: 'Customer Value',
    description: 'Enhanced customer value through integrated solutions and services.',
    icon: 'Star'
  }
];