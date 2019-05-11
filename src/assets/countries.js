const countries = [
  {
    timezones: [
      "Australia/Lord_Howe",
      "Antarctica/Macquarie",
      "Australia/Hobart",
      "Australia/Currie",
      "Australia/Melbourne",
      "Australia/Sydney",
      "Australia/Broken_Hill",
      "Australia/Brisbane",
      "Australia/Lindeman",
      "Australia/Adelaide",
      "Australia/Darwin",
      "Australia/Perth",
      "Australia/Eucla"
    ],
    latlng: [-27, 133],
    name: "Australia",
    country_code: "AU",
    capital: "Canberra"
  },
  {
    timezones: ["Europe/Vienna"],
    latlng: [47.33333333, 13.33333333],
    name: "Austria",
    country_code: "AT",
    capital: "Vienna"
  },
  {
    timezones: ["Europe/Brussels"],
    latlng: [50.83333333, 4],
    name: "Belgium",
    country_code: "BE",
    capital: "Brussels"
  },
  {
    timezones: ["Europe/Sofia"],
    latlng: [43, 25],
    name: "Bulgaria",
    country_code: "BG",
    capital: "Sofia"
  },
  {
    timezones: ["Europe/Minsk"],
    latlng: [53, 28],
    name: "Belarus",
    country_code: "BY",
    capital: "Minsk"
  },
  {
    timezones: ["Europe/Oslo"],
    latlng: [-54.43333333, 3.4],
    name: "Bouvet Island",
    country_code: "BV",
    capital: null
  },
  {
    timezones: [
      "America/St_Johns",
      "America/Halifax",
      "America/Glace_Bay",
      "America/Moncton",
      "America/Goose_Bay",
      "America/Blanc-Sablon",
      "America/Toronto",
      "America/Nipigon",
      "America/Thunder_Bay",
      "America/Iqaluit",
      "America/Pangnirtung",
      "America/Atikokan",
      "America/Winnipeg",
      "America/Rainy_River",
      "America/Resolute",
      "America/Rankin_Inlet",
      "America/Regina",
      "America/Swift_Current",
      "America/Edmonton",
      "America/Cambridge_Bay",
      "America/Yellowknife",
      "America/Inuvik",
      "America/Creston",
      "America/Dawson_Creek",
      "America/Fort_Nelson",
      "America/Vancouver",
      "America/Whitehorse",
      "America/Dawson"
    ],
    latlng: [60, -95],
    name: "Canada",
    country_code: "CA",
    capital: "Ottawa"
  },
  {
    timezones: ["Europe/Zurich"],
    latlng: [47, 8],
    name: "Switzerland",
    country_code: "CH",
    capital: "Bern"
  },
  {
    timezones: ["Europe/Prague"],
    latlng: [49.75, 15.5],
    name: "Czech Republic",
    country_code: "CZ",
    capital: "Prague"
  },
  {
    timezones: ["Europe/Berlin", "Europe/Busingen"],
    latlng: [51, 9],
    name: "Germany",
    country_code: "DE",
    capital: "Berlin"
  },
  {
    timezones: ["Europe/Copenhagen"],
    latlng: [56, 10],
    name: "Denmark",
    country_code: "DK",
    capital: "Copenhagen"
  },
  {
    timezones: ["Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary"],
    latlng: [40, -4],
    name: "Spain",
    country_code: "ES",
    capital: "Madrid"
  },
  {
    timezones: ["Europe/Tallinn"],
    latlng: [59, 26],
    name: "Estonia",
    country_code: "EE",
    capital: "Tallinn"
  },
  {
    timezones: ["Europe/Helsinki"],
    latlng: [64, 26],
    name: "Finland",
    country_code: "FI",
    capital: "Helsinki"
  },
  {
    timezones: ["Europe/Paris"],
    latlng: [46, 2],
    name: "France",
    country_code: "FR",
    capital: "Paris"
  },
  {
    timezones: ["Europe/London"],
    latlng: [54, -2],
    name: "United Kingdom",
    country_code: "GB",
    capital: "London"
  },
  {
    timezones: ["Europe/Athens"],
    latlng: [39, 22],
    name: "Greece",
    country_code: "GR",
    capital: "Athens"
  },
  {
    timezones: ["Europe/Zagreb"],
    latlng: [45.16666666, 15.5],
    name: "Croatia",
    country_code: "HR",
    capital: "Zagreb"
  },
  {
    timezones: ["Europe/Budapest"],
    latlng: [47, 20],
    name: "Hungary",
    country_code: "HU",
    capital: "Budapest"
  },
  {
    timezones: ["Europe/Dublin"],
    latlng: [53, -8],
    name: "Ireland",
    country_code: "IE",
    capital: "Dublin"
  },
  {
    timezones: ["Atlantic/Reykjavik"],
    latlng: [65, -18],
    name: "Iceland",
    country_code: "IS",
    capital: "Reykjavik"
  },
  {
    timezones: ["Europe/Rome"],
    latlng: [42.83333333, 12.83333333],
    name: "Italy",
    country_code: "IT",
    capital: "Rome"
  },
  {
    timezones: ["Europe/Vilnius"],
    latlng: [56, 24],
    name: "Lithuania",
    country_code: "LT",
    capital: "Vilnius"
  },
  {
    timezones: ["Europe/Luxembourg"],
    latlng: [49.75, 6.16666666],
    name: "Luxembourg",
    country_code: "LU",
    capital: "Luxembourg"
  },
  {
    timezones: ["Europe/Riga"],
    latlng: [57, 25],
    name: "Latvia",
    country_code: "LV",
    capital: "Riga"
  },
  {
    timezones: ["Europe/Monaco"],
    latlng: [43.73333333, 7.4],
    name: "Monaco",
    country_code: "MC",
    capital: "Monaco"
  },
  {
    timezones: ["Europe/Amsterdam"],
    latlng: [52.5, 5.75],
    name: "Netherlands",
    country_code: "NL",
    capital: "Amsterdam"
  },
  {
    timezones: ["Europe/Oslo"],
    latlng: [62, 10],
    name: "Norway",
    country_code: "NO",
    capital: "Oslo"
  },
  {
    timezones: ["Pacific/Auckland", "Pacific/Chatham"],
    latlng: [-41, 174],
    name: "New Zealand",
    country_code: "NZ",
    capital: "Wellington"
  },
  {
    timezones: ["Europe/Warsaw"],
    latlng: [52, 20],
    name: "Poland",
    country_code: "PL",
    capital: "Warsaw"
  },
  {
    timezones: ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
    latlng: [39.5, -8],
    name: "Portugal",
    country_code: "PT",
    capital: "Lisbon"
  },
  {
    timezones: ["Europe/Bucharest"],
    latlng: [46, 25],
    name: "Romania",
    country_code: "RO",
    capital: "Bucharest"
  },
  {
    timezones: ["Asia/Singapore"],
    latlng: [1.36666666, 103.8],
    name: "Singapore",
    country_code: "SG",
    capital: "Singapore"
  },
  {
    timezones: ["Europe/Bratislava"],
    latlng: [48.66666666, 19.5],
    name: "Slovakia",
    country_code: "SK",
    capital: "Bratislava"
  },
  {
    timezones: ["Europe/Ljubljana"],
    latlng: [46.11666666, 14.81666666],
    name: "Slovenia",
    country_code: "SI",
    capital: "Ljubljana"
  },
  {
    timezones: ["Europe/Stockholm"],
    latlng: [62, 15],
    name: "Sweden",
    country_code: "SE",
    capital: "Stockholm"
  },
  {
    timezones: ["Europe/Istanbul"],
    latlng: [39, 35],
    name: "Turkey",
    country_code: "TR",
    capital: "Ankara"
  },
  {
    timezones: ["Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye"],
    latlng: [49, 32],
    name: "Ukraine",
    country_code: "UA",
    capital: "Kiev"
  },
  {
    timezones: [
      "America/New_York",
      "America/Detroit",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Indiana/Indianapolis",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Vevay",
      "America/Chicago",
      "America/Indiana/Tell_City",
      "America/Indiana/Knox",
      "America/Menominee",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/North_Dakota/Beulah",
      "America/Denver",
      "America/Boise",
      "America/Phoenix",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Juneau",
      "America/Sitka",
      "America/Metlakatla",
      "America/Yakutat",
      "America/Nome",
      "America/Adak",
      "Pacific/Honolulu"
    ],
    latlng: [38, -97],
    name: "United States",
    country_code: "US",
    capital: "Washington D.C."
  }
];

export default countries;
