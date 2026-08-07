export interface LightingCity {
  slug: string;
  name: string;
  region: string;
  intro: string;
  neighborhoods: string[];
}

export const lightingCities: LightingCity[] = [
  {
    slug: 'plano',
    name: 'Plano',
    region: 'Collin County',
    intro:
      "Plano is home base for Bloom Exterior Services, so it's where we install and service the most lighting systems. From the mature tree canopy of Willow Bend and Deerfield to newer construction near Legacy West, we design permanent architectural lighting and seasonal holiday lighting that fits the character of your neighborhood.",
    neighborhoods: ['Willow Bend', 'Deerfield', 'Legacy West', 'Historic Downtown Plano'],
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    region: 'Dallas County',
    intro:
      'Richardson blends established, tree-lined residential streets with newer development around CityLine and the Eisemann Center area. We install permanent outdoor lighting and holiday lighting for both classic ranch-style homes and newer builds throughout the city.',
    neighborhoods: ['CityLine', 'Canyon Creek', 'Prairie Creek', 'Eastside'],
  },
  {
    slug: 'allen',
    name: 'Allen',
    region: 'Collin County',
    intro:
      'Allen is one of the fastest-growing communities in the DFW metro, with large custom homes throughout Twin Creeks, Stonebridge Ranch-adjacent areas, and Watters Creek. Our lighting crews design permanent and holiday lighting packages sized for the bigger lots and elevations common in Allen.',
    neighborhoods: ['Twin Creeks', 'Watters Creek', 'Montgomery Farm', 'Bethany Lakes'],
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    region: 'Dallas County',
    intro:
      "Highland Park's historic estates and mature oak-lined streets call for lighting design that's precise and understated. We install permanent architectural lighting and seasonal holiday lighting around Highland Park Village and throughout the neighborhood's private estates with the level of craftsmanship the area expects.",
    neighborhoods: ['Highland Park Village', 'Volk Estates', 'Country Club Estates'],
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    region: 'Dallas County',
    intro:
      "Lakewood's Tudor and Spanish-revival homes near White Rock Lake have a lot of architectural detail worth highlighting after dark. We design permanent uplighting and holiday lighting that follows the rooflines and landscaping typical of this historic Dallas neighborhood.",
    neighborhoods: ['White Rock Lake', 'Lakewood Country Club', 'Hollow Way'],
  },
  {
    slug: 'murphy',
    name: 'Murphy',
    region: 'Collin County',
    intro:
      'Murphy is a quieter, family-oriented suburb near Lake Lavon with a mix of established and newer subdivisions. We install permanent and holiday lighting throughout Murphy, sized to fit everything from starter homes to larger new-construction lots.',
    neighborhoods: ['Sonoma Verde', 'Lookout at Murphy', 'Southgate'],
  },
  {
    slug: 'parker',
    name: 'Parker',
    region: 'Collin County',
    intro:
      'Parker is one of the more semi-rural communities in Collin County, with larger lots, equestrian properties, and homes near Stonebridge Ranch. Our lighting installs in Parker often cover more linear footage than a typical suburban lot, and we design accordingly.',
    neighborhoods: ['Stonebridge Ranch', 'Wynn Ridge', 'Hollow at Twin Creeks'],
  },
  {
    slug: 'garland',
    name: 'Garland',
    region: 'Dallas County',
    intro:
      'Garland is one of the largest and most established suburbs in the DFW metro, with diverse housing stock from mid-century ranch homes to newer builds near Lake Ray Hubbard. We install permanent and holiday lighting throughout Garland neighborhoods of every era.',
    neighborhoods: ['Lake Ray Hubbard', 'Firewheel', 'Duck Creek'],
  },
  {
    slug: 'rowlett',
    name: 'Rowlett',
    region: 'Dallas County',
    intro:
      'Rowlett sits right on Lake Ray Hubbard, and a lot of homes here are built to take advantage of the water views. We design permanent and holiday lighting for waterfront and inland Rowlett properties alike, with attention to how the lighting reads from the street and from the lake.',
    neighborhoods: ['Lake Ray Hubbard', 'Waterview', 'Bayside'],
  },
  {
    slug: 'lake-highlands',
    name: 'Lake Highlands',
    region: 'Dallas County',
    intro:
      "Lake Highlands, just north of White Rock Lake, has a strong mix of mid-century homes and newer construction. We install permanent architectural lighting and holiday lighting throughout the neighborhood's tree-lined streets, working around mature landscaping that's often decades old.",
    neighborhoods: ['White Rock Lake', 'Lake Highlands Town Center', 'Hamilton Park'],
  },
  {
    slug: 'preston-hollow',
    name: 'Preston Hollow',
    region: 'Dallas County',
    intro:
      "Preston Hollow's large estates and mature oak canopy near Northpark Center make for some of the most dramatic permanent lighting installs we do. We design layered lighting — uplighting on mature trees, architectural accents, and pathway lighting — scaled to the size of Preston Hollow properties.",
    neighborhoods: ['Northpark Center', 'Old Preston Hollow', 'Walnut Hill Estates'],
  },
  {
    slug: 'university-park',
    name: 'University Park',
    region: 'Dallas County',
    intro:
      "University Park's tree-lined streets around SMU and Snider Plaza are full of well-kept historic homes. We install permanent architectural lighting and holiday lighting that complements the traditional look of the neighborhood without overpowering it.",
    neighborhoods: ['SMU', 'Snider Plaza', 'Volk Estates'],
  },
];
