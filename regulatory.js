// Regulatory domain database. Values are max EIRP in dBm per channel.
const regulatoryDomains = {
    us: {
        name: "United States",
        bands: {
            "2.4 GHz": { channels: { 1: 30, 6: 30, 11: 30 } },
            "5 GHz": {
                channels: {
                    36: 30,
                    40: 30,
                    44: 30,
                    48: 30,
                    52: 24,
                    56: 24,
                    60: 24,
                    64: 24,
                    100: 24,
                    104: 24,
                    108: 24,
                    112: 24,
                    116: 24,
                    120: 24,
                    124: 24,
                    128: 24,
                    132: 24,
                    136: 24,
                    140: 24,
                    144: 24,
                    149: 30,
                    153: 30,
                    157: 30,
                    161: 30,
                    165: 30,
                },
            },
            "6 GHz": {
                // All recorded values assume LPI
                channels: {
                    "1E": 30, // 36 dBm with SP and AFC
                    "5E": 30, // 36 dBm with SP and AFC
                    "9E": 30, // 36 dBm with SP and AFC
                    "13E": 30, // 36 dBm with SP and AFC
                    "17E": 30, // 36 dBm with SP and AFC
                    "21E": 30, // 36 dBm with SP and AFC
                    "25E": 30, // 36 dBm with SP and AFC
                    "29E": 30, // 36 dBm with SP and AFC
                    "33E": 30, // 36 dBm with SP and AFC
                    "37E": 30, // 36 dBm with SP and AFC
                    "41E": 30, // 36 dBm with SP and AFC
                    "45E": 30, // 36 dBm with SP and AFC
                    "49E": 30, // 36 dBm with SP and AFC
                    "53E": 30, // 36 dBm with SP and AFC
                    "57E": 30, // 36 dBm with SP and AFC
                    "61E": 30, // 36 dBm with SP and AFC
                    "65E": 30, // 36 dBm with SP and AFC
                    "69E": 30, // 36 dBm with SP and AFC
                    "73E": 30, // 36 dBm with SP and AFC
                    "77E": 30, // 36 dBm with SP and AFC
                    "81E": 30, // 36 dBm with SP and AFC
                    "85E": 30, // 36 dBm with SP and AFC
                    "89E": 30, // 36 dBm with SP and AFC
                    "93E": 30, // 36 dBm with SP and AFC
                    "97E": 30,
                    "101E": 30,
                    "105E": 30,
                    "109E": 30,
                    "113E": 30,
                    "117E": 30, // 36 dBm with SP and AFC
                    "121E": 30, // 36 dBm with SP and AFC
                    "125E": 30, // 36 dBm with SP and AFC
                    "129E": 30, // 36 dBm with SP and AFC
                    "133E": 30, // 36 dBm with SP and AFC
                    "137E": 30, // 36 dBm with SP and AFC
                    "141E": 30, // 36 dBm with SP and AFC
                    "145E": 30, // 36 dBm with SP and AFC
                    "149E": 30, // 36 dBm with SP and AFC
                    "153E": 30, // 36 dBm with SP and AFC
                    "157E": 30, // 36 dBm with SP and AFC
                    "161E": 30, // 36 dBm with SP and AFC
                    "165E": 30, // 36 dBm with SP and AFC
                    "169E": 30, // 36 dBm with SP and AFC
                    "173E": 30, // 36 dBm with SP and AFC
                    "177E": 30, // 36 dBm with SP and AFC
                    "181E": 30, // 36 dBm with SP and AFC
                    "185E": 30,
                    "189E": 30,
                    "193E": 30,
                    "197E": 30,
                    "201E": 30,
                    "205E": 30,
                    "209E": 30,
                    "213E": 30,
                    "217E": 30,
                    "221E": 30,
                    "225E": 30,
                    "229E": 30,
                    "233E": 30,
                },
            },
        },
    },
    eu: {
        name: "Europe",
        bands: {
            "2.4 GHz": {
                channels: { 1: 20, 6: 20, 11: 20, 13: 20 },
            },
            "5 GHz": {
                // All recorded values assume TPC
                channels: {
                    36: 23,
                    40: 23,
                    44: 23,
                    48: 23,
                    52: 23, // 20 dBm without TPC
                    56: 23, // 20 dBm without TPC
                    60: 23, // 20 dBm without TPC
                    64: 23, // 20 dBm without TPC
                    100: 30, // 27 dBm without TPC
                    104: 30, // 27 dBm without TPC
                    108: 30, // 27 dBm without TPC
                    112: 30, // 27 dBm without TPC
                    116: 30, // 27 dBm without TPC
                    120: 30, // 27 dBm without TPC
                    124: 30, // 27 dBm without TPC
                    128: 30, // 27 dBm without TPC
                    132: 30, // 27 dBm without TPC
                    136: 30, // 27 dBm without TPC
                    140: 30, // 27 dBm without TPC
                    144: 30, // 27 dBm without TPC
                    149: 14,
                    153: 14,
                    157: 14,
                    161: 14,
                    165: 14,
                },
            },
            "6 GHz": {
                // All recorded values assume LPI
                // From http://data.europa.eu/eli/dec_impl/2021/1067/2025-05-22
                channels: {
                    "1E": 23, // 14 dBm with VLP
                    "5E": 23, // 14 dBm with VLP
                    "9E": 23, // 14 dBm with VLP
                    "13E": 23, // 14 dBm with VLP
                    "17E": 23, // 14 dBm with VLP
                    "21E": 23, // 14 dBm with VLP
                    "25E": 23, // 14 dBm with VLP
                    "29E": 23, // 14 dBm with VLP
                    "33E": 23, // 14 dBm with VLP
                    "37E": 23, // 14 dBm with VLP
                    "41E": 23, // 14 dBm with VLP
                    "45E": 23, // 14 dBm with VLP
                    "49E": 23, // 14 dBm with VLP
                    "53E": 23, // 14 dBm with VLP
                    "57E": 23, // 14 dBm with VLP
                    "61E": 23, // 14 dBm with VLP
                    "65E": 23, // 14 dBm with VLP
                    "69E": 23, // 14 dBm with VLP
                    "73E": 23, // 14 dBm with VLP
                    "77E": 23, // 14 dBm with VLP
                    "81E": 23, // 14 dBm with VLP
                    "85E": 23, // 14 dBm with VLP
                    "89E": 23, // 14 dBm with VLP
                    "93E": 23, // 14 dBm with VLP
                },
            },
        },
    },
    uk: {
        name: "United Kingdom",
        bands: {
            "2.4 GHz": {
                channels: { 1: 20, 6: 20, 11: 20, 13: 20 },
            },
            "5 GHz": {
                channels: {
                    36: 23,
                    40: 23,
                    44: 23,
                    48: 23,
                    52: 23, // 20 dBm without TPC
                    56: 23, // 20 dBm without TPC
                    60: 23, // 20 dBm without TPC
                    64: 23, // 20 dBm without TPC
                    100: 30, // 27 dBm without TPC
                    104: 30, // 27 dBm without TPC
                    108: 30, // 27 dBm without TPC
                    112: 30, // 27 dBm without TPC
                    116: 30, // 27 dBm without TPC
                    120: 30, // 27 dBm without TPC
                    124: 30, // 27 dBm without TPC
                    128: 30, // 27 dBm without TPC
                    132: 30, // 27 dBm without TPC
                    136: 30, // 27 dBm without TPC
                    140: 30, // 27 dBm without TPC
                    144: 23,
                    149: 23,
                    153: 23,
                    157: 23,
                    161: 23,
                    165: 23,
                },
            },
            "6 GHz": {
                channels: {
                    "1E": 23,
                    "5E": 23,
                    "9E": 23,
                    "13E": 23,
                    "17E": 23,
                    "21E": 23,
                    "25E": 23,
                    "29E": 23,
                    "33E": 23,
                    "37E": 23,
                    "41E": 23,
                    "45E": 23,
                    "49E": 23,
                    "53E": 23,
                    "57E": 23,
                    "61E": 23,
                    "65E": 23,
                    "69E": 23,
                    "73E": 23,
                    "77E": 23,
                },
            },
        },
    },
    au: {
        name: "Australia",
        bands: {
            "2.4 GHz": {
                channels: { 1: 36, 6: 36, 11: 36 },
            },
            "5 GHz": {
                channels: {
                    36: 30,
                    40: 30,
                    44: 30,
                    48: 30,
                    52: 24,
                    56: 24,
                    60: 24,
                    64: 24,
                    100: 24,
                    104: 24,
                    108: 24,
                    112: 24,
                    116: 24,
                    120: 24,
                    124: 24,
                    128: 24,
                    132: 24,
                    136: 24,
                    140: 24,
                    144: 24,
                    149: 30,
                    153: 30,
                    157: 30,
                    161: 30,
                    165: 30,
                },
            },
            "6 GHz": {
                // All recorded values assume indoor
                channels: {
                    "1E": 24, // Outdoor is 14 dBm
                    "5E": 24, // Same for the rest of the band according to https://wifiwizardofoz.com/wp-content/uploads/australian_802.11_eirp_transmit_power_limits_v2.0.pdf
                    "9E": 24,
                    "13E": 24,
                    "17E": 24,
                    "21E": 24,
                    "25E": 24,
                    "29E": 24,
                    "33E": 24,
                    "37E": 24,
                    "41E": 24,
                    "45E": 24,
                    "49E": 24,
                    "53E": 24,
                    "57E": 24,
                    "61E": 24,
                    "65E": 24,
                    "69E": 24,
                    "73E": 24,
                    "77E": 24,
                    "81E": 24,
                    "85E": 24,
                    "89E": 24,
                    "93E": 24,
                },
            },
        },
    },
};
