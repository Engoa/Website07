(() => {
  const formElement = document.getElementById('form');
  const dropDownMenu = document.getElementById('country');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const city = document.getElementById('city');
  const street = document.getElementById('address');
  const zipCode = document.getElementById('zipcode');
  const totalResultElement = document.getElementById('cost');

  const countriesList = {
    null: 'Select a Country',
    AFG: 'Afghanistan',
    ALB: 'Albania',
    DZA: 'Algeria',
    ASM: 'American Samoa',
    AND: 'Andorra',
    AGO: 'Angola',
    AIA: 'Anguilla',
    ATA: 'Antarctica',
    ATG: 'Antigua and Barbuda',
    ARG: 'Argentina',
    ARM: 'Armenia',
    ABW: 'Aruba',
    AUS: 'Australia',
    AUT: 'Austria',
    AZE: 'Azerbaijan',
    BHS: 'Bahamas (the)',
    BHR: 'Bahrain',
    BGD: 'Bangladesh',
    BRB: 'Barbados',
    BLR: 'Belarus',
    BEL: 'Belgium',
    BLZ: 'Belize',
    BEN: 'Benin',
    BMU: 'Bermuda',
    BTN: 'Bhutan',
    BOL: 'Bolivia (Plurinational State of)',
    BES: 'Bonaire, Sint Eustatius and Saba',
    BIH: 'Bosnia and Herzegovina',
    BWA: 'Botswana',
    BVT: 'Bouvet Island',
    BRA: 'Brazil',
    IOT: 'British Indian Ocean Territory (the)',
    BRN: 'Brunei Darussalam',
    BGR: 'Bulgaria',
    BFA: 'Burkina Faso',
    BDI: 'Burundi',
    CPV: 'Cabo Verde',
    KHM: 'Cambodia',
    CMR: 'Cameroon',
    CAN: 'Canada',
    CYM: 'Cayman Islands (the)',
    CAF: 'Central African Republic (the)',
    TCD: 'Chad',
    CHL: 'Chile',
    CHN: 'China',
    CXR: 'Christmas Island',
    CCK: 'Cocos (Keeling) Islands (the)',
    COL: 'Colombia',
    COM: 'Comoros (the)',
    COD: 'Congo (the Democratic Republic of the)',
    COG: 'Congo (the)',
    COK: 'Cook Islands (the)',
    CRI: 'Costa Rica',
    HRV: 'Croatia',
    CUB: 'Cuba',
    CUW: 'Curaçao',
    CYP: 'Cyprus',
    CZE: 'Czechia',
    CIV: "Côte d'Ivoire",
    DNK: 'Denmark',
    DJI: 'Djibouti',
    DMA: 'Dominica',
    DOM: 'Dominican Republic (the)',
    ECU: 'Ecuador',
    EGY: 'Egypt',
    SLV: 'El Salvador',
    GNQ: 'Equatorial Guinea',
    ERI: 'Eritrea',
    EST: 'Estonia',
    SWZ: 'Eswatini',
    ETH: 'Ethiopia',
    FLK: 'Falkland Islands (the) [Malvinas]',
    FRO: 'Faroe Islands (the)',
    FJI: 'Fiji',
    FIN: 'Finland',
    FRA: 'France',
    GUF: 'French Guiana',
    PYF: 'French Polynesia',
    ATF: 'French Southern Territories (the)',
    GAB: 'Gabon',
    GMB: 'Gambia (the)',
    GEO: 'Georgia',
    DEU: 'Germany',
    GHA: 'Ghana',
    GIB: 'Gibraltar',
    GRC: 'Greece',
    GRL: 'Greenland',
    GRD: 'Grenada',
    GLP: 'Guadeloupe',
    GUM: 'Guam',
    GTM: 'Guatemala',
    GGY: 'Guernsey',
    GIN: 'Guinea',
    GNB: 'Guinea-Bissau',
    GUY: 'Guyana',
    HTI: 'Haiti',
    HMD: 'Heard Island and McDonald Islands',
    VAT: 'Holy See (the)',
    HND: 'Honduras',
    HKG: 'Hong Kong',
    HUN: 'Hungary',
    ISL: 'Iceland',
    IND: 'India',
    IDN: 'Indonesia',
    IRN: 'Iran (Islamic Republic of)',
    IRQ: 'Iraq',
    IRL: 'Ireland',
    IMN: 'Isle of Man',
    ISR: 'Israel',
    ITA: 'Italy',
    JAM: 'Jamaica',
    JPN: 'Japan',
    JEY: 'Jersey',
    JOR: 'Jordan',
    KAZ: 'Kazakhstan',
    KEN: 'Kenya',
    KIR: 'Kiribati',
    PRK: "Korea (the Democratic People's Republic of)",
    KOR: 'Korea (the Republic of)',
    KWT: 'Kuwait',
    KGZ: 'Kyrgyzstan',
    LAO: "Lao People's Democratic Republic (the)",
    LVA: 'Latvia',
    LBN: 'Lebanon',
    LSO: 'Lesotho',
    LBR: 'Liberia',
    LBY: 'Libya',
    LIE: 'Liechtenstein',
    LTU: 'Lithuania',
    LUX: 'Luxembourg',
    MAC: 'Macao',
    MDG: 'Madagascar',
    MWI: 'Malawi',
    MYS: 'Malaysia',
    MDV: 'Maldives',
    MLI: 'Mali',
    MLT: 'Malta',
    MHL: 'Marshall Islands (the)',
    MTQ: 'Martinique',
    MRT: 'Mauritania',
    MUS: 'Mauritius',
    MYT: 'Mayotte',
    MEX: 'Mexico',
    FSM: 'Micronesia (Federated States of)',
    MDA: 'Moldova (the Republic of)',
    MCO: 'Monaco',
    MNG: 'Mongolia',
    MNE: 'Montenegro',
    MSR: 'Montserrat',
    MAR: 'Morocco',
    MOZ: 'Mozambique',
    MMR: 'Myanmar',
    NAM: 'Namibia',
    NRU: 'Nauru',
    NPL: 'Nepal',
    NLD: 'Netherlands (the)',
    NCL: 'New Caledonia',
    NZL: 'New Zealand',
    NIC: 'Nicaragua',
    NER: 'Niger (the)',
    NGA: 'Nigeria',
    NIU: 'Niue',
    NFK: 'Norfolk Island',
    MNP: 'Northern Mariana Islands (the)',
    NOR: 'Norway',
    OMN: 'Oman',
    PAK: 'Pakistan',
    PLW: 'Palau',
    PAN: 'Panama',
    PNG: 'Papua New Guinea',
    PRY: 'Paraguay',
    PER: 'Peru',
    PHL: 'Philippines (the)',
    PCN: 'Pitcairn',
    POL: 'Poland',
    PRT: 'Portugal',
    PRI: 'Puerto Rico',
    QAT: 'Qatar',
    MKD: 'Republic of North Macedonia',
    ROU: 'Romania',
    RUS: 'Russian Federation (the)',
    RWA: 'Rwanda',
    REU: 'Réunion',
    BLM: 'Saint Barthélemy',
    SHN: 'Saint Helena, Ascension and Tristan da Cunha',
    KNA: 'Saint Kitts and Nevis',
    LCA: 'Saint Lucia',
    MAF: 'Saint Martin (French part)',
    SPM: 'Saint Pierre and Miquelon',
    VCT: 'Saint Vincent and the Grenadines',
    WSM: 'Samoa',
    SMR: 'San Marino',
    STP: 'Sao Tome and Principe',
    SAU: 'Saudi Arabia',
    SEN: 'Senegal',
    SRB: 'Serbia',
    SYC: 'Seychelles',
    SLE: 'Sierra Leone',
    SGP: 'Singapore',
    SXM: 'Sint Maarten (Dutch part)',
    SVK: 'Slovakia',
    SVN: 'Slovenia',
    SLB: 'Solomon Islands',
    SOM: 'Somalia',
    ZAF: 'South Africa',
    SGS: 'South Georgia and the South Sandwich Islands',
    SSD: 'South Sudan',
    ESP: 'Spain',
    LKA: 'Sri Lanka',
    SDN: 'Sudan (the)',
    SUR: 'Suriname',
    SJM: 'Svalbard and Jan Mayen',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    SYR: 'Syrian Arab Republic',
    TWN: 'Taiwan',
    TJK: 'Tajikistan',
    TZA: 'Tanzania, United Republic of',
    THA: 'Thailand',
    TLS: 'Timor-Leste',
    TGO: 'Togo',
    TKL: 'Tokelau',
    TON: 'Tonga',
    TTO: 'Trinidad and Tobago',
    TUN: 'Tunisia',
    TUR: 'Turkey',
    TKM: 'Turkmenistan',
    TCA: 'Turks and Caicos Islands (the)',
    TUV: 'Tuvalu',
    UGA: 'Uganda',
    UKR: 'Ukraine',
    ARE: 'United Arab Emirates (the)',
    GBR: 'United Kingdom of Great Britain and Northern Ireland (the)',
    UMI: 'United States Minor Outlying Islands (the)',
    USA: 'United States of America (the)',
    URY: 'Uruguay',
    UZB: 'Uzbekistan',
    VUT: 'Vanuatu',
    VEN: 'Venezuela (Bolivarian Republic of)',
    VNM: 'Viet Nam',
    VGB: 'Virgin Islands (British)',
    VIR: 'Virgin Islands (U.S.)',
    WLF: 'Wallis and Futuna',
    ESH: 'Western Sahara',
    YEM: 'Yemen',
    ZMB: 'Zambia',
    ZWE: 'Zimbabwe',
    ALA: 'Åland Islands',
  };

  // Calculation of items
  const checkBoxes = formElement.querySelectorAll('input[type=checkbox]');
  let totalValue = 0;
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const checkBoxValue = Number(checkbox.value);
      if (checkbox.checked) {
        totalValue += checkBoxValue;
        handleCalculation(console.log('Added:' + checkbox.id));
      } else {
        totalValue -= checkBoxValue;
        handleCalculation(console.log('Removed:' + checkbox.id));
      }
    });
  });

  const handleCalculation = (log) => {
    totalResultElement.style.opacity = 1;
    totalResultElement.innerText = 'Total Result: ' + '\n' + totalValue.toFixed(2) + '$';
  };

  // Calculation of items

  // Get users details for order
  let userSelected = 0;
  dropDownMenu.addEventListener('change', (event) => {
    userSelected = event.target.value;
  });

  function drawCountries() {
    Object.entries(countriesList).forEach(([key, value]) => {
      dropDownMenu.innerHTML += `<option value='${key}'>${value}</option>`;
    });
  }

  const getUserDetails = () => {
    const orderDetails = {
      fullname: {
        firstname: fname.value,
        lastname: lname.value,
      },
      address: {
        country: userSelected,
        city: city.value,
        street: street.value,
        zipcode: zipCode.value,
      },
    };
    console.log(orderDetails);
  };
  // Get users details for order

  // Submit form
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    getUserDetails();
  });
  // Submit form

  // Reset button
  const resetBtn = document.getElementById('resetbtn');
  resetBtn.addEventListener('click', () => {
    totalResultElement.style.opacity = 0;
    totalValue = 0;
    totalResultElement === totalValue;
  });
  // Reset button

  drawCountries();
})();
