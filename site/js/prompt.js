let rules = {
    '<start>': "<make> <system> with <object> for <company> | <make> <object> for <event> | <make> <system> and <object> for <event> | <make> <system> for the <company> brand | <make> <object> advocating for <cause> group | <make> <system> for <cause> group, while focusing on improving <design> | <make> <object> for <company> group while focusing on improving <design> | <make> <object> for yourself",
    '<make>': "Design | Create | Generate",
    '<object>': "a package | a poster | a logo | a webpage/micro-site | a mug | a bottle label | a t-shirt | a baseball cap | a beenie | a pair of socks | a uniform | a hoodie | a sweater | an animation | an infographic | a book | a magazine | a zine | a letterhead | a notepad | a laptop sticker | an app | a chair | a tote bag | an icon set | a logotype | a blog post | an illustration | a mailer | a showroom | a calendar | a presentation | a button pin",
    '<system>': "an identity | a storefront | an exhibition | a web marketing campaign | a marketing campaign | a website | a poster series | a new product line",
    '<design>': "your typography | form making | your workflow | your photography | precise geometric layout | organic form making | your illustration | to evoke a specific feeling | idea generation",

    '<event>': "a <artist> concert | a <company> conference | a local book signing | the <sports> team | a television series of your choice | a weekly farmers market | a live comedy show | a theatrical performance | a community arts fair",
    '<artist>': "Eminem | Beyonce | Linkin Park | The Offspring | Massive Attack | Mariah Carey | Clean Bandit | Anderson .Paak | Arcade Fire | The White Stripes | Daft Punk | Lady Gaga | Ellie Goulding",
    '<sports>': "Warriors (NBA) | Rockets (NBA) | Thunder (NBA)",
    '<company>': "BAE Systems | Hexcel Corporation | L3 Technologies | Lawrence Livermore National Laboratory | Lockheed Martin Space Systems | Made In Space, Inc. | NASA Ames Research Center | Sandia National Laboratories | Space Systems Loral | Charlotte Russe | Dolls Kill | Everlane | Gap Inc. | JanSport | Levi Strauss & Co. | Marmot | Modcloth | Mountain Hardwear | The North Face | O' Neill | Ross | Stitch Fix | Zazzle | Tea Collection | Welcome Stranger | Motiv Power Systems | Licid Motors | NIO | Tesla Motors | Waymo | Zoox | 23andMe | Bio-Rad Laboratories | Buck Institutre for Age Research | Calico | Chiron | Genetech | Gilead Sciences | Intuitive Surgical | Kosan Biosciences | Nektar Therapeudics | Mendel Biotechnology, Inc. | Roche Molecular Systems | Verily Life Sciences | Bianchi Bicycles | GoPro | Kleenspeed Technologies | Method Products | Specialized Bycicle Components | Ammunition Design Group | Gits & Glory | IDEO | Landor Associates | Whipsaw | Traction | Chegg | Magoosh | Adaptec | Advanced Micro Devices (AMD) | Agilent Technologies Inc. | Altera | AMAX Information Technologies | Antec | Apple Inc. | Applied Materials | Asus | Barracuda Networks | Brocode Communications Systems | Cisco Ststems Inc. | Digidesign | Dust Networks | E-mu Systems | Fairchild Semiconductor | Fitbit | Fujitsu Computer Products of America | Genesis Microchip | Hewlett Packard | Hitachi Data Systems | Hitachi Global Storage Technologies | Integrated Device Technology | Intel | Jawbone | JDS Uniphase | Juniper Networks | KLA Tencore | Lam Research | Logitech | LSI Corporation | Marvell Tehcnology Group | Maxtor Corp. | Monster Cable Products | National Semiconductor | Nest Labs | NetApp | Nvidia Corp. | Philips Lumileds Lighting Company | Rackable Systems | Rambus | SanDisk | Sanmina-SCI | Seagate Technology | Silicon Graphics | Silicon Image | Solectron Corporation | Sony Optiarc | Super Talent Technology | Supermicro | Terayon | THX | Touchstone Semiconductor | Xilinx | SolarCity | SunPower | SunRun | Bechtel | URS Corp. | Swinerton | Dolby Laboratories | Electronic Arts | Industrial Light & Magic | Kerner Optical | Lucasfilm Animation | Netflix | Niantic, Inc. | Pandora Radio | Pixar | Sega | Skywalker Sound | Sony Interactive Entertainment | Roblox | Calypso Technology | Charles Schwab Corporation | Coinbase | FICO | Fireman's Fund Insurance Company | Fisher Investments | Franklin Templeton Investments | PayPal | Robert Half International | Silicon Valley Bank | Square, Inc. | Visa, Inc. | Wells Fargo Bank | Lending CLub | Anchor Brewing Company | Annabelle Candy Company | Annie's Homegrown | California and Hawaiian Sugar Campany | Cliff Bar | Columbus Salame | Dreyer's Grand Ice Cream | Ghirardelli Chocolate Company | Häagen-Dazs | Impossible Foods | Il Fornaio | Jelly Belly | Mountain Mike's Pizza | Odwalla | Otis Spunkmeyer | Peet's Coffee & Tea | Point Reyes Farmstead Cheese Company | Power Bar | See's Candies | Shasta (soft drink) | Takaki Bakery | Togo's | Castlight Health | Eargo | Kaiser Permanente | McKesson Corporation | Palo Alto Medical | Airbnb | Alphabet, Inc. | Ask.com | Craigslist | Dropbox | Evernote | Google | Hearsay Social | Instacart | LinkedIn | Lyft | Quora | Salesforce.com | Slack Technologies | Poll Everywhere | Tripping.com | Twitter | Uber | Workdat, Inc. | Yelp, Inc. | Yummly | YouTube | Zendesk | Zoosk | Communication Arts | Daily Review | Dwell Magazine | Future US | PopSugar | San Francisco Chronicle | San Jose Mercury News | University of California Press | Complex Magazine | Bleacher Report | MobiTV | TubeMogul | Dunlop Manufacturing | Saga Musical Instraments | Santa Cruz Guitar Company | A10 Networks | Arista Networks | Aryaka | Barefoot Networks | Big Switch Networks | Brocade Communications | Ericsson | F5 Networks | Fortinet | Juniper Networks | Minerva Networks | Netgear | Palo Alto Networks | Redfin | Digital Realty | LiquidSpace | Prologis | Trulia | Charlotte Russe (clothing retail) | Cost Plus World Market | Cycle Gear | Gap.com | Macys.com | Minted | Orchard Supply Hardware | Pottery Barn | Restoration Hardware | Ross | Safeway Inc. | Shutterfly | Williams-Sonoma | Zazzle | Adobe Inc. | AppDynamics | Autodesk",
    '<cause>': "a climate change | a homelessness | an education | a city services | a community-center | a children and youth | a health and medicine | a senior | an arts & culture | a human rights | a women's | a people with disabilities | a housing",
}
let grammar = new RiGrammar(rules);
    
function addNewStory() {
var story = grammar.expand();
story = story.split(" ").map(function(word, index) { return "<span class='word"+index+"'>"+word+"</span>"; }).join(" ");
var prompt = document.getElementById('prompt');
$('.widget__prompt').append($('#prompt').html(story));
}
addNewStory();