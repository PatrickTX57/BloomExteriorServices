export interface IrrigationCity {
  slug: string;
  name: string;
  region: string;
  intro: string;
  zips: string[];
}

export const irrigationCities: IrrigationCity[] = [
  {
    slug: 'richardson',
    name: 'Richardson',
    region: 'Dallas County',
    intro:
      "Richardson's mix of mature ranch-style yards and newer landscaping around CityLine means irrigation needs vary block to block. We design and repair sprinkler systems and drip zones sized to each yard, from established St. Augustine lawns to newer, water-efficient beds.",
    zips: ['75080', '75081', '75082'],
  },
  {
    slug: 'plano',
    name: 'Plano',
    region: 'Collin County',
    intro:
      'As Bloom Exterior Services\u2019 home base, Plano is where we install and service the most sprinkler systems in the DFW metro. From established lawns in Willow Bend and Deerfield to new construction near Legacy West, we design irrigation zones that keep grass healthy without wasting water.',
    zips: ['75093', '75025', '75023', '75075', '75024', '75074'],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    region: 'Dallas County',
    intro:
      'Dallas covers a huge range of lot sizes and landscaping styles, from tight urban lots to sprawling North Dallas yards. We install and repair sprinkler systems and drip irrigation throughout Dallas neighborhoods, with zone design that accounts for sun exposure, slope, and soil type specific to each property.',
    zips: ['75214', '75248', '75206', '75238', '75252', '75243', '75204', '75231', '75223', '75201', '75202', '75287', '75226', '75246'],
  },
  {
    slug: 'allen',
    name: 'Allen',
    region: 'Collin County',
    intro:
      "Allen's newer, larger homes throughout Twin Creeks and Watters Creek typically need more irrigation zones than older neighborhoods. We design multi-zone sprinkler systems and drip lines sized for Allen's bigger lots and elevations.",
    zips: ['75002', '75013'],
  },
  {
    slug: 'garland',
    name: 'Garland',
    region: 'Dallas County',
    intro:
      "Garland's housing stock spans decades, from mid-century homes with aging sprinkler lines to newer builds near Lake Ray Hubbard. We repair and upgrade older systems and install new ones throughout Garland.",
    zips: ['75044', '75041', '75042'],
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    region: 'Dallas County',
    intro:
      "Highland Park's mature landscaping and formal lawns require precise irrigation design that protects decades-old trees while keeping grass consistently green. We install and service sprinkler and drip systems throughout Highland Park's private estates.",
    zips: ['75205', '75219'],
  },
  {
    slug: 'university-park',
    name: 'University Park',
    region: 'Dallas County',
    intro:
      "University Park's tree-lined streets around SMU and Snider Plaza have some of the most established landscaping in the metro. We design irrigation systems that work around mature root systems and keep traditional lawns looking sharp.",
    zips: ['75205'],
  },
  {
    slug: 'wylie',
    name: 'Wylie',
    region: 'Collin County',
    intro:
      "Wylie's growing subdivisions and larger lots near Lavon and Nevada often need more coverage than a standard suburban system. We install and service sprinkler systems throughout Wylie, sized to fit everything from starter homes to acreage lots.",
    zips: ['75098', '75173', '75166'],
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    region: 'Dallas County',
    intro:
      "Carrollton's mix of established and newer neighborhoods, including areas bordering The Colony and Lewisville, calls for irrigation systems tailored to each lot's age and layout. We install, repair, and tune up sprinkler systems throughout Carrollton.",
    zips: ['75007', '75010'],
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    region: 'Denton County',
    intro:
      "Flower Mound's larger, wooded lots often need irrigation zones designed around mature trees and uneven terrain. We design sprinkler and drip systems that work with Flower Mound's natural landscaping instead of against it.",
    zips: ['75022', '75028'],
  },
  {
    slug: 'murphy',
    name: 'Murphy',
    region: 'Collin County',
    intro:
      "Murphy's mix of established and newer subdivisions near Lake Lavon calls for irrigation systems sized to fit everything from starter homes to larger new-construction lots. We install and service sprinkler systems throughout Murphy.",
    zips: ['75094'],
  },
  {
    slug: 'parker',
    name: 'Parker',
    region: 'Collin County',
    intro:
      "Parker's semi-rural properties, including equestrian lots near Stonebridge Ranch, often cover more ground than a typical suburban yard. Our irrigation installs in Parker are designed for larger coverage areas and mixed turf and pasture layouts.",
    zips: ['75094'],
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    region: 'Denton County',
    intro:
      "Lewisville's older, established neighborhoods and newer development near Lake Dallas both need irrigation systems that match their landscaping. We install and repair sprinkler systems throughout Lewisville, from mature lawns to new builds.",
    zips: ['75077', '75067', '75057', '75065', '75010'],
  },
  {
    slug: 'the-colony',
    name: 'The Colony',
    region: 'Denton County',
    intro:
      "The Colony's lakeside location near Lewisville Lake means a lot of yards deal with sandy or uneven soil. We design sprinkler systems that account for The Colony's specific soil and drainage conditions.",
    zips: ['75010'],
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    region: 'Dallas County',
    intro:
      "Lakewood's Tudor and Spanish-revival homes near White Rock Lake have established, mature landscaping that needs careful irrigation design. We install and service sprinkler systems that protect Lakewood's decades-old trees and gardens while keeping lawns healthy.",
    zips: ['75214'],
  },
  {
    slug: 'preston-hollow',
    name: 'Preston Hollow',
    region: 'Dallas County',
    intro:
      "Preston Hollow's large estates near Northpark Center often need multi-zone irrigation systems that cover expansive lawns and garden beds. We design sprinkler and drip systems scaled to the size of Preston Hollow properties.",
    zips: ['75248'],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    region: 'Collin County',
    intro:
      "McKinney's rapid growth has brought a wide mix of lot sizes, from historic homes near downtown to large new-construction properties. We install and service sprinkler systems throughout McKinney, sized to fit any yard.",
    zips: [],
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    region: 'Collin County',
    intro:
      'Frisco is one of the fastest-growing cities in the DFW metro, with new subdivisions going up constantly. We design and install sprinkler systems for new-construction yards throughout Frisco, plus repair and tune up existing systems.',
    zips: [],
  },
];
